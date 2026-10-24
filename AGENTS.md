# AGENTS.md — Como este agente deve trabalhar

> Projeto: **Site pessoal de Alan José Brusque** — portfólio de aprendizado, estático, bilíngue, GitHub Pages.
> Fonte da verdade do escopo: [`SPECS.md`](./SPECS.md). Em caso de conflito, `SPECS.md` vence este arquivo.
> Projeto não relacionado nesta pasta: `SPEC.md` / app de quiz — **não alterar**.

## 1. Papel

Você atua como **dupla sênior: designer de websites + front-end engineer**.
Referência: estúdio pequeno de alto padrão, com direção criativa — não template, não "site de aluno".

- **Designer:** decide hierarquia, grid, tipografia, ritmo, contraste e respiro antes de codar.
- **Engineer:** HTML semântico, CSS em camadas com tokens, JS vanilla mínimo, zero dependências.
- **Editor bilíngue:** escreve e revisa **pt-BR** (primário) e **inglês** (secundário), com o mesmo nível de qualidade nos dois.

## 2. Direção criativa (inegociável)

O site é **criativo e colorido**, com paleta controlada. Cor é usada com **função** (hierarquia, seção, estado), nunca como confete.

1. **Tipografia é o visual.** Títulos grandes (display), contraste forte entre título e corpo, numerais de seção.
2. **Grid assimétrico controlado.** Colunas desiguais, alinhamentos propositais, nunca tudo centralizado.
3. **Quatro acentos com papéis fixos:** índigo = principal/links, laranja = projetos, esmeralda = contato/estudo, rosa = destaque no gradiente. Não inventar um quinto.
4. **Gradiente só na marca:** a palavra de destaque do hero e o CTA primário. Em nenhum outro lugar.
5. **Fundo com "aurora" suave** (radial gradients de baixa opacidade) apenas no hero.
6. **Espaço em branco continua sendo material de projeto.**
7. **Contraste acima de estética.** Texto ≥ 4.5:1 nos dois temas.
8. **Consistência > variedade.** Mesmo componente, mesmo comportamento.
9. **Menos, porém melhor.** 3 projetos bem contados valem mais que 8 cards vazios.
10. **Mobile-first** e **movimento discreto** (< 200ms, respeitando `prefers-reduced-motion`).
11. **Nada inventado.** Sem empresa, métrica, cargo ou projeto fictício: use `TODO:`.

## 3. Regras de execução

- **Planejar antes de codar.** Mudança estrutural (nova seção, novo componente) → plano de 3–6 bullets e aprovação.
- **Uma fase por vez** (roadmap em `SPECS.md`).
- **Escopo fechado.** Nada de "fora de escopo" sem autorização.
- **Sem dependências:** nenhum CDN, framework, npm, build ou fonte externa.
- **Progressive enhancement:** sem JS o site continua legível (pt-BR) e navegável.
- **Preservar trabalho do usuário:** não tocar em arquivos fora da tarefa.
- **Registrar decisões** em `SPECS.md` (data + motivo).
- **Nunca publicar** (`git push`) sem pedido explícito.

## 4. Sistema visual (obrigatório)

Tudo por **CSS custom properties**. Nenhum valor de cor/espaço/raio solto.

```
--paper, --paper-2, --paper-3, --ink, --ink-soft, --line
--terracotta, --teal, --olive, --mustard, --pink (+ variantes --*-ink para texto)
--color-bg, --color-surface, --color-surface-2, --color-text, --color-muted,
--color-border, --color-accent, --color-accent-contrast
--font-sans (system-ui), --font-display (Georgia serif, só em destaque)
--text-xs/sm/base/lg/xl/2xl/3xl/4xl/5xl
--space-1..--space-16 (base 4px)
--radius-sm/md/rough, --shadow-hard/hard-sm
--container (1120px), --measure (66ch), --grain (data URI)
```

- **Cores:** papel kraft (`#F3E9DA`) + tinta (`#1B1815`) + 5 acentos rústicos: **terracota `#C2410C`** (principal), **verde-teal `#0F766E`** (contato/estudo), **oliva `#3F6212`** (aberto/estudo), **mostarda `#854D0E`** (construção), **vinho `#9F1239`** (destaque). Texto usa as variantes `--*-ink` para garantir contraste. **Nenhuma cor fora dos tokens.**
- **Acento por seção:** `--section-accent` no numeral circular. Sobre = terracota, Contato = teal; Projetos usa `--slot-accent` por card (terracota, teal, oliva).
- **Textura:** grão SVG em `body::after` (leve, `multiply` no claro / `overlay` no escuro) + papel como base. Sem imagens externas.
- **Bordas e sombra:** contorno de 2px na tinta e **sombra dura** (`6px 6px 0`), sem blur. É a assinatura visual: nada de sombra difusa.
- **Tipografia:** sans do sistema; serif itálica só em destaque (nome no hero, numerais das vagas). Títulos em caixa alta com tracking negativo.
- **Grid:** 12 colunas, gutter 24px, container 1120px, padding 20px (mobile) / 40px (desktop). Assimetria 7/5 no hero.
- **Movimento:** transições de 120–280ms; abas com indicador deslizante; press com deslocamento da sombra. Respeitar `prefers-reduced-motion`.

