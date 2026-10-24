# TODO.md — Plano de execução passo a passo

> **Para quem executa:** este arquivo é um roteiro fechado. Execute **de cima para baixo**, uma tarefa por vez, e só marque `[x]` quando a "Concluído quando" for verdadeira.
> Não pule tarefas, não reordene, não invente conteúdo, não publique sem autorização.
> Escopo e regras: [`SPECS.md`](./SPECS.md) e [`AGENTS.md`](./AGENTS.md).

## 0. Como usar

1. Leia a tarefa inteira antes de agir.
2. Faça exatamente o que está escrito. Se algo não bater com a realidade, **pare** e registre em "Log de execução".
3. Ao terminar cada tarefa, rode a verificação indicada e marque `[x]`.
4. Nunca escreva texto inventado: onde faltar dado real, mantenha `TODO:`.
5. Nunca altere `SPEC.md` (quiz) — é outro projeto.
6. Nunca rode `git push` antes da Fase 5.

**Legenda:** `[ ]` pendente · `[x]` feito · `[!]` bloqueado (depende do Alan) · `[-]` não se aplica

**Diretório de trabalho:** `C:\Users\1140257\Desktop\projeto open code`

---

## 1. Estado atual (não refazer)

- [x] Conta GitHub conectada: `alan-xyz007` (via `gh`).
- [x] Repositório `alan-xyz007.github.io` criado (**privado**), com 1 commit contendo `SPEC.md` (quiz).
- [x] `SPEC.md` (quiz) existe na raiz.
- [x] `AGENTS.md` e `SPECS.md` escritos.
- [x] Nenhum arquivo do site criado ainda.

Verificação rápida (rodar e conferir as 3 saídas):

```powershell
gh auth status
# esperado: "✓ Logged in to github.com account alan-xyz007"

gh repo view alan-xyz007/alan-xyz007.github.io --json visibility
# esperado: {"visibility":"PRIVATE"}

git log --oneline
# esperado: 1 commit ("Initial commit: ...")
```

---

## 2. Fase 0 — Decisões e bloqueios

### 0.1 Confirmar conteúdo com o Alan `[!]`

Perguntar (uma vez, de forma objetiva) e registrar as respostas:

1. Frase de posicionamento (pt + en).
2. Bio curta (pt + en) — se não houver, autorizar derivar do currículo/LinkedIn.
3. "Estudando agora": 3 a 6 itens.
4. Projetos (3 a 6): nome, resumo, o que aprendeu, stack, links.
5. URL do LinkedIn, e-mail e **número do WhatsApp** (confirmar se pode publicar).

**Concluído quando:** as respostas estiverem registradas no "Log de execução". Enquanto não houver resposta, seguir com `TODO:` — **não bloquear as fases 1 e 3**.

### 0.2 Decidir o destino do quiz `[!]`

`SPEC.md` está na raiz do repositório do site. Se o Pages for ativado, ele será servido como texto.

- Opção A (recomendada): perguntar ao Alan se pode remover do repo (`git rm SPEC.md`) — o conteúdo continua no histórico.
- Opção B: manter e aceitar a exposição.
- Opção C: mover para outro repositório antes da Fase 5.

**Concluído quando:** o Alan escolher A, B ou C, e a escolha estiver no log.
**Regra:** sem resposta, **não** apagar o arquivo e **não** publicar.

### 0.3 Repositório público

Só executar **após autorização explícita** do Alan:

```powershell
gh repo edit alan-xyz007/alan-xyz007.github.io --visibility public --accept-visibility-change-consequences
gh repo view alan-xyz007/alan-xyz007.github.io --json visibility
# esperado: {"visibility":"PUBLIC"}
```

**Concluído quando:** `visibility` = `PUBLIC` (ou o Alan decidir publicar depois — registrar no log).

### 0.4 Criar a estrutura de pastas

