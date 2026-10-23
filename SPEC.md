# Especificação — App de Revisão (Quiz de Múltipla Escolha)

> Status: **APROVADO** (entrevista concluída em 16/10/2026)
> Próximo passo: aguardando o conteúdo da página ser salvo na pasta do projeto.

## 1. Visão geral
Aplicação web estática de **quiz de múltipla escolha** para revisão do conteúdo da página
`https://atitus.grupoa.education/plataforma/course/4964780/content/92348639`
(Plataforma A / Atitus).

Roda abrindo o arquivo no navegador: **sem servidor, sem login, sem internet**.

## 2. Objetivo
- Revisar os **conceitos diretos** do conteúdo da página.
- Dar **feedback imediato** com **explicação** a cada resposta.
- Abrir em qualquer computador/celular com duplo clique.

## 3. Fonte de conteúdo
- **Como o conteúdo chega:** o usuário **salva a página na pasta do projeto**
  (PDF, HTML salvo ou prints/`.txt`). O agente lê o arquivo e extrai os tópicos.
- **Escopo:** a página `92348639` **+ material relacionado** que o usuário salvar junto
  (páginas/módulos vizinhos do mesmo tema).
- **Fidelidade:** as 10 questões serão baseadas **apenas** no conteúdo fornecido.
- Se o arquivo salvo não cobrir tudo / algum trecho ficar ilegível, o agente **avisa,
  aponta a lacuna e espera** o usuário completar — não inventa.

## 4. Requisitos funcionais
- **RF01** — 10 questões, cada uma com **exatamente 4 alternativas (A–D)** e **1 correta**.
- **RF02** — Tipo de questão: **apenas conceitos diretos** (definições, termos, afirmações).
- **RF03** — **Feedback imediato** ao responder: marca certo/errado e mostra a **explicação**.
- **RF04** — **Embaralhar** a ordem das questões **e** das alternativas a cada tentativa.
- **RF05** — Botão **"Finalizar"** que leva a um resultado final simples (acertos/total e %).
  *(Incluído como fechamento natural do fluxo — me avise se não quiser.)*
- **RF06** — Botão **"Reiniciar"** (nova tentativa reembaralhada).
- **RF07** — Navegação: avançar/voltar + indicador de progresso ("3 de 10").
- **RF08** — Interface em **português (pt-BR)**.

## 5. Requisitos não funcionais
- `index.html` + `questions.json` (banco de questões separado, fácil de editar).
- **Funciona ao dar duplo clique no arquivo** (offline). Ver nota técnica na seção 7.
- Sem CDN, sem dependências externas, sem rastreamento.
- Responsivo (desktop + celular), com foco visível e navegação por teclado.

## 6. Visual
- **Limpo e neutro**: tipografia legível, fundo claro, cartões simples.
- Estados de cor: verde = acerto, vermelho = erro, azul = selecionado.
- Sem branding da instituição.

## 7. Estrutura de arquivos
```
projeto open code/
├─ index.html        # app: UI (HTML) + estilos (CSS) + lógica (JS)
├─ questions.json    # banco de questões (editável)
└─ SPEC.md           # este documento
```

## 8. Modelo de dados (`questions.json`)
```json
{
  "titulo": "Revisão — <título da página>",
  "questoes": [
    {
      "id": "q1",
      "tema": "Tópico/seção de origem",
      "enunciado": "Texto da pergunta?",
      "alternativas": ["...", "...", "...", "..."],
      "correta": 0,
      "explicacao": "Por que essa alternativa está correta."
    }
  ]
}
```
> `correta` é o índice (0–3) da alternativa correta **antes** do embaralhamento.

## 9. Fluxo de uso
1. Abre `index.html` → **tela inicial**: título, "10 questões", botão **Iniciar**.
2. Uma questão por vez → clica numa alternativa → **feedback imediato + explicação**
   → botão **Próxima**.
3. Última questão → **Finalizar** → **resultado** (acertos/10, %).
4. Botão **Reiniciar** → nova tentativa com ordem embaralhada.

## 10. Critérios de aceite
- [ ] Toda questão tem 4 alternativas e 1 correta válida.
- [ ] Conteúdo 100% baseado no material fornecido.
- [ ] Abre e funciona offline (duplo clique) em Chrome/Edge/Firefox.
- [ ] Embaralhamento não quebra a alternativa correta.
- [ ] Usável no celular sem quebrar o layout.
- [ ] Resultado final confere com as respostas.

## 11. Fora de escopo
- Login/autenticação, backend, banco de dados, multiusuário.
- Integração/API com a plataforma Atitus.
- Geração de questões por IA em tempo de execução.
