// theme.js - dark mode toggle.
// Initial theme (before first paint) is set by the small inline script in
// <head> of each page, which reads localStorage / prefers-color-scheme
// early to avoid a flash of the wrong theme. This file only wires up the
// toggle button(s) after the page loads.

(function () {
  const toggles = document.querySelectorAll('.theme-toggle');
  if (!toggles.length) return;

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    toggles.forEach((btn) => {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // localStorage unavailable (private browsing, etc.) - theme just
      // won't persist across visits, which is a fine degradation.
    }
  }

  // Sync button state with whatever the anti-flash script already set.
  applyTheme(currentTheme());

  toggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  });
})();