```powershell
New-Item -ItemType Directory -Force assets/css, assets/js, assets/img | Out-Null
```

**Concluído quando:** `assets/css`, `assets/js` e `assets/img` existem.

---

## 3. Fase 1 — P0: fundação visual

> Objetivo: página navegável com header, hero e footer, nos dois temas, sem conteúdo final.
> **Pare ao fim da Fase 1 e peça aprovação da direção visual antes da Fase 2.**

### 1.1 `index.html` — esqueleto semântico

Criar com esta estrutura (nesta ordem):

```
<!doctype html>
<html lang="pt-BR" data-theme="light">
<head>
  meta charset, viewport
  <title>Alan José Brusque — Desenvolvedor Web</title>
  meta description (placeholder aceitável até a Fase 3)
  <link rel="icon" href="assets/img/favicon.svg">        (criar na 1.2)
  <link rel="stylesheet" href="assets/css/styles.css">
  <script>  // inline: aplica tema salvo ANTES da pintura
    try { const t = localStorage.getItem('theme');
          if (t) document.documentElement.dataset.theme = t;
          else document.documentElement.dataset.theme =
            matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch (e) {}
  </script>
</head>
<body>
  <a class="skip-link" href="#main">Pular para o conteúdo</a>
  <header class="site-header"> … (1.3) </header>
  <main id="main">
    <section id="hero" class="hero"> … (1.4) </section>
    <section id="sobre" class="section"> TODO </section>
    <section id="projetos" class="section"> TODO </section>
    <section id="contato" class="section"> TODO </section>
  </main>
  <footer class="site-footer"> … (1.5) </footer>
  <script src="assets/js/main.js" defer></script>
</body>
</html>
```

Regras:
- Um único `<h1>` (no hero).
- Toda seção com `aria-labelledby` apontando para o próprio título.
- Não usar `<div>` onde cabe elemento semântico.
- Textos em pt-BR com acentuação correta.

**Concluído quando:** o arquivo abre no navegador sem erro no console e mostra os blocos vazios na ordem hero → sobre → projetos → contato.

### 1.2 `assets/img/favicon.svg`

SVG 32×32 com monograma `AJB` (texto preto em fundo branco, ou o inverso). Sem imagem externa.

**Concluído quando:** a aba do navegador mostra o ícone (sem 404 no console).

### 1.3 `assets/css/styles.css` — camada de tokens + base

Ordem obrigatória das seções no arquivo, com comentário de cabeçalho em cada uma:

```
/* 1. reset */
/* 2. tokens */
/* 3. base */
/* 4. layout */
/* 5. componentes */
/* 6. utilitários */
```

Tokens (copiar exatamente):

```css
:root {
  --color-bg:#FFFFFF; --color-surface:#F5F5F5; --color-surface-2:#EBEBEB;
  --color-text:#0A0A0A; --color-muted:#525252; --color-border:#E0E0E0;
  --color-accent:#171717; --color-accent-contrast:#FFFFFF;
  --font-sans: system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --font-display: Georgia,"Times New Roman",serif;
  --text-xs:.875rem; --text-sm:1rem; --text-base:1.0625rem; --text-lg:1.25rem;
  --text-xl:1.5rem; --text-2xl:2rem; --text-3xl:2.5rem; --text-4xl:3.5rem; --text-5xl:5.5rem;
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:24px;
  --space-6:32px; --space-8:48px; --space-10:64px; --space-12:96px; --space-16:160px;
  --radius-sm:4px; --radius-md:8px; --radius-lg:16px;
  --shadow-sm:0 1px 2px rgba(0,0,0,.06); --shadow-md:0 8px 24px rgba(0,0,0,.08);
  --container:1120px; --measure:66ch;
}
[data-theme="dark"] {
  --color-bg:#0A0A0A; --color-surface:#141414; --color-surface-2:#1F1F1F;
  --color-text:#FAFAFA; --color-muted:#A3A3A3; --color-border:#262626;
  --color-accent:#F5F5F5; --color-accent-contrast:#0A0A0A;
  --shadow-sm:0 1px 2px rgba(0,0,0,.6); --shadow-md:0 8px 24px rgba(0,0,0,.5);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* mesmos valores do bloco acima */ }
}
```

