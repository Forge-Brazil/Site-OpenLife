# OpenLife Brasil — Regras Centrais do Sistema
> Documento de autoridade: TODA IA, agente ou desenvolvedor deve ler e obedecer este arquivo.
> Última atualização: 2026-09-29 | Versão: 2.0

---

## 1. IDENTIDADE E POSICIONAMENTO DE MARCA

### 1.1 Dados Institucionais
- **Nome oficial:** OpenLife English School
- **CNPJ/Domínio:** openlifebrasil.com.br
- **Sede:** Bagé, RS — Brasil
- **Operação:** Nacional (online) + Presencial (Bagé/RS)
- **Anos de operação:** **20 anos** (NUNCA 21 ou outro número)
- **Alunos formados:** **+100 mil / +100k** (NUNCA 66 mil, 66k, 66.000)
- **Avaliação Google:** 5.0 ★

### 1.2 Copy de Autoridade (frases fixas — NUNCA alterar)
```
"metodologia que formou mais de 100 mil pessoas nos últimos 20 anos"
"Inglês abre portas para o mundo globalizado"
```
- ⛔ PROIBIDO: "abre portas que currículos não abrem"
- ⛔ PROIBIDO: qualquer variação dos números acima

### 1.3 Duração do Programa
- Journey = **18 meses** (duração do programa, NÃO promessa de resultado)
- Never use "fluência garantida em 18 meses" como promessa absoluta

---

## 2. PRODUTOS E ROTAS

| Produto | Rota | Público | Status | Prioridade |
|---|---|---|---|---|
| Journey (Inglês para Adultos) | /ingles-para-adultos | Adultos A1→C1 | Ativo | P0 |
| Keep the Fluency | /keep-the-fluency | B2→C2 | Ativo | P1 |
| Inglês para Negócios (C-Level) | /ingles-para-negocios | Executivos | Ativo | P2 |
| Inglês Online | /ingles-online | Nacional | Ativo | SEO |
| Inglês para Adolescentes | /ingles-para-adolescentes | 13-17 anos | Ativo | P3 |
| Inglês para Crianças | /ingles-para-criancas | 6-12 anos | Ativo | P3 |
| Intercâmbio | /intercambio | Todos | Aguarda LGPD | P4 |
| Franquia | /franquia | Empreendedores | Ativo | P2 |

---

## 3. REGRAS DE COPY — TURMAS

### 3.1 Tamanho de Turma (CRÍTICO — valido para TODAS as modalidades)

| Contexto | Copy obrigatória |
|---|---|
| Hero, benefícios, diferenciais, chips, marketing | `"média de 4 alunos por turma"` ou `"~4 alunos"` |
| Tabelas comparativas, stats, badges | `"~4 alunos por turma"` |
| FAQ, metodologia, seções de precisão | `"em média 4 alunos por turma, podendo chegar a até 8"` |

- ✅ "turmas com média de 4 alunos"
- ✅ "~4 alunos por turma, em média"
- ✅ (FAQ) "nossas turmas têm em média 4 alunos e podem ter até 8"
- ⛔ NUNCA: "turmas de até 8 alunos" em marketing
- ⛔ NUNCA: "turmas de até 4 alunos" — o máximo real é 8

---

## 4. DESIGN SYSTEM

### 4.1 Paleta de Cores (tokens Tailwind)
```
purple-brand = #7C3AED  (violeta primário — violet-600)
purple-deep  = #4C1D95  (violeta profundo — violet-900)
orange-brand = #F97316  (laranja — CTAs primários)
bgsoft       = #F8F8FF  (off-white — fundo de seções alternadas)
```

