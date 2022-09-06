# Geeks for Social Change

New site build for [Geeks for Social Change](https://gfsc.studio) using Hugo static site generator.

Previous site was made with Jekyll.

The new site will use Hugo, and feature a redesign as well as new and updated content.

# Development

## Prerequisites

- **Git**
- **Github** account if you would like to make pull requests
- **Hugo** we are using `hugo_extended_0.88.1` available for download [here](https://github.com/gohugoio/hugo/releases/tag/v0.88.1) or consult the official [documentation](https://gohugo.io/getting-started/installing/)

## Setup & install instructions

`git clone https://github.com/geeksforsocialchange/gfsc-v3.git && cd gfsc-v3`

`hugo server` for a local server - you will be able to access the site at [localhost:1313](http://localhost:1313/).

If you need test the site on multiple devices locally you can bind the address to your local IP, you can then run the command below replacing the IP address.

`hugo server --bind 192.168.10.10 --baseURL http://192.168.10.10`

You would then visit (example IP) [192.168.10.10:1313](http://192.168.10.10:1313)

## Build

`hugo` command to build. This will create a directory called `public` which contains the website.

## Deployment

Deploys to [Netlify](https://docs.netlify.com/).

When a change is committed to the `main` branch the site is rebuilt and deployed.

## Development

When a pull request is created, a preview site is deployed.

If the build is successful and the changes are approved it can be merged into `main` which will automatically deploy it.

## License

## Contributing

## Donations
