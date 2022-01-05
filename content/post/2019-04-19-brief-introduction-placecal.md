---
author: kim
date: "2019-04-19T00:00:00Z"
description: PlaceCal is a package of calendar software, education and community development.
  It makes it easier for residents to publish events, find information about their
  area, and see how to get involved in local groups. This helps people become active
  in their community by connecting them to events that are happening nearby.
subtitle: How we made Hulme & Moss Side's go-to resource to find out what's on.
title: A brief introduction to PlaceCal
---

PlaceCal is a package of calendar software, education and community development. It makes it easier for residents to publish events, find information about their area, and see how to get involved in local groups. This helps people become active in their community by connecting them to events that are happening nearby. The result of this is a more connected neighbourhood that works better for everyone.

It works by getting community groups to publish their calendars online using software they already have, and then linking them all up together to produce one really good central events and services listing.

This is really important as it’s currently very difficult for people to find out about the small local, neighbourhood-level events that can be hard to discover: the coffee mornings, sewing groups, computer classes and gardening groups that might be just around the corner but can only be discovered by word of mouth. This especially affects older people, who are much more likely to be socially isolated and digitally excluded.

{% include image.html description="A screenshot of PlaceCal at the time of publication" url="/assets/images/blog/brief-intro-placecal/0.png" class="" %}

By helping everyone in a neighbourhood find out what’s happening, PlaceCal enables service providers, community groups and residents to work together enabling people to live more physically and socially active lives.

This has wide benefits for everyone living and working in a community. For residents, a more connected neighbourhood reduces the risks of social isolation and loneliness. For community groups, it drastically reduces the barriers and effort in getting their information disseminated to a large range of audiences. Having a single point of contact makes it really easy for health service providers and city councils to engage with local groups and roll out “social prescribing” schemes, without having to engage in costly “asset mapping” processes.

This article explores our first two years of developing PlaceCal, examining how we framed the problem and developed a solution that we think solves the issue of community information in low social capital areas once and for all. PlaceCal came directly out of a co-research project based around a resident-led partnership of older people (Manchester Age Friendly Neighbourhoods) in Hulme and Moss Side in Manchester, UK.

_This article was written for a publication based the workshop "Challenges of a Digital City for Disadvantaged Neighbourhoods[^1]" that we attended in October 2018 in Berlin. You can find out more about this workshop on the hosts' websites: [vhw](https://www.vhw.de/) & [Stadtkümmerei](https://www.stadtkuemmerei.de/). Thanks to the hosts for a wonderful time and the inspiration to write this!_

