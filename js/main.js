// main.js - shared page behavior (currently: footer year)

(function () {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
