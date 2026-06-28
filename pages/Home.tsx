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
  { level: 'A1 → A2', module: 'Módulo 1', title: 'Base Sólida',      months: 'Meses 1–3',   dot: 'bg-orange-brand' },
  { level: 'A2 → B1', module: 'Módulo 2', title: 'Comunicação',      months: 'Meses 4–7',   dot: 'bg-purple-brand' },
  { level: 'B1 → B2', module: 'Módulo 3', title: 'Fluência',         months: 'Meses 8–11',  dot: 'bg-purple-brand' },
  { level: 'B2 → C1', module: 'Módulo 4', title: 'Avançado',         months: 'Meses 12–15', dot: 'bg-purple-brand' },
  { level: 'C1 → C2', module: 'Módulo 5', title: 'Journey for Life', months: 'Meses 16–18', dot: 'bg-purple-brand' },
];

const personas = [
  {
    icon: <Briefcase size={22} strokeWidth={1.5} />,
    label: 'Executivos & Profissionais',
    pain: 'Perdendo vagas em multinacionais por falta de inglês fluente?',
    goal: 'Reuniões, negociações e apresentações em inglês. Big techs e empresas globais.',
    link: '/ingles-para-negocios',
    cta: 'Ver programa Business',
  },
  {
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    label: 'Universitários',
    pain: 'Quer estudar fora, tirar IELTS ou trabalhar em startup global?',
    goal: 'TOEFL, IELTS, intercâmbio, artigos científicos, pós no exterior.',
    link: '/ingles-para-adultos',
    cta: 'Ver programa Journey',
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    label: 'Adolescentes 13–17',
    pain: 'Quer garantir a carreira do seu filho antes da faculdade?',
    goal: 'Vestibular, SAT, intercâmbio, college americano — fluente aos 18.',
    link: '/ingles-para-adolescentes',
    cta: 'Ver programa Teens',
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    label: 'Kids 6–12 anos',
    pain: 'Quer bilinguismo real enquanto o cérebro ainda aprende com facilidade?',
    goal: 'Base C1 antes dos 18, bilinguismo precoce, vantagem para toda a vida.',
    link: '/ingles-para-criancas',
    cta: 'Ver programa Kids',
  },
];

