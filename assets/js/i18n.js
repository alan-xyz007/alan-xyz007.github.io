/* ==========================================================================
   i18n — pt-BR (primário) + en
   Regra: cada chave aparece exatamente 2 vezes (em `pt` e em `en`).
   ========================================================================== */
(function () {
  'use strict';

  var dict = {
    pt: {
      'meta.title': 'Alan José Brusque — Desenvolvedor Web & Ciência da Computação',
      'meta.description': 'Site pessoal e portfólio de aprendizado de Alan José Brusque. Graduando em Ciência da Computação (ATITUS) e desenvolvedor.',
      'meta.title.about': 'Sobre mim — Alan José Brusque',
      'meta.description.about': 'Trajetória profissional, formação acadêmica em Ciência da Computação na ATITUS e foco de estudos de Alan José Brusque.',
      'meta.title.projects': 'Projetos em Andamento — Alan José Brusque',
      'meta.description.projects': 'Laboratório de estudos e projetos em andamento em computação e desenvolvimento web por Alan José Brusque.',
      'a11y.skip': 'Pular para o conteúdo',
      'nav.label': 'Navegação principal',
      'nav.menu': 'Menu',
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',
      'lang.label': 'Mudar para inglês',
      'theme.toDark': 'Ativar tema escuro',
      'theme.toLight': 'Ativar tema claro',
      'hero.kicker': 'Ciência da Computação & Web',
      'hero.tagline': 'Graduando em Ciência da Computação pela ATITUS e desenvolvedor. Raciocínio analítico, resolução prática de problemas e foco em fundamentos de software.',
      'hero.cta.projects': 'Ver projetos',
      'hero.cta.contact': 'Falar comigo',
      'hero.note': 'Portfólio',
      'home.about.title': 'Sobre mim',
      'home.about.p1': 'Graduando em Ciência da Computação pela ATITUS e com capacitação em Empreendedorismo pelo SENAI. Trago mais de 3 anos de experiência prática no setor automotivo (MR Auto Serviços), onde consolidei disciplina, organização e rapidez no diagnóstico de problemas sob pressão.',
      'home.about.p2': 'Hoje, uno essa vivência prática e metódica ao estudo da engenharia de software e desenvolvimento web, construindo uma base técnica sólida com código limpo e padrões abertos.',
      'home.about.more': 'Ver biografia e trajetória completa →',
      'home.projects.title': 'Projetos em andamento',
      'home.projects.subtitle': 'Como estou no início da minha jornada em tecnologia, meus projetos atuais funcionam como laboratório prático de estudos e evolução contínua.',
      'home.projects.more': 'Ver todos os projetos e laboratórios →',
      'about.hero.kicker': 'Trajetória & Formação',
      'about.hero.title': 'Sobre mim',
      'about.hero.subtitle': 'Unindo a vivência analítica e a resolução prática de problemas da mecânica automotiva com os fundamentos da Ciência da Computação.',
      'about.title': 'Minha trajetória',
      'about.p1': 'Sou graduando em Ciência da Computação pela ATITUS e possuo capacitação em Empreendedorismo pelo SENAI. Ao longo da minha carreira, atuei por mais de 3 anos no setor automotivo na MR Auto Serviços, com foco em manutenção preventiva e corretiva, diagnósticos avançados e reparos em suspensão, freios e embreagem.',
      'about.p2': 'Essa vivência profissional me ensinou na prática o valor da atenção aos detalhes, da organização no ambiente de trabalho e da agilidade em diagnosticar e solucionar falhas complexas com responsabilidade e precisão.',
      'about.p3': 'Na computação, aplico esse mesmo rigor investigativo e determinação. Tenho facilidade de aprendizado, espírito de equipe e dedicação constante a dominar algoritmos, estruturas de dados e arquitetura de software.',
      'about.history.title': 'Experiência & Formação',
      'about.exp.title': 'Experiência Profissional',
      'about.exp.role1': 'Mecânica Automotiva & Diagnóstico · MR Auto Serviços',
      'about.exp.desc1': 'Mais de 3 anos atuando com manutenção preventiva e corretiva, diagnósticos técnicos de sistemas veiculares (suspensão, freios, troca de embreagem e de óleo), com foco em qualidade, organização e atendimento eficiente.',
      'about.edu.title': 'Formação Acadêmica & Cursos',
      'about.edu.role1': 'Bacharelado em Ciência da Computação · ATITUS Educação',
      'about.edu.desc1': 'Graduação em andamento. Foco em algoritmos, lógica de programação, arquitetura de sistemas e engenharia de software.',
      'about.edu.role2': 'Capacitação em Empreendedorismo · SENAI',
      'about.edu.desc2': 'Fundamentos de gestão, processos, visão estratégica e solução ágil de problemas em equipe.',
      'about.studying.label': 'Estudando agora',
      'about.studying.items': 'Ciência da Computação · Lógica & Algoritmos · HTML5 & CSS3 · JavaScript (ES2020+) · Git & GitHub',
      'projects.hero.kicker': 'Laboratório de Aprendizado',
      'projects.hero.title': 'Projetos em andamento',
      'projects.hero.subtitle': 'Estou no início da minha formação em computação. Cada projeto abaixo representa uma etapa prática de aprendizado, experimentação e consolidação de código.',
      'projects.title': 'Projetos',
      'projects.status.badge': 'Em andamento',
      'projects.learned': 'Aprendi',
      'projects.p1.title': 'Portfólio Pessoal & Web Standards',
      'projects.p1.summary': 'Construção deste site pessoal e portfólio bilíngue do zero. Foco em HTML semântico, arquitetura de CSS modular com tokens para modo claro/escuro, zero dependências externas e alta performance.',
      'projects.p1.learned': 'Estruturação semântica, responsividade mobile-first, acessibilidade (WCAG 2.1 AA) e versionamento com Git.',
      'projects.p1.stack': 'HTML5 · CSS3 (Tokens) · JavaScript Vanilla · Git & GitHub Pages',
      'projects.p2.title': 'Algoritmos & Estruturas de Dados (Laboratório)',
      'projects.p2.summary': 'Coleção de exercícios práticos e problemas de lógica computacional desenvolvidos durante a graduação na ATITUS, explorando complexidade, recursão e tipos abstratos.',
      'projects.p2.learned': 'Raciocínio lógico estruturado, modularização, rastreamento de execução e depuração de código.',
      'projects.p2.stack': 'Ciência da Computação · Lógica de Programação · Resolução de Problemas',
      'projects.p3.title': 'Laboratório Front-end & JavaScript Vanilla',
      'projects.p3.summary': 'Estudos práticos sobre a Web API nativa, manipulando o DOM, eventos do navegador e persistência com LocalStorage sem o uso de bibliotecas externas.',
      'projects.p3.learned': 'Manipulação nativa de DOM, ciclo de eventos assíncronos, persistência de preferências de usuário e boas práticas de código limpo.',
      'projects.p3.stack': 'JavaScript ES2020+ · DOM API · Web APIs',
      'projects.view.code': 'Ver no GitHub',
      'projects.view.progress': 'Em andamento no GitHub',
      'contact.title': 'Contato',
      'contact.lead': 'Aberto a conversas sobre oportunidades, desafios em tecnologia, estudos e desenvolvimento de software.',
      'contact.note': 'Entre em contato pelo GitHub ou canais profissionais:',
      'footer.note': 'Feito com HTML, CSS e JS · Zero dependências',
      'footer.top': 'Topo'
    },
    en: {
      'meta.title': 'Alan José Brusque — Web Developer & Computer Science',
      'meta.description': 'Personal site and learning portfolio of Alan José Brusque. Computer Science undergraduate at ATITUS and developer.',
      'meta.title.about': 'About me — Alan José Brusque',
      'meta.description.about': 'Professional journey, academic education in Computer Science at ATITUS, and study focus of Alan José Brusque.',
      'meta.title.projects': 'Projects in Progress — Alan José Brusque',
      'meta.description.projects': 'Study lab and projects in progress in computing and web development by Alan José Brusque.',
      'a11y.skip': 'Skip to content',
      'nav.label': 'Main navigation',
      'nav.menu': 'Menu',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'lang.label': 'Change to Portuguese',
      'theme.toDark': 'Switch to dark theme',
      'theme.toLight': 'Switch to light theme',
      'hero.kicker': 'Computer Science & Web',
      'hero.tagline': 'Computer Science undergraduate at ATITUS and developer. Analytical reasoning, hands-on problem solving, and focus on software fundamentals.',
      'hero.cta.projects': 'View projects',
      'hero.cta.contact': 'Get in touch',
      'hero.note': 'Portfolio',
      'home.about.title': 'About me',
      'home.about.p1': 'Computer Science undergraduate at ATITUS with Entrepreneurship training from SENAI. Over 3 years of hands-on experience in the automotive industry (MR Auto Serviços), developing methodical discipline, organization, and fast troubleshooting under demanding conditions.',
      'home.about.p2': 'Today, I connect this practical, analytical problem-solving mindset with software engineering and web standards, building a solid foundation in clean code.',
      'home.about.more': 'View full biography and journey →',
      'home.projects.title': 'Projects in progress',
      'home.projects.subtitle': 'As I am in the early stages of my software journey, my current projects serve as a hands-on learning lab and continuous growth roadmap.',
      'home.projects.more': 'View all projects and labs →',
      'about.hero.kicker': 'Journey & Background',
      'about.hero.title': 'About me',
      'about.hero.subtitle': 'Connecting analytical troubleshooting from automotive engineering with core foundations of Computer Science.',
      'about.title': 'My journey',
      'about.p1': 'I am a Computer Science undergraduate at ATITUS with Entrepreneurship training from SENAI. Throughout my career, I worked for over 3 years in the automotive sector at MR Auto Serviços, focusing on preventive/corrective maintenance, advanced diagnostics, and mechanical repairs in suspension, brakes, and clutch systems.',
      'about.p2': 'This professional experience instilled a strong commitment to quality, meticulous workplace organization, and the ability to diagnose and solve complex problems under pressure.',
      'about.p3': 'In computing, I apply the exact same investigative discipline and work ethic. I am a fast learner, a dedicated team player, and focused on mastering algorithms, data structures, and software architecture.',
      'about.history.title': 'Experience & Education',
      'about.exp.title': 'Professional Experience',
      'about.exp.role1': 'Automotive Mechanics & Diagnostics · MR Auto Serviços',
      'about.exp.desc1': 'Over 3 years executing preventive and corrective maintenance, technical diagnostics on vehicular systems (suspension, brakes, clutch replacement, and oil service), with emphasis on precision and quality service.',
      'about.edu.title': 'Education & Certifications',
      'about.edu.role1': 'B.S. in Computer Science · ATITUS Educação',
      'about.edu.desc1': 'Degree in progress. Focus on algorithms, computational logic, systems architecture, and software engineering.',
      'about.edu.role2': 'Entrepreneurship Training · SENAI',
      'about.edu.desc2': 'Foundations in business management, processes, strategic thinking, and collaborative problem solving.',
      'about.studying.label': 'Currently learning',
      'about.studying.items': 'Computer Science · Logic & Algorithms · HTML5 & CSS3 · JavaScript (ES2020+) · Git & GitHub',
      'projects.hero.kicker': 'Learning Laboratory',
      'projects.hero.title': 'Projects in progress',
      'projects.hero.subtitle': 'I am at the beginning of my computing journey. Each project below represents a practical milestone of study, experimentation, and code consolidation.',
      'projects.title': 'Projects',
      'projects.status.badge': 'In progress',
      'projects.learned': 'Learned',
      'projects.p1.title': 'Personal Portfolio & Web Standards',
      'projects.p1.summary': 'Crafting this bilingual personal site and portfolio from scratch. Focus on semantic HTML, modular token-based CSS architecture for light/dark modes, zero external dependencies, and peak performance.',
      'projects.p1.learned': 'Semantic structuring, mobile-first responsiveness, accessibility compliance (WCAG 2.1 AA), and Git version control.',
      'projects.p1.stack': 'HTML5 · CSS3 (Tokens) · Vanilla JavaScript · Git & GitHub Pages',
      'projects.p2.title': 'Algorithms & Data Structures (Lab)',
      'projects.p2.summary': 'Practical programming exercises and computational logic challenges developed during the Computer Science degree at ATITUS, exploring complexity, recursion, and abstract data types.',
      'projects.p2.learned': 'Structured computational logic, modularization, execution tracing, and code debugging.',
      'projects.p2.stack': 'Computer Science · Programming Logic · Problem Solving',
      'projects.p3.title': 'Front-end & Vanilla JavaScript Lab',
      'projects.p3.summary': 'Hands-on exploration of native Web APIs, manipulating the DOM, browser events, and LocalStorage persistence without external libraries.',
      'projects.p3.learned': 'Native DOM manipulation, asynchronous event lifecycle, user preference persistence, and clean code principles.',
      'projects.p3.stack': 'JavaScript ES2020+ · DOM API · Web APIs',
      'projects.view.code': 'View on GitHub',
      'projects.view.progress': 'In progress on GitHub',
      'contact.title': 'Contact',
      'contact.lead': 'Open to discussions about opportunities, technology challenges, learning, and software development.',
      'contact.note': 'Reach out via GitHub or professional channels:',
      'footer.note': 'Built with HTML, CSS and JS · Zero dependencies',
      'footer.top': 'Top'
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

  function apply(lang) {
    var current = normalize(lang);

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

    /* Se a página tiver meta-title customizado via data-page-title, usa ele */
    var pageTitleKey = document.querySelector('meta[name="i18n-title-key"]');
    var activeTitleKey = pageTitleKey ? pageTitleKey.getAttribute('content') : 'meta.title';
    document.title = translate(current, activeTitleKey);

    var pageDescKey = document.querySelector('meta[name="i18n-desc-key"]');
    var activeDescKey = pageDescKey ? pageDescKey.getAttribute('content') : 'meta.description';
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', translate(current, activeDescKey));

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
