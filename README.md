# Alan José Brusque — portfólio pessoal

Site pessoal estático de **Alan José Brusque**, mecânico automotivo e graduando em
Ciência da Computação na ATITUS. Feito à mão em HTML, CSS e JavaScript, sem build,
sem frameworks e sem dependências externas.

**No ar:** [alan-xyz007.github.io](https://alan-xyz007.github.io/)

## O que tem aqui

- **Home** — apresentação, seção Sobre e contato (e-mail, WhatsApp, GitHub, LinkedIn).
- **Projetos** (`projetos.html`) — oficina aberta: as primeiras vagas estão reservadas
  enquanto os projetos reais são construídos. Abas *Em andamento* / *Concluídos*.
- **Dois temas** — claro e escuro, seguindo o sistema por padrão e com escolha salva.
- **Bilíngue** — pt-BR (padrão) e inglês, com troca instantânea e preferência salva.
- **Acessível** — contraste AA, navegação por teclado, foco visível e
  `prefers-reduced-motion`.
- **Leve** — nenhuma requisição externa, nenhuma fonte baixada, nenhum build.

## Estrutura

```
index.html              home: hero, sobre e contato
projetos.html           projetos em construção
robots.txt              regras para buscadores
sitemap.xml             mapa do site
assets/
  css/styles.css        tokens, temas, layout e componentes
  js/i18n.js            dicionário pt/en + aplicação do idioma
  js/main.js            tema, menu mobile, abas e ano do rodapé
  img/favicon.svg       ícone do site
  img/og.png            imagem de compartilhamento (1200×630)
SPECS.md                escopo, sistema visual e decisões
AGENTS.md               regras de trabalho e direção criativa
TODO.md                 plano de execução e testes
```

> `assets/`, `index.html`, `projetos.html` e os arquivos de SEO ficam na raiz porque o
> repositório é um **GitHub Pages de usuário** (`alan-xyz007.github.io`).

## Rodar localmente

Não precisa instalar nada. Duas opções:

1. Abrir `index.html` com duplo clique (funciona offline);
2. Servir a pasta, se quiser testar como no Pages:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Idioma e tema

- Idioma: português por padrão. O botão `EN` alterna para inglês e salva em
  `localStorage("lang")`. A URL aceita `?lang=en` (o parâmetro é removido depois de aplicar).
- Tema: segue `prefers-color-scheme` até você escolher manualmente; a escolha fica em
  `localStorage("theme")` e é aplicada antes da primeira pintura, sem flash.
- Sem JavaScript o site continua completo em português.

## Como o site é publicado

GitHub Pages, branch `main`, pasta raiz. Qualquer push em `main` gera um novo deploy.

## Contato

- E-mail: [alanjosebrusque@gmail.com](mailto:alanjosebrusque@gmail.com)
- WhatsApp: [(54) 99235-1146](https://wa.me/5554992351146)
- GitHub: [@alan-xyz007](https://github.com/alan-xyz007)
- LinkedIn: [alanj-brusque777707777](https://www.linkedin.com/in/alanj-brusque777707777/)

---

Conteúdo e código autorais. Os textos em inglês são revisados, não tradução automática.
