# Shortcodes

## `image-with-caption`

### Example

```
{{%image-with-caption "art-of-noises-1.jpg" "A photograph of a boardgame I made as part of my PhD. It's called 'art of noises'. Photo shows several cards laid out with words on like 'forest', 'snooker', 'wine', and is surrounded by some colourful plastic instruments" "frame image--center"%}}
[Art of noises](https://alliscalm.net/art-of-noises/), a game I made in 2014 as a way of playing with concepts in my PhD as a standalone activity to bring me joy 
{{%/image-with-caption%}}
```

### Arguments

1. URL for the image
2. Alt text for the image
3. Classes to be added to the image. It looks to originally have taken a single word which was appended to `image--`. It has been craftily used in many places with two classes by writing the full classname for the second half of the argument and separating with a space.
4. Caption body. This will take markdown though if you use block elements rather than inline elements the results will be a bit wonky.

## `image-multi-with-caption`

### Example

```
{{%image-multi-with-caption "amtrak.png push-knowledge.png cart-waiting.png" "Fig 4. Various ‘nudge’ messages that don't allow you to say no: Amtrak asking 'send me offers' or 'maybe later'; SEMrush asking 'okay' or 'ask me later', and an email asking us to 'finish your purchase'." "1-2 image--frame"%}}
Fig 4. Various ‘nudge’ messages that don't allow you to say no: Amtrak asking 'send me offers' or 'maybe later'; SEMrush asking 'okay' or 'ask me later', and an email asking us to 'finish your purchase'. 
{{%/image-multi-with-caption%}}
```

### Arguments

1. URLs for the images separated by space
2. Alt text for the image
3. Classes to be added to the image. It looks to originally have taken a single word which was appended to `image--`. It has been craftily used in many places with two classes by writing the full classname for the second half of the argument and separating with a space.
4. Caption body. This will take markdown though if you use block elements rather than inline elements the results will be a bit wonky.
