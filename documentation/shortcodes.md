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
{{<image src="blm.avif" alt="A photograph of BLM protestors in London" classList="frame image--center">}}
```

### Arguments

- `src`: address of the image file
- `alt`: alt text for accessibility
- `classList`: Classes to be added to the image. It looks to originally have taken a single word which was appended to `image--`. It has been craftily used in many places with two classes by writing the full classname for the second half of the argument and separating with a space.

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
{{<image-multi-with-caption/start "scarecat.jpg gianthand.jpg" "Some items listed barely pass as innovations. Scare Cat (left) and Giant Hands (right)." "frame">}}
Some items listed barely pass as innovations. Scare Cat (left) and Giant Hands (right).[^1] 
{{<image-multi-with-caption/end>}}
```

### Arguments

1. URLs for the images separated by spaces
2. Alt text for the images (this will be applied to each)
3. Classes to be added to the image. It looks to originally have taken a single word which was appended to `image--`. It has been craftily used in many places with two classes by writing the full class name for the second half of the argument and separating with a space. See `themes/gfsc/assets/sass/components/_images.sass`.
4. Caption body accepts normal markdown as in the rest of the file. It is important to place this between the `start` and `end` shortcodes.