const Home: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqData = [
    {
      id: 0,
      category: 'Informações sobre os cursos',
      icon: <List size={20} strokeWidth={1.5} />,
      questions: [
        { q: 'Quantas aulas por semana tem o curso?', a: '• Módulo 1: uma aula ao vivo + atividades diárias\n• Módulo 2: duas aulas ao vivo de 50 min + atividades diárias\n• Módulos 3, 4 e 5: três aulas ao vivo de 50 min + atividades diárias\n\nNo total são quase 500 horas de aulas e conteúdos.' },
        { q: 'Qual a duração do curso?', a: 'O curso completo — do nível básico ao avançado — é projetado para ser concluído em 18 meses.' },
        { q: 'Qual será meu nível ao me formar?', a: 'Capacitamos você ao nível C1/C2 do CEFR (Quadro Europeu). O último módulo (Journey for Life) é modelado nos exames da Cambridge University, preparando você para IELTS, TOEFL e afins.' },
        { q: 'O formato é intensivo?', a: 'A OpenLife é reconhecida como o curso mais intensivo de inglês do Brasil — metodologia ESL que simula imersão linguística total, com aprendizado até 4x mais rápido do que métodos tradicionais.' },
      ],
    },
    {
      id: 1,
      category: 'Funcionamento das escolas',
      icon: <MapPin size={20} strokeWidth={1.5} />,
      questions: [
        { q: 'Quais os horários das aulas?', a: 'Você agenda de acordo com sua rotina — sem horário fixo. Disponível de segunda a sexta das 9h às 22h, sábados das 9h às 17h.' },
        { q: 'Quantos alunos por aula?', a: 'Média de 4 alunos por turma. Turmas menores garantem atenção individualizada e muito mais prática de conversação.' },
        { q: 'Posso trancar para férias?', a: 'Sim. Pausas de 15 ou 30 dias disponíveis. Com pausas, o curso pode se estender até 21 meses.' },
        { q: 'Tem multa de cancelamento?', a: 'Sem contratos de fidelidade. Taxa administrativa de 10% sobre saldo devedor — muito abaixo da média do setor (30–50%).' },
      ],
    },
    {
      id: 2,
      category: 'Certificações',
      icon: <Award size={20} strokeWidth={1.5} />,
      questions: [
        { q: 'Precisa de certificado do MEC?', a: 'Cursos de idiomas são "cursos livres" — não precisam de MEC. Nossa qualidade segue o CEFR, padrão da Cambridge University reconhecido mundialmente.' },
        { q: 'Tem certificado ao final?', a: 'Sim. Certificado de conclusão com ~500 horas de imersão registradas e atestado do nível C1 adquirido.' },
        { q: 'Prepara para IELTS e TOEFL?', a: 'O módulo 5 (Journey for Life) prepara especificamente para exames internacionais de proficiência. Você estará pronto para IELTS, TOEFL, TOEIC e Cambridge English.' },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-white pt-16 pb-20 md:pt-28 md:pb-36">
        {/* Accent blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-purple-50 blur-3xl opacity-70"></div>
          <div className="absolute -bottom-16 -left-16 w-[380px] h-[380px] rounded-full bg-orange-50 blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left copy */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 text-purple-brand px-4 py-1.5 rounded-full text-xs font-semibold">
                <Zap size={13} strokeWidth={1.5} />
                <span>Método ESL — do A1 ao C1 fluente</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-slate-900 leading-[1.08] tracking-tight">
                Você não falou inglês até hoje porque{' '}
                <span className="text-purple-brand">nenhum método</span>{' '}
                foi feito para{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">a sua rotina.</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2 bg-orange-brand/20 rounded-full -z-0"></span>
                </span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                O <strong className="text-slate-700 font-semibold">Journey 18 Meses</strong> é o único programa ESL 100% imersivo
                que leva você do zero ao C1 — adaptado à sua rotina, online ou presencial,
                com certificação CEFR internacional.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-purple-brand text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-purple-900 transition-all shadow-sm hover:shadow-purple-brand/20 group"
                >
                  Agendar aula experimental grátis
                  <ArrowRight size={17} strokeWidth={1.5} className="ml-2 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/metodologia"
                  className="inline-flex items-center justify-center border border-slate-200 text-slate-600 px-7 py-3.5 rounded-full font-medium text-base hover:border-purple-brand hover:text-purple-brand transition-all"
                >
                  Ver metodologia
                </Link>
              </div>

              {/* Social proof row */}
              <div className="flex items-center gap-5 pt-1 flex-wrap">
                {[
                  { n: '+66k',  l: 'Alunos Fluentes' },
                  { n: '5.0',   l: 'Estrelas Google', stars: true },
                  { n: '18 m',  l: 'Meses ao Fluente' },
                  { n: '21+',   l: 'Anos de História' },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="h-8 w-px bg-slate-100"></div>}
                    <div>
                      {s.stars ? (
                        <div className="flex text-orange-brand mb-0.5">
                          {[1,2,3,4,5].map(j => <Star key={j} size={13} strokeWidth={1.5} fill="currentColor" />)}
                        </div>
                      ) : (
                        <p className="text-xl font-black text-slate-900 leading-tight">{s.n}</p>
                      )}
                      <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">{s.l}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right image */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 bg-purple-50 rounded-[48px] blur-2xl opacity-60 pointer-events-none"></div>
              <div className="relative rounded-[28px] overflow-hidden shadow-xl border border-white">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200"
                  alt="Alunos estudando inglês com método ESL imersivo"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-7">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-full flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-semibold">Imersão Total ESL</p>
                      <p className="text-white/60 text-xs">100% em inglês desde o dia 1</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-brand/90 text-white rounded-full flex items-center justify-center">
                      <Play size={16} strokeWidth={1.5} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-md border border-slate-100 p-3.5 flex items-center space-x-3">
                <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={18} strokeWidth={1.5} className="text-purple-brand" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Online · Presencial</p>
                  <p className="text-[10px] text-slate-400">Em todo o Brasil</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-md border border-slate-100 p-3.5 flex items-center space-x-3">
                <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center">
                  <Award size={18} strokeWidth={1.5} className="text-orange-brand" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">CEFR C1/C2</p>
                  <p className="text-[10px] text-slate-400">Certificação Internacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ─────────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-page text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-400 text-sm font-medium mb-3 uppercase tracking-widest">
            Este <strong className="text-slate-600">não</strong> é um curso de inglês tradicional
          </p>
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-[120px] font-black text-purple-brand uppercase tracking-tighter leading-none select-none">
              DIFERENTE
            </h2>
            <div className="absolute top-1/2 left-0 w-[110%] h-1.5 md:h-2.5 bg-orange-brand -translate-y-1/2 -ml-[5%] rounded-full opacity-70"></div>
          </div>
          <p className="text-slate-400 text-sm font-medium mt-3 uppercase tracking-widest">
            É uma transformação de vida — em <strong className="text-slate-600">18 meses.</strong>
          </p>
        </div>
      </section>

      {/* ── PERSONAS ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block bg-purple-50 text-purple-brand border border-purple-200 text-[11px] font-bold uppercase tracking-[0.15em] px-3.5 py-1 rounded-full">Para quem é</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              O Journey foi construído <span className="text-purple-brand">para você</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              Independente da sua idade, rotina ou objetivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {personas.map((p, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-7 flex flex-col space-y-4 hover:border-purple-brand hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-purple-brand group-hover:bg-purple-brand group-hover:border-purple-brand group-hover:text-white transition-all shadow-sm">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{p.label}</h3>
                  <p className="text-xs text-slate-400 italic leading-relaxed">"{p.pain}"</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed flex-grow">{p.goal}</p>
                <Link
                  to={p.link}
                  className="inline-flex items-center text-purple-brand text-xs font-semibold hover:text-purple-900 transition-colors group/link"
                >
                  {p.cta}
                  <ArrowRight size={13} strokeWidth={1.5} className="ml-1 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ──────────────────────────────────── */}
      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block bg-purple-50 text-purple-brand border border-purple-200 text-[11px] font-bold uppercase tracking-[0.15em] px-3.5 py-1 rounded-full">O método</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Journey 18 Meses —{' '}
              <span className="text-purple-brand">do A1 ao C1</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              5 módulos progressivos · +500h de imersão · Certificação CEFR
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {journeySteps.map((step, i) => (
              <div
                key={i}
                className={`bg-white border rounded-2xl p-5 space-y-3 hover:border-purple-brand hover:shadow-sm transition-all ${
                  i === 0 ? 'border-orange-brand/30' : 'border-slate-100'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${step.dot}`}></div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{step.module}</span>
                </div>
                <p className="text-base font-black text-slate-900">{step.title}</p>
                <p className="text-xs font-semibold text-purple-brand">{step.level}</p>
                <p className="text-[10px] text-slate-400 font-medium">{step.months}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {['Certificado de conclusão CEFR', '+500h de imersão registradas', 'Prep para IELTS & TOEFL no módulo 5'].map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle2 size={16} strokeWidth={1.5} className="text-purple-brand" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Diferenciais que <span className="text-purple-brand">aceleram sua fluência</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              Tudo que métodos tradicionais não oferecem — reunido em uma só plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Clock size={20} strokeWidth={1.5} />,          title: 'Fluência em 18 meses',       desc: 'Resultados reais. Não em 5 anos como no método tradicional.' },
              { icon: <Award size={20} strokeWidth={1.5} />,          title: 'Certificação Internacional', desc: 'Formação alinhada ao CEFR C1/C2 — padrão Cambridge.' },
              { icon: <MessageCircle size={20} strokeWidth={1.5} />,  title: 'Contato Diário',             desc: 'Aulas dinâmicas + plataforma gamificada para prática diária.' },
              { icon: <Zap size={20} strokeWidth={1.5} />,            title: 'Metodologia ESL',            desc: 'Pense direto em inglês — sem tradução mental.' },
              { icon: <Users size={20} strokeWidth={1.5} />,          title: 'Turmas Pequenas',            desc: 'Média de 4 alunos. Atenção total do professor.' },
              { icon: <Clock size={20} strokeWidth={1.5} />,          title: 'Horários Flexíveis',         desc: 'Segunda a sábado, 9h–22h, adaptado à sua rotina.' },
              { icon: <Globe size={20} strokeWidth={1.5} />,          title: 'Ambiente 100% Inglês',       desc: 'Imersão total desde o primeiro dia, sem português.' },
              { icon: <BookOpen size={20} strokeWidth={1.5} />,       title: 'Suporte a Intercâmbio',      desc: 'Preparação completa para intercâmbio e vida no exterior.' },
            ].map((b, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:border-purple-brand hover:bg-white hover:shadow-sm transition-all group cursor-default">
                <div className="w-10 h-10 bg-white border border-slate-100 text-slate-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-brand group-hover:text-white group-hover:border-purple-brand transition-all shadow-sm">
                  {b.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-purple-brand transition-colors">{b.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURSOS ────────────────────────────────────────────── */}
      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block bg-purple-50 text-purple-brand border border-purple-200 text-[11px] font-bold uppercase tracking-[0.15em] px-3.5 py-1 rounded-full">Programas</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Escolha o <span className="text-purple-brand">programa ideal</span> para você
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Metodologia validada por +66 mil alunos — online ou presencial.
            </p>
            <Link to="/cursos" className="inline-flex items-center text-purple-brand font-medium text-sm hover:text-purple-900 transition-colors">
              Ver todos os programas <ArrowRight size={15} strokeWidth={1.5} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COURSES.map((course) => (
              <div key={course.id} className="group relative bg-slate-100 rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent p-5 flex flex-col justify-end">
                  <span className="text-orange-brand font-semibold text-[10px] uppercase tracking-widest mb-1.5">{course.focus}</span>
                  <h3 className="text-white text-xl font-black mb-0.5">{course.title}</h3>
                  <p className="text-white/60 text-xs mb-4">{course.age}</p>
                  <Link
                    to="/cursos"
                    className="bg-white text-slate-900 text-center py-2.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-brand hover:text-white"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block bg-purple-50 text-purple-brand border border-purple-200 text-[11px] font-bold uppercase tracking-[0.15em] px-3.5 py-1 rounded-full">Dúvidas frequentes</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Tudo que você precisa <span className="text-purple-brand">saber</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-2xl overflow-hidden transition-all border ${
                  expandedCategory === cat.id
                    ? 'bg-purple-50 border-purple-200'
                    : 'bg-white border-slate-100 hover:border-purple-100'
                }`}
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                    expandedCategory === cat.id ? 'text-purple-brand' : 'text-slate-700 hover:text-purple-brand'
                  }`}
                  aria-expanded={expandedCategory === cat.id}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      expandedCategory === cat.id
                        ? 'border-purple-200 text-purple-brand bg-white'
                        : 'border-slate-200 text-slate-400 bg-slate-50'
                    }`}>{cat.icon}</div>
                    <span className="font-semibold text-base">{cat.category}</span>
                  </div>
                  {expandedCategory === cat.id
                    ? <ChevronUp size={18} strokeWidth={1.5} className="text-purple-brand shrink-0" />
                    : <ChevronDown size={18} strokeWidth={1.5} className="text-slate-400 shrink-0" />}
                </button>

                {expandedCategory === cat.id && (
                  <div className="px-5 pb-5 space-y-2 animate-in">
                    {cat.questions.map((item, qIdx) => (
                      <div key={qIdx} className="bg-white border border-purple-100 rounded-xl overflow-hidden shadow-sm">
                        <button
                          onClick={() => setExpandedQuestion(expandedQuestion === item.q ? null : item.q)}
                          className="w-full flex items-center justify-between p-4 text-slate-800 text-left hover:bg-purple-50 transition-colors"
                        >
                          <span className="font-medium text-sm pr-4">{item.q}</span>
                          <ChevronDown
                            size={16}
                            strokeWidth={1.5}
                            className={`text-purple-brand shrink-0 transition-transform ${expandedQuestion === item.q ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {expandedQuestion === item.q && (
                          <div className="px-4 pb-4 pt-0 text-slate-600 text-sm leading-relaxed whitespace-pre-line border-t border-purple-50">
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

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden relative p-10 md:p-20 text-center" style={{ backgroundColor: '#1A1033' }}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Orange accent dot */}
            <div className="relative z-10 space-y-6">
              <div className="flex justify-center">
                <span className="inline-block w-8 h-1 bg-orange-brand rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Sua jornada rumo à fluência começa hoje.
              </h2>
              <p className="text-purple-200 text-lg max-w-xl mx-auto">
                Aula experimental com professor certificado. Totalmente gratuita.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-brand text-white px-9 py-4 rounded-full font-bold text-base hover:bg-purple-900 transition-all shadow-sm group"
                >
                  Agendar Aula Grátis Agora
                  <ArrowRight size={17} strokeWidth={1.5} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="flex items-center space-x-2 text-white/50">
                  <CheckCircle2 size={15} strokeWidth={1.5} className="text-orange-brand" />
                  <span className="text-sm">100% gratuita · sem cartão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