[^1]: [More information about the workshop including proceedings is on their website.](https://www.stadtkuemmerei.de/108/)

## What’s the problem?

### It’s really hard to get good community information

Manchester is the 5th most deprived local authority in England out of 326[^4]. Working with a group considered “hard to reach” with technology (older people) in an area with a strained public sector and scarce resources fundamentally changed the nature of how we approached technological co-production.

[^4]: [Manchester City Council deprivation statistics](https://secure.manchester.gov.uk/info/200088/statistics_and_intelligence/2168/deprivation)

Many neighbourhoods used to have a range of local publishing like newspapers, what’s on guides, and classified ad magazines. The competition provided by privatised sites like Facebook and Twitter seem to have absorbed some of these functions, resulting in less information in the public domain. Overall it’s now much harder to maintain what these “old” media represented: hyperlocal forms of information brokerage and trust.

In the absence of a more functional community media, finding out everything that’s happening in a given neighbourhood looks something like this.

{% include image.html description="Some of the flyers and posters we collected for events in our area" url="/assets/images/blog/brief-intro-placecal/1.jpg" class="frame" %}

It’s disconnected, ad-hoc, and reliant on each individual organisation to create, publish and distribute their own material. This is enormously cost inefficient across the sector. It’s no surprise that less than 50% of voluntary, community and social enterprise[^2] (let alone unincorporated community groups) have a website at all, let alone an up-to-date one, given the cost and skills required to reach relatively few people compared to traditional media.

[^2]: [Government Digital Inclusion Strategy (2014)](https://www.gov.uk/government/publications/government-digital-inclusion-strategy/government-digital-inclusion-strategy)

### It’s even worse for people in disadvantaged neighbourhoods

This is especially extreme for socially isolated people. Generally, tech products are aimed directly at people with high social capital, exacerbating the gap between “tech haves” and “have nots”. Despite the last decade or so seeing a rise in “human centered design”, “user experience” and the like, this situation seems to be actively getting worse, with the designers of tools looking less and less like the people who use their tools every day.

We’ve discovered this first-hand working on Manchester Age Friendly Neighbourhoods. We found lots of residents don’t have an email address, find most of the web far too complicated, can’t remember any passwords, think website font sizes and contrasts are too low, and most of all can’t really find a reason to be online outside of video calling their family. Crucially, these are also the people who run support people for their peers. This means that it’s not just hard for people to find community information; often that information simply doesn’t exist online as the people publishing it have the same difficulties with technology as those they’re helping.

This creates a Catch-22 where there is no point in many older people being online as there’s no information on there for them, so tools are not being developed by older people to suit their own needs. As long as tech products and practice are designed for people with high social and economic capital, this has no signs of changing.

### This has big knock-on effects for health, wellbeing and loneliness.

The effects of this are enormous. Social isolation and loneliness are among the biggest killers in the UK today. A long term longitudinal health study found that being socially isolated is as bad for your health as smoking 15 cigarettes a day, and twice as impactful as not taking regular exercise[^3].

[^3]: [Campaign to End Loneliness](https://www.campaigntoendloneliness.org/about-loneliness/)

The UK government and health sector is pushing for doctors and community workers to “socially prescribe”, or direct people to local groups that would be good for their wellbeing[^5]. Currently however, this is not possible due to this lack of joined up community information. It is almost impossible for each GP to collate their own list based on the flyers and emails they get every day (like in our photo above), meaning it’s almost impossible to give useful information to patients in an average 7 minute GP appointment. This means that people are not getting redirected to the nearby services that need and welcome these kinds of connections, and making it harder for people to take control of their own health.

[^5]: "DH pledges to roll out GP social prescribing across England by 2023", [GP Online (2018)](https://www.gponline.com/dh-pledges-roll-gp-social-prescribing-across-england-2023/article/1496121)

{% include kofi.html custom="Support our community work by donating the price of a Ko-fi to us." %}

## How it works

We designed PlaceCal as a new way of helping people understand what’s happening in their community. We realised we couldn’t just make an asset map, a directory, or a piece of software — it would require a fundamentally different way of thinking about community information, skills and training that brings everyone together to solve these issues.

### What happens now

Every community group we spoke to had a diary somewhere, whether it was on paper, on someone’s calendar, or even in someone’s head.

These calendars work great for the day-to-day running of each group. However: they’re not linked up, it’s hard or impossible to find out about them without a personal connection to the group, and it’s not always clear who to talk to to get them updated.

Small groups don’t really have the money to publish at all outside the odd flyer here and there. The few who did manage to publish on or offline found it took an enormous amount of time, money and resources, and it was practically impossible to work with others to make the job easier. Websites were seen as a “nice to have”, but ultimately a huge amount of effort for a very small increase in visibility.

Big institutions tend to invest in their own community events and projects listings. These are generally linked directly to the organisation: so big health and housing providers will keep their own events listings, for example. While these platforms are often open to submissions from community groups, this takes a lot of time and work, and groups are often faced with having to add events to Facebook, Twitter, Eventbrite, their own websites, flyers etc before even thinking about other local sources.

### Our approach

We reframed the problem by examining this system as a whole: there are lots of small organisations with disconnected calendars, and large ones making their own copies.

We realised that if we could get all the small calendars online and to adhere to a common data standard, that they could all be combined into larger ones by a computer with some clever coding.

This means that everyone would be responsible for publishing their own information. The central system would just aggregate and process this new network of calendar data, acting as more like “community plumbing” than an endpoint.

How does this work in practice?

### We find a key organisation in each area to work with

PlaceCal works by finding a local group to work with: be that a resident-led partnership, local housing provider, or something else.

We start with the organisations and groups already engaged in their neighbourhood. This group becomes the area commissioner, and selects a number of people already engaged in neighbourhood development (we called them “secretaries”) to manage the rollout across the region.

### We work with each individual group to get them to publish a calendar feed

These secretaries then go to have a chat with each group. Every online calendar, such as Google Calendar, Outlook, Facebook and custom CMSs has (or should have!) a way to publish an “ical” or “ics” feed, or an “API”. This concept is something quite basic to anyone involved in the technology sector, but completely alien to all the community groups we spoke to.

Rather than asking people to contribute to yet another system, we simply find out which of these calendars they are already using (or train them up to use one), and help them enter their event information in a way already embedded in their organisation. This means that no extra IT is needed, and often people are paying for this software already.

For example, if a group is using Outlook internally for their email, that means they have access to Outlook Calendar too. We can help them make a shared calendar of public events that can be managed with other people in the organisation. By using these existing tools that people are already familiar with, it makes people far more likely that this information will stay up to date, and not be “just another” thing to remember.

{% include image.html description="Illustrative diagram of how PlaceCal imports feeds" url="/assets/images/blog/brief-intro-placecal/2.png" class="frame" %}

Giving organisations the skills to manage their own information has hugely increased the accuracy and completeness of their information. One organization we worked with published twice as many events when given this skill as their representative was able to tell us face-to-face.

Our most ambitious project yet was for Hulme’s 2018 Winter Festival, where we co-produced and delivered 10,000 A2 maps of the area with everyone’s venues and events on! This meant that every organization drastically increased their reach, and were supported by the neighbourhood team to be part of a the community network.


{% include image.html description="The map of Hulme and Moss Side we made for Winter 2018's mailout" url="/assets/images/blog/brief-intro-placecal/3.png" class="" %}

{% include smallsignup.html custom="Hear more about our projects by signing up to our email list." %}

## What are the benefits?

The overall benefits of PlaceCal are wide-ranging. We’ve developed our platform around core “roles”, based on the “capability approach” used by large NGOs such as the United Nations. These roles - Citizen, Organisation Manager, Organisation Admin, Secretary, Commissioner, Social Prescriber and Developer - are the basis for our research and evaluation process and cover all the roles people play in the publication of community information. We’re currently working on a journal paper that will explain these in full.

Here’s a look at some of the benefits for these groups.

### Citizens get a really great source of hyperlocal information

For residents, there was a short and simple benefit:

> People are saying they're bored and there's nothing to do - with this much on that's mad isn't it!
>
> – Catherine, participant at a supported IT session for older people

{% include image.html description="A community group in Moss Side library using PlaceCal to find out what’s on" url="/assets/images/blog/brief-intro-placecal/4.jpg" %}

### Small community groups can get their stuff online really easily

Small groups with little or no support can now get their events published online in a high quality format really easily. If this is in a community venue that’s already on PlaceCal, they won’t have to do anything at all to get listed as the venue’s events will automatically get listed.

### Organisations get a trusted way to get their organisation’s data online

For people who manage buildings or large groups, getting their information online is also complicated and hard to know what to do. By helping them upload their events using internal tools, we make the crucial job of diary publishing as easy as possible and make a clear definition of success. In some cases this simply means we can read the feed that is already there, like one group who already had a calendar up on their Wordpress website:

> I am so pleased you think you can link to what we already have. I was quite concerned about setting up something additional as we don't have people with the skills or time to keep it all up to date.  I have just about got to grips with what we do have!
>
> –  Susan Ash, Mossley Community Centre

### Social prescribers can use information in sessions and direct patients

GPs appointments are an average of 7 minutes. By making information really fast and easy to find, some local doctors are now using PlaceCal to “socially prescribe” in appointments.

> I think what you’re doing is amazing, I think it’s really fleshed out the challenge of how we get information out. Do I know what’s going on half the time in PlaceCal? No. Do I know what’s happening locally? No. Having a tool to let people find this out themselves seems totally obvious, it lets people teach me stuff, like “oh that refugee service is better than that one”, that helps us find a way together.
>
> – Alasdair Honeyman, GP at Manchester Medical

By focussing on creating a central public list of events, PlaceCal means there is no longer any need for expensive and siloed institutional contracts. This allows everyone to quite literally be “on the same page” rather than duplicating this work across each social prescribing organisation.

{% include image.html description="Alasdair at work using PlaceCal" url="/assets/images/blog/brief-intro-placecal/5.jpg" %}

### Secretaries can work with other venues in the area to share the work of asset mapping

There are many roles in communities to develop contacts and find out what’s going on, across health, social care, and social enterprises such as community pubs.

> Many people need a few sessions to get the hang of using software, and many tech communities don’t really understand this human development aspect. Tech works most effectively when it is relevant to people's everyday lives, especially in [Hulme and Moss Side], where many people are affected by poverty, loneliness and alienation.
>
> – Rachele Evaroa, The Old Abbey Taphouse CIC

PlaceCal enables pubs like The Old Abbey to use their real life trust and knowledge to make themselves centers of the community by helping their patrons.

### How are we planning on rolling out to other areas?

After all this work, we’ve got one last innovation to make - working out how to pay for it. To do it, we need to design a radically new form of organisation to own and manage it. People are already making large investments in all this information, as we covered. However, convincing a highly siloed public sector to cooperatively invest in mutually beneficial platforms is very complex with our current legal systems.

Our vision is to set up “The PlaceCal Foundation”, allowing it to be co-owned in a not-for-profit way by the people who use it. The Foundation will own the project and all the information, allowing people to control their own information. By doing this, we hope to pave the way for this and other innovations that will work holistically to put people back in charge of their own information.

All the software is open source, and we’re developing a comprehensive training and onboarding process with three other neighbourhoods. If you’re interested in working with us to develop this radically different way of thinking about technology that benefits everyone, [please get in touch](/contact)!

First posted 19 April 2019
{: .updated}

{% include image.html description="Our work made us a winner of the AAL Smart Ageing Prize 2018[^aal]! (L-R Kim & Stefan)" url="/assets/images/blog/brief-intro-placecal/6.jpg" %}

[^aal]: "The Smart Ageing Prize awards €50,000 to 3 innovative solutions for active and healthy ageing", [AAL Association, 2018](http://www.aal-europe.eu/the-smart-ageing-prize-awards-e50000-to-3-innovative-solutions-for-active-and-healthy-ageing/)
