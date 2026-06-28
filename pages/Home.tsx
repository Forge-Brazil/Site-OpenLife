import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Star, Play, CheckCircle2, Clock,
  MessageCircle, Globe, Zap, ArrowRight, BookOpen, MapPin, Award,
  ChevronDown, ChevronUp, List, Briefcase, GraduationCap, TrendingUp, Heart
} from 'lucide-react';
import { COURSES } from '../constants';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const journeySteps = [
  { level: 'A1 → A2', module: 'Módulo 1', title: 'Base Sólida', months: 'Meses 1–3', color: 'border-orange-brand text-orange-brand bg-orange-50', dot: 'bg-orange-brand' },
  { level: 'A2 → B1', module: 'Módulo 2', title: 'Comunicação', months: 'Meses 4–7', color: 'border-purple-brand text-purple-brand bg-purple-50', dot: 'bg-purple-brand' },
  { level: 'B1 → B2', module: 'Módulo 3', title: 'Fluência', months: 'Meses 8–11', color: 'border-indigo-500 text-indigo-600 bg-indigo-50', dot: 'bg-indigo-500' },
  { level: 'B2 → C1', module: 'Módulo 4', title: 'Avançado', months: 'Meses 12–15', color: 'border-violet-500 text-violet-600 bg-violet-50', dot: 'bg-violet-500' },
  { level: 'C1 → C2', module: 'Módulo 5', title: 'Journey for Life', months: 'Meses 16–18', color: 'border-emerald-500 text-emerald-600 bg-emerald-50', dot: 'bg-emerald-500' },
];

const personas = [
  {
    icon: <Briefcase size={28} />,
    label: 'Executivos & Profissionais',
    pain: 'Perdendo vagas em multinacionais por falta de inglês fluente?',
    goal: 'Reuniões, negociações e apresentações em inglês. Abra as portas de big techs e empresas globais.',
    link: '/ingles-para-negocios',
    cta: 'Ver programa Business',
    accent: 'text-purple-brand border-purple-brand bg-purple-50',
    btn: 'bg-purple-brand hover:bg-purple-900',
  },
  {
    icon: <GraduationCap size={28} />,
    label: 'Universitários',
    pain: 'Quer estudar fora, tirar IELTS ou trabalhar em startup global?',
    goal: 'TOEFL, IELTS, intercâmbio, artigos científicos, pós em Harvard ou Oxford.',
    link: '/ingles-para-adultos',
    cta: 'Ver programa Journey',
    accent: 'text-orange-brand border-orange-brand bg-orange-50',
    btn: 'bg-orange-brand hover:bg-orange-600',
  },
  {
    icon: <TrendingUp size={28} />,
    label: 'Adolescentes 13–17',
    pain: 'Quer garantir a carreira do seu filho antes da faculdade?',
    goal: 'Vestibular, SAT, intercâmbio, college americano e um currículo que abre portas aos 18.',
    link: '/ingles-para-adolescentes',
    cta: 'Ver programa Teens',
    accent: 'text-indigo-600 border-indigo-400 bg-indigo-50',
    btn: 'bg-indigo-600 hover:bg-indigo-700',
  },
  {
    icon: <Heart size={28} />,
    label: 'Kids 6–12 anos',
    pain: 'Quer bilinguismo real enquanto o cérebro ainda aprende com facilidade?',
    goal: 'Base C1 antes dos 18, bilinguismo precoce, vantagem cognitiva e afetiva para toda a vida.',
    link: '/ingles-para-criancas',
    cta: 'Ver programa Kids',
    accent: 'text-emerald-600 border-emerald-400 bg-emerald-50',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
  },
];

