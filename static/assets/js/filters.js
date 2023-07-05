const showFilters = () => {
  document
    .querySelectorAll(".work__types-btn")
    .forEach((button) => button.classList.toggle("work__btn--active"));

  document
    .querySelectorAll(".work__filter")
    .forEach(
      (button) => {
        if(button.style.display == 'none') {
          button.style.display = 'flex';
        } else {
          button.style.display = 'none';
        }
      });
};
