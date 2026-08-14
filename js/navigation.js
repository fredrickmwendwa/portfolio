// navigation.js - mobile menu open/close behavior, shared across all pages

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  if (!toggle || !mobileNav) return;

  function openMenu() {
    mobileNav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    body.classList.add('no-scroll');
    const firstLink = mobileNav.querySelector('a');
    if (firstLink) firstLink.focus({ preventScroll: true });
  }

  function closeMenu() {
    mobileNav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    body.classList.remove('no-scroll');
  }

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Mark current page in nav
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
