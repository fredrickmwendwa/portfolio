// main.js — shared page behavior (currently: live footer clock)

(function () {
  const clockEl = document.getElementById('footer-clock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Nairobi',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(now);
    clockEl.textContent = `Nairobi — ${formatted}`;
  }

  updateClock();
  setInterval(updateClock, 30000);
})();
