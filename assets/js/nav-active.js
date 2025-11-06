// Robust nav highlighting for all menu items and subpages
// Waits for NAV_MAP to be loaded before running
(function() {
  function normalize(path) {
    path = path.replace(/^\/?/, '').replace(/[?#].*$/, '');
    if (path.endsWith('/')) path += 'index.html';
    path = path.replace(/index\.html$/, '').replace(/\.html$/, '');
    return path;
  }
  
  function highlightNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    
    var links = nav.querySelectorAll('a[href]:not([href^="http"]):not([href^="#"])');
    var currentPath = window.location.pathname.split('/').pop();
    var current = normalize(currentPath);
    
    let found = false;
    links.forEach(function(link) {
      if (link.querySelector('img')) return;
      var navkey = link.getAttribute('data-navkey');
      if (!navkey || !window.NAV_MAP || !window.NAV_MAP[navkey]) return;
      var mapped = normalize(window.NAV_MAP[navkey]);
      if (current === mapped) {
        link.classList.add('active');
        found = true;
      }
    });
    
    // Handle home page
    if (!found && (current === '' || current === 'index')) {
      links.forEach(function(link) {
        var navkey = link.getAttribute('data-navkey');
        if (!navkey || !window.NAV_MAP || !window.NAV_MAP[navkey]) return;
        var mapped = normalize(window.NAV_MAP[navkey]);
        if (mapped === 'index') {
          link.classList.add('active');
        }
      });
    }
  }
  
  // Wait for NAV_MAP to be available
  function init() {
    if (window.NAV_MAP) {
      highlightNav();
    } else {
      // Wait a bit and try again
      setTimeout(init, 50);
    }
  }
  
  // Start checking once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
