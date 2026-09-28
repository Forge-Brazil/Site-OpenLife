import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, Play, CheckCircle2, XCircle, Clock,
  MessageCircle, Globe, Zap, ArrowRight, MapPin, Award,
  ChevronDown, ChevronUp, List, Users, Target, TrendingUp,
} from 'lucide-react';
import { COURSES } from '../constants';
import { CITIES } from '../data/cities';
import { HOME_FAQ_CATEGORIES as faqData } from '../data/faq';
import NewsletterBox from '../components/NewsletterBox';
import { openSmartForm } from '../components/SmartForm';

const COURSE_LINKS: Record<string, string> = {
  kids: '/ingles-para-criancas',
  teens: '/ingles-para-adolescentes',
  journey: '/ingles-para-adultos',
  keep: '/cursos',
};

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  list: <List size={24} />,
  mapPin: <MapPin size={24} />,
  award: <Award size={24} />,
};

/* ── DADOS ──────────────────────────────────────────────────── */

const pillars = [
  {
    n: '01', icon: <MessageCircle />, title: 'Comunicação',
    desc: 'Você aprende inglês usando inglês. A aula é um ambiente real de conversação desde o primeiro dia — sem memorização de gramática isolada.',
  },
  {
    n: '02', icon: <Clock />, title: 'Contato Diário',
    desc: 'Exposição constante é o que separa quem evolui de quem estagna. Construímos o hábito com você — de forma leve e sustentável.',
  },
  {
    n: '03', icon: <Globe />, title: 'Não Tradução',
    desc: 'Você aprende a pensar em inglês, não a traduzir do português. O resultado é naturalidade real — não inglês "escola".',
  },
  {
    n: '04', icon: <Target />, title: 'Regularidade',
    desc: 'Pequenas ações diárias constroem grandes conquistas. Comprometimento com a frequência é o diferencial de quem chega à fluência.',
  },
];

const testimonials = [
  {
    text: 'Em 8 meses saí do básico para conduzir reuniões em inglês com o time nos EUA. Os horários flexíveis se encaixaram na minha agenda impossível.',
    name: 'Rafael Menezes', role: 'Gerente de Projetos · São Paulo', initials: 'RM', stars: 5,
  },
  {
    text: 'Tentei 3 cursos antes. Na OpenLife entendi que o problema não era eu — era o método. Em 14 meses fiz a transição de carreira que eu precisava.',
    name: 'Camila Torres', role: 'UX Designer · Porto Alegre', initials: 'CT', stars: 5,
  },
  {
    text: 'Consegui o IELTS 7.5 para o mestrado no Canadá. O preparo foi intenso, mas o professor sabia exatamente onde eu precisava melhorar.',
    name: 'Lucas Ferreira', role: 'Engenheiro · Belo Horizonte', initials: 'LF', stars: 5,
  },
];

const qualifiedYes = [
  'Tem um objetivo claro com o inglês (carreira, viagem, certificação)',
  'Disposto a se comprometer 30–45 min por dia',
  'Quer resultado mensurável, não só "aprender um pouco"',
  'Está pronto para adotar um método que realmente funciona',
];

const qualifiedNo = [
  'Quer "fazer inglês" sem metas ou prazo definido',
  'Acredita que fluência vem de forma passiva, sem disciplina',
];

const courseIcons = [<MessageCircle size={22} />, <Zap size={22} />, <Users size={22} />];

const FEATURED_CITIES = CITIES.slice(0, 6);

/* ── COMPONENTE ─────────────────────────────────────────────── */

