(function() {
  var hamburger = {
    toggle: document.getElementById('js-toggle'),
    nav: document.getElementById('js-nav'),
    doToggle: function(e) {
     this.toggle.classList.toggle('expanded');
     this.nav.classList.toggle('expanded');
    }
  }

  hamburger.toggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
}());


// var footnotes = document.getElementsByClass("footnotes")
//
// footnotes.forEach(function(footnotenote) {
//
// })
