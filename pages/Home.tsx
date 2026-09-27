import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Star, Play, CheckCircle2, Clock,
  MessageCircle, Globe, Zap, ArrowRight, MapPin, Award,
  ChevronDown, ChevronUp, List,
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

const benefits = [
  { icon: <MessageCircle />, title: 'Fala desde a 1ª aula', desc: 'Método comunicativo: você conversa em inglês no primeiro dia, sem decoreba de gramática.' },
  { icon: <Users />, title: 'Turmas reduzidas', desc: 'Mais tempo de fala por aluno e acompanhamento próximo de professores certificados.' },
  { icon: <Globe />, title: '100% online, de verdade', desc: 'Aulas ao vivo com professor de verdade, de qualquer lugar do Brasil — sem vídeo gravado.' },
  { icon: <Clock />, title: 'Evolução mensurável', desc: 'Trilhas por nível, relatórios de progresso e metas claras a cada etapa do curso.' },
  { icon: <Award />, title: 'Certificação internacional', desc: 'Preparação para IELTS, TOEFL e Cambridge com simulados e correção detalhada.' },
  { icon: <Zap />, title: 'Tecnologia imersiva', desc: 'App de reforço, laboratório de conversação e recursos interativos dentro e fora da aula.' },
];

const pillars = [
  {
    n: '01', icon: <MessageCircle />, title: 'Imersão comunicativa',
    desc: 'Você aprende inglês usando inglês. A aula é um ambiente real de conversação, não uma aula de gramática tradicional.',
  },
  {
    n: '02', icon: <Zap />, title: 'Prática deliberada',
    desc: 'Repetição espaçada, feedback constante e tecnologia de reforço fixam o que você aprende — de forma leve e contínua.',
  },
  {
    n: '03', icon: <Award />, title: 'Resultado comprovado',
    desc: 'Trilhas por nível alinhadas ao CEFR e preparação para exames internacionais. Progresso que você vê e certifica.',
  },
];

const courseIcons = [<MessageCircle size={22} />, <Zap size={22} />, <Users size={22} />];

const testimonials = [
  {
    text: 'Em 8 meses saí do básico para conduzir reuniões em inglês com o time nos EUA. Os horários flexíveis se encaixaram na minha agenda impossível.',
    name: 'Rafael Menezes', sub: 'Journey for Life · São Paulo', initials: 'RM',
  },
  {
    text: 'Minha filha ama as aulas. Ela fala inglês em casa sem perceber — a abordagem lúdica do OpenKids é surreal de boa.',
    name: 'Patrícia Alves', sub: 'OpenKids · Belo Horizonte', initials: 'PA',
  },
  {
    text: 'Precisava do IELTS 7.0 para o mestrado no Canadá. Consegui 7.5 com os simulados e o preparo da OpenLife.',
    name: 'Camila Torres', sub: 'Journey for Life · Porto Alegre', initials: 'CT',
  },
];

const FEATURED_CITIES = CITIES.slice(0, 6);

