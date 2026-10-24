/* ==========================================================================
   main.js — tema, menu, ano e abas de projetos
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

  /* abas de projetos ------------------------------------------------------- */
  var tabsList = document.querySelector('.tabs__list');

  if (tabsList) {
    var tabs = Array.prototype.slice.call(tabsList.querySelectorAll('[role="tab"]'));
    var indicator = tabsList.querySelector('.tabs__indicator');

    function moveIndicator(tab) {
      if (!indicator || !tab) return;
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + (tab.offsetLeft - 6) + 'px)';
    }

    function selectTab(tab, shouldFocus) {
      tabs.forEach(function (item) {
        var selected = item === tab;
        item.setAttribute('aria-selected', selected ? 'true' : 'false');
        item.setAttribute('tabindex', selected ? '0' : '-1');
        var panel = document.getElementById(item.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
      moveIndicator(tab);
      if (shouldFocus) tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        selectTab(tab, false);
      });

      tab.addEventListener('keydown', function (event) {
        var next = null;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = tabs[(index + 1) % tabs.length];
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = tabs[(index - 1 + tabs.length) % tabs.length];
        if (event.key === 'Home') next = tabs[0];
        if (event.key === 'End') next = tabs[tabs.length - 1];
        if (next) {
          event.preventDefault();
          selectTab(next, true);
        }
      });
    });

    var initialTab = tabsList.querySelector('[aria-selected="true"]') || tabs[0];
    selectTab(initialTab, false);

    window.addEventListener('resize', function () {
      moveIndicator(tabsList.querySelector('[aria-selected="true"]'));
    });

    document.addEventListener('langchange', function () {
      moveIndicator(tabsList.querySelector('[aria-selected="true"]'));
    });

    window.addEventListener('load', function () {
      moveIndicator(tabsList.querySelector('[aria-selected="true"]'));
    });
  }
})();
