export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: number;
  category: string;
  icon: 'list' | 'mapPin' | 'award';
  questions: FaqItem[];
}

// Fonte única — usada no componente Home (accordion categorizado visível)
// e no schema.org FAQPage (data/schema.ts, via HOME_FAQS abaixo). Nunca
// deixe o schema divergir do conteúdo realmente visível na página — o
// Google penaliza isso.
export const HOME_FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 0,
    category: 'Informações sobre os cursos',
    icon: 'list',
    questions: [
      { q: 'Quantas aulas por semana tem o curso?', a: 'Módulo 1: uma aula ao vivo + atividades diárias no material interativo. Módulos 2 a 5: de duas a três aulas ao vivo de 50 minutos por semana, com atividades diárias. No total são quase 500 horas de aulas e conteúdos.' },
      { q: 'Qual a duração do curso?', a: 'O curso completo, do básico ao avançado, é projetado para 18 meses. Com pausas para férias, pode se estender até 21 meses.' },
      { q: 'Qual nível alcançarei ao me formar?', a: 'Nível avançado C1/C2 do CEFR (Quadro Comum Europeu de Referência para Línguas). O último módulo, Journey for Life, é modelado em torno de exames de proficiência internacionais.' },
      { q: 'O que é o Método ESL imersivo?', a: 'ESL (English as a Second Language) é a metodologia usada em países de língua inglesa: aulas 100% em inglês desde o primeiro dia, sem tradução mental. Você adquire o idioma como quem vive no exterior — a mesma abordagem que permite aprender até 4x mais rápido que em cursos tradicionais.' },
      { q: 'Funciona para quem já tentou outros cursos e desistiu?', a: 'Sim — é o perfil mais comum dos nossos alunos. Quem estudou anos e trava ao conversar aprendeu sobre o inglês, mas não adquiriu o idioma. A imersão ESL corrige exatamente isso.' },
    ],
  },
  {
    id: 1,
    category: 'Funcionamento das escolas',
    icon: 'mapPin',
    questions: [
      { q: 'As aulas são online ou presenciais?', a: 'As duas opções. Presencial na sede em Bagé/RS e online ao vivo para todo o Brasil, com a mesma imersão, professores reais e turmas reduzidas — nunca aula gravada.' },
      { q: 'Quantos alunos têm por turma?', a: 'Turmas reduzidas, com média de 4 alunos, podendo chegar a 8 em atividades que simulam situações sociais reais. Isso garante atenção individualizada e muita prática de fala.' },
      { q: 'Posso trancar minha matrícula?', a: 'Sim. Pausas de 15 dias ou 1 mês disponíveis, sem burocracia — ajuste o curso à sua rotina sempre que precisar.' },
      { q: 'Tem multa de cancelamento ou fidelidade?', a: 'Não trabalhamos com contrato de fidelidade — queremos que você fique pelos resultados. Em caso de cancelamento, aplicamos uma taxa administrativa de 10% sobre o saldo devedor, bem abaixo da média do setor.' },
    ],
  },
  {
    id: 2,
    category: 'Certificações e dúvidas',
    icon: 'award',
    questions: [
      { q: 'Tem certificado do MEC?', a: 'Cursos de idiomas são "cursos livres" pela legislação brasileira e não exigem certificação do MEC — regra válida apenas para universidades e faculdades. Nossa qualidade é assegurada pelo CEFR, padrão internacional.' },
      { q: 'A OpenLife entrega certificado ao final do curso?', a: 'Sim. Ao concluir, você recebe um certificado que valida a conclusão do curso e as quase 500 horas de imersão na língua inglesa — além da fluência conquistada.' },
      { q: 'Estou preparado para provas de proficiência internacional?', a: 'Sim. Nosso objetivo é o nível C1/C2 do CEFR, com o módulo avançado preparando você para exames como IELTS, TOEFL e Cambridge English, caso deseje uma certificação adicional.' },
    ],
  },
];

export const HOME_FAQS: FaqItem[] = HOME_FAQ_CATEGORIES.flatMap((c) => c.questions);