Base:
- `box-sizing:border-box` global; `margin:0` no reset.
- `body`: fundo `--color-bg`, cor `--color-text`, fonte `--font-sans`, `font-size:var(--text-base)`, `line-height:1.6`.
- `h1..h3`: `line-height:1.1`, `letter-spacing:-.02em`, `text-wrap:balance`.
- `p`: `max-width:var(--measure)`.
- `a`: herda cor, sublinhado com `text-underline-offset:.2em`.
- `:focus-visible`: `outline:2px solid var(--color-accent); outline-offset:3px`.
- `.skip-link`: fora da tela até receber foco.
- `img,svg`: `max-width:100%; display:block`.
- `@media (prefers-reduced-motion: reduce)`: `*{animation:none!important; transition:none!important; scroll-behavior:auto!important}`.

**Concluído quando:** abrir o `index.html` mostra fundo/cor/tipografia aplicados, e alternar `data-theme` no DevTools (claro ↔ escuro) muda tudo sem erro.

### 1.4 Layout e componentes do header/hero/footer

- `.container`: `max-width:var(--container); margin-inline:auto; padding-inline:20px` (≥1024px: `40px`).
- `.section`: `padding-block:var(--space-12)`, com `border-top:1px solid var(--color-border)` (exceto a primeira).
- **Header:** grid de 3 áreas (marca | nav | controles), `position:sticky; top:0`, fundo `--color-bg`, borda inferior 1px.
  - Marca: `Alan José Brusque` (em <480px, `AJB`).
  - Nav: links `Sobre`, `Projetos`, `Contato`.
  - Controles: botão `PT/EN` + botão de tema (ícone SVG sol/lua inline).
  - Mobile: botão hambúrguer acessível (`aria-expanded="false"`, `aria-controls="menu"`).
- **Hero:** grid assimétrico 7/5 (esquerda texto, direita elemento tipográfico/numeral). `h1` com `clamp(2.5rem, 8vw, 5.5rem)`. Uma palavra em `--font-display` itálico (destaque). CTAs: botão sólido "Ver projetos" + link "Falar comigo".
- **Footer:** régua superior, nome, ano (preenchido por JS), linha "Feito com HTML, CSS e JS", link "Topo".

**Concluído quando:** em 360px, 768px e 1440px não há scroll horizontal e o header continua legível.

### 1.5 `assets/js/main.js` (versão P0)

```js
// P0: apenas ano do footer + toggle de tema + menu mobile
```

- Ano: `document.querySelector('[data-year]').textContent = new Date().getFullYear()`.
- Tema: alterna `document.documentElement.dataset.theme` e grava em `localStorage("theme")`; atualiza `aria-pressed` e o `aria-label`.
- Menu: abre/fecha, `aria-expanded`, fecha com `Esc` e ao clicar em um link.
- Sem `console.log`, sem variável global, sem `innerHTML`.

**Concluído quando:** clicar no botão alterna o tema, recarregar mantém a escolha, o menu abre/fecha no mobile e o console está limpo.

### 1.6 Aprovação visual (parada obrigatória)

Gerar um screenshot de 1440px (claro e escuro) e apresentar ao Alan com 3 bullets explicando as escolhas (grid, tipografia, contraste).
**Concluído quando:** o Alan aprovar. Não seguir para a Fase 2 antes disso.

---

## 4. Fase 2 — P1: conteúdo real

> Depende da tarefa 0.1. Onde não houver dado, manter `TODO:` — mas a entrega final exige zero `TODO:`.

