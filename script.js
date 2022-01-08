window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.mode-switch__toggle').addEventListener('click', function() {
      
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
      } else {
        document.body.classList.add('dark-mode');
      }
      
      // 或者
      // document.body.classList.toggle('dark-mode');
    });
  });
  