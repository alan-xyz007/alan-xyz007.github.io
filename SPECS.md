# SPECS.md — Site pessoal de Alan José Brusque

> Status: **PLANEJAMENTO** — nada implementado.
> Entrevista concluída em 23/10/2026. Documento de conduta: [`AGENTS.md`](./AGENTS.md).
> `SPEC.md` (quiz) é outro projeto nesta pasta: ignorar.

## 1. Visão geral

Site pessoal estático, **one-page**, em **pt-BR + EN**, com estética **criativa e colorida** (paleta quente-clara + 4 acentos com papéis definidos). Apresenta Alan José Brusque: **mais de três anos em mecânica automotiva** (MR Auto Serviços) e **graduando em Ciência da Computação na ATITUS** — a prática técnica somada à base analítica.

- Sem backend, sem login, sem build, sem dependências.
- Funciona offline (duplo clique) e online em `https://alan-xyz007.github.io`.
- Conteúdo base disponível: **currículo e LinkedIn** (o resto entra como `TODO:`).

## 2. Objetivo e métricas

| Objetivo | Métrica |
|---|---|
| Registrar e demonstrar a evolução nos estudos | Projetos com contexto + "o que aprendi" em cada um |
| Ser referência rápida para quem quer conhecer o Alan | Hero responde "quem", "o que faz", "o que estuda" em < 10 s |
| Facilitar contato | GitHub, LinkedIn, e-mail e WhatsApp em ≤ 2 cliques |
| Dar credibilidade técnica pelo próprio site | Lighthouse ≥ 95, HTML semântico, zero dependências |
| Praticar front-end de verdade | Código autoral, acessível e bilíngue |

> Foco em **aprendizado**, não em landing de vendas: sem CTA agressivo, sem "contrate-me".

## 3. Público

1. **Pares e comunidade dev** — chegam pelo GitHub/LinkedIn.
2. **Recrutadores e tech leads** — consulta ocasional; precisam entender área e nível rápido.
3. **O próprio Alan** — histórico organizado do que estudou e construiu.

## 4. Escopo — seções e conteúdo

One-page com âncoras: **Quem eu sou → Sobre mim → Projetos → Contato**.

**4.1 Header**
- Marca: `Alan José Brusque` (ou `AJB` em telas muito pequenas).
- Navegação: Sobre · Projetos · Contato.
- Controles à direita: **PT/EN** (toggle de idioma) e **tema** (claro/escuro).
- Mobile: menu acessível (`aria-expanded`, fecha com `Esc`).

**4.2 Hero — "Quem eu sou"**
- `h1` com o nome; acima, linha de identificação: "Mecânica automotiva · Ciência da Computação".
- Tagline factual: mais de três anos de experiência automotiva + graduação em andamento na ATITUS, unindo prática e raciocínio analítico.
- Uma palavra do nome em **serifada itálica com gradiente da marca** (única licença tipográfica e único uso de gradiente em texto).
- Fundo com "aurora" (3 radial gradients suaves: índigo, laranja, esmeralda).
- Sem foto. Numeral "01" em gradiente como marca d'água.
- CTAs: "Ver projetos" (gradiente) e "Falar comigo" (ghost).

**4.3 Sobre mim**
- 2 parágrafos com o texto real (fonte: LinkedIn/currículo):
  1. Perfil dedicado e responsável, +3 anos no setor automotivo, atuação na MR Auto Serviços com manutenção preventiva/corretiva, suspensão, embreagem, óleo e freios.
  2. Graduação em Ciência da Computação (ATITUS) + Empreendedorismo (SENAI); resolução prática de problemas, aprendizado rápido, trabalho em equipe e evolução contínua.
- Linha "Estudando agora" em pílula esmeralda: Ciência da Computação (ATITUS) · Empreendedorismo (SENAI) · Manutenção automotiva · Desenvolvimento web.
- `TODO:` confirmar a divergência de tempo de experiência ("3 anos" × "2 anos") nos textos de origem.

**4.4 Projetos**
- 1 destaque (linha própria, composição assimétrica) + 3 a 5 secundários em lista/grid.
- Cada projeto: número (01, 02…), título, resumo de 1–2 linhas, **"o que aprendi"** (1 linha), stack em texto simples, links "Ver" / "Código" quando existirem.
- Sem carrossel; sem imagem obrigatória — se não houver screenshot, usar capa tipográfica gerada em CSS.
- `TODO:` inventário real (nome, resumo, stack, aprendizado, links, imagem).

