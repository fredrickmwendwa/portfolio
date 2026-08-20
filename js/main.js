/* ===========================================================
   fredrick.m — site interactivity
   Theme toggle, mobile navigation, scroll-spy, reveal-on-scroll.
   =========================================================== */
(function () {
  'use strict';

  var THEME_KEY = 'theme';

  function getPreferredTheme() {
    try {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch (e) {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#09090b' : '#ffffff');
  }

  function toggleTheme() {
    var next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    applyTheme(next);
  }

  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });

    /* ---------------- Mobile nav ---------------- */
    var mobileNav = document.getElementById('mobile-nav');
    var menuBtn = document.querySelector('[data-menu-open]');
    var closeBtn = document.querySelector('[data-menu-close]');
    var lastFocused = null;

    function openMenu() {
      if (!mobileNav) return;
      lastFocused = document.activeElement;
      mobileNav.classList.add('open');
      document.body.classList.add('nav-open');
      mobileNav.setAttribute('aria-hidden', 'false');
      var firstLink = mobileNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }
    function closeMenu() {
      if (!mobileNav) return;
      mobileNav.classList.remove('open');
      document.body.classList.remove('nav-open');
      mobileNav.setAttribute('aria-hidden', 'true');
      if (lastFocused) lastFocused.focus();
    }
    if (menuBtn) menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (mobileNav) {
      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeMenu);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeMenu();
      });
    }

    /* ---------------- Scroll-spy active nav ---------------- */
    var sections = Array.from(document.querySelectorAll('main section[id]'));
    var navLinks = Array.from(document.querySelectorAll('.main-nav a, .mobile-nav-links a'));
    if (sections.length && 'IntersectionObserver' in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            var match = link.getAttribute('href') === '#' + entry.target.id;
            link.classList.toggle('active', match);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      sections.forEach(function (s) { spy.observe(s); });
    }

    /* ---------------- Reveal on scroll ---------------- */
    var revealEls = Array.from(document.querySelectorAll('.reveal'));
    if (revealEls.length && 'IntersectionObserver' in window) {
      var reveal = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            reveal.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { reveal.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }

    /* ---------------- Contact form (static, no backend wired up) ---------------- */
    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var status = document.getElementById('form-status');
        if (status) {
          status.textContent = 'This form is not yet connected to an email service. Please use the email link above for now.';
        }
      });
    }
  });
})();
