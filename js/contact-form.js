// contact-form.js — client-side validation only.
// This does NOT send email. Wire it to a form backend (e.g. Formspree,
// Getform, or a simple server endpoint) before relying on it, and replace
// the placeholder action/comments below once that's set up.

(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');

  function setError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + '-error');
    if (errorEl) errorEl.textContent = message || '';
  }

  function validate() {
    let valid = true;

    const name = form.elements['name'];
    const email = form.elements['email'];
    const message = form.elements['message'];

    if (!name.value.trim()) {
      setError('name', 'Please enter your name.');
      valid = false;
    } else {
      setError('name', '');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      setError('email', 'Please enter a valid email address.');
      valid = false;
    } else {
      setError('email', '');
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      setError('message', 'Please add a little more detail (at least 10 characters).');
      valid = false;
    } else {
      setError('message', '');
    }

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) {
      statusEl.textContent = 'Please fix the fields above.';
      statusEl.dataset.state = 'error';
      return;
    }

    // NOTE: No backend is connected yet. Replace this block with an actual
    // submission (fetch() to a form service or your own endpoint) once one
    // is set up. For now this only confirms the form is filled correctly.
    statusEl.textContent = 'This form isn\u2019t connected to email yet \u2014 please use the email link above for now.';
    statusEl.dataset.state = 'error';
  });
})();
