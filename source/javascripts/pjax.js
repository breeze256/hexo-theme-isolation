document.addEventListener('DOMContentLoaded', function () {
  // Listen to click event.
  document.body.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.href) {
      event.preventDefault();
      showLoading();
      loadPage(event.target.href);
    }
  });

  // Display loading status.
  function showLoading() {
    var loading = document.querySelector('#loading');
    if (loading) {
      loading.style.display = 'block';
    }
  }

  // Hide loading status.
  function hideLoading() {
    var loading = document.querySelector('#loading');
    if (loading) {
      loading.style.display = 'none';
    }
  }

  // Use AJax to load new page.
  function loadPage(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-PJAX', 'true');
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(xhr.responseText, 'text/html');
        var newContent = doc.querySelector('#content'); // Content id.

        // Add fade out animation.
        var content = document.querySelector('#content');
        content.classList.add('fade-out');

        setTimeout(function () {
          content.innerHTML = newContent.innerHTML;
          content.classList.remove('fade-out');
          content.classList.add('fade-in'); // Fade in animation.

          setTimeout(function () {
            content.classList.remove('fade-in');
            hideLoading(); // Hide loading status.
          }, 250); // Time of animation.

        }, 200); // Time of animation.

        history.pushState(null, '', url);
      } else {
        hideLoading(); // Failed to load, hide loading status.
      }
    };
    xhr.onerror = function () {
      hideLoading(); // Failed to load, hide loading status.
    };
    xhr.send();
  }

  window.addEventListener('popstate', function () {
    showLoading();
    loadPage(location.href);
  });
});
