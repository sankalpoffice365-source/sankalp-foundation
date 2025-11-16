// Progressive image loading for background images
// Loads a tiny placeholder first, then the full image after page load
(function() {
  'use strict';
  
  // Check if images are already loaded
  var imagesLoaded = {
    day: false,
    night: false
  };
  
  // Preload full images after initial page load
  function preloadFullImages() {
    // Create image objects to preload
    var dayImg = new Image();
    var nightImg = new Image();
    
    dayImg.onload = function() {
      imagesLoaded.day = true;
      document.body.classList.add('bg-day-loaded');
    };
    
    nightImg.onload = function() {
      imagesLoaded.night = true;
      document.body.classList.add('bg-night-loaded');
    };
    
    // Start loading (browser will cache them)
    dayImg.src = 'assets/images/tree-day-pencil.webp';
    nightImg.src = 'assets/images/tree-night-pencil.webp';
  }
  
  // Start preloading after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      // Wait a bit to let critical content load first
      setTimeout(preloadFullImages, 500);
    });
  } else {
    setTimeout(preloadFullImages, 500);
  }
  
  // Also preload when page is fully loaded
  window.addEventListener('load', function() {
    preloadFullImages();
  });
})();