**4.5 Contato**
- Frase curta + e-mail em destaque com `mailto:` e assunto pré-preenchido.
- Links: **GitHub** (`https://github.com/alan-xyz007`), **LinkedIn** (`https://www.linkedin.com/in/alanj-brusque777707777/`), **E-mail** (`TODO:`), **WhatsApp** (`TODO:`).
- WhatsApp: link `https://wa.me/<numero>` — **só publicar o número com autorização explícita** (`TODO:`).
- Sem formulário com backend.

**4.6 Footer**
- Nome, ano dinâmico, "Feito com HTML, CSS e JS", link para o topo, seletor de idioma repetido (opcional).

## 5. Fora de escopo (v1)

- Blog/artigos, CMS, painel, login.
- Seções de Experiência, Skills, Depoimentos (não solicitadas).
- Formulário com envio real; analytics/cookies; chat.
- Domínio próprio (fica para depois).
- Integração dinâmica com a API do GitHub.

## 6. Estrutura de arquivos (prevista)

```
alan-xyz007.github.io/
├─ index.html                 # página única (pt-BR no HTML)
├─ assets/
│  ├─ css/styles.css          # reset, tokens, base, layout, componentes
│  ├─ js/theme.js             # tema (inline no head p/ evitar flash)
│  ├─ js/i18n.js              # dicionário pt/en + aplicação
│  ├─ js/main.js              # menu, reveal, ano
│  └─ img/ (favicon.svg, og-image.png, capas opcionais)
├─ robots.txt
├─ sitemap.xml
├─ AGENTS.md
├─ SPECS.md
└─ SPEC.md                    # quiz (não relacionado — manter)
```

## 7. Stack e restrições

- **HTML5 + CSS3 + JS ES2020 vanilla.** Zero dependências, zero build, zero CDN.
- Browsers: últimas 2 versões de Chrome, Edge, Firefox, Safari + iOS Safari.
- Branch `main`, deploy pelo GitHub Pages (root).
- Sem `package.json`, sem etapa de compilação.

## 8. Design system

**8.1 Tema claro**

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#FCFBF8` | fundo quente-claro |
| `--color-surface` | `#F4F1EA` | blocos e cards |
| `--color-surface-2` | `#EAE5DA` | hover |
| `--color-text` | `#12121A` | texto |
| `--color-muted` | `#55525E` | secundário |
| `--color-border` | `#E2DDD2` | réguas 1px |
| `--color-accent` | `#4F46E5` | índigo: links, foco, seção Sobre |
| `--color-accent-2` | `#EA580C` | laranja: numeração de Projetos |
| `--color-accent-3` | `#047857` | esmeralda: Contato / "Estudando agora" |
| `--color-accent-4` | `#DB2777` | rosa: só no gradiente |
| `--gradient-brand` | `#4F46E5 → #DB2777 → #EA580C` | palavra do hero, bolinha, numeral d'água, régua do rodapé |
| `--gradient-cta` | `#4338CA → #BE185D → #C2410C` | botão primário (contraste ≥ 5:1 com texto branco) |

**8.2 Tema escuro**

| Token | Valor |
|---|---|
| `--color-bg` | `#0B0B12` |
| `--color-surface` | `#15151F` |
| `--color-surface-2` | `#1E1E2B` |
| `--color-text` | `#F7F5F0` |
| `--color-muted` | `#B0ADBA` |
| `--color-border` | `#2A2A38` |
| `--color-accent` | `#818CF8` |
| `--color-accent-2` | `#FB923C` |
| `--color-accent-3` | `#34D399` |
| `--color-accent-4` | `#F472B6` |
| `--gradient-brand` | `#A5B4FC → #F9A8D4 → #FDBA74` |
| `--gradient-cta` | `#C7D2FE → #FBCFE8 → #FED7AA` (texto escuro) |

**8.3 Tipografia**
- Sans: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- Display (opcional, só no hero): `Georgia, "Times New Roman", serif`, itálico.
- Escala: 14 / 16 / 18 / 24 / 32 / 40 / 56 / 72 / 88 px via `clamp()` nos títulos.
- Corpo: 17px, `line-height` 1.6, `max-width` 66ch. Títulos `line-height` 1.05–1.15, `letter-spacing` -0.02em.