### 2.1 Sobre (`#sobre`)
- Título de seção com numeral (`01 — Sobre`).
- 2 a 3 parágrafos (máx. 4 linhas cada em desktop).
- Linha "Estudando agora:" com 3–6 itens separados por `·` (sem chips coloridos).
- **Concluído quando:** texto real (ou `TODO:`) nos dois idiomas e sem quebra de layout.

### 2.2 Projetos (`#projetos`)
- 1 destaque em grid 7/5 + 3 a 5 itens secundários em lista com régua entre eles.
- Cada item: numeral (`01`…), título, resumo (1–2 linhas), linha "Aprendi:" (1 linha), stack em texto, links `Ver` / `Código` quando houver.
- Sem carrossel, sem imagem quebrada: se não houver screenshot, usar capa tipográfica (fundo `--color-surface` + numeral grande).
- Links externos: `target="_blank" rel="noopener noreferrer"` + texto indicando que abre em nova aba.
- **Concluído quando:** todos os projetos têm os 5 campos preenchidos (ou `TODO:` explícito no campo faltante).

### 2.3 Contato (`#contato`)
- Frase curta + e-mail em `mailto:` com `?subject=Contato%20pelo%20site`.
- Links: GitHub (`https://github.com/alan-xyz007`), LinkedIn, E-mail, WhatsApp.
- WhatsApp **só** com o número autorizado no formato internacional (`https://wa.me/55...`).
- Ícones SVG inline (20px) + texto visível; nunca só ícone.
- **Concluído quando:** os 4 links abrem corretamente e o `mailto` abre o cliente de e-mail.

### 2.4 Tradução EN
- Preencher a versão inglesa de **todos** os textos (natural, não literal).
- **Concluído quando:** o botão EN troca 100% dos textos visíveis, inclusive `placeholder`, `aria-label` e `title`.

---

## 5. Fase 3 — P2: i18n, tema, movimento, acessibilidade, SEO

### 3.1 `assets/js/i18n.js`
Formato fixo (chaves planas, **cada chave aparece exatamente 2 vezes**: em `pt` e em `en`):

```js
window.I18N = {
  pt: { "nav.about": "Sobre", "nav.projects": "Projetos", "hero.cta": "Ver projetos" },
  en: { "nav.about": "About",  "nav.projects": "Projects", "hero.cta": "See projects" }
};
```

- Marcar todo texto traduzível no HTML com `data-i18n="chave"`.
- Atributos traduzíveis: `data-i18n-attr="aria-label"` (ou `alt`, `title`, `placeholder`).
- Função `applyLanguage(lang)`: percorre `[data-i18n]`, aplica texto; percorre `[data-i18n-attr]`, aplica atributo; atualiza `<html lang>`, `<title>` e `meta[name=description]`.
- Persistência: `localStorage("lang")`; padrão `pt`; `?lang=en` tem prioridade.
- Botão mostra o idioma **de destino** (`EN` quando está em pt) e tem `aria-label` ("Mudar para inglês" / "Change to Portuguese").
- Sem JS: a página continua em pt-BR (não depender de JS para exibir conteúdo).
- **Concluído quando:** alternar o idioma e recarregar mantém a escolha; nenhum texto fica no idioma errado.

### 3.2 Botão de tema
- `aria-pressed` refletindo o estado escuro.
- `aria-label` dinâmico.
- Funciona nos dois temas e mantém contraste.

**Concluído quando:** leitor de tela anuncia o estado (testar no DevTools → Accessibility).

### 3.3 Reveal ao rolar
- `IntersectionObserver` adiciona `.is-visible` a `[data-reveal]`.
- CSS: `opacity:0; transform:translateY(12px)` → `opacity:1; transform:none; transition:180ms ease-out`.
- Se `prefers-reduced-motion: reduce`, aplicar `.is-visible` direto e remover transição.
- Elementos continuam no DOM e acessíveis sem JS.

