---
source_site: drthomasforpresident.com
source_url: https://drthomasforpresident.com/2026/11/261115-faa-grounding-second-update/
date: 2026-11-15T20:15:12
---

# 261115 - FAA Grounding - Second Update

# FAA Grounding Second Update:


# Two Routers, One Setting, and Who Examines the Evidence

**By Thomas Lee Abshier, ND** | 15 *November** 2026*

*This is the second update to my essay of November 13, "When the Sky Went Quiet: The FAA Ground Stop, an Aging System, and Who Should Pay to Fix It," and to my addendum of November 14, "One Router, One Remote Site, One Nation Grounded."*


---


## What We Learned Sunday

Over the weekend the picture of Friday's nationwide ground stop came into much sharper focus. From the FAA's Sunday question-and-answer release, Secretary Duffy's appearance on *Face the Nation*, and reporting by The Wall Street Journal, here is what is now known:


 	- **Two sites, not one.** The FAA's initial investigation points to two places as the sources of the data flood: a radio communications site in El Dorado, Arkansas, and a radar site in Amarillo, Texas. FAA technology chief Rebecca Guy said the two locations were generating about a thousand network connections every four to five seconds.

 	- **El Dorado.** L3Harris had been replacing aging telecommunications lines at the El Dorado site and installing a new router there. The Journal reported that the router was a new Juniper Networks device, made by a subsidiary of Hewlett Packard Enterprise. Duffy said the old copper line there had become unusable and that the telecommunications provider had forced the change from copper to fiber.

 	- **Amarillo.** Duffy said that when the new El Dorado router was turned on, a router in Amarillo, a system replaced about three weeks earlier, also began flooding the network. The FAA says investigators have not established whether Amarillo malfunctioned independently or whether its traffic was tied to what happened in El Dorado.

 	- **How far it spread.** The instability disrupted 17 of the FAA's 22 Air Route Traffic Control Centers, the centers that manage high-altitude traffic, and spread into several approach-control facilities. The trouble began around 3:30 p.m. Eastern Friday.

 	- **How it stopped.** When L3Harris blocked the two sites from the network, the network stabilized.

 	- **A broadcast feature.** According to the Journal, officials identified a router broadcasting feature that appeared to be producing the excess traffic, and they disabled it on all of the FAA's roughly sixty Juniper routers.

 	- **The manufacturer's response.** Hewlett Packard Enterprise has said its devices did not fail.

 	- **The contractor's response.** L3Harris says it is supporting the investigation, takes the ground stop and its effect on travelers seriously, and has completed more than 70 percent of the planned conversion from copper to fiber.

 	- **The investigation.** Both routers have been taken to an L3Harris laboratory in Florida for diagnostic testing. FAA personnel are participating, and the FBI is offering support. Duffy promised to tell the American people what investigators find.

 	- **No evidence of an attack.** The FAA states there is no evidence of a cyberattack.

 	- **Blame.** President Trump has blamed the previous administration.


Reported numbers still vary. Reports put the shutdown at four to five hours. Some say more than 3,500 flights were grounded, others that about 3,500 aircraft were airborne when it began, and estimates of stranded travelers range from tens of thousands to a million. I report these ranges as ranges until the FAA publishes its own figures.

## What This Changes

My Saturday addendum argued that the deeper fault was not old equipment wearing out but a network unable to contain a local failure, and that new equipment without containment would carry the same weakness. Sunday's facts support that conclusion and narrow it further.

**I now stand on this conclusion: the evidence points toward a configuration problem in new equipment, a setting rather than a broken part, which an old network without fault containment allowed to spread across most of the country. The trigger was in the new routers. The vulnerability was in the network's design. Neither alone would have grounded the nation.**

Three facts point that way.

**First, the fix was a setting.** Officials did not replace the routers to stop the problem. They turned off a feature, and turned it off on all sixty Juniper routers in the network, not just the two that misbehaved. That means the same latent hazard was sitting on about sixty devices across the national airspace system, waiting for the right conditions. It also fits the manufacturer's statement that the devices did not fail. A router can work exactly as designed and still do great harm if it is told to do the wrong thing.

**Second, it took two.** The Amarillo router was installed three weeks earlier and apparently ran quietly until the El Dorado router was turned on. Then both began flooding the network. The investigators have not said why, and I hold this as a working hypothesis rather than a finding: the pattern looks like an interaction, where two devices with the same setting began answering and amplifying each other once both were live. If that proves true, testing each router alone would not have revealed the danger. Only testing them together, under conditions like the live network's, would have.

**Third, the flood traveled.** Traffic from two remote sites, one in a town of about 22,000 people, reached 17 of 22 national control centers. A network built to contain faults would have cut off those sites automatically within moments. Here the network stabilized only after L3Harris blocked them by hand. That is the old architecture's failure, and it is the part a new network has to fix.

On Sunday, Secretary Duffy still described the cause as an old network and old telecom. That is half right. The old network failed to contain the flood. But the flood came from new equipment being installed as part of the modernization. Any honest account of Friday has to include both halves, and our funding decisions should too.

