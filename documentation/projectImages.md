# Project Images

## Project list images

The preview image in list view is set in the front matter of the project and will need to be located in the page bundle.

`content/project/projectname/index.md`

```
image: cops.jpg
imagealt: police in a line wearing riot gear
```

## Project gallery

Any jpg file located in the project folder will appear automatically in a gallery. There is currently not a way to specify order aside from the file names.

Alt text is required to render the gallery. It can be added in the projects front matter. The gallery accepts an array of strings like so;

```yaml
galleryalt:
- a line of police
- 
- mountain view 2
- mountain view 3
- mountain view 4
```

- The order of the array should match the order the images are presented
- Any image without alt text will be hidden from screen readers.

If you would like to add a gallery of images without alt text / all hidden from screen readers you can do the following;

```yaml
galleryalt:
-
```

But there should be a good reason for doing this, like debugging.
