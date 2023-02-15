---
title: "EnquiryWitch"
client: "Gendered Intelligence"
when: "Winter 2021"
who: kim jazz
themes: trans-lib digital-autonomy
categories: software consultancyresearch
linktourl: https://github.com/geeksforsocialchange/enquirywitch
linktotext:
image: index.png
imagealt: Enquiry Witch logo
summary: "How we helped Gendered Intelligence streamline their website communications, respond to enquiries faster, and minimise pressure on their volunteers and employees"
weight: 100
galleryalt:
- A screenshot showing Gendered Intelligence's rearranged contact page powered by EnquiryWitch
- A screenshot showing EnquiryWitch running on mobile
- A screenshot showing an example of an enquiry Gendered Intelligence can't help with
- The EnquiryWitch logo
draft: false
---

The UKs largest trans charity Gendered Intelligence approached us because they were struggling to manage the quantity and variety of emails they were receiving. Emails often went to the wrong inbox or multiple inboxes with incomplete information, and were frequently enquiries GI couldn't help with. This labour was taking up hours and hours each day across the organisation and sucking up staff and volunteer time needed for other tasks. We worked with them to explore the problem holistically, looking at a range of potential bespoke and off-the-shelf solutions.

The original instinct was to go for some kind of "chatbot" solution, but being GFSC we first wanted to properly test what the capabilities of this solution was, and if there was something better we could make that solved the problem at a more root level.

Through lots of discussion and research we set the goal of making sure that enquiries end up in the right inbox first time with all the correct information, and that members of the public were informed before emailing which enquiries couldn't be dealt with. People contact GI about a wide range of issues, and different teams at the organisation deal with different areas. Emails were getting bounced around internally, leading to delayed responses and additional workload for those tasked with directing them to the right places.

We looked at a few chatbot solutions but found them all very overcomplicated, requiring lots of configuration and training, as well as ongoing maintenance of a server to host it on. Most of all though, these solutions didn't actually solve the underlying issue that figuring out who should have what email and what information it needs to have in is a human problem that a computer can't fix for you!

We did desk research of about 400 emails along with interviewing key staff to understand what kinds of enquiries they got, and where they should go to. Using this analysis we were able to get a big picture of the organisation and create a mapping between internal institutional logic and the chaos of general human enquiries.

After investigating a few options we eventually settled on adapting [Twine](https://twinery.org/), software usually used for interactive fiction. This software allows creation of simple "choose your own adventure" stories which then compile down to simple HTML and Javascript, so there's no chatbot server to run and everything can be edited using the existing, very well developed editor. We added functionality to let it send emails using Netlify serverless functions. And voila -- a "pseudo chatbot" that boils down to a single page of HTML that can be embedded in any website. [You can see it on GI's contact page](https://genderedintelligence.co.uk/contact/contact.html)

The final product may not look look like much but this complete review and consolidation of incoming emails has completely transformed Gendered Intelligence's incoming communications, they estimate saving a 3 days a month of staff time across the organisation. 

We now want to release this properly to make it easier for others to use -- get in touch if you think this is something your organisation could benefit from.
