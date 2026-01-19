// Hamburger menu for Sankalp header
(function() {
  // Wait for DOM to be ready
  function initMenu() {
    var nav = document.querySelector('.nav');
    var navWrap = document.querySelector('.header-main .nav-wrap');
    var hamburgerSlot = document.querySelector('.topbar-hamburger');
    if (!nav || !navWrap) {
      // Retry if elements not ready yet
      setTimeout(initMenu, 100);
      return;
    }

    // Check if hamburger already exists
    if (document.querySelector('.nav-toggle')) return;

    // Create hamburger button
    var btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    
    // Insert into mobile topbar slot when available
    if (hamburgerSlot) {
      hamburgerSlot.appendChild(btn);
    } else {
      navWrap.appendChild(btn);
    }

    function setNavOpen(isOpen, shouldFocus) {
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        nav.removeAttribute('hidden');
        nav.classList.add('nav-open');
      } else {
        nav.setAttribute('hidden', '');
        nav.classList.remove('nav-open');
        if (shouldFocus) {
          btn.focus();
        }
      }
    }

    function isMobile() {
      return window.innerWidth <= 768;
    }

    if (isMobile()) {
      nav.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      nav.removeAttribute('hidden');
    }

    // Toggle nav visibility
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      setNavOpen(!expanded);
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
      if (isMobile() && !nav.contains(e.target) && !btn.contains(e.target)) {
        setNavOpen(false);
      }
    });

    // Close nav on resize up
    window.addEventListener('resize', function() {
      if (isMobile()) {
        setNavOpen(false);
      } else {
        nav.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close nav on link click (mobile)
    nav.addEventListener('click', function(e) {
      if (isMobile() && e.target.tagName === 'A') {
        setTimeout(function() {
          setNavOpen(false);
        }, 300);
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isMobile()) {
        setNavOpen(false, true);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
})();