**8.4 Layout**
- Container 1120px; grid 12 col; gutter 24px; padding lateral 20px / 40px.
- Assimetria permitida: 7/5, 5/7, 8/4. Réguas horizontais de 1px separam seções.
- Espaçamento vertical de seção: 96px (mobile) / 160px (desktop).

**8.5 Componentes**
- `link` (sublinhado com `text-underline-offset`), `button` (sólido grafite), `button--ghost` (borda 1px), `tag` (texto com borda), `project` (linha numerada), `toggle` (tema/idioma).

## 9. Tema (claro/escuro)

- Padrão: **segue o sistema** (`prefers-color-scheme`).
- Toggle manual grava `localStorage("theme")` = `light` | `dark` e sobrepõe o sistema.
- Aplicar antes da pintura (script inline no `<head>`), evitando flash.
- Botão com `aria-pressed` e label que muda ("Ativar tema escuro" / "Ativar tema claro").

## 10. Bilíngue (pt-BR + EN)

- Implementação: **página única + toggle**, textos via `data-i18n`.
- Dicionário em `assets/js/i18n.js`; troca atualiza `<html lang>`, `<title>`, `meta description` e `aria-label`s.
- Preferência em `localStorage("lang")`; default **pt-BR**.
- Sem JS: conteúdo pt-BR permanece completo.
- Trade-off aceito: o inglês não é indexado separadamente (sem URLs `/en/`). Se SEO em inglês virar prioridade, migrar para duas páginas com `hreflang` (registrar decisão futura).

## 11. Responsividade

| Faixa | Comportamento |
|---|---|
| 360–639 | 1 coluna, títulos `clamp` no mínimo, menu em botão, réguas mantidas |
| 640–1023 | 2 colunas nos projetos, nav horizontal compacta |
| ≥ 1024 | container 1120px, hero assimétrico, projeto destaque em 7/5 |

Sem scroll horizontal; alvos de toque ≥ 44px.

## 12. Movimento

- Transições ≤ 180ms `ease-out` (cor, borda, opacidade).
- Reveal ao rolar: `opacity` 0→1 + `translateY(12px)`, `IntersectionObserver`, uma vez por elemento.
- `prefers-reduced-motion: reduce` → tudo estático.
- Hover de projeto: régua do acento cresce / título desloca 2px. Nada além disso.

## 13. Acessibilidade

- WCAG 2.1 AA nos dois temas (contraste, foco, teclado, landmarks, `lang`).
- Skip link; menu mobile com foco contido e `Esc`.
- Toggle de idioma e de tema anunciados corretamente (não usar só "EN"/"PT" sem contexto acessível).
- Links externos com indicação acessível (não apenas ícone).

## 14. SEO

- `<title>Alan José Brusque — Desenvolvedor Web</title>` (pt) / versão EN equivalente.
- Description 150–160 caracteres.
- Open Graph + Twitter Card; `og-image.png` 1200×630.
- JSON-LD `Person` (nome, `sameAs`: GitHub, LinkedIn) + `WebSite`.
- `robots.txt` + `sitemap.xml` com URL única.
- Favicon SVG.

## 15. Performance

| Métrica | Meta |
|---|---|
| Peso da home | < 250 KB |
| LCP (4G) | < 2.5 s |
| CLS | < 0.1 |
| Lighthouse | ≥ 95 nas 4 categorias |
| Requests externos | 0 |

## 16. Conteúdo — inventário

| Item | Status |
|---|---|
| Nome | ✅ Alan José Brusque |
| Frase de posicionamento (pt + en) | ✅ mecânica automotiva + Ciência da Computação |
| Bio / Sobre (pt + en) | ✅ derivada do LinkedIn (23/10) |
| "Estudando agora" | ✅ ATITUS · SENAI · manutenção · desenvolvimento web |
| Projetos (3–6: título, resumo, aprendizado, stack, links, imagem) | `TODO:` |
| GitHub | ✅ `alan-xyz007` |
| LinkedIn | ✅ `alanj-brusque777707777` |
| E-mail | `TODO:` |
| WhatsApp | `TODO:` número (publicar só com autorização) |
| Currículo em PDF (opcional) | `TODO:` |

Regra: nada inventado. Sem dado real → `TODO:` e pedir ao Alan.

## 17. Publicação

- Repositório: `alan-xyz007.github.io`.
- **Pendência:** está **privado**; o Pages gratuito exige repositório **público**.
- Fonte: `main` / root. URL: `https://alan-xyz007.github.io`. HTTPS automático.
- Deploy só com autorização explícita.

