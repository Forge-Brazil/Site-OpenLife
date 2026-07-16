export interface FaqItem {
  q: string;
  a: string;
}

// Fonte única — usada no componente Home (accordion visível) e no
// schema.org FAQPage (data/schema.ts). Nunca deixe o schema divergir
// do conteúdo realmente visível na página — o Google penaliza isso.
export const HOME_FAQS: FaqItem[] = [
  { q: "Quantas aulas por semana tem o curso?", a: "Módulo 1: uma aula ao vivo + atividades diárias. Módulos 2 a 5: de duas a três aulas semanais de 50 minutos." },
  { q: "Qual a duração do curso?", a: "Do básico ao avançado em 18 meses. Com pausa para férias, pode se estender até 21 meses." },
  { q: "Qual nível alcançarei ao me formar?", a: "Nível avançado C1/C2 do CEFR, com preparação para exames internacionais." },
  { q: "Posso trancar minha matrícula?", a: "Sim. Pausas de 15 dias ou 1 mês disponíveis. Sem contrato de fidelidade." },
  { q: "O que é o Método ESL imersivo?", a: "ESL (English as a Second Language) é a metodologia usada em países de língua inglesa: aulas 100% em inglês desde o primeiro dia, sem tradução. Você adquire o idioma como quem vive no exterior — comprovado há 21 anos." },
  { q: "As aulas são online ou presenciais?", a: "As duas opções. Presencial na sede em Bagé/RS e online ao vivo para todo o Brasil, com a mesma imersão, professores reais e turmas reduzidas." },
  { q: "Funciona para quem já tentou outros cursos e desistiu?", a: "Sim — é o perfil mais comum dos nossos alunos. Quem estudou anos e trava ao conversar aprendeu sobre o inglês, mas não adquiriu o idioma. A imersão ESL corrige exatamente isso." },
];
