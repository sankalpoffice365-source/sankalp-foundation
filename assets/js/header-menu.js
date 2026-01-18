// Hamburger menu for Sankalp header
(function() {
  // Wait for DOM to be ready
  function initMenu() {
    var nav = document.querySelector('.nav');
    var navWrap = document.querySelector('.nav-wrap');
    if (!nav || !navWrap) {
      // Retry if elements not ready yet
      setTimeout(initMenu, 100);
      return;
    }

    // Check if hamburger already exists
    if (document.querySelector('.nav-hamburger')) return;

    // Create hamburger button
    var btn = document.createElement('button');
    btn.className = 'nav-hamburger';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    
    // Insert after logo
    var brand = navWrap.querySelector('.brand');
    if (brand && brand.nextSibling) {
      navWrap.insertBefore(btn, brand.nextSibling);
    } else {
      navWrap.appendChild(btn);
    }

    // Toggle nav visibility
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('nav-open');
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav-open');
      }
    });

    // Close nav on resize up
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav-open');
      }
    });

    // Close nav on link click (mobile)
    nav.addEventListener('click', function(e) {
      if (window.innerWidth <= 900 && e.target.tagName === 'A') {
        setTimeout(function() {
          btn.setAttribute('aria-expanded', 'false');
          nav.classList.remove('nav-open');
        }, 300);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
})();