## 18. Critérios de aceite

- [ ] Seções na ordem: Quem eu sou → Sobre → Projetos → Contato.
- [ ] Toggle pt-BR/EN funciona em 100% dos textos e atributos.
- [ ] Tema claro/escuro sem flash e seguindo o sistema por padrão.
- [ ] Sem rolagem horizontal em 360px.
- [ ] Contraste AA nos dois temas; foco visível em tudo.
- [ ] Funciona offline e no Pages.
- [ ] Lighthouse ≥ 95 nas 4 categorias, zero requests externos.
- [ ] Nenhum `TODO:` na entrega final.
- [ ] Metadados + JSON-LD válidos.
- [ ] Textos revisados em pt-BR e inglês.

## 19. Roadmap

| Fase | Entrega | Regra |
|---|---|---|
| **P0 — Fundação** | Estrutura HTML + tokens (2 temas) + header/hero/footer + grid | Aprovar direção visual antes de seguir |
| **P1 — Conteúdo** | Sobre, Projetos, Contato com dados reais (pt + en) | Depende da seção 16 |
| **P2 — Polimento** | i18n completo, tema, reveal, responsivo, acessibilidade, SEO | Checklist de aceite |
| **P3 — Publicação** | Repo público + Pages ativo + teste em produção | Só com autorização |

## 20. Decisões registradas

| Data | Decisão | Motivo |
|---|---|---|
| 23/10/2026 | One-page estática, sem build | Simples, rápida, GitHub Pages nativo |
| 23/10/2026 | Foco em **aprendizado** (não em vaga) | Escolha do entrevistado |
| 23/10/2026 | Seções: Quem eu sou, Sobre, Projetos, Contato | Pedido do entrevistado |
| 23/10/2026 | Paleta monocromática + grafite, direção criativa | "Criativo, cinzas e brancas" |
| 23/10/2026 | Sem foto no hero | Preferência do entrevistado |
| 23/10/2026 | Mini páginas dedicadas (`sobre.html` e `projetos.html`) | Pedido explícito do Alan para aprofundar trajetória e status dos projetos |
| 23/10/2026 | Projetos definidos como "Em andamento" | Início da jornada prática em computação, com honestidade técnica |
| 23/10/2026 | Bilíngue por toggle (página única) | Simplicidade; SEO EN aceito como trade-off |
| 23/10/2026 | Tema claro/escuro com opção "seguir sistema" | Pedido do entrevistado |
| 23/10/2026 | Paleta colorida com 4 acentos + gradiente da marca | Pedido do Alan ("site mais colorido e criativo") |
| 23/10/2026 | Sobre preenchido com a bio real do LinkedIn | Conteúdo fornecido pelo Alan |
| 23/10/2026 | Posicionamento: mecânica automotiva + Ciência da Computação | Trajetória real informada |
| 23/10/2026 | Sem domínio próprio na v1 | Escopo definido |
| 23/10/2026 | Direção visual "oficina": papel kraft, tinta, carimbo, sombra dura | Pedido do Alan: "colorido, criativo, rústico, personalidade forte" |
| 23/10/2026 | Projetos em página própria (`projetos.html`) com estado "em construção" | Sem projetos reais ainda; evitar cards fictícios |
| 23/10/2026 | Abas "Em andamento / Concluídos" com indicador animado | Pedido de animação ao selecionar |
| 23/10/2026 | `sobre.html` aposentada; Sobre é seção da home | Evitar página órfã duplicada e i18n quebrado |
| 23/10/2026 | E-mail e WhatsApp reais no contato | Dados fornecidos pelo Alan |
| 23/10/2026 | Site publicado em `https://alan-xyz007.github.io` | Pedido do Alan |

## 21. Riscos e pendências

1. **`SPEC.md` do quiz no mesmo repo** é publicado como texto — mover para fora do repo quando o quiz for tratado.
2. **Histórico do git** contém `SPEC.md` e a versão antiga de `sobre.html` — irrelevante para o site, mas visível no GitHub.
3. **Projetos ainda vazios:** as 3 vagas são placeholders honestos; substituir quando houver projeto real.
4. **Divergência nos textos de origem:** "mais de 3 anos" × "há mais de dois anos" — site usa "mais de três anos"; confirmar.
5. **Inglês sem URL própria** limita SEO internacional (aceito na v1).
