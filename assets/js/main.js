/* ==========================================================================
   main.js — tema, menu e ano
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ano do rodapé ---------------------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* tema ------------------------------------------------------------------- */
  var themeToggle = document.querySelector('[data-theme-toggle]');

  function isDark() {
    return root.getAttribute('data-theme') === 'dark';
  }

  function updateThemeLabel() {
    if (!themeToggle) return;
    var lang = root.getAttribute('data-lang') || 'pt';
    var key = isDark() ? 'theme.toLight' : 'theme.toDark';
    var fallback = isDark() ? 'Ativar tema claro' : 'Ativar tema escuro';
    var label = window.SiteI18n ? window.SiteI18n.translate(lang, key) : fallback;

    themeToggle.setAttribute('aria-pressed', isDark() ? 'true' : 'false');
    themeToggle.setAttribute('aria-label', label);
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) { /* modo privado */ }
    updateThemeLabel();
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(isDark() ? 'light' : 'dark');
    });
  }

  updateThemeLabel();
  document.addEventListener('langchange', updateThemeLabel);

  /* menu mobile ------------------------------------------------------------ */
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');

  function closeMenu() {
    if (!menuToggle || !nav) return;
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = menuToggle.getAttribute('aria-expanded') === 'true';
      if (open) {
        closeMenu();
      } else {
        nav.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) closeMenu();
    });
  }
})();
