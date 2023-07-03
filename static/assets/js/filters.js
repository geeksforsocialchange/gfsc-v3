const showFilters = () => {
  document
    .querySelectorAll(".work__types-btn")
    .forEach((button) => button.classList.toggle("work__btn--active"));

  document
    .querySelectorAll(".work__filter")
    .forEach((button) => button.classList.toggle("work__filter--hidden"));
};
