function showGalleryImage(thumbnailIndex) {
   let bigImage = document.getElementById("bigimage");
   let thumbnails = document.getElementsByClassName("gallery__thumbnail");
   let newImage = thumbnails[parseInt(thumbnailIndex)].children[0].cloneNode();
   bigImage.replaceChildren(newImage);
}