const Home: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqData = [
    {
      id: 0,
      category: 'Informações sobre os cursos',
      icon: <List size={24} />,
      questions: [
        { q: 'Quantas aulas por semana tem o curso?', a: 'Nosso curso tem a seguinte estrutura semanal:\n\n- Módulo 1: Uma aula ao vivo e atividades diárias no material interativo.\n- Módulo 2: Duas aulas ao vivo de 50 minutos e atividades diárias.\n- Módulo 3, 4 e 5: Três aulas ao vivo de 50 minutos e atividades diárias.\n\nAs aulas e atividades no material são dinâmicas, interativas e oferecem uma experiência de aprendizado significativa. No total são quase 500 horas de aulas e conteúdos.' },
        { q: 'Qual a duração do curso?', a: 'O curso completo, do nível básico ao avançado, é projetado para ser concluído em 18 meses.' },
        { q: 'Qual será meu nível quando me formar?', a: 'A OpenLife tem como objetivo capacitar você ao nível avançado C1/C2 do CEFR. O último módulo (Journey for Life) é modelado em torno do exame de proficiência EF da Cambridge University, preparando você para IELTS, TOEFL e outras certificações internacionais.' },
        { q: 'Como funciona o material didático?', a: 'Material desenvolvido para proporcionar o melhor da didática e tecnologia. Abordagem atual e relevante com conteúdos conectados à realidade do aluno — fala, leitura, escrita, audição, vocabulário e pensamento em inglês. Plataforma intuitiva com apps exclusivos para iOS, Android, desktop e mobile.' },
        { q: 'Tem um formato mais intensivo?', a: 'A OpenLife é reconhecida por ser o curso mais intensivo de inglês do Brasil. Nossa metodologia ESL simula imersão linguística total, permitindo aprender até 4x mais rápido. Equivalente a 6-12 meses de estudo no exterior.' },
      ],
    },
    {
      id: 1,
      category: 'Funcionamento das escolas',
      icon: <MapPin size={24} />,
      questions: [
        { q: 'Quais os horários e dias das aulas?', a: 'Na OpenLife, você agenda suas aulas de acordo com sua rotina. As marcações podem ser feitas semanalmente, sem um horário fixo, em comum acordo com a agenda da escola. A agenda está disponível de segunda a sexta, das 9h às 22h, e aos sábados das 9h às 17h.' },
        { q: 'Quantos alunos têm por aula?', a: 'Nossas aulas contam com uma média de 4 alunos, podendo chegar até 8 em certas atividades. Turmas menores garantem atenção individualizada e máximo aproveitamento.' },
        { q: 'Posso trancar minha matrícula para férias?', a: 'Sim! Oferecemos pausas de um mês cada ou de 15 em 15 dias. Se as pausas forem usadas, o curso pode se estender por até 21 meses, permitindo flexibilidade para aprender no seu ritmo.' },
        { q: 'Tem multa de cancelamento?', a: 'Na OpenLife, não temos contratos de fidelidade. Se houver cancelamento, aplicamos uma taxa administrativa de apenas 10% sobre o saldo devedor — muito abaixo da média do setor (30-50%).' },
      ],
    },
    {
      id: 2,
      category: 'Certificações e Dúvidas',
      icon: <Award size={24} />,
      questions: [
        { q: 'Tem certificado do MEC?', a: 'Cursos de idiomas são "cursos livres" e não necessitam de autorização do MEC (essa regra é apenas para universidades). Nossa qualidade é assegurada pelo CEFR — padrão internacionalmente reconhecido pela Cambridge University, Oxford e todos os países do mundo.' },
        { q: 'O certificado é válido em todos os lugares?', a: 'Focamos na fluência real (C1/C2 CEFR). O módulo Journey for Life prepara para a certificação EF da Cambridge. Além disso, você estará preparado para IELTS, TOEFL, TOEIC e outros exames internacionais conforme sua necessidade profissional.' },
        { q: 'A OpenLife entrega certificado ao final?', a: 'Sim! Certificado de conclusão com quase 500 horas de imersão registradas e atestado de fluência adquirida.' },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-36 bg-white">
        {/* Subtle background accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-brand/5 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-orange-brand/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 text-orange-brand px-4 py-1.5 rounded-full text-sm font-bold">
                <Zap size={14} />
                <span>Método ESL — do A1 ao C1 fluente</span>
              </div>

              <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-black text-slate-900 leading-[1.05] tracking-tight">
                Você não falou inglês até hoje porque{' '}
                <span className="text-purple-brand">nenhum método</span>{' '}
                foi feito para{' '}
                <span className="text-orange-brand">a sua rotina.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
                O <strong className="text-slate-700">Journey 18 Meses</strong> é o único programa ESL 100% imersivo
                que leva você do zero ao C1 — adaptado à sua rotina, online ou presencial,
                com certificação internacional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-orange-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-brand/20 group"
                >
                  Agendar aula experimental grátis
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </a>
                <Link
                  to="/metodologia"
                  className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-purple-brand hover:text-purple-brand transition-all"
                >
                  Ver a metodologia
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 pt-2 flex-wrap">
                <div>
                  <p className="text-2xl font-black text-slate-900">+66k</p>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Alunos Fluentes</p>
                </div>
                <div className="h-10 w-px bg-slate-100"></div>
                <div>
                  <div className="flex text-orange-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={15} fill="currentColor" />)}
                  </div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-0.5">5.0 no Google</p>
                </div>
                <div className="h-10 w-px bg-slate-100"></div>
                <div>
                  <p className="text-2xl font-black text-slate-900">18</p>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Meses ao Fluente</p>
                </div>
                <div className="h-10 w-px bg-slate-100"></div>
                <div>
                  <p className="text-2xl font-black text-slate-900">21+</p>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Anos de História</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-brand/10 to-orange-brand/5 rounded-full blur-3xl"></div>
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200"
                  alt="Alunos estudando inglês online com método ESL imersivo"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-full flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-bold">Imersão Total ESL</p>
                      <p className="text-white/70 text-xs">Aulas 100% em inglês desde o dia 1</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-brand text-white rounded-full flex items-center justify-center">
                      <Play fill="currentColor" size={18} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">Online • Presencial</p>
                    <p className="text-xs text-slate-400">Em todo o Brasil</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Award size={20} className="text-orange-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">CEFR C1/C2</p>
                    <p className="text-xs text-slate-400">Certificação Internacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ─────────────────────────────────────────────────────── */}
      <section className="py-10 md:py-16 bg-slate-50 text-center overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-500 text-base md:text-lg font-medium mb-3">
            Este <strong className="text-slate-800">não</strong> é um curso de inglês tradicional
          </p>
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-[130px] font-black text-purple-brand uppercase tracking-tighter leading-none select-none">
              DIFERENTE
            </h2>
            <div className="absolute top-1/2 left-0 w-[110%] h-2 md:h-3 bg-orange-brand -translate-y-1/2 -ml-[5%] rounded-full opacity-80"></div>
          </div>
          <p className="text-slate-500 text-base md:text-lg font-medium mt-3">
            É uma transformação de vida — e ela começa em <strong className="text-slate-800">18 meses.</strong>
          </p>
        </div>
      </section>

      {/* ── PERSONAS ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-brand font-black text-xs uppercase tracking-[0.2em]">Para quem é</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              O Journey foi construído <span className="text-purple-brand">para você</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Independente da sua idade, rotina ou objetivo. Temos um programa feito para o seu perfil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personas.map((p, i) => (
              <div key={i} className={`border-2 rounded-3xl p-8 flex flex-col space-y-5 hover:shadow-xl transition-all hover:-translate-y-1 ${p.accent}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm ${p.accent.split(' ')[0]}`}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{p.label}</h3>
                  <p className="text-sm text-slate-600 italic leading-relaxed">"{p.pain}"</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{p.goal}</p>
                <Link
                  to={p.link}
                  className={`inline-flex items-center justify-center text-white text-sm font-bold px-6 py-3 rounded-xl transition-all ${p.btn}`}
                >
                  {p.cta} <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ──────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-purple-brand font-black text-xs uppercase tracking-[0.2em]">O método</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Journey 18 Meses —{' '}
              <span className="text-purple-brand">do A1 ao C1</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              5 módulos progressivos, +500 horas de imersão, certificação CEFR ao final.
              Uma jornada estruturada para que você nunca abandone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journeySteps.map((step, i) => (
              <div key={i} className={`border-2 rounded-2xl p-6 space-y-3 ${step.color}`}>
                <div className="flex items-center space-x-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${step.dot}`}></div>
                  <span className="text-xs font-black uppercase tracking-widest opacity-70">{step.module}</span>
                </div>
                <p className="text-xl font-black text-slate-900">{step.title}</p>
                <p className="text-sm font-bold">{step.level}</p>
                <p className="text-xs text-slate-400 font-medium">{step.months}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center space-x-3 text-slate-600">
              <CheckCircle2 size={20} className="text-emerald-500" />
              <span className="text-sm font-medium">Certificado de conclusão CEFR</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <CheckCircle2 size={20} className="text-emerald-500" />
              <span className="text-sm font-medium">+500h de imersão registradas</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <CheckCircle2 size={20} className="text-emerald-500" />
              <span className="text-sm font-medium">Prep para IELTS & TOEFL no módulo 5</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              <span className="text-orange-brand">Diferenciais</span>{' '}
              <span className="text-purple-brand">que aceleram</span>{' '}
              <span className="text-orange-brand">sua fluência</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Tudo que métodos tradicionais não oferecem — reunido em uma só plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock />, title: 'Fluência em 18 meses', desc: 'Resultados reais e consistentes, não em 5 anos como no método tradicional.' },
              { icon: <Award />, title: 'Certificação Internacional', desc: 'Formação com foco nos padrões internacionais de proficiência CEFR C1/C2.' },
              { icon: <MessageCircle />, title: 'Contato Diário', desc: 'Aulas dinâmicas aliadas a uma plataforma gamificada para prática diária.' },
              { icon: <Zap />, title: 'Metodologia ESL', desc: 'Aprenda a pensar direto em inglês, eliminando a tradução mental para sempre.' },
              { icon: <Users />, title: 'Turmas Pequenas', desc: 'Máximo aproveitamento com média de 4 alunos por turma para atenção total.' },
              { icon: <Clock />, title: 'Horários Flexíveis', desc: 'Estude de segunda a sábado, adaptando o curso à sua rotina profissional.' },
              { icon: <Globe />, title: 'Ambiente 100% Inglês', desc: 'Imersão total desde a recepção da escola para uma experiência autêntica.' },
              { icon: <BookOpen />, title: 'Suporte a Intercâmbio', desc: 'Preparação completa para intercâmbio acadêmico, profissional e turístico.' },
            ].map((b, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-default">
                <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-brand group-hover:text-white transition-all">
                  {b.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-purple-brand transition-colors">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURSOS ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-brand font-black text-xs uppercase tracking-[0.2em]">Programas</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Conheça o curso ideal que vai{' '}
              <span className="text-purple-brand">transformar seu inglês</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Metodologia validada por +66 mil alunos — online ou presencial, adaptada à sua faixa etária e objetivo.
            </p>
            <Link to="/cursos" className="inline-flex items-center text-orange-brand font-bold hover:text-purple-brand transition-colors text-sm">
              Ver todos os programas <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {COURSES.map((course) => (
              <div key={course.id} className="group relative bg-slate-100 rounded-3xl overflow-hidden aspect-[3/4]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-orange-brand font-bold text-xs uppercase tracking-widest mb-2">{course.focus}</span>
                  <h3 className="text-white text-2xl font-black mb-1">{course.title}</h3>
                  <p className="text-white/70 text-xs mb-4">{course.age}</p>
                  <Link
                    to="/cursos"
                    className="bg-white text-slate-900 text-center py-2.5 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-brand font-black text-xs uppercase tracking-[0.2em]">Perguntas frequentes</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Tudo que você precisa <span className="text-purple-brand">saber</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((cat) => (
              <div key={cat.id} className={`rounded-[28px] overflow-hidden transition-all duration-300 bg-purple-brand ${expandedCategory === cat.id ? 'pb-4' : ''}`}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className="w-full flex items-center justify-between p-6 text-white text-left"
                  aria-expanded={expandedCategory === cat.id}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 border border-white/20 rounded-xl">{cat.icon}</div>
                    <span className="text-lg md:text-xl font-bold">{cat.category}</span>
                  </div>
                  {expandedCategory === cat.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>

                {expandedCategory === cat.id && (
                  <div className="px-5 pb-2 space-y-2">
                    {cat.questions.map((item, qIdx) => (
                      <div key={qIdx} className="bg-white/10 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setExpandedQuestion(expandedQuestion === item.q ? null : item.q)}
                          className="w-full flex items-center justify-between p-5 text-white text-left hover:bg-white/10 transition-colors"
                        >
                          <span className="font-semibold text-sm pr-4">{item.q}</span>
                          {expandedQuestion === item.q ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                        </button>
                        {expandedQuestion === item.q && (
                          <div className="p-5 pt-0 text-white/80 text-sm leading-relaxed whitespace-pre-line border-t border-white/10">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-brand rounded-[40px] overflow-hidden relative p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-brand/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <span className="inline-block bg-white/10 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                Vagas Limitadas
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Sua jornada rumo à fluência começa hoje.
              </h2>
              <p className="text-purple-100 text-xl max-w-2xl mx-auto">
                Agende sua aula experimental com um de nossos professores certificados.
                Totalmente gratuita, sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-orange-brand text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-black/20 group"
                >
                  Agendar Aula Grátis Agora
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={22} />
                </a>
                <div className="flex items-center space-x-2 text-white/70">
                  <CheckCircle2 className="text-orange-brand" size={20} />
                  <span className="text-sm font-medium">100% gratuita, sem cartão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Inline ChevronRight (avoiding import conflict with lucide)
const ChevronRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Home;
