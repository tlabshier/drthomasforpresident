#!/usr/bin/env node
/**
 * Extract all posts and pages from drthomasforpresident.com via WP REST API.
 * Outputs markdown files with YAML frontmatter into ../articles/ and ../pages/
 *
 * SAFETY:
 * - READ-ONLY from WordPress (GET requests only, never writes/updates/deletes)
 * - Will NOT overwrite local files unless --force flag is passed
 * - Will NOT delete any files, ever
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const FORCE = process.argv.includes('--force');
const BASE = 'https://drthomasforpresident.com/wp-json/wp/v2';
const ROOT = join(import.meta.dirname, '..');
const ARTICLES_DIR = join(ROOT, 'articles');
const PAGES_DIR = join(ROOT, 'pages');

function safeWrite(filepath, content) {
  if (existsSync(filepath) && !FORCE) {
    console.log(`  SKIP (exists): ${filepath}`);
    return false;
  }
  writeFileSync(filepath, content);
  return true;
}

mkdirSync(ARTICLES_DIR, { recursive: true });
mkdirSync(PAGES_DIR, { recursive: true });

// Simple HTML to markdown conversion
function htmlToMarkdown(html) {
  if (!html) return '';
  return html
    // Remove WordPress block comments
    .replace(/<!--\s*\/?wp:[^>]*-->/g, '')
    // Headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')
    .replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1\n\n')
    .replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1\n\n')
    // Bold and italic
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    // Images
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)')
    // Lists
    .replace(/<ul[^>]*>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    // Blockquotes
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, (_, content) => {
      return content.split('\n').map(line => `> ${line}`).join('\n') + '\n\n';
    })
    // Paragraphs and breaks
    .replace(/<p[^>]*>/gi, '\n\n')
    .replace(/<\/p>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    // Horizontal rules
    .replace(/<hr[^>]*\/?>/gi, '\n---\n\n')
    // Remove figure/figcaption wrappers
    .replace(/<\/?figure[^>]*>/gi, '')
    .replace(/<figcaption[^>]*>(.*?)<\/figcaption>/gi, '*$1*\n\n')
    // Remove remaining tags
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    // Decode entities
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#160;/g, ' ')
    // Clean up whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Decode HTML entities in titles
function decodeEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#160;/g, ' ');
}

// Escape YAML string values
function yamlEscape(str) {
  if (!str) return '""';
  const decoded = decodeEntities(str);
  const s = decoded.replace(/"/g, '\\"');
  if (s.includes(':') || s.includes('#') || s.includes("'") || s.includes('"') || s.includes('\n')) {
    return `"${s}"`;
  }
  return s;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      return res;
    } catch (err) {
      console.log(`    Retry ${i + 1}/${retries} for ${url}`);
      await sleep(2000 * (i + 1));
    }
  }
  return null;
}

async function fetchAll(endpoint) {
  const items = [];
  let page = 1;
  while (true) {
    const url = `${BASE}/${endpoint}?per_page=100&page=${page}`;
    console.log(`  Fetching ${url}`);
    const res = await fetchWithRetry(url);
    if (!res || !res.ok) break;
    const data = await res.json();
    if (!data.length) break;
    items.push(...data);
    const totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1');
    if (page >= totalPages) break;
    page++;
    await sleep(500);
  }
  return items;
}

async function fetchCategories() {
  const cats = await fetchAll('categories');
  const map = {};
  for (const c of cats) {
    map[c.id] = c;
  }
  return map;
}

function buildCategoryPath(catId, catMap) {
  const parts = [];
  let current = catMap[catId];
  while (current) {
    parts.unshift(current.name);
    current = current.parent ? catMap[current.parent] : null;
  }
  return parts.join(' > ');
}

async function main() {
  console.log('Fetching categories...');
  const catMap = await fetchCategories();

  console.log('Fetching posts...');
  const posts = await fetchAll('posts');
  console.log(`  Found ${posts.length} posts`);

  console.log('Fetching pages...');
  const pages = await fetchAll('pages');
  console.log(`  Found ${pages.length} pages`);

  // Write posts
  for (const post of posts) {
    const title = post.title?.rendered || 'Untitled';
    const slug = post.slug || `post-${post.id}`;
    const date = post.date?.split('T')[0] || '';
    const content = post.content?.rendered || '';
    const excerpt = post.excerpt?.rendered || '';
    const categories = (post.categories || [])
      .map(id => buildCategoryPath(id, catMap))
      .filter(Boolean);
    const isProtected = post.content?.protected === true;

    const frontmatter = [
      '---',
      `title: ${yamlEscape(title)}`,
      `slug: ${slug}`,
      `date: ${date}`,
      `id: ${post.id}`,
      `link: ${post.link || ''}`,
      `status: ${post.status || 'publish'}`,
      `protected: ${isProtected}`,
    ];
    if (categories.length) {
      frontmatter.push('categories:');
      for (const cat of categories) {
        frontmatter.push(`  - ${yamlEscape(cat)}`);
      }
    }
    frontmatter.push('---');

    const markdown = htmlToMarkdown(content);
    const body = isProtected && !markdown
      ? '*This post is password-protected.*'
      : markdown;

    const fileContent = frontmatter.join('\n') + '\n\n' + body + '\n';
    const filename = `${slug}.md`;
    safeWrite(join(ARTICLES_DIR, filename), fileContent);
  }
  console.log(`Processed ${posts.length} articles`);

  // Write pages
  for (const page of pages) {
    const title = page.title?.rendered || 'Untitled';
    const slug = page.slug || `page-${page.id}`;
    const content = page.content?.rendered || '';
    const isProtected = page.content?.protected === true;

    const frontmatter = [
      '---',
      `title: ${yamlEscape(title)}`,
      `slug: ${slug}`,
      `date: ${page.date?.split('T')[0] || ''}`,
      `id: ${page.id}`,
      `link: ${page.link || ''}`,
      `status: ${page.status || 'publish'}`,
      `protected: ${isProtected}`,
      '---',
    ];

    const markdown = htmlToMarkdown(content);
    const body = isProtected && !markdown
      ? '*This page is password-protected.*'
      : markdown;

    const fileContent = frontmatter.join('\n') + '\n\n' + body + '\n';
    const filename = `${slug}.md`;
    safeWrite(join(PAGES_DIR, filename), fileContent);
  }
  console.log(`Processed ${pages.length} pages`);

  // Write category index
  const catIndex = ['# Category Index\n'];
  const topLevel = Object.values(catMap).filter(c => !c.parent).sort((a, b) => a.name.localeCompare(b.name));

  function writeCatTree(cats, depth = 0) {
    for (const cat of cats) {
      const indent = '  '.repeat(depth);
      const countStr = cat.count > 0 ? ` (${cat.count})` : '';
      catIndex.push(`${indent}- **${cat.name}**${countStr}`);
      const children = Object.values(catMap).filter(c => c.parent === cat.id).sort((a, b) => a.name.localeCompare(b.name));
      if (children.length) writeCatTree(children, depth + 1);
    }
  }
  writeCatTree(topLevel);
  writeFileSync(join(ROOT, 'CATEGORIES.md'), catIndex.join('\n') + '\n');
  console.log('Wrote CATEGORIES.md');

  console.log('Done!');
}

main().catch(err => { console.error(err); process.exit(1); });