**Concluído quando:** ao rolar a página as seções aparecem suavemente e a animação some com "reduce motion" ativado no DevTools (Rendering → Emulate CSS media).

### 3.4 Responsivo final
Validar em 360, 390, 768, 1024, 1440px:
- Nenhum scroll horizontal.
- Nav vira menu em < 768px.
- Tipografia não quebra palavra no meio.
- Cards/lista viram 1 coluna.

**Concluído quando:** `document.documentElement.scrollWidth <= window.innerWidth` for `true` em todas as larguras.

### 3.5 Acessibilidade
- Skip link funcional.
- Ordem de Tab: skip → marca → nav → PT/EN → tema → hero CTAs → seções → contato → footer.
- Menu mobile: foco entra no menu ao abrir e volta ao botão ao fechar (`Esc`).
- Todos os `aria-label` em pt-BR/EN coerentes.
- Links externos com aviso textual.
- Contraste conferido nos pares documentados (todos ≥ 7:1).

**Concluído quando:** navegar a página inteira só com teclado, sem perder o foco de vista.

### 3.6 SEO e metadados
- `<title>` ≤ 60 caracteres; `meta description` 150–160.
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`) + Twitter Card.
- `assets/img/og-image.png` 1200×630 (gerar localmente; sem serviço externo).
- JSON-LD `Person` (nome, `sameAs` GitHub/LinkedIn) + `WebSite`.
- `robots.txt` com `User-agent: *` / `Allow: /` e linha `Sitemap:`.
- `sitemap.xml` com a URL única `https://alan-xyz007.github.io/`.
- `favicon.svg` já criado.

**Concluído quando:** todos os arquivos existem e as tags aparecem no `<head>`.

### 3.7 Performance
- Peso total da home < 250 KB (medir em DevTools → Network, "Disable cache", recarregar).
- Nenhum request externo (checar coluna Domain: só o próprio site).
- Imagens com `width`/`height` e `loading="lazy"` (exceto hero).

**Concluído quando:** a lista de requests mostra apenas arquivos locais.

---

## 6. Fase 4 — Testes (executar todos, na ordem)

> Marcar `[x]` só depois de ver o resultado esperado.

### T01 — Arquivo abre offline
- [ ] Duplo clique em `index.html` (protocolo `file://`).
- **Esperado:** layout completo, CSS aplicado, fontes do sistema, sem erro no console.

### T02 — Console limpo
- [ ] DevTools → Console → recarregar.
- **Esperado:** zero erros e zero avisos de recurso 404.

### T03 — Tema
- [ ] Alternar tema; recarregar; abrir em nova aba.
- **Esperado:** escolha persiste; sem "flash" branco ao carregar no escuro; com `localStorage` limpo, segue o tema do sistema.

### T04 — Idioma (completude)
Rodar no PowerShell, na raiz:

```powershell
$raw  = Get-Content assets/js/i18n.js -Raw
$html = Get-Content index.html -Raw
[regex]::Matches($html,'data-i18n(?:-attr="[^"]*")?="([^"]+)"') |
  ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique |
  ForEach-Object {
    $n = ([regex]::Matches($raw, '["'']' + [regex]::Escape($_) + '["'']\s*:')).Count
    if ($n -ne 2) { "FALHA: chave '$_' aparece $n vez(es) (esperado 2)" }
  }
"--- fim ---"
```

- **Esperado:** apenas `--- fim ---` (nenhuma linha `FALHA`).
- [ ] Depois, alternar o idioma e conferir visualmente cada seção.

### T05 — Sem placeholders na entrega
```powershell
Select-String -Path index.html,assets/js/*.js,assets/css/*.css -Pattern 'TODO:|lorem ipsum' -SimpleMatch
```
- **Esperado:** nenhum resultado.
- Exceção: durante as fases 1–3, é normal haver `TODO:`. Só vale como bloqueio na entrega final.

