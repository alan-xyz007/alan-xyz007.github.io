/* ==========================================================================
   i18n — pt-BR (primário) + en
   Regra: cada chave aparece exatamente 2 vezes (em `pt` e em `en`).
   ========================================================================== */
(function () {
  'use strict';

  var dict = {
    pt: {
      'meta.title': 'Alan José Brusque — Mecânica & Computação',
      'meta.description': 'Portfólio de Alan José Brusque — mais de três anos em mecânica automotiva e graduando em Ciência da Computação na ATITUS.',
      'meta.projects.title': 'Projetos — Alan José Brusque',
      'meta.projects.description': 'Projetos e experimentos de Alan José Brusque. Oficina aberta: os primeiros projetos estão em construção.',
      'a11y.skip': 'Pular para o conteúdo',
      'nav.label': 'Navegação principal',
      'nav.menu': 'Menu',
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',
      'lang.label': 'Mudar para inglês',
      'theme.toDark': 'Ativar tema escuro',
      'theme.toLight': 'Ativar tema claro',
      'hero.kicker': 'Mecânica automotiva · Ciência da Computação',
      'hero.tagline': 'Mais de três anos de experiência automotiva e, agora, graduando em Ciência da Computação na ATITUS — unindo prática e raciocínio analítico.',
      'hero.cta.projects': 'Ver projetos',
      'hero.cta.contact': 'Falar comigo',
      'hero.note': 'Portfólio',
      'stamp.line1': 'Mecânica',
      'stamp.line2': 'Computação',
      'stamp.line3': 'Feito à mão',
      'about.title': 'Sobre',
      'about.p1': 'Profissional dedicado e responsável, com mais de três anos de experiência no setor automotivo. Atuo na MR Auto Serviços com manutenção preventiva e corretiva de veículos, com ênfase em suspensão, substituição de embreagem, troca de óleo e manutenção de sistemas de freios.',
      'about.p2': 'Paralelamente à prática na mecânica, curso Ciência da Computação na ATITUS e tenho capacitação em Empreendedorismo pelo SENAI. Resolvo problemas na prática, aprendo rápido e trabalho bem em equipe — e sigo buscando evolução contínua, unindo a vivência técnica à base analítica da computação.',
      'about.studying.label': 'Estudando agora',
      'about.studying.items': 'Ciência da Computação (ATITUS) · Empreendedorismo (SENAI) · Manutenção automotiva · Desenvolvimento web',
      'projects.kicker': 'Oficina aberta',
      'projects.title': 'Projetos',
      'projects.lead': 'Ainda não há projetos publicados. Estou construindo os primeiros — e esta página vai mostrar cada etapa, do rascunho ao resultado.',
      'projects.badge': 'Em construção',
      'projects.badge.two': '0 de 3 publicados',
      'projects.section.label': 'Lista de projetos',
      'projects.tabs.label': 'Filtrar projetos',
      'projects.tab.wip': 'Em andamento',
      'projects.tab.done': 'Concluídos',
      'projects.slot1.title': 'Vaga 01 — reservada',
      'projects.slot1.desc': 'O primeiro projeto entra aqui. Enquanto isso, o estudo continua.',
      'projects.slot2.title': 'Vaga 02 — reservada',
      'projects.slot2.desc': 'Espaço guardado para o próximo experimento.',
      'projects.slot3.title': 'Vaga 03 — reservada',
      'projects.slot3.desc': 'Toda oficina começa vazia. Esta não vai ficar.',
      'projects.slot.status': 'Em aberto',
      'projects.board.title': 'Quadro de obras',
      'projects.board.aria': 'Obra em andamento',
      'projects.empty.stamp': 'Nada por aqui ainda',
      'projects.empty.text': 'Quando um projeto ficar pronto, ele aparece nesta aba — com código, resultado e o que aprendi no caminho.',
      'contact.title': 'Contato',
      'contact.lead': 'Aberto a conversas sobre mecânica, tecnologia, estudo e novas oportunidades.',
      'footer.note': 'Feito com HTML, CSS e JS',
      'footer.top': 'Topo',
      'footer.back': 'Voltar ao início'
    },
    en: {
      'meta.title': 'Alan José Brusque — Mechanics & Computing',
      'meta.description': 'Portfolio of Alan José Brusque — over three years in automotive repair and a Computer Science student at ATITUS.',
      'meta.projects.title': 'Projects — Alan José Brusque',
      'meta.projects.description': 'Projects and experiments by Alan José Brusque. Open workshop: the first projects are under construction.',
      'a11y.skip': 'Skip to content',
      'nav.label': 'Main navigation',
      'nav.menu': 'Menu',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'lang.label': 'Change to Portuguese',
      'theme.toDark': 'Switch to dark theme',
      'theme.toLight': 'Switch to light theme',
      'hero.kicker': 'Automotive mechanics · Computer Science',
      'hero.tagline': 'Over three years of automotive experience and now a Computer Science student at ATITUS — combining hands-on practice with analytical thinking.',
      'hero.cta.projects': 'See projects',
      'hero.cta.contact': 'Get in touch',
      'hero.note': 'Portfolio',
      'stamp.line1': 'Mechanics',
      'stamp.line2': 'Computing',
      'stamp.line3': 'Handmade',
      'about.title': 'About',
      'about.p1': 'Dedicated and responsible professional with over three years of experience in the automotive sector. I work at MR Auto Serviços performing preventive and corrective vehicle maintenance, focusing on suspension, clutch replacement, oil changes and brake system maintenance.',
      'about.p2': 'Alongside my hands-on mechanic work, I study Computer Science at ATITUS and hold an Entrepreneurship certificate from SENAI. I solve problems practically, learn quickly and work well in a team — always seeking continuous growth, combining technical experience with a computing foundation.',
      'about.studying.label': 'Currently learning',
      'about.studying.items': 'Computer Science (ATITUS) · Entrepreneurship (SENAI) · Automotive maintenance · Web development',
      'projects.kicker': 'Open workshop',
      'projects.title': 'Projects',
      'projects.lead': 'No projects published yet. I am building the first ones — and this page will show every step, from sketch to result.',
      'projects.badge': 'Under construction',
      'projects.badge.two': '0 of 3 published',
      'projects.section.label': 'Project list',
      'projects.tabs.label': 'Filter projects',
      'projects.tab.wip': 'In progress',
      'projects.tab.done': 'Completed',
      'projects.slot1.title': 'Slot 01 — reserved',
      'projects.slot1.desc': 'The first project goes here. Meanwhile, the studying goes on.',
      'projects.slot2.title': 'Slot 02 — reserved',
      'projects.slot2.desc': 'Space kept for the next experiment.',
      'projects.slot3.title': 'Slot 03 — reserved',
      'projects.slot3.desc': 'Every workshop starts empty. This one will not stay that way.',
      'projects.slot.status': 'Open',
      'projects.board.title': 'Work board',
      'projects.board.aria': 'Work in progress',
      'projects.empty.stamp': 'Nothing here yet',
      'projects.empty.text': 'When a project is ready, it shows up in this tab — with code, result and what I learned along the way.',
      'contact.title': 'Contact',
      'contact.lead': 'Open to conversations about mechanics, technology, learning and new opportunities.',
      'footer.note': 'Built with HTML, CSS and JS',
      'footer.top': 'Top',
      'footer.back': 'Back to home'
    }
  };

  var STORAGE_KEY = 'lang';
  var root = document.documentElement;

  function normalize(lang) {
    return lang === 'en' ? 'en' : 'pt';
  }

  function translate(lang, key) {
    var table = dict[normalize(lang)];
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    if (Object.prototype.hasOwnProperty.call(dict.pt, key)) return dict.pt[key];
    return key;
  }

  function metaKey(page, suffix) {
    if (page && Object.prototype.hasOwnProperty.call(dict.pt, 'meta.' + page + '.' + suffix)) {
      return 'meta.' + page + '.' + suffix;
    }
    return 'meta.' + suffix;
  }

  function apply(lang) {
    var current = normalize(lang);
    var page = root.getAttribute('data-page');

    root.lang = current === 'pt' ? 'pt-BR' : 'en';
    root.setAttribute('data-lang', current);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = translate(current, key);
      if (value && value !== key) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        var attr = (parts[0] || '').trim();
        var key = (parts[1] || '').trim();
        if (!attr || !key) return;
        var value = translate(current, key);
        if (value) el.setAttribute(attr, value);
      });
    });

    document.title = translate(current, metaKey(page, 'title'));
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', translate(current, metaKey(page, 'description')));

    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      var visible = current === 'pt' ? 'EN' : 'PT';
      toggle.textContent = visible;
      toggle.setAttribute('aria-label', translate(current, 'lang.label') + ' (' + visible + ')');
      toggle.setAttribute('aria-pressed', current === 'en' ? 'true' : 'false');
      toggle.setAttribute('lang', current === 'pt' ? 'en' : 'pt-BR');
    }

    try {
      localStorage.setItem(STORAGE_KEY, current);
    } catch (e) { /* modo privado */ }

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: current } }));
  }

  var fromUrl = new URLSearchParams(window.location.search).get('lang');
  var stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) { /* modo privado */ }

  apply(normalize(fromUrl || stored || 'pt'));

  if (fromUrl) {
    var url = new URL(window.location.href);
    url.searchParams.delete('lang');
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
  }

  var toggleButton = document.querySelector('[data-lang-toggle]');
  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      var next = root.getAttribute('data-lang') === 'en' ? 'pt' : 'en';
      apply(next);
    });
  }

  window.SiteI18n = { apply: apply, translate: translate, normalize: normalize };
})();
