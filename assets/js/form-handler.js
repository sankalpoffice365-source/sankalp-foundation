// Contact form handler
(function() {
  'use strict';
  
  function initForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      var action = form.getAttribute('action') || '';
      if (action.indexOf('formsubmit.co') !== -1) return;

      e.preventDefault();
      
      var formData = new FormData(form);
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      
      // Disable submit button
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(function(response) {
        if (response.ok) {
          submitBtn.textContent = 'Message Sent! ✓';
          submitBtn.style.background = 'var(--theme-primary)';
          form.reset();
          setTimeout(function() {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
          }, 3000);
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(function(error) {
        submitBtn.textContent = 'Error - Try Again';
        submitBtn.disabled = false;
        console.error('Form submission error:', error);
        
        // Fallback: open email client
        var email = form.querySelector('#email').value;
        var message = form.querySelector('#message').value;
        var subject = encodeURIComponent('Contact from Sankalp Learning Center');
        var body = encodeURIComponent('Name: ' + form.querySelector('#first-name').value + ' ' + form.querySelector('#last-name').value + '\n\n' + message);
        window.location.href = 'mailto:info@sankalpinclusive.org?subject=' + subject + '&body=' + body;
      });
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForm);
  } else {
    initForm();
  }
})();