### T06 — Navegação e âncoras
- [ ] Clicar em `Sobre`, `Projetos`, `Contato` e em "Ver projetos".
- **Esperado:** rola até a seção correta; link "Topo" volta ao início.
- [ ] Sem JS (DevTools → Settings → Debugger → Disable JavaScript) as seções continuam legíveis e as âncoras funcionam.

### T07 — Responsivo
- [ ] DevTools em 360, 390, 768, 1024, 1440px.
- [ ] Rodar no console: `document.documentElement.scrollWidth <= window.innerWidth`.
- **Esperado:** `true` em todas; menu mobile em < 768px.

### T08 — Teclado
- [ ] Só com `Tab`/`Shift+Tab`/`Enter`/`Esc`: percorrer a página inteira.
- **Esperado:** foco sempre visível, ordem lógica, menu fecha com `Esc`.

### T09 — Reduced motion
- [ ] DevTools → Rendering → "Emulate CSS media feature prefers-reduced-motion: reduce".
- **Esperado:** sem animação de reveal, sem transições perceptíveis.

### T10 — Links externos
- [ ] GitHub, LinkedIn, WhatsApp, e-mail.
- **Esperado:** abrem destino correto; externos com `rel="noopener noreferrer"`; nenhum link 404.

### T11 — Contraste
- [ ] Conferir no DevTools (Inspector → cor) os pares:
  - `#0A0A0A` sobre `#FFFFFF` (≈17.9:1) ✓
  - `#525252` sobre `#FFFFFF` (≈7.8:1) ✓
  - `#FAFAFA` sobre `#0A0A0A` (≈18:1) ✓
  - `#A3A3A3` sobre `#0A0A0A` (≈7.9:1) ✓
- **Esperado:** todos ≥ 4.5:1 (os listados já passam com folga).

### T12 — HTML válido
- [ ] Abrir o código e conferir manualmente: um `<h1>`, sem ids duplicados, `alt` em todas as imagens, `lang` no `<html>`.
- [ ] Se houver internet, colar o HTML no `https://validator.w3.org/#validate_by_input`.
- **Esperado:** zero erros.

### T13 — Lighthouse (oficial, após publicar)
- [ ] Chrome anônimo → `https://alan-xyz007.github.io` → DevTools → Lighthouse → Mobile → todas as categorias.
- **Esperado:** ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO.
- Pré-checagem em `file://` é permitida, mas Performance/SEO podem falhar por causa do protocolo.

### T14 — Peso e requests
- [ ] DevTools → Network → Disable cache → recarregar.
- **Esperado:** total < 250 KB; nenhum domínio externo.

---

## 7. Fase 5 — P3: publicação (só com autorização)

### 5.1 Revisar o que será publicado
```powershell
git status
git diff --stat
```
- [ ] Confirmar que **não** há segredo, `.env`, `node_modules` ou arquivo pessoal indevido.

### 5.2 Definir `SPEC.md`
- [ ] Aplicar a decisão da tarefa 0.2 (manter, remover ou mover).

### 5.3 Commit
```powershell
git add index.html assets robots.txt sitemap.xml AGENTS.md SPECS.md TODO.md
git commit -m "Site pessoal: estrutura, conteudo, i18n e tema"
git log --oneline -1
```

### 5.4 Repositório público
```powershell
gh repo view alan-xyz007/alan-xyz007.github.io --json visibility
# se PRIVATE e houver autorização:
gh repo edit alan-xyz007/alan-xyz007.github.io --visibility public --accept-visibility-change-consequences
```

### 5.5 Push
```powershell
git push origin main
```
- **Esperado:** `main -> main` sem erro de autenticação.

### 5.6 Ativar GitHub Pages
```powershell
gh api -X POST repos/alan-xyz007/alan-xyz007.github.io/pages -f "source[branch]=main" -f "source[path]=/"
```
- **Esperado:** JSON com `"html_url": "https://alan-xyz007.github.io/"`.
- Se retornar `409` (já existe), rodar:
```powershell
gh api repos/alan-xyz007/alan-xyz007.github.io/pages
```