### 4.2 Hierarquia de Fundos (OBRIGATÓRIO)
| Uso | Background |
|---|---|
| Padrão do site | `white` (#FFF) ou `bgsoft` (#F8F8FF) |
| Hero páginas de produto | Gradiente roxo (purple-deep → purple-brand) |
| CTA final de página | `purple-deep` (#4C1D95) |
| Footer | `purple-brand` (#7C3AED) |
| Tema preto/escuro como padrão | ⛔ **PROIBIDO** |

### 4.3 CTAs
```
Primário (Laranja):  bg-orange-brand text-white hover:bg-orange-600
Secundário (Roxo):   bg-purple-brand text-white hover:bg-purple-700
Outline:             border-2 border-purple-brand text-purple-brand
```

### 4.4 Tipografia
- Headlines: font-black / font-extrabold
- Body: text-slate-500 / text-slate-600
- H1 hero: text-5xl md:text-7xl font-black
- H2 seções: text-3xl md:text-5xl font-black

---

## 5. ESTRUTURA DE PÁGINAS — PADRÃO OBRIGATÓRIO

### 5.1 Anatomia de Cada Página (sequência obrigatória)
```
1. HERO          → imagem de impacto + headline emocional + CTA primário
2. PROBLEMA      → dor do público que este produto resolve
3. SOLUÇÃO       → como a OpenLife resolve (diferencial)
4. COMO FUNCIONA → passos simples (máx. 4)
5. PARA QUEM É   → personas (cards visuais)
6. DIFERENCIAIS  → vs concorrentes / por que OpenLife
7. SOCIAL PROOF  → depoimentos / alumni / métricas
8. FAQ           → 4-6 perguntas precisas (ver §5.3)
9. CTA FINAL     → seção roxo escuro, headline impactante, botão branco
```

### 5.2 Regras do Hero (CRÍTICO)
- **Imagem de alto impacto obrigatória** — nunca só gradiente sem imagem humana
- **Texto mínimo**: headline + subhead (máx. 2 linhas) + 1 CTA
- **Gatilhos emocionais**: desejo, urgência, identidade, pertencimento
- **Badge de credibilidade**: "+100k alunos" OU "5.0 Google" OU "20 anos"
- **Scroll imediato para seção 1** ao clicar em qualquer CTA interno
- **Mobile-first**: hero deve funcionar em 375px sem scroll horizontal

### 5.3 Regras do FAQ
- Cada FAQ deve responder dúvidas reais do público da página específica
- Turmas: sempre precisar "em média 4 alunos, podendo ter até 8"
- Investimento: não revelar preço — direcionar para SmartForm
- LGPD: quando perguntado sobre dados → citar política de privacidade

---

## 6. NAVEGAÇÃO E UX

### 6.1 Header
- Logo branca: páginas com hero roxo/escuro (DARK_HERO_PATHS)
- Logo colorida: páginas com hero branco
- Dropdown "Cursos": lista todos os produtos com badge de público
- ScrollToTop: obrigatório em todas as rotas (já implementado)

### 6.2 Footer — Estrutura
- Coluna Cursos: todos os produtos linkados incluindo Keep the Fluency
- "20 anos" — NUNCA "21 anos"
- Link para ERP: sempre `erp.openlifebrasil.com.br/login`

### 6.3 SmartForm (Motor de Captura)
- Trigger: `openSmartForm()` via `window.dispatchEvent`
- NUNCA usar link externo (form.respondi.app ou similar)
- Consentimento LGPD: obrigatório — salvar data + versão `2026.09`
- Endpoint: `POST /api/lead/start` ao 1º toque
- Autosave: `PATCH /api/lead/{id}` debounce 700ms
- Degradação graciosa: exibir sucesso mesmo se API indisponível

---

## 7. SEO E SCHEMA

### 7.1 Schema por Tipo de Página
| Página | Schema |
|---|---|
| Home | `EducationalOrganization` |
| /sobre, /contato | `LocalBusiness` (endereço Bagé/RS) |
| Páginas de produto | `Course` |
| Páginas de cidade | `Course` com `areaServed` dinâmico — NUNCA `LocalBusiness` |

### 7.2 Meta Tags Obrigatórias por Rota
- title, description, canonical (definidos em `SEO_META` no App.tsx)
- og:title, og:description, og:url (atualizados via SEOUpdater)
- JSON-LD inline na página

---

## 8. MOBILE-FIRST — PLATAFORMAS

### 8.1 Breakpoints Forge (obrigatórios)
```
xs:   320px–479px  → Celulares pequenos (BASE — mobile-first)
sm:   480px–767px  → Celulares grandes
md:   768px–1023px → Tablets
lg:   1024px–1439px → Desktop
xl:   1440px–1919px → Wide desktop
2xl:  1920px+       → Ultra-wide
tv:   3840px+       → Smart TV / 10ft UI
```

### 8.2 Safe Areas (iOS/Android)
```css
padding-top: env(safe-area-inset-top);     /* Notch/Dynamic Island */
padding-bottom: env(safe-area-inset-bottom); /* Home indicator */
min-height: 100dvh;                          /* NÃO usar 100vh */
```
- viewport: `width=device-width, initial-scale=1, viewport-fit=cover`
- Alvo de toque mínimo: 44px iOS / 48dp Android

---

## 9. LGPD E COMPLIANCE

### 9.1 Coleta de Dados
- Consentimento explícito em todo formulário — salvar data + versão
- Versão atual do consentimento: `2026.09`
- Direito de acesso, retificação e exclusão via `/privacidade`
- DPO/Encarregado: `contato@openlifebrasil.com`

### 9.2 Dados Sensíveis
- NUNCA armazenar senha em texto plano
- NUNCA expor chaves de API no frontend (usar variáveis VITE_*)
- Dados de lead: apenas no ERP, NUNCA em localStorage sem cifragem

### 9.3 Cookies
- Página `/cookies` obrigatória e atualizada
- Consent banner obrigatório (implementar)
- Analytics só após consentimento

---

## 10. INTEGRAÇÕES E VARIÁVEIS DE AMBIENTE

### 10.1 Variáveis Necessárias (`.env`)
```env
VITE_SUPABASE_URL=          # Banco de dados
VITE_SUPABASE_ANON_KEY=     # Autenticação pública
ERP_API_URL=                # API do ERP OpenLife
SITE_SHARED_SECRET=         # Assinatura webhook ERP
VITE_GTM_ID=                # Google Tag Manager
VITE_META_PIXEL_ID=         # Meta (Facebook) Pixel
```

### 10.2 Integrações Ativas / Planejadas
| Sistema | Tipo | Status |
|---|---|---|
| ERP OpenLife | REST API | Planejado |
| Supabase | DB + Auth | Configurando |
| Meta Ads (Pixel) | Marketing | Planejado |
| Google Analytics 4 | Analytics | Planejado |
| Google Search Console | SEO | Pendente |
| Railway | Deploy | Planejado |
| GitHub (Forge-Brazil/Site-OpenLife) | Repositório | Ativo |

---

## 11. REGRAS DE DESENVOLVIMENTO

### 11.1 Componentes Padrão
- `SmartForm.tsx` — modal de captura (único ponto de entrada de leads)
- `ScrollToTop.tsx` — reset de scroll entre rotas
- `Header.tsx` — navegação com dropdown de Cursos
- `Footer.tsx` — sitemap + links institucionais

### 11.2 Convenções de Código
- TypeScript estrito — sem `any` sem justificativa
- Tailwind CSS — sem CSS inline arbitrário
- Mobile-first em todo JSX (começar em xs, escalar para cima)
- Nomes de rotas: kebab-case (`/keep-the-fluency`)

### 11.3 Proibições
- ⛔ Links externos para formulários de leads (apenas SmartForm)
- ⛔ Hardcode de números estáticos que devem vir do ERP
- ⛔ `console.log` em produção
- ⛔ Dados sensíveis em repositório (usar .env)

---

## 12. CHECKLIST DE QA POR PÁGINA

Antes de publicar qualquer página, verificar:
- [ ] Hero com imagem de impacto (não só gradiente)
- [ ] Headline emocional (desejo + necessidade)
- [ ] CTA primário visível sem scroll (above the fold)
- [ ] +100k alunos / 20 anos (nunca 66k / 21 anos)
- [ ] Turmas: "média de 4 alunos" em marketing, "até 8" em FAQ
- [ ] SmartForm em todos os CTAs (sem links externos)
- [ ] ScrollToTop funcionando
- [ ] Mobile 375px sem overflow horizontal
- [ ] safe-area-inset aplicado em iOS
- [ ] JSON-LD Schema correto para o tipo de página
- [ ] SEO_META atualizado em App.tsx
- [ ] DARK_HERO_PATHS atualizado em Header.tsx se hero roxo

---

*Este documento é a fonte de verdade do sistema OpenLife.*
*Toda nova feature, copy ou componente deve ser validado contra estas regras.*
