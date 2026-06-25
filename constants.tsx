
import { Course, Post, LevelQuestion } from './types';

export const COLORS = {
  purple: '#6B2D8B',
  orange: '#F57C20',
};

export const COURSES: Course[] = [
  {
    id: 'kids',
    title: 'OpenLife Kids',
    age: '6-9 anos',
    focus: 'Bilinguismo Precoce',
    description: 'Focado em bilinguismo precoce e desenvolvimento cognitivo. Um mundo de descobertas onde o inglês faz parte da brincadeira e do crescimento natural.',
    highlights: ['Aulas lúdicas e interativas', 'Desenvolvimento cognitivo acelerado', 'Professores especializados em alfabetização'],
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'teens',
    title: 'OpenLife Teens',
    age: '10-12 anos',
    focus: 'Cultura Pop e Certificações',
    description: 'Inglês conectado com cultura pop, gamificação e certificações. Focado em comunicação real para a generation tecnológica.',
    highlights: ['Metodologia gamificada', 'Foco total em speaking', 'Preparação para certificados internacionais'],
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'journey',
    title: 'OpenLife Journey',
    age: '13+ anos',
    focus: 'Fluência em 18 Meses',
    description: 'Fluência em 18 meses com metodologia ESL exclusiva. Nosso curso carro-chefe para quem precisa de resultados rápidos, imersão e comunicação sem tradução.',
    highlights: ['Metodologia ESL imersiva', 'Comunicação sem tradução mental', 'Certificação Internacional CEFR C1/C2'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'keep',
    title: 'Keep the Fluency',
    age: 'Avançado',
    focus: 'Comunidade e Desafios',
    description: 'Mantenha sua fluência com desafios e uma comunidade ativa. Ideal para networking e aprimoramento contínuo do vocabulário avançado.',
    highlights: ['Debates de alto nível', 'Networking internacional', 'Aperfeiçoamento gramatical fino'],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200'
  }
];

export const MOCK_POSTS: Post[] = [
  // APRENDER INGLÊS
  {
    id: 'learn-1',
    title: 'Como aprender inglês rápido com imersão total: o segredo da fluência em 18 meses',
    excerpt: 'Você já tentou aprender inglês por anos e ainda sente que não consegue se comunicar com naturalidade? A resposta pode estar na imersão total. Neste artigo, você vai entender como essa abordagem acelera o aprendizado, ativa áreas específicas do cérebro e permite alcançar fluência real em até 18 meses — mesmo começando do zero.',
    content: `Por que aprender inglês rápido parece impossível para tanta gente?\n\nSe você já passou por cursos tradicionais, provavelmente conhece essa sensação: “Estudo há anos, mas na hora de falar… travo.” Isso acontece porque a maioria dos métodos foca apenas em gramática e tradução, deixando de lado o que realmente importa: a exposição real e constante ao idioma. A imersão total muda esse jogo.\n\nO que é imersão total em inglês?\n\nImersão total é uma abordagem em que o aluno vive o inglês em vez de apenas estudá-lo. Significa estar em contato com o idioma de forma contínua, natural e contextualizada — como uma criança aprende a falar. Na OpenLife, por exemplo, a imersão acontece em todos os momentos da aula, seja online ou presencial. O aluno escuta inglês desde o primeiro minuto, fala em situações reais simuladas, aprende vocabulário dentro de contextos úteis e recebe feedback imediato. Não é sobre decorar regras. É sobre viver o idioma.\n\nComo a imersão acelera o cérebro?\n\nEstudos em neurociência mostram que o cérebro aprende línguas mais rápido quando está imerso em contextos reais. Isso ativa áreas responsáveis por reconhecimento de padrões (gramática intuitiva), memória de longo prazo (vocabulário duradouro) e produção oral espontânea (fluência real). Além disso, a imersão reduz o chamado filtro afetivo — aquela ansiedade que bloqueia a fala. Quando o aluno se sente seguro, motivado e engajado, o cérebro aprende mais e melhor.\n\nFluência em 18 meses: é possível mesmo?\n\nSim — desde que o método seja o certo. Na OpenLife, a fluência em até 18 meses é alcançada com uma combinação de: Aulas 100% em inglês (cria hábito de pensar no idioma), Método híbrido (flexibilidade + contato frequente), Plataforma digital imersiva (prática diária), Professores treinados em ESL (foco em comunicação real) e Situações simuladas para o mundo real.\n\nExemplo real:\n\nImagine que você está aprendendo como pedir comida em um restaurante. No método tradicional, você decoraria frases. Na imersão, você vive a situação: “Waiter: What would you like to order? / You: I’d like a cheeseburger and a lemonade, please.” Você aprende a responder de forma natural, sem traduzir mentalmente.\n\nComo aplicar a imersão no seu dia a dia?\n\n1. Mude o idioma do seu celular e apps: Isso força seu cérebro a reconhecer palavras no contexto.\n2. Assista a séries com áudio e legenda em inglês: Comece com algo que você já conhece (Ex: Friends, Brooklyn 99).\n3. Use comandos em inglês no dia a dia: “I’m going to the gym.”\n4. Converse com você mesmo em inglês: Narre o que está fazendo: “I’m making coffee.”\n5. Pratique com alguém que te corrija com empatia: Na OpenLife, os professores corrigem sem interromper a fluência, criando um ambiente seguro para aprender.\n\nFAQ – Perguntas frequentes sobre imersão total\n\n1. Imersão funciona para iniciantes? Sim! O método é adaptado para cada nível. Mesmo quem começa do zero acompanha pelo contexto e repetição natural.\n2. Preciso morar fora? Não. Com o método ESL e plataforma imersiva, você vive o inglês sem sair do país.\n3. Quantas horas são necessárias? Com 3 a 5 horas semanais + prática diária, é possível atingir fluência funcional em 18 meses.\n4. E se eu travar? Isso é normal no início. O segredo está em praticar em um ambiente seguro e com incentivo constante.\n\nConclusão: aprender inglês rápido é possível se você mudar a forma de aprender.\n\nA fluência não vem de decorar listas ou fazer provas de gramática. Ela vem de viver o inglês todos os dias, com naturalidade, propósito e apoio. A imersão total é o caminho mais rápido e eficaz para quem quer falar inglês de verdade. Se você quer descobrir seu nível atual e receber um plano de estudo personalizado, agende um nivelamento gratuito com a OpenLife.`,
    category: 'Aprender Inglês',
    tags: ['Aprender Inglês', 'Fluência', 'Imersão'],
    date: '20/05/2024',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
    slug: 'como-aprender-ingles-rapido-com-imersao-total'
  },
  {
    id: 'learn-2',
    title: 'Por que traduzir mentalmente atrasa seu inglês (e como evitar isso)',
    excerpt: 'A tradução mental é o maior inimigo da fluência. Entenda por que seu cérebro trava e como destravar com o método ESL.',
    content: 'Quando você traduz, seu cérebro faz o dobro do trabalho. Na OpenLife, ensinamos você a associar a imagem diretamente à palavra em inglês. É o que chamamos de pensamento direto. Isso reduz o tempo de resposta e cria uma conversação fluida e natural.',
    category: 'Aprender Inglês',
    tags: ['Aprender Inglês', 'Metodologia'],
    date: '18/05/2024',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
    slug: 'por-que-traduzir-mentalmente-atrasa-ingles'
  },
  // BUSINESS
  {
    id: 'biz-1',
    title: 'Inglês para negócios: expressões essenciais para reuniões e e-mails',
    excerpt: 'Melhore seu vocabulário corporativo com termos reais usados em multinacionais e ambientes de alta performance.',
    content: 'No mundo dos negócios, a precisão é tudo. Termos como "ASAP", "Bottom line" e "Feedback loop" são comuns. Nosso curso Business English foca nessas situações reais, preparando você para liderar reuniões e negociar com segurança internacional.',
    category: 'Business',
    tags: ['Business', 'Carreira'],
    date: '15/05/2024',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    slug: 'ingles-para-negocios-expressoes-essenciais'
  },
  {
    id: 'biz-2',
    title: 'Como o inglês pode acelerar sua carreira profissional',
    excerpt: 'Profissionais bilíngues ganham até 60% mais. Veja como o domínio do inglês abre portas para promoções e vagas globais.',
    content: 'O mercado global não espera. Dominar o inglês não é mais um "plus", é o requisito mínimo para quem busca liberdade geográfica e salários competitivos. Com a fluência em 18 meses da OpenLife, você antecipa seus planos de carreira em anos.',
    category: 'Business',
    tags: ['Business', 'Sucesso'],
    date: '12/05/2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    slug: 'como-ingles-acelera-carreira-profissional'
  },
  // GAMES
  {
    id: 'game-1',
    title: '5 jogos que ajudam você a aprender inglês de forma divertida',
    excerpt: 'Aprender jogando é uma das formas mais eficientes de fixar vocabulário. Confira nossa lista de games ideais.',
    content: 'Games como The Sims, RPGs e até MOBAs online são laboratórios de imersão. Na OpenLife, usamos a gamificação para tornar o aprendizado viciante e eficaz, transformando o esforço de estudar em puro entretenimento.',
    category: 'Games',
    tags: ['Games', 'Dicas'],
    date: '10/05/2024',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
    slug: '5-jogos-aprender-ingles-divertido'
  },
  // TRIP
  {
    id: 'trip-1',
    title: 'Inglês para viagens: frases essenciais para não passar perrengue',
    excerpt: 'Vai viajar? Prepare-se com as frases mais importantes para aeroportos, hotéis e restaurantes.',
    content: 'Nada estraga mais uma viagem do que não conseguir pedir um prato ou entender uma instrução de voo. Nosso workshop de inglês para viagens foca no "Survival English", garantindo que sua única preocupação seja aproveitar o destino.',
    category: 'Trip',
    tags: ['Trip', 'Dicas'],
    date: '08/05/2024',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200',
    slug: 'ingles-para-viagens-frases-essenciais'
  },
  // SÉRIES E FILMES
  {
    id: 'movie-1',
    title: 'As melhores séries para aprender inglês com legendas (e depois sem!)',
    excerpt: 'Confira nosso guia de séries divididas por nível de dificuldade para treinar seu ouvido.',
    content: 'Series como Friends (iniciante) e The Crown (avançado) são ótimas para entender sotaques e gírias. O segredo é começar com legenda em inglês e, aos poucos, removê-la completamente para atingir a fluência auditiva total.',
    category: 'Séries e Filmes',
    tags: ['Séries e Filmes', 'Cultura'],
    date: '05/05/2024',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200',
    slug: 'melhores-series-aprender-ingles'
  },
  // INTERCÂMBIO
  {
    id: 'exchange-1',
    title: 'Como o inglês da OpenLife prepara você para o intercâmbio dos sonhos',
    excerpt: 'Não basta ir, é preciso estar preparado. Veja como nossa metodologia simula a vida no exterior antes mesmo de você embarcar.',
    content: 'Muitos alunos chegam ao intercâmbio e travam. Nosso método ESL cria um ambiente imersivo na própria escola, para que quando você chegar em Londres ou Nova York, se sinta em casa e aproveite cada segundo da experiência.',
    category: 'Intercâmbio',
    tags: ['Intercâmbio', 'Trip'],
    date: '01/05/2024',
    image: 'https://images.unsplash.com/photo-1523050335456-cda8a3a79eb1?auto=format&fit=crop&q=80&w=1200',
    slug: 'preparacao-intercambio-sonhos'
  }
];

export const LEVEL_QUESTIONS: LevelQuestion[] = [
  {
    id: 1,
    question: "Qual frase está gramaticalmente correta?",
    options: ["She go to school", "She goes to school", "She going to school", "She is go to school"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Complete: If I ____ you, I would study harder.",
    options: ["am", "was", "were", "be"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Qual o significado de 'I am looking forward to meeting you'?",
    options: ["Estou te procurando", "Estou ansioso para te encontrar", "Estou olhando para você", "Eu te encontrei atrás"],
    correctAnswer: 1
  }
];
