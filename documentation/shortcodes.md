# Shortcodes

## `anchorfm`

### Example

```
{{<anchorfm "How-government-technology-limits-who-we-can-become-e1mbckq" >}}
```

### Arguments

1. The episode portion of your anchorfm url. `https://anchor.fm/gfscstudio/episodes/How-government-technology-limits-who-we-can-become-e1mbckq` => `How-government-technology-limits-who-we-can-become-e1mbckq` 

Subscription options are hardcoded into the shortcode.

## `image`

### Example

```
{{<image src="blm.avif" alt="A photograph of BLM protestors in London" classList="image--frame image--center">}}
```

### Arguments

- `src`: address of the image file
- `alt`: alt text for accessibility. *Optional but please be considerate*.
- `classList`: A space separated list of additional classes you would like to apply to the image. See options in `themes/gfsc/assets/sass/components/_images.sass`. *Optional*.

## `image-with-caption/start` & `image-with-caption/end` 

### Example

```
{{<image-with-caption/start "ask-jeeves.png" "Screenshot of Ask Jeeves" "frame image--center">}}
Fig 1. The branding of Ask Jeeves (Ask.com) in the early days of the internet exemplified this view of computers as personal assistants. 
{{<image-with-caption/end>}}
```

### Arguments

1. URL for the image
2. Alt text for the image
3. Classes to be added to the image. It looks to originally have taken a single word which was appended to `image--`. It has been craftily used in many places with two classes by writing the full class name for the second half of the argument and separating with a space. See `themes/gfsc/assets/sass/components/_images.sass`.
4. Caption body accepts normal markdown as in the rest of the file. It is important to place this between the `start` and `end` shortcodes.


## `image-multi-with-caption/start` & `image-multi-with-caption/end` 

### Example

```
{{<image-multi-with-caption/start srcs="amtrak.png push-knowledge.png cart-waiting.png" alts="amtrak alt text | push alt text | cart alt text" classList="image--1-2 image--frame">}}
Fig 4. Various ‘nudge’ messages that don't allow you to say no: Amtrak asking 'send me offers' or 'maybe later'; SEMrush asking 'okay' or 'ask me later', and an email asking us to 'finish your purchase'. 
{{<image-multi-with-caption/end>}}
```

### Arguments

- `srcs`: URLs for the images separated by a space.
- `alts:` Alt texts for images separated by the pipe symbol `|`. Images and alt text should follow the same order in the lists. If no `|` is present each image will receive the same alt text. This is an *optional* argument and less alt texts can be supplied than images but please be mindful that this will negatively effect accessibility. If you supply a longer list than the `srcs` unused alt text will be ignored.
- `classList`: A space separated list of additional classes you would like to apply to the image. See options in `themes/gfsc/assets/sass/components/_images.sass`. *Optional*.
- Caption body accepts normal markdown as in the rest of the file. It is important to place this between the `start` and `end` shortcodes.