### 5.7 Verificar no ar
```powershell
gh api repos/alan-xyz007/alan-xyz007.github.io/pages --jq '.status'
# esperado: "built"
```
- [ ] Abrir `https://alan-xyz007.github.io` em aba anônima.
- [ ] Confirmar HTTPS, CSS carregado, tema e idioma funcionando.
- [ ] Rodar T13 (Lighthouse) na URL real.

### 5.8 Pós-publicação
- [ ] Registrar a URL no `SPECS.md` (seção 17) e a data no log.
- [ ] Se algum teste falhar, corrigir, commitar e repetir 5.5–5.7.

---

## 8. Checklist final (não publicar sem tudo marcado)

- [ ] Seções: Quem eu sou → Sobre → Projetos → Contato.
- [ ] pt-BR e EN completos (T04 sem `FALHA`).
- [ ] Tema claro/escuro sem flash, seguindo o sistema por padrão.
- [ ] Zero `TODO:` (T05).
- [ ] Responsivo 360/390/768/1024/1440 (T07).
- [ ] Teclado + foco + reduced motion (T08/T09).
- [ ] Contraste AA nos dois temas (T11).
- [ ] Offline funciona (T01) e online também (5.7).
- [ ] Lighthouse ≥ 95 nas 4 categorias (T13).
- [ ] Zero requests externos (T14).
- [ ] Metadados, OG, JSON-LD, robots e sitemap presentes.
- [ ] Nenhum arquivo indevido no repositório.

---

## 9. Se algo der errado

| Sintoma | Causa provável | Ação |
|---|---|---|
| Página sem estilo | caminho do CSS errado | conferir `assets/css/styles.css` e maiúsculas |
| "flash" branco ao carregar no escuro | script de tema fora do `<head>` | mover para antes do `<link>` do CSS |
| Texto não troca de idioma | `data-i18n` sem chave no dicionário ou chave duplicada | rodar T04 e corrigir |
| Toggle de tema não persiste | `localStorage` bloqueado em `file://` em alguns navegadores | testar também na URL publicada |
| Scroll horizontal no mobile | elemento com largura fixa ou `100vw` | trocar por `max-width:100%` e `width:100%` |
| `gh api ... pages` retorna 404 | Pages ainda não ativado | executar 5.6 |
| Pages retorna 404 no site | build não terminou ou arquivo não está na raiz | esperar 2 min, conferir `gh api .../pages --jq .status` |
| Lighthouse baixo | imagem grande ou JS bloqueando | comprimir imagem / adicionar `defer` |

---

## 10. Log de execução (preencher)

| Data | Tarefa | Resultado | Observação |
|---|---|---|---|
| 23/10/2026 | 0.1 conteúdo coletado | Concluído | Informações fornecidas: Ciência da Computação (ATITUS), +3 anos MR Auto Serviços, SENAI |
| 23/10/2026 | 0.2 destino do `SPEC.md` | Pendente confirmação | Arquivo do quiz mantido intacto por segurança |
| 23/10/2026 | 0.4 estrutura de pastas | Concluído | `assets/css`, `assets/js`, `assets/img` criados |
| 23/10/2026 | 1.x fundação visual | Concluído | Estilos, tokens, navegação e tema escuro/claro |
| 23/10/2026 | 2.x conteúdo final | Concluído | Páginas `index.html`, `sobre.html` e `projetos.html` com dados reais |
| 23/10/2026 | 3.x polimento & i18n | Concluído | Dicionário bilíngue pt-BR/EN 100% sincronizado, SEO robots e sitemap |
| 23/10/2026 | 4.x testes | Concluído | Testes T04 (i18n) e T05 (zero TODOs) validados com sucesso |
| 23/10/2026 | 5.x publicação | Em preparação | Arquivos prontos para staging e commit |
