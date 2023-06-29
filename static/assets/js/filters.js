document.addEventListener("DOMContentLoaded", function (event) {
  const themeButton = document.querySelector(".work__types-btn-theme");
  themeButton.style.color = "#f1f4d1";
  themeButton.style.backgroundColor = "#ea5b0c";
});

const showFilters = (type) => {
  const themeElements = Array.from(
    document.getElementsByClassName("work__theme")
  );
  const categoryElements = Array.from(
    document.getElementsByClassName("work__category")
  );
  const themeButton = document.querySelector(".work__types-btn-theme");
  const categoryButton = document.querySelector(".work__types-btn-category");

  if (type === "theme") {
    themeElements.map((e) => (e.style.display = "unset"));
    categoryElements.map((e) => (e.style.display = "none"));
    themeButton.style.color = "#f1f4d1";
    themeButton.style.backgroundColor = "#ea5b0c";
    categoryButton.style.color = "";
    categoryButton.style.backgroundColor = "";
  } else {
    themeElements.map((e) => (e.style.display = "none"));
    categoryElements.map((e) => (e.style.display = "unset"));
    categoryButton.style.color = "#f1f4d1";
    categoryButton.style.backgroundColor = "#ea5b0c";
    themeButton.style.color = "";
    themeButton.style.backgroundColor = "";
  }
};