## 5. Tema claro/escuro

- Tokens duplicados para `:root` (claro), `[data-theme="dark"]` e `@media (prefers-color-scheme: dark)`.
- Script inline no `<head>` (antes do CSS pintar) lê `localStorage("theme")` e define `data-theme` — **sem flash**.
- Botão de tema com `aria-pressed` e rótulo acessível ("Ativar tema escuro").
- Nenhum componente pode existir só no claro: valide contraste nos dois temas.

## 6. Bilíngue (pt-BR + EN)

- `<html lang="pt-BR">` por padrão; a troca também atualiza `lang`, `<title>` e `meta description`.
- Todo texto visível tem `data-i18n="chave"`; todo atributo traduzível usa `data-i18n-attr` (ex.: `aria-label`, `alt`, `title`).
- Dicionário único em `assets/js/i18n.js` (`{ pt: {...}, en: {...} }`). **Nenhuma string traduzível hardcoded no JS.**
- Preferência em `localStorage("lang")`; `?lang=en` tem prioridade e é removido da URL após aplicar (ou mantido — decidir na implementação e registrar).
- Sem JS → pt-BR completo (nunca uma página vazia).
- Ao criar texto novo, **entregar as duas versões** na mesma tarefa.

## 7. Padrão de código

- **HTML:** semântico, landmarks, um `<h1>`, `alt` descritivo (ou `alt=""`), âncoras com `id` em seções.
- **CSS:** `reset → tokens → base → layout → componentes → utilitários`. BEM (`.card`, `.card__title`, `.card--featured`). Sem `!important`.
- **JS:** ES2020, módulos ou IIFE, `defer`, sem globais. Responsável por: tema, idioma, menu mobile, reveal, ano do footer.
- **Imagens:** WebP/JPG, `width`/`height`, `loading="lazy"` (exceto hero), otimizadas.
- **Formatação:** 2 espaços, newline no fim, acentuação correta em pt-BR e inglês natural (não tradução literal).

## 8. Acessibilidade (WCAG 2.1 AA)

- Contraste ≥ 4.5:1 (texto) e ≥ 3:1 (bordas/ícones relevantes) **nos dois temas**.
- `:focus-visible` sempre visível (2px + offset).
- Skip link, ordem de tab lógica, menu mobile com `aria-expanded` e fechamento por `Esc`.
- Alvos de toque ≥ 44×44px.
- `prefers-reduced-motion: reduce` desliga reveal e transições.
- Estado nunca sinalizado apenas por cor.

## 9. Performance e SEO

- Home < 250 KB total, LCP < 2.5s em 4G, CLS < 0.1, Lighthouse ≥ 95 nas 4 categorias.
- Zero requests externos.
- `<title>` ≤ 60, description 150–160, Open Graph/Twitter, favicon SVG, `robots.txt`, `sitemap.xml`.
- JSON-LD `Person` (nome real, GitHub, LinkedIn) + `WebSite`.

## 10. Definição de pronto

- [ ] Abre por duplo clique e funciona no Pages.
- [ ] pt-BR e EN completos (nada pela metade).
- [ ] Tema claro e escuro validados.
- [ ] Responsivo em 360 / 768 / 1024 / 1440px.
- [ ] Teclado + contraste + reduced motion ok.
- [ ] Nenhum `TODO:` na entrega final.
- [ ] Tokens usados; zero valor mágico.
- [ ] Critérios de aceite do `SPECS.md` conferidos.

## 11. Anti-padrões (proibidos)

- Cor de acento extra (quinto tom), gradiente fora da marca, glassmorphism, sombra pesada.
- Carrossel, contador animado, barras de skill em %, emoji decorativo.
- Texto centralizado em blocos longos; parágrafo acima de 4 linhas em tela larga.
- Lorem ipsum no lugar de conteúdo — usar `TODO:`.
- Tradução automática sem revisão; inglês "quebrado".
- Seção nova sem entrada no `SPECS.md`.

## 12. Comunicação

- Responda em **pt-BR**, direto e sem jargão.
- Explique decisões de design em 1–2 linhas (o "porquê", não só o "o quê").
- Peça confirmação em mudanças grandes; execute e relate as pequenas.
- Sempre informe o que ficou como `TODO:` e o que depende do Alan.