## Who Examines the Evidence?

One fact from Sunday troubles me more than any other: the two routers are being tested at an L3Harris laboratory.

L3Harris is the party whose work is under investigation. Secretary Duffy himself has asked publicly whether L3Harris was incompetent. HPE, whose subsidiary made the routers, has already said its devices did not fail. Each party has a direct financial and legal interest in what the tests show. The FAA approved and oversaw the work, so it has an interest too. FAA participation and FBI support help, but they do not change the fact that the physical evidence is in the custody of one of the parties being examined.

I make no accusation against L3Harris. The company may be doing its testing honestly and competently. But justice does not ask a party to be honest. It arranges things so that it does not have to rely on any party's honesty.

*"He that is first in his own cause seemeth just; but his neighbour cometh and searcheth him."* **(Proverbs 18:17)**

The principle is as old as law: no man should be the judge in his own cause. Scripture asks for witnesses who can be checked. In this case the witnesses are the routers themselves: their configuration files, their logs, their firmware, and the record of every change made to them, by whom, and when. That evidence should be held by someone with no stake in the outcome.

## Everyone Points Somewhere Else

Look at where the blame has traveled in three days:


 	- Friday night, the cause was an aging system, and the remedy was for Congress to provide $50 billion.

 	- Saturday, the focus shifted to the contractor and the question of incompetence.

 	- Sunday, the manufacturer said its devices did not fail, and the President blamed the previous administration.


Each party points to another. I do not say any of them is wrong. Some combination of all of them is probably right. But the pattern itself is the problem. When every party responsible for a system explains a failure by pointing to someone else, nobody is answering for it. Accountability is the A in The New ERA Vision, and it means that someone accepts responsibility before he knows how the blame will fall.

The FAA has reported to presidents of both parties for decades. The FTI network was contracted under President Bush, ran under Presidents Obama, Trump, and Biden, and is now being replaced under President Trump. Every administration in that span owns some part of what happened Friday. The useful question is not whose fault the old network is. It is who will see to it that one setting on one router can never do this again.

## Why the Concern Remains Plausible

Sunday's account is the most detailed and most mundane explanation yet. A broadcast feature that can be identified, disabled, and tested is the kind of cause investigators can check, and it makes an accident more likely than an attack. Even so, several concerns remain reasonable.


 	- **The evidence is in an interested party's hands.** Until the routers and their records are examined independently, the public is asked to accept findings from the party whose work is in question.

 	- **A setting can be changed by anyone with access.** A harmful configuration can come from a careless template, a vendor default, or a deliberate act. The configuration history and access logs will show which. FBI support is appropriate for exactly that reason, and the public should be told what the logs show, not only what investigators believe.

 	- **The Amarillo question is open.** If a router installed three weeks earlier could lie dormant and then join a flood, the public is entitled to ask how many other devices are in the same state, and whether disabling one feature on sixty routers was enough.

 	- **The story has changed every day.** Old hardware Friday, possible contractor incompetence Saturday, a broadcast feature Sunday. Each version was more specific than the last, which is how honest investigations usually go. But it is also a reason to wait for the final report before treating any version as settled.


My conclusion: **I accept Sunday's account as the best working explanation, held open to the final report. It strengthens rather than weakens the case I have made: the danger is not simply old equipment, but changes made to a live national network without testing under real conditions and without automatic containment when something goes wrong.**

## What I Would Add as President

Everything in my earlier essay and Saturday's addendum still stands. Sunday's facts add five actions.


 	- **Move the evidence to an independent laboratory.** The El Dorado and Amarillo routers, their configuration files, firmware images, and logs should be held under a documented chain of custody and examined by a laboratory with no commercial stake, such as a federal laboratory or the FBI's own forensic staff, with L3Harris, HPE, and the FAA invited to observe. Their testing can continue, but it should not be the testing that decides the matter.

 	- **Publish the change record.** Who chose the configuration with the broadcast feature turned on? Was it a vendor default, an L3Harris template, or an FAA requirement? Who reviewed and approved it? When was it applied at Amarillo and at El Dorado? These are simple questions with documented answers, and the public should see them.

 	- **Audit every device, not just the two.** Disabling one feature on sixty routers addresses one known hazard. A full audit of every router and switch in the FTI network, and in the new network being built, should look for any setting that lets one device flood others.

 	- **Require realistic testing before installation.** No new device or configuration should go onto the live national network until it has been tested in a laboratory network that reproduces the live one, including how it behaves alongside other devices already deployed. Friday's failure apparently came from two devices working together. Testing that checks one device at a time cannot catch that.

 	- **Coordinate copper retirement with aviation safety.** Duffy said the telecommunications provider forced the move from copper to fiber in El Dorado. If commercial carriers' schedules for retiring copper lines are driving changes to the national airspace system, the federal government should coordinate those schedules so that safety-critical cutovers happen on a tested plan rather than on a carrier's deadline.


None of these is expensive. All together they would cost a tiny fraction of the $50 billion being requested. That is my central point on funding, now stronger than before: the most important protections against another Friday are discipline, testing, independent oversight, and containment. Money buys new equipment. It does not buy those things unless we require them.

