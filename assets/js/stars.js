// Stars background for night mode
(function() {
  function createStars() {
    var container = document.getElementById('stars-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'stars-container';
      document.body.appendChild(container);
    }
    
    // Clear existing stars
    container.innerHTML = '';
    
    // Create stars
    var numStars = 150;
    for (var i = 0; i < numStars; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      
      // Make some stars brighter
      if (Math.random() > 0.7) {
        star.classList.add('bright');
      }
      
      // Random position
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      
      // Random animation delay for twinkling effect
      star.style.animationDelay = Math.random() * 2 + 's';
      star.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
      
      container.appendChild(star);
    }
  }
  
  function isNightTime() {
    var hour = new Date().getHours();
    return hour >= 19 || hour < 6; // 7 PM to 6 AM
  }
  
  function updateNightMode() {
    var container = document.getElementById('stars-container');
    if (!container) {
      createStars();
      container = document.getElementById('stars-container');
    }
    
    if (isNightTime()) {
      container.classList.add('night-mode');
      document.body.classList.add('night-mode');
    } else {
      container.classList.remove('night-mode');
      document.body.classList.remove('night-mode');
    }
  }
  
  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      createStars();
      updateNightMode();
    });
  } else {
    createStars();
    updateNightMode();
  }
  
  // Update every minute to check for night mode changes
  setInterval(updateNightMode, 60000);
})();

