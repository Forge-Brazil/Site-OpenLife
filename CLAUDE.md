# OpenLife Brasil — Guia de Desenvolvimento

## Projeto
Site institucional da OpenLife Brasil em React + TypeScript + Tailwind CSS.
Domínio definitivo: **openlifebrasil.com.br**

---

## Regras de Copywriting — OBRIGATÓRIO em todo o site

- **Número de alunos formados:** sempre `+100 mil alunos` (ou `+100k`) — NUNCA usar 66 mil, 66k ou 66.000.
- **Copy de autoridade:** _"metodologia que formou mais de 100 mil pessoas nos últimos 20 anos"_
- **Copy de abertura de portas:** _"Inglês abre portas para o mundo globalizado"_ — NUNCA usar "abre portas que currículos não abrem"
- **Tempo de operação:** 20 anos (não 21)

### Tamanho de Turmas — Regra de Comunicação (OBRIGATÓRIO)

> Válido para **todas as modalidades** (Journey, Keep the Fluency, Kids, Teens, Business, etc.)

| Contexto | Copy obrigatória |
|---|---|
| Marketing, hero, benefícios, diferenciais | _"média de 4 alunos por turma"_ ou _"~4 alunos"_ |
| Tabelas comparativas, stats | _"~4 alunos por turma"_ |
| FAQ, metodologia, seções de precisão | _"em média 4 alunos por turma, podendo chegar a até 8"_ |

- ✅ CORRETO marketing: "turmas com média de 4 alunos", "média de 4 alunos por turma", "~4 alunos"
- ✅ CORRETO FAQ/metodologia: "nossas turmas têm em média 4 alunos e podem ter até 8"
- ⛔ PROIBIDO marketing: "turmas de até 8 alunos", "turmas com no máx. 8 alunos"
- ⛔ PROIBIDO qualquer lugar: "turmas de até 4 alunos", "máx. 4 alunos" (o máximo real é 8)

---

## Design System — Regras Obrigatórias

### Hierarquia de Fundos (OBRIGATÓRIO)

**1ª Opção — Padrão do site público:**
- Fundo `white` (#FFFFFF) ou `off-white` (#F8F8FF / bg-bgsoft)
- Roxo como cor primária em tipografia, cards, destaques e CTAs
- Laranja como accent secundário — exclusivo para botões CTA primários

**2ª/3ª Opção — Uso pontual e específico:**
- Fundo roxo profundo (#4C1D95 / purple-deep) para seções de fechamento, hero alternativo e footer
- Fundo escuro/preto: **NUNCA usar como tema principal da página**

> ⛔ Background preto como tema do site: PROIBIDO
> ✅ Cards roxos em fundo branco: PADRÃO
> ✅ Seção final/footer com roxo escuro: PERMITIDO

### Paleta de Cores

```
Roxo Primário:   #7C3AED  (violet-600 / purple-brand)
Roxo Profundo:   #4C1D95  (violet-900 — footer, hero alternativo)
Roxo Médio:      #6D28D9  (violet-700 — hover, gradientes)
Roxo Claro:      #EDE9FE  (violet-100 — bg de chips, badges)
Laranja:         #F97316  (orange-500 / orange-brand — CTA primário)
Branco:          #FFFFFF  (fundo principal)
Off-white:       #F8F8FF  (fundo de seções alternadas)
Cinza texto:     #64748B  (slate-500 — body text)
Preto texto:     #0F172A  (slate-900 — headlines)
```

### Tokens Tailwind (tailwind.config)
```
colors.purple-brand = #7C3AED   (roxo primário — violet-600)
colors.purple-deep  = #4C1D95   (roxo profundo — violet-900, footer/hero)
colors.orange-brand = #F97316
colors.bgsoft       = #F8F8FF
```

### Tipografia

- **Display/Headlines**: Fonte bold (font-black / font-extrabold)
- **Body**: Slate-600 em fundo claro
- **Sobre fundo roxo escuro**: Texto sempre branco
- H1 hero: text-5xl md:text-7xl font-black
- H2 seções: text-3xl md:text-5xl font-black

### CTAs

```
Primário (Laranja):  bg-orange-brand text-white hover:bg-orange-600
Secundário (Roxo):   bg-purple-brand text-white hover:bg-purple-700
Outline:             border-2 border-purple-brand text-purple-brand
```

---

## Estrutura de Produtos

| Produto          | Rota                    | Status      |
|-----------------|------------------------|-------------|
| Journey          | /ingles-para-adultos   | Principal P0 |
| Keep the Fluency | /keep-the-fluency      | Principal P1 |
| C-Level          | /ingles-para-negocios  | Novo         |
| Kids             | /ingles-para-criancas  | 2° plano     |
| Intercâmbio      | /intercambio           | Novo (aguarda LGPD) |
| Franquia         | /franquia              | Novo         |

---

## Regras de SEO & Compliance

- Schema `LocalBusiness` apenas nas páginas /sobre e /contato (endereço Bagé/RS)
- Páginas de cidade: schema `Course` com `areaServed` dinâmico — NUNCA `LocalBusiness`
- Home: schema `EducationalOrganization`
- "18 meses" = duração do programa, não promessa de resultado
- Estatísticas ao vivo via API ERP — nunca números estáticos hardcoded
- Todos os CTAs devem apontar para domínio próprio — NUNCA form externo

---

## SmartForm — Motor de Captura (Épico 2 — CONCLUÍDO)

- Componente: `components/SmartForm.tsx` — modal 4 etapas (Persona → Nível → Urgência → Contato)
- Trigger global: `openSmartForm()` via `window.dispatchEvent(new CustomEvent('openSmartForm', ...))`
- Substituiu 100% dos links externos `form.respondi.app` em todas as páginas e blog posts
- Endpoint: `POST /api/lead/start` ao 1° toque em qualquer campo
- Autosave: `PATCH /api/lead/{id}` com debounce de 700ms
- Recuperação: `GET /api/lead/{id}` ao retornar ao site (via `localStorage` key `ol_lead_id`)
- UTMs: capturados no landing e armazenados em `sessionStorage` key `ol_utms`
- Lead "iniciado" +24h → fila de recuperação no CRM
- Consentimento LGPD obrigatório em todo lead — salvar data e versão `2026.09`
- Degradação graciosa: sempre exibe sucesso mesmo se API indisponível

---

## Comandos Úteis

```bash
npm run dev      # servidor local
npm run build    # build de produção
npm run lint     # linting
```