const Home: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  return (
    <div className="overflow-hidden -mt-20">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-bgsoft pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Texto */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
                <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
                INGLÊS QUE SELECIONA PELO COMPROMETIMENTO
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05]">
                Inglês em<br />
                <span className="text-purple-brand">18 meses.</span><br />
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Não é um curso de inglês. É uma transformação com método comprovado,
                professores certificados e acompanhamento real. 100% online, para todo o Brasil.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => openSmartForm()}
                  className="inline-flex items-center justify-center gap-2 bg-purple-brand text-white px-8 py-4 rounded-full font-bold text-base hover:bg-purple-700 active:scale-95 transition-all shadow-lg shadow-purple-brand/25 min-h-[52px] touch-manipulation"
                >
                  Comece agora
                  <ArrowRight size={18} />
                </button>
                <Link
                  to="/metodologia"
                  className="inline-flex items-center justify-center gap-3 text-slate-700 font-semibold hover:text-purple-brand active:text-purple-brand transition-colors py-4 min-h-[52px] touch-manipulation"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                    <Play size={14} className="text-purple-brand ml-0.5" fill="currentColor" />
                  </div>
                  Ver o método
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-black text-slate-900">+66k</p>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide">Alunos Formados</p>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden sm:block" />
                <div className="text-center lg:text-left">
                  <div className="flex text-purple-brand justify-center lg:justify-start">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide mt-1">5.0 Google</p>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden sm:block" />
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-black text-slate-900">21+</p>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide">Anos transformando vidas</p>
                </div>
              </div>
            </div>

            {/* Foto hero */}
            <div className="relative flex items-center justify-center mt-4 lg:mt-0 order-first lg:order-last">
              <div className="relative w-full max-w-[560px] mx-auto">
                <img
                  src="/hero-home.webp"
                  alt="Professora OpenLife conduzindo aula online ao vivo"
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl shadow-purple-brand/10"
                  style={{ aspectRatio: '4/3' }}
                  loading="eager"
                  decoding="async"
                />
                {/* Badge flutuante */}
                <div className="absolute bottom-4 left-4 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/50 shadow-xl flex items-center gap-3 max-w-[240px]">
                  <div className="w-9 h-9 rounded-full bg-purple-brand flex items-center justify-center shrink-0">
                    <Play size={13} className="text-white ml-0.5" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-sm font-bold leading-tight">Aula 100% ao vivo</p>
                    <p className="text-slate-500 text-xs mt-0.5">Professor real desde o dia 1</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-bgsoft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              ENGENHARIA COMERCIAL
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              A OpenLife <span className="text-purple-brand">não é para todo mundo</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Selecionamos alunos pelo foco e comprometimento. Quem entra sabe onde quer chegar
              — e está disposto a trabalhar por isso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Qualificados */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Você está pronto se…</h3>
              </div>
              <ul className="space-y-4">
                {qualifiedYes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não qualificados + CTA */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <XCircle size={20} className="text-red-400" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Não é para você se…</h3>
                </div>
                <ul className="space-y-4">
                  {qualifiedNo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-purple-brand rounded-3xl p-8 text-white">
                <TrendingUp size={28} className="mb-4 text-white/80" />
                <p className="font-black text-xl mb-2">Pronto para ser selecionado?</p>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Nosso quiz identifica em 2 minutos se você está no perfil certo para a OpenLife.
                </p>
                <button
                  onClick={() => openSmartForm()}
                  className="w-full bg-white text-purple-brand font-bold py-3.5 rounded-2xl hover:bg-purple-50 active:scale-95 transition-all text-sm min-h-[48px] touch-manipulation"
                >
                  Comece agora →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOTO REAL + COPY ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-brand/10">
              <img
                src="/foto-aula.webp"
                alt="Aula ao vivo OpenLife English School — método imersivo"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/10' }}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-5 left-5 bg-purple-brand text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                Aula ao vivo
              </div>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
                <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
                COMO FUNCIONA NA PRÁTICA
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                Imersão real.<br />
                <span className="text-purple-brand">Como um intercâmbio</span><br />
                sem sair do Brasil.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Durante o programa, você vive o inglês no dia a dia — situações reais,
                conversas autênticas, desafios práticos que simulam um intercâmbio.
                Sem tradução. Sem decoreba.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Professores certificados', icon: <Award size={18} /> },
                  { label: 'Turmas com no máx. 8 alunos', icon: <Users size={18} /> },
                  { label: 'Aulas ao vivo toda semana', icon: <Globe size={18} /> },
                  { label: 'Certificação internacional', icon: <TrendingUp size={18} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-bgsoft rounded-2xl p-4">
                    <div className="w-9 h-9 rounded-xl bg-violet-100 text-purple-brand flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 text-sm font-semibold leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openSmartForm()}
                className="inline-flex items-center justify-center gap-2 bg-purple-brand text-white px-8 py-4 rounded-full font-bold text-base hover:bg-purple-700 active:scale-95 transition-all shadow-lg shadow-purple-brand/25 min-h-[52px] touch-manipulation"
              >
                Quero minha vaga <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── O MÉTODO — 4 PILARES ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              OS 4 PILARES
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              O método que explica os <span className="text-purple-brand">18 meses</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Não é magia — é engenharia de aprendizagem. Cada pilar tem uma razão
              científica e um impacto direto no seu resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:-translate-y-1 transition-all duration-200">
                <span className="absolute top-5 right-5 text-5xl font-black text-slate-100 select-none">{p.n}</span>
                <div className="w-11 h-11 bg-violet-50 text-purple-brand rounded-xl flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOTO TURMA + SOCIAL PROOF ─────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
                <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
                COMUNIDADE OPENLIFE
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                Mais que uma escola.<br />
                <span className="text-purple-brand">Uma comunidade</span><br />
                de alto padrão.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Quem estuda na OpenLife faz parte de uma rede de alunos comprometidos.
                A troca, o incentivo e o ambiente elevam o seu resultado além da sala de aula.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {['+66k alunos ativos', '5.0 Google', '21 anos de mercado', 'Certificação IELTS/TOEFL'].map((item, i) => (
                  <div key={i} className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-purple-brand text-sm font-semibold px-4 py-2 rounded-full">
                    <CheckCircle2 size={14} />
                    {item}
                  </div>
                ))}
              </div>
              <button
                onClick={() => openSmartForm()}
                className="inline-flex items-center gap-2 border-2 border-purple-brand text-purple-brand px-8 py-3.5 rounded-full font-bold text-base hover:bg-violet-50 active:scale-95 transition-all min-h-[52px] touch-manipulation"
              >
                Quero fazer parte <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-brand/10 order-1 lg:order-2">
              <img
                src="/foto-turma.webp"
                alt="Alunos e professor OpenLife English School em dinâmica de aula"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CURSOS & PRODUTOS ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
                <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
                CURSOS & PRODUTOS
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                Um caminho para <span className="text-purple-brand">cada objetivo</span>
              </h2>
              <p className="text-slate-500 max-w-md mx-auto md:mx-0">
                Do primeiro contato com o idioma à certificação internacional.
              </p>
            </div>
            <Link
              to="/cursos"
              className="inline-flex items-center justify-center gap-2 text-purple-brand border border-purple-200 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-violet-50 active:bg-violet-50 transition-colors shrink-0 self-center md:self-auto min-h-[44px] touch-manipulation"
            >
              Ver todos os cursos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {COURSES.slice(0, 3).map((course, i) => (
              <Link
                key={course.id}
                to={COURSE_LINKS[course.id] ?? '/cursos'}
                className={`group rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 ${
                  i === 1
                    ? 'border-purple-brand shadow-lg shadow-purple-brand/10'
                    : 'border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                {i === 1 && (
                  <div className="bg-purple-brand text-white text-center text-xs font-bold py-2 tracking-widest uppercase">
                    Mais popular
                  </div>
                )}
                <div className={`p-7 ${i === 1 ? 'bg-gradient-to-b from-violet-50 to-white' : 'bg-white'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    i === 1 ? 'bg-purple-brand text-white' : 'bg-violet-50 text-purple-brand'
                  }`}>
                    {courseIcons[i]}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{course.title}</h3>
                  <p className="text-purple-brand text-sm font-semibold mb-3">{course.focus}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{course.description}</p>
                  <div className={`mt-6 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    i === 1
                      ? 'bg-purple-brand text-white'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-purple-brand group-hover:text-white'
                  }`}>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLUÊNCIA PERTO DE VOCÊ ────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              100% ONLINE · TODO O BRASIL
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Fluência perto de <span className="text-purple-brand">você</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Online de verdade — com professor ao vivo, de qualquer cidade do Brasil.
              Conheça o movimento OpenLife na sua região.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_CITIES.map((city) => (
              <Link
                key={city.slug}
                to={`/curso-de-ingles-${city.slug}`}
                className="group relative bg-gradient-to-br from-purple-brand to-purple-deep rounded-2xl p-7 text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-brand/30 active:scale-95 transition-all overflow-hidden touch-manipulation"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    <MapPin size={11} />
                    {city.uf} · {city.region}
                  </div>
                  <h3 className="text-2xl font-black mb-1">{city.name}</h3>
                  <p className="text-white/70 text-sm mb-5 leading-relaxed">
                    Inglês com método ESL para quem mora em {city.name}.
                  </p>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                    Ver leitura da região
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              HISTÓRIAS REAIS
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Quem se comprometeu <span className="text-purple-brand">chegou lá</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Resultados de quem passou pelo processo de seleção e cumpriu o método.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:-translate-y-1 transition-all">
                <div className="flex mb-4">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} size={14} className="text-purple-brand" fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-brand flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              DÚVIDAS FREQUENTES
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-purple-brand">Perguntas frequentes</h2>
            <p className="text-slate-500">Tudo o que você precisa saber antes de iniciar.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-3xl overflow-hidden transition-all duration-300 bg-purple-brand ${expandedCategory === cat.id ? 'pb-5' : ''}`}
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-white text-left min-h-[64px] touch-manipulation"
                  aria-expanded={expandedCategory === cat.id}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 border border-white/20 rounded-xl shrink-0">
                      {CATEGORY_ICON[cat.icon]}
                    </div>
                    <span className="text-lg md:text-2xl font-bold tracking-tight">{cat.category}</span>
                  </div>
                  {expandedCategory === cat.id ? <ChevronUp size={22} className="shrink-0" /> : <ChevronDown size={22} className="shrink-0" />}
                </button>

                {expandedCategory === cat.id && (
                  <div className="px-5 space-y-2 animate-in">
                    {cat.questions.map((item) => (
                      <div key={item.q} className="bg-white/10 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setExpandedQuestion(expandedQuestion === item.q ? null : item.q)}
                          className="w-full flex items-center justify-between px-5 py-4 text-white text-left hover:bg-white/10 transition-colors min-h-[52px] touch-manipulation"
                          aria-expanded={expandedQuestion === item.q}
                        >
                          <span className="font-semibold pr-4 text-sm md:text-base leading-snug">{item.q}</span>
                          <ChevronDown size={18} className={`shrink-0 transition-transform ${expandedQuestion === item.q ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedQuestion === item.q && (
                          <div className="px-5 pb-5 text-white/90 text-sm leading-relaxed whitespace-pre-line border-t border-white/10 pt-4 animate-in">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterBox />
      </div>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-brand to-purple-deep rounded-[32px] overflow-hidden px-6 py-14 md:p-20 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white/90">
                <span>✦</span> VAGAS LIMITADAS POR TURMA
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Chegou a hora de falar inglês<br />
                <span className="text-violet-200">de verdade.</span>
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
                Dê o primeiro passo e comece a transformação OpenLife hoje — sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openSmartForm()}
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-brand px-8 py-4 rounded-full font-black text-base hover:bg-purple-50 active:scale-95 transition-all shadow-lg min-h-[56px] touch-manipulation"
                >
                  Comece agora
                  <ArrowRight size={18} />
                </button>
                <Link
                  to="/metodologia"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 active:bg-white/10 transition-all min-h-[56px] touch-manipulation"
                >
                  Conhecer o método
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
