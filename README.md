# Dr Thomas for President — Content Repository

Backend content for [drthomasforpresident.com](https://drthomasforpresident.com). Extracted from the WordPress site for version-controlled editing and development.

## Structure

```
articles/     # 238 posts as markdown with YAML frontmatter
pages/        # 20 site pages as markdown with YAML frontmatter
scripts/      # Extraction and maintenance scripts
CATEGORIES.md # Full category taxonomy tree
```

## Article Format

Each article is a markdown file with YAML frontmatter:

```yaml
---
title: Article Title
slug: article-slug
date: 2026-10-06
id: 3932
link: https://drthomasforpresident.com/2026/10/article-slug/
status: publish
protected: false
categories:
  - Politics > Libertarian Politics
  - Economics
---
```

## Scripts

### `scripts/extract-site.mjs`

Pulls all posts and pages from the WordPress REST API. **Read-only** — never writes, updates, or deletes anything on the live site.

```bash
# First run (creates all files)
node scripts/extract-site.mjs

# Re-run (skips existing files to protect local edits)
node scripts/extract-site.mjs

# Re-run with overwrite (replaces all files with fresh WordPress content)
node scripts/extract-site.mjs --force
```

## Workflow

1. Edit articles locally in markdown
2. Commit and push to this repo
3. (Future) Push changes back to WordPress via API

## Related

- [Renaissance Ministries repo](https://github.com/Renaissance-Ministries/RM) — sister content ecosystem
- Site hosted on EsoSoft infrastructure
