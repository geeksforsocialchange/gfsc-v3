---
author: kim
date: "2021-05-12T00:00:00Z"
description: We've worked with No Borders Manchester to create a tool for people seeking
  asylum in the UK. We're launching it today and have plans to use it to support many
  other vulnerable groups.
social-image-square: blog/imok/imok_square.png
subtitle: A simple bot designed to support people undertaking potentially risky activities
title: imok is released!
---

imok is a simple bot designed to support people undertaking potentially risky activities. It's primarily aimed at community groups working together to support these people.

The bot lets users 'check in' to the service with a messaging app or SMS message. If users don't 'check out' after 30 minutes (for example), it raises an alarm in a Telegram groupchat that project admins can join.

Examples use cases are:

-  Supporting protestors at risk of arrest or kidnapping
-  Supporting women and LGBTQ+ people walking home at night, or going on dates
-  Supporting journalists or medical staff in warzones
-  Supporting people seeking asylum through 'signing in' processes

We released it today under an open source (MIT) license. If you'd like to dive in and have a look then go [check it out](https://github.com/geeksforsocialchange/imok) on GitHub, which contains full instructions for setting up your own instance and a list of recommended security precautions.

## How did this come about?

Last year GFSC were approached by [No Borders Manchester](https://nobordersmcr.com/) to create a tool for their Signing Support Network. As part of the Tory government's 'hostile environment' policy, people seeking asylum in the UK must regularly 'sign in' at one of 14 'signing centres' around the UK. In Manchester, this is Dallas Court Reporting Centre.

{{ include image.html description="Illustration of Dallas Court by Michael Collins ([CC-BY-NC, Right to Remain](https://righttoremain.org.uk/you-literally-live-in-constant-anxiety-reporting-at-the-home-office/))
" url="/assets/images/blog/imok/dallas-court.jpg" class="frame image--center" }}

This has repeatedly been described by people seeking asylum as the most dehumanising aspect of the whole asylum process. The #AbolishReporting hashtag is widely used on this issue by a variety of groups including Right to Remain and Migrants Organise. Reporting centres tend to be in the middle of nowhere with no seating or shelter for waiting family members or friends provided. On attending, an immigration official asks a range of inane questions that seem designed to waste everyone's time, but can theoretically impact your case for asylum. How often you have to check-in depends on how big a risk the government thinks you are, from every day to every quarter.

If the government **does** decide to deport you, then you can be immediately detained from the centre and taken to the airport for extradition often with no recourse to a phonecall or way of notifying next of kin[^1]. This makes the entire process extremely stressful as it can happen at any time with no prior warning. Currently, No Borders Manchester and other groups manually support individuals going in and out of Dallas Court. This is obviously enormously labour intensive and requires a constant on-the-ground presence by volunteers.

We've worked over the intervening months to create imok and are now really happy to release it. We hope that it can take some of the pain out of the process for both Signing Support Network volunteers and people seeking asylum.

GFSC will be working with No Borders Manchester over the coming months to pilot it at Dallas Court. We will release a full report on the pilot after it is concluded.

## This sounds great, can I help?

Yes you can.

First of all, donations would be greatly appreciated. Imok has been developed entirely by volunteers in the GFSC collective. We've never attempted direct fundraising before at GFSC, and if this becomes a sustainable income source we will be able to greatly increase our capacity to release not just imok but a range of activist support software. [You can set up a one-off or regular donation on Ko-Fi](https://ko-fi.com/gfscstudio).

{{ include kofi.html custom="You can support imok development by donating on Ko-fi." }}

If you are able to translate from English to any other language, we welcome translations. You can do this through [POEditor](https://poeditor.com/join/project?hash=p2lHT7RFE5). It's currently a very short translation project at around 30 sentences.

If you are a Python/Django developer, we also welcome code contributors. We will be working on moving our development to GitHub issues in the coming weeks: feel free to give us an email at [kim@gfsc.studio](mailto:kim@gfsc.studio), a DM on Twitter [@gfscstudio](https://twitter.com/gfscstudio), or join the [GFSC Discord server](https://discord.gg/4JKak6aymM) if you want to help out.

## What's next for the project?

After completing the Dallas Court trial, we will be adapting the tool to support the growing wave of protests in the UK such as #KillTheBill. These protests are already resulting in harassment and assaults by the police, with a common tactic being to snatch protestors off the streets, put them in a cell at a police station in the sticks, and later releasing them far away from home in the middle of the night. We hope that imok can somewhat mitigate this through improved tracking of individuals attending protests. If you are in a group for whom this would be a useful tool, please feel free to get in touch.

{{ include smallsignup.html custom="Keep up to date on imok and our other projects by joining our email list." }}

---

[^1]: The government's rules say you _are_ allowed a call, but in practice this is very hit or miss ([Taylor & Humphrey, 2021](https://www.theguardian.com/uk-news/2021/apr/22/home-office-breaches-own-rules-deporting-vietnamese-migrants); [Taylor, 2020](https://www.theguardian.com/uk-news/2020/feb/18/home-office-to-release-information-about-immigration-detainees-access-to-lawyers)). Most commonly, people who are detained will have their phones or SIM card taken away. The offer of a phonecall often comes too late or never at all.