const Home: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  return (
    <div className="overflow-hidden -mt-20">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-bgsoft pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Texto */}
            <div className="space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
                <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
                A ESCOLA ESL DO BRASIL
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05]">
                Forje o seu<br />
                <span className="text-purple-brand">inglês.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Metodologia imersiva ESL com aulas ao vivo, turmas pequenas e certificação internacional.
                Online para todo o Brasil.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => openSmartForm()}
                  className="inline-flex items-center justify-center gap-2 bg-purple-brand text-white px-8 py-4 rounded-full font-bold text-base hover:bg-purple-700 transition-all shadow-lg shadow-purple-brand/25 min-h-[52px]"
                >
                  Agende uma aula grátis
                  <ArrowRight size={18} />
                </button>
                <Link
                  to="/metodologia"
                  className="inline-flex items-center justify-center gap-3 text-slate-700 font-semibold hover:text-purple-brand transition-colors py-4 min-h-[52px]"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                    <Play size={14} className="text-purple-brand ml-0.5" fill="currentColor" />
                  </div>
                  Ver o método
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2">
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-black text-slate-900">+66k</p>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide">Alunos Fluentes</p>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden sm:block" />
                <div className="text-center lg:text-left">
                  <div className="flex text-purple-brand justify-center lg:justify-start">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide mt-1">5.0 Google</p>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden sm:block" />
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-black text-slate-900">21+</p>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide">Anos de mercado</p>
                </div>
              </div>
            </div>

            {/* Orb visual — estilo Forge */}
            <div className="relative flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-purple-brand to-purple-deep orb-glow">
                  <div className="absolute top-[22%] right-[22%] w-8 h-8 rounded-full bg-white/70 blur-[6px]" />
                  <div className="absolute top-[34%] right-[38%] w-3 h-3 rounded-full bg-white/50 blur-[3px]" />
                </div>
              </div>

              {/* Shapes decorativos */}
              <div className="absolute top-0 right-2 sm:right-8 w-12 h-12 sm:w-20 sm:h-20 bg-purple-200/60 rounded-md rotate-45 opacity-60" />
              <div className="absolute bottom-6 right-0 w-9 h-9 sm:w-14 sm:h-14 bg-purple-300/40 rounded-md rotate-12" />

              {/* Badge flutuante */}
              <div className="absolute bottom-4 left-0 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/50 shadow-xl max-w-[190px]">
                <p className="text-slate-900 text-sm font-bold leading-tight">Imersão Total ESL</p>
                <p className="text-slate-500 text-xs mt-0.5">Aulas 100% em inglês desde o dia 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE A OPENLIFE ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              POR QUE A OPENLIFE
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Uma escola construída para<br className="hidden md:block" />
              <span className="text-purple-brand"> resultado real</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Cada detalhe do método existe para uma coisa: fazer você falar inglês com confiança,
              no menor tempo possível.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`p-7 rounded-2xl border transition-all hover:-translate-y-1 ${
                  i === 5
                    ? 'bg-purple-brand border-purple-700 text-white shadow-lg shadow-purple-brand/20'
                    : 'bg-white border-gray-100 shadow-soft hover:shadow-hover'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                  i === 5 ? 'bg-white/20' : 'bg-violet-50 text-purple-brand'
                }`}>
                  {b.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${i === 5 ? 'text-white' : 'text-slate-900'}`}>{b.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 5 ? 'text-white/80' : 'text-slate-500'}`}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O MÉTODO ESL ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              O MÉTODO OPENLIFE
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Três pilares que transformam<br className="hidden md:block" />
              <span className="text-purple-brand"> esforço em fluência</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Uma metodologia baseada em ciência da aprendizagem de idiomas,
              refinada em milhares de horas de aula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all">
                <span className="absolute top-6 right-6 text-6xl font-black text-slate-100 select-none">{p.n}</span>
                <div className="w-11 h-11 bg-violet-50 text-purple-brand rounded-xl flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURSOS & PRODUTOS ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
                <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
                CURSOS & PRODUTOS
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                Um caminho para <span className="text-purple-brand">cada objetivo</span>
              </h2>
              <p className="text-slate-500 max-w-md">
                Do primeiro contato com o idioma à certificação internacional e ao inglês corporativo.
              </p>
            </div>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 text-purple-brand border border-purple-200 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-violet-50 transition-colors shrink-0 self-start md:self-auto"
            >
              Ver todos os cursos
              <ArrowRight size={16} />
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
                    : 'border-gray-100 shadow-soft hover:shadow-hover'
                }`}
              >
                {i === 1 && (
                  <div className="bg-purple-brand text-white text-center text-xs font-bold py-2 tracking-widest uppercase">
                    Popular
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
                    <ArrowRight size={16} className="rotate-45" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLUÊNCIA PERTO DE VOCÊ ────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              ONDE A DEMANDA ESTÁ
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Fluência perto de <span className="text-purple-brand">você</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              100% online, com leitura de mercado para as cidades com maior oportunidade
              real no Brasil. Escolha a sua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_CITIES.map((city) => (
              <Link
                key={city.slug}
                to={`/curso-de-ingles-${city.slug}`}
                className="group relative bg-gradient-to-br from-purple-brand to-purple-deep rounded-2xl p-7 text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-brand/30 transition-all overflow-hidden"
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

      {/* ── HISTÓRIAS REAIS ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              HISTÓRIAS REAIS
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Quem aprendeu inglês <span className="text-purple-brand">com a gente</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-hover transition-all">
                <div className="text-4xl text-purple-brand/20 font-black mb-4 leading-none">"</div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-brand flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              DÚVIDAS FREQUENTES
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-purple-brand">Perguntas frequentes</h2>
            <p className="text-slate-500">Tudo o que você precisa saber antes de começar.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-3xl overflow-hidden transition-all duration-300 bg-purple-brand ${expandedCategory === cat.id ? 'pb-5' : ''}`}
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-white text-left"
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
                          className="w-full flex items-center justify-between px-5 py-4 text-white text-left hover:bg-white/10 transition-colors"
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

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-brand to-purple-deep rounded-[32px] overflow-hidden px-8 py-14 md:p-20 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white/90">
                <span>✦</span> PRIMEIRA AULA GRATUITA
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
                Seu inglês do jeito certo<br className="hidden md:block" /> começa hoje.
              </h2>
              <p className="text-purple-100 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Agende uma aula experimental sem compromisso e descubra o seu nível
                com um dos nossos especialistas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                <button
                  onClick={() => openSmartForm()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-purple-brand px-10 py-4 rounded-full font-bold text-base hover:bg-violet-50 transition-all shadow-xl min-h-[52px]"
                >
                  Agendar aula grátis
                  <ArrowRight size={18} />
                </button>
                <Link
                  to="/cursos"
                  className="text-white/80 font-semibold hover:text-white transition-colors text-sm py-4"
                >
                  Conhecer os cursos
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