*"Let all things be done decently and in order."* **(1 Corinthians 14:40)**


---


## Summary for Readers in a Hurry


 	- **What's new (Nov. ****15):** Two sources of the data flood: a new Juniper router installed by L3Harris at an FAA radio site in El Dorado, Arkansas, and a router at an Amarillo, Texas radar site replaced three weeks earlier, which began flooding when El Dorado was switched on. 17 of 22 high-altitude control centers were disrupted. The network stabilized when the two sites were blocked. Officials disabled a router broadcast feature on all ~60 FAA Juniper routers. HPE says its devices did not fail. L3Harris says it is cooperating and is 70%+ through the copper-to-fiber conversion. The routers are being tested at an L3Harris lab; the FBI is assisting. No evidence of a cyberattack.

 	- **What it changes:** The evidence points to a configuration setting in new equipment (not a broken part) that the old network couldn't contain. The trigger was new, the vulnerability was old, and both were needed for the failure.

 	- **Main concern:** The evidence is being examined by a party under investigation. It should be held and tested independently **(Proverbs 18:17)**.

 	- **Blame pattern:** Congress Friday, the contractor Saturday, the prior administration Sunday, while the manufacturer says its devices didn't fail. Accountability means someone answers for the system instead of pointing elsewhere.

 	- **Why concern remains reasonable:** Evidence in interested hands; a setting can come from carelessness, a default, or a deliberate act, and only the logs can tell; the Amarillo dormancy question is open; the story has changed daily.

 	- **What I'd add as president:** Independent custody and testing of the routers; publish who chose and approved the configuration; audit every device; require realistic multi-device testing before installation; coordinate commercial copper retirement with aviation safety. These are cheap compared to $50 billion and matter more.


---


## Sources and Their Limits

This update was written Sunday evening, from a [New York Post report](https://nypost.com/2026/11/15/us-news/faa-router-in-middle-of-nowhere-arkansas-identified-as-cause-of-nationwide-flight-chaos/?utm_campaign=nypevening&utm_source=sailthru&utm_medium=email&utm_content=20261115&lctg=635d178021cb60a9f00b121e&utm_term=NYP%20-%20Evening%20Update) citing The Wall Street Journal, the FAA's Sunday question-and-answer release as reported by local and national outlets, and accounts of Secretary Duffy's *Face the Nation* interview. The technical details (the broadcast feature, the sixty routers, the Juniper manufacturer) come from the Journal's reporting as summarized by other outlets; I have not read the Journal's article or the FAA release directly. The officials, the contractor, and the manufacturer are all interested parties, and no independent technical analysis has been published. HPE's statement and L3Harris's statement are reported only in brief. My hypothesis that the two routers interacted is my own inference from the reported sequence, not a finding of the investigation. My statements about containment, configuration management, and testing describe standard network engineering practice, not documented facts about the FTI network's safeguards. Figures for the duration, the number of flights, and the number of stranded travelers differ across outlets. I will revise this update when the investigation publishes its findings.

**Source article:**


 	- New York Post report citing The Wall Street Journal, "A single malfunctioning FAA router in rural Arkansas appears to have caused the air travel chaos…," Nov. 15, 2026. [LINK TO BE ADDED]


**Other resources:**


 	- [Investing.com / Yahoo: FAA router overload in Arkansas triggered nationwide flight grounding — WSJ](https://www.yahoo.com/news/us/articles/faa-router-overload-arkansas-triggered-053809546.html) (Nov. 15, 2026)

 	- [KNOE: El Dorado site among locations investigated after nationwide FAA ground stop](https://www.knoe.com/2026/11/15/el-dorado-site-among-locations-investigated-after-nationwide-faa-ground-stop/) (Nov. 15, 2026)

 	- [Yahoo: FAA ground stop puts Arkansas, Texas facilities under scrutiny](https://www.yahoo.com/news/us/articles/faa-ground-stop-puts-arkansas-014242847.html) (Nov. 15, 2026)

 	- [Yahoo: FAA router in El Dorado, Arkansas at center of investigation](https://www.yahoo.com/news/us/articles/faa-router-el-dorado-arkansas-171057138.html) (Nov. 15, 2026)

 	- [Dallas Morning News: Texas router tied to L3Harris under scrutiny](https://www.dallasnews.com/business/airlines/article/l3harris-router-texas-faa-outage-22531968.php) (Nov. 15, 2026)

 	- [Men's Journal: Router maker HPE says devices 'did not fail' in FAA outage](https://www.mensjournal.com/news/hpe-juniper-router-faa-ground-stop-did-not-fail) (Nov. 15, 2026)

 	- [Yahoo News live updates](https://www.yahoo.com/news/us/live/faa-ground-stop-latest-updates-duffy-blames-contractor-l3harris-thousands-more-flights-canceled-saturday-no-sign-of-cyberattack-161329174.html) (Nov. 14–15, 2026)

 	- [FactCheck.org on the FAA's modernization history across administrations](https://www.factcheck.org/?p=277940)