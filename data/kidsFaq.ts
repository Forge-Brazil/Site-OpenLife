import { FaqItem } from './faq';

// Fonte única — usada na página Kids (accordion visível) e no
// schema.org FAQPage da rota (data/schema.ts). Nunca deixe o schema
// divergir do conteúdo realmente visível na página.
export const KIDS_FAQS: FaqItem[] = [
  {
    q: 'A partir de qual idade meu filho pode começar no OpenLife Kids?',
    a: 'O OpenLife Kids recebe crianças a partir dos 6 anos, já alfabetizadas em português. É a idade em que o cérebro absorve um segundo idioma de forma mais natural — a mesma janela que aproveitamos há 20 anos em Bagé.',
  },
  {
    q: 'As aulas são presenciais em Bagé ou também online?',
    a: 'As duas opções. Turmas presenciais na nossa sede em Bagé/RS, com a mesma estrutura lúdica, e turmas online ao vivo para famílias de qualquer cidade do Brasil — sempre com professor real, nunca gravado.',
  },
  {
    q: 'Meu filho é tímido. Isso atrapalha o aprendizado?',
    a: 'Pelo contrário. As turmas reduzidas e o método gamificado foram criados para que cada criança avance no seu ritmo, sem comparação e sem pressão. Timidez costuma diminuir junto com o inglês evoluindo.',
  },
  {
    q: 'Como funciona a preparação para intercâmbio?',
    a: 'A partir do nível intermediário, incluímos vivências culturais, vocabulário de viagem e simulações reais de conversação — a base que muitas famílias buscam pensando em um intercâmbio futuro para o filho.',
  },
  {
    q: 'Vou conseguir acompanhar a evolução do meu filho?',
    a: 'Sim. Você recebe relatórios periódicos de progresso e conversa diretamente com o professor responsável pela turma — sem intermediários, sem surpresa no fim do módulo.',
  },
  {
    q: 'Existe fidelidade ou multa de cancelamento?',
    a: 'Não. Você pode pausar a matrícula por 15 dias ou 1 mês quando precisar, sem burocracia. Acreditamos que a permanência deve ser pelo resultado, não pelo contrato.',
  },
];
