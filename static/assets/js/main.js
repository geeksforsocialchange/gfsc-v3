(function () {
  var hamburger = {
    toggle: document.getElementById("js-toggle"),
    nav: document.getElementById("js-nav"),
    doToggle: function (e) {
      e.preventDefault();

      this.toggle.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");

      return false;
    },
  };

  hamburger.toggle.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
  hamburger.nav.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
})();
