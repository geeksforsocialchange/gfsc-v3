# TODO

## Images Shortcodes
https://github.com/geeksforsocialchange/gfsc-v3/issues/42


## Description

- Seperate into 'image' and 'gallery'
- named variables https://gohugo.io/templates/shortcode-templates/#positional-vs-named-parameters
- make an extra shortcode for caption and nest them???

### Shortcodes

### `image.html`

Args

0. filename
1. alttext
2. classlist

#### lets try and cherry pick some committs

```
* 433230f (HEAD -> 42-image-shortcodes, origin/42-image-shortcodes) make alt parameter in image shortcode optional to reflect actual usage. update documentation to reflect this.
* 12143ad update classList parameter for image shortcode to take full class names to reflect actual usage. update related documentation.
* 6c51aa9 refactor image shortcode to use named parameters
```

### `image-multi-with-caption.html`

```
content/blog/2021/what-happened-to-nuclear-free-manchester/index.md
content/blog/2021/technology-isnt-a-magic-wand/index.md
content/blog/2018/placecal-story-so-far/index.md
content/blog/2021/everything-is-connected/index.md
```

### `image-with-caption.html`

```
content/blog/2020/manchester-community-histories-urban-regeneration/index.md
content/blog/2021/what-happened-to-nuclear-free-manchester/index.md
content/blog/2021/technology-isnt-a-magic-wand/index.md
content/blog/2021/imok-is-launched/index.md
content/blog/2021/everything-is-connected/index.md
content/blog/2018/placecal-story-so-far/index.md
content/blog/2022/why-is-it-so-hard-to-do-nice-things/index.md
content/blog/2019/brief-introduction-placecal/index.md
content/blog/2019/ladder-citizen-participation/index.md
content/blog/2019/placecal-capabilities-approach/index.md
```


## Random Issues

- [ ] The whole thing is full of unsplash images!?
- [ ] `/studio` links don't go anywhere "See our research work", etc.
- [ ] the site has many notes that look like todos they are in square brackets like this `[link to ‘our work’ page, jump to collective section?]`
- [ ] on individual projects the "go back" doesn't take you back to where you were, ie `/our-work/consultancy-research/` it just leads to `our-work`
- [ ] Jazz on the staff page?
- [ ] on the project page the `themes` tags could do with being separated by a comma or anything to making them easier to read
- [ ] the `themes` don't actually lead to anything!?
- [ ] footer at mobile width has weird borders under GFSC logo
- [ ] `support` button takes you back to homepage
- [ ] "Collective Members" is lacking members
- [ ] `blog/2019/ladder-citizen-participation/` ladder of participation svg very janky
- `placecal-capabilities-approach/`
	- [ ] every where there is a `{{</rawhtml>}}.` a space is introduced between the  shortcode and the period.
	- [ ] blockquotes are missing new lines
