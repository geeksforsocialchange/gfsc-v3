---
title: "Faceloader"
client: "GFSC Collective"
when: "2021"
who: kim alice
themes: digital-autonomy
categories: software
linktourl: https://github.com/geeksforsocialchange/faceloader
linktotext:
image: index.jpg
imagealt: A photograph of some small badges with 'facebook' and 'thumbs up emoji' logos on them
summary: "How we developed a tool to help event organisers break free of the siloed Facebook ecosystem, and share their events in more accessible and user-friendly calendar formats"
weight: 100
galleryalt:
- A stock photo of someone in a denim jacket using google calendar
- A stock photo of a mobile screen showing the facebook login screen
draft: false
---

Through our work on the PlaceCal initiative, we found lots of groups were using Facebook Events as their primary source of event data. However, since the Cambridge Analytica scandal and with Facebook's increasing abuse of their monopoly position, Facebook has all but made it impossible for community groups to sync their data outside the platform.

Where there was once multiple "Facebook to Google Calendar" extensions and an open and easy-to-use API, now there's a big business only service that was closed during Covid and only really aimed at the Ticketmasters of the world. Site crawling is actively discouraged through blocking requests from data centres and silently hiding future events for accounts that are not logged in. While there is a "download my data" option for personal pages, this is completely unsuitable for simple data sync of public data.

This is a pain in the butt for event promoters and community group organisers. Anyone who wants to both use Facebook to engage with an audience, and have this information to be available in other formats, currently only has the option of doing this manually with cut and paste. Facebook as an events platform has many desirable features such as easily allowing multiple event hosts, having events visible on more than one Page, and generally the social features that are really helpful for running an event.

## Our (attempted) solution

While Facebook constantly shift the goalposts to stop easy interoperability, there is one thing they haven't yet blocked: using the accessible version of their website to view your own events.

FaceLoader is a desktop app that takes the name of one or more Facebook pages and then pretends to be you by visiting each event link and downloading the data to your local computer. This creates local files on your computer you can upload into other event platforms, as well as importing the files into your Google or Outlook Calendar.

FaceLoader was designed primarily to be used with the PlaceCal event aggregation platform, which requires a public iCal feed or API to operate.

## On hiatus

However, we've found there's way more barriers than we thought to make this work. It seems like datacentre IPs are block-banned from accessing Facebook without a login. If we do require a login, then it's setting up a very brittle network of people who are using their personal access information to sync production data. Other tools to scrape Instagram have reached the same fate.

We've also found on the ground that groups are increasingly abandoning Facebook Events as the platform insists on a pivot to video, which is utterly unsuitable for most groups. We've finding more and more groups run out of Instagram or private WhatsApp groups -- which works a lot better for the groups but is making inter-group networking near impossible.

We eventually dropped support for this but leave it here as an example of the difficulties in taking on big tech. We would welcome anyone who wants to try and take over the project!
