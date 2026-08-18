(function () {
  var STORAGE_KEY = 'aeg-theme';
  var root = document.documentElement;

  function currentTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return 'light';
  }

  function applyTheme(theme) {
    var isDark = theme === 'dark';
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    updateButtons(isDark);
    updateLogos(isDark);
  }

  function toggleTheme() {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  }

  function updateButtons(isDark) {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    buttons.forEach(function (btn) {
      var icon = btn.querySelector('.theme-toggle-icon');
      var label = btn.querySelector('.theme-toggle-label');
      if (icon) {
        icon.textContent = isDark ? '☀' : '☾';
      }
      if (label) {
        label.textContent = isDark ? 'light' : 'dark';
      }
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function updateLogos(isDark) {
    var logos = document.querySelectorAll('[data-light-src]');
    logos.forEach(function (img) {
      img.src = isDark ? img.getAttribute('data-dark-src') : img.getAttribute('data-light-src');
    });
  }

  function init() {
    applyTheme(currentTheme());
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
