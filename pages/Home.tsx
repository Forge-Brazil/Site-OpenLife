import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, Play, CheckCircle2, Clock,
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
    text: 'Em 8 meses saí do básico para conduzir reuniões com o time nos EUA. Fui promovido três meses depois — sem o inglês isso não teria acontecido.',
    name: 'Rafael Menezes', role: 'Engineering Manager', company: 'Google', initials: 'RM', stars: 5,
    resultado: 'Promovido em 8 meses',
  },
  {
    text: 'Tentei 3 cursos antes. Na OpenLife entendi que o problema não era eu — era o método. Em 14 meses fiz a transição de carreira e passei a liderar um time de 6 países.',
    name: 'Camila Torres', role: 'Sr. UX Designer', company: 'Nubank', initials: 'CT', stars: 5,
    resultado: 'Transição de carreira em 14 meses',
  },
  {
    text: 'Consegui IELTS 7.5 para o mestrado no Canadá. O professor sabia exatamente onde eu precisava melhorar. Resultado acima do que eu esperava.',
    name: 'Lucas Ferreira', role: 'Software Engineer', company: 'Amazon', initials: 'LF', stars: 5,
    resultado: 'IELTS 7.5 · Mestrado no Canadá',
  },
];

const ALUMNI_ROW1 = [
  { name: 'Google', tag: 'Big Tech' },
  { name: 'Amazon', tag: 'Big Tech' },
  { name: 'Microsoft', tag: 'Big Tech' },
  { name: 'Meta', tag: 'Big Tech' },
  { name: 'Salesforce', tag: 'SaaS' },
  { name: 'Nubank', tag: 'Fintech' },
  { name: 'iFood', tag: 'Tech BR' },
  { name: 'Mercado Livre', tag: 'E-commerce' },
  { name: 'Totvs', tag: 'Tech BR' },
];

const ALUMNI_ROW2 = [
  { name: 'Ambev', tag: 'FMCG' },
  { name: 'Itaú BBA', tag: 'Banco' },
  { name: 'Bradesco', tag: 'Banco' },
  { name: 'Accenture', tag: 'Consulting' },
  { name: 'Magazine Luiza', tag: 'Varejo' },
  { name: 'Globo', tag: 'Mídia' },
  { name: 'Petrobras', tag: 'Energia' },
  { name: 'XP Investimentos', tag: 'Fintech' },
  { name: 'BTG Pactual', tag: 'Banco' },
];

const HOME_COURSES_ORDER = ['teens', 'journey', 'keep'] as const;
const courseIcons: Record<string, React.ReactNode> = {
  teens: <Users size={22} />,
  journey: <Zap size={22} />,
  keep: <TrendingUp size={22} />,
};

const FEATURED_CITIES = CITIES.slice(0, 6);

/* ── COMPONENTE ─────────────────────────────────────────────── */

const Home: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [persona, setPersona] = useState<'adulto' | 'filho'>('adulto');

  return (
    <div className="overflow-hidden -mt-20">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-bgsoft pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Texto */}
            <div className="space-y-6 text-center lg:text-left">

              {/* Personalization pills */}
              <div className="flex gap-2 justify-center lg:justify-start flex-wrap">
                <button
                  onClick={() => setPersona('adulto')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all touch-manipulation ${
                    persona === 'adulto'
                      ? 'bg-purple-brand text-white border-purple-brand'
                      : 'bg-white text-purple-brand border-purple-200 hover:border-purple-brand'
                  }`}
                >
                  Para mim (adulto)
                </button>
                <button
                  onClick={() => setPersona('filho')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all touch-manipulation ${
                    persona === 'filho'
                      ? 'bg-purple-brand text-white border-purple-brand'
                      : 'bg-white text-purple-brand border-purple-200 hover:border-purple-brand'
                  }`}
                >
                  Para meu filho(a)
                </button>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05]">
                {persona === 'adulto' ? (
                  <>Inglês em<br /><span className="text-purple-brand">18 meses.</span></>
                ) : (
                  <>Bilinguismo que<br /><span className="text-purple-brand">muda vidas.</span></>
                )}
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {persona === 'adulto'
                  ? 'Método ESL imersivo com professores certificados. Do zero ao fluente em 18 meses, 100% online, com aulas ao vivo e turmas com média de 4 alunos.'
                  : 'Do bilinguismo precoce à fluência na adolescência. Professores especializados, metodologia lúdica e acompanhamento real para crianças e teens.'}
              </p>

              {/* CTAs contextuais */}
              {persona === 'adulto' ? (
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button
                    onClick={() => openSmartForm()}
                    className="inline-flex items-center justify-center gap-2 bg-purple-brand text-white px-8 py-4 rounded-full font-bold text-base hover:bg-purple-700 active:scale-95 transition-all shadow-lg shadow-purple-brand/25 min-h-[52px] touch-manipulation"
                  >
                    Começar minha jornada
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
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    to="/ingles-para-criancas"
                    className="inline-flex items-center justify-center gap-2 bg-purple-brand text-white px-8 py-4 rounded-full font-bold text-base hover:bg-purple-700 active:scale-95 transition-all shadow-lg shadow-purple-brand/25 min-h-[52px] touch-manipulation"
                  >
                    OpenKids — 6 a 10 anos
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/ingles-para-adolescentes"
                    className="inline-flex items-center justify-center gap-2 border-2 border-purple-brand text-purple-brand px-8 py-4 rounded-full font-bold text-base hover:bg-violet-50 active:scale-95 transition-all min-h-[52px] touch-manipulation"
                  >
                    OpenTeens — 11 a 13 anos
                    <ArrowRight size={18} />
                  </Link>
                </div>
              )}

              {/* Urgência real */}
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-sm text-slate-500">
                  Próxima turma:{' '}
                  <strong className="text-slate-700 font-semibold">14 de outubro</strong>
                  {' · '}
                  <span className="text-purple-brand font-semibold">4 vagas restantes</span>
                </span>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-black text-slate-900">+100k</p>
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

      {/* ── VÍDEOS — LEQUE ROTACIONADO ───────────────────────── */}
      <section
        className="py-16 md:py-24 overflow-hidden relative"
        style={{ background: 'radial-gradient(ellipse at 10% 60%, rgba(139,92,246,0.45) 0%, transparent 45%), radial-gradient(ellipse at 90% 20%, rgba(192,132,252,0.3) 0%, transparent 45%), radial-gradient(ellipse at 55% 110%, rgba(109,40,217,0.5) 0%, transparent 55%), linear-gradient(150deg, #080412 0%, #1a0840 40%, #2d1069 70%, #0f0520 100%)' }}
      >
        {/* Orb glow central */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div style={{ width: '900px', height: '500px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>

        {/* Big Ben — upper left */}
        <div className="absolute hidden lg:flex flex-col items-center gap-1 select-none" style={{ left: '5%', top: '10%', opacity: 0.22, color: '#c4b5fd' }}>
          <svg width="52" viewBox="0 0 60 140" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="22" y="82" width="16" height="48" fill="rgba(196,181,253,0.05)"/>
            <polygon points="13,82 47,82 41,46 19,46" fill="rgba(196,181,253,0.05)"/>
            <line x1="30" y1="46" x2="30" y2="16"/>
            <line x1="20" y1="24" x2="40" y2="24"/>
            <line x1="18" y1="30" x2="42" y2="30"/>
            <circle cx="30" cy="67" r="9" fill="rgba(196,181,253,0.08)"/>
            <line x1="30" y1="58" x2="30" y2="67"/>
            <line x1="30" y1="67" x2="37" y2="67"/>
            <line x1="30" y1="82" x2="30" y2="130"/>
            <line x1="22" y1="100" x2="38" y2="100"/>
            <line x1="22" y1="115" x2="38" y2="115"/>
          </svg>
          <span className="text-[8px] font-black tracking-[0.2em]">REINO UNIDO</span>
        </div>

        {/* Estátua da Liberdade — left lower */}
        <div className="absolute hidden lg:flex flex-col items-center gap-1 select-none" style={{ left: '8%', bottom: '12%', opacity: 0.20, color: '#a78bfa' }}>
          <svg width="46" viewBox="0 0 60 155" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="46" y1="6" x2="36" y2="34"/>
            <ellipse cx="48" cy="4" rx="4" ry="6" fill="rgba(167,139,250,0.1)"/>
            <circle cx="28" cy="40" r="10" fill="rgba(167,139,250,0.08)"/>
            <line x1="28" y1="30" x2="28" y2="20"/>
            <line x1="21" y1="33" x2="14" y2="24"/>
            <polygon points="18,50 38,50 43,110 13,110" fill="rgba(167,139,250,0.05)"/>
            <rect x="8" y="110" width="40" height="12" fill="rgba(167,139,250,0.05)"/>
            <rect x="4" y="122" width="48" height="11" fill="rgba(167,139,250,0.07)"/>
            <line x1="13" y1="70" x2="43" y2="70"/>
            <line x1="11" y1="90" x2="45" y2="90"/>
          </svg>
          <span className="text-[8px] font-black tracking-[0.2em]">EUA</span>
        </div>

        {/* Opera House — center bottom */}
        <div className="absolute hidden lg:flex flex-col items-center gap-1 select-none" style={{ left: '40%', bottom: '4%', opacity: 0.18, color: '#c4b5fd' }}>
          <svg width="100" viewBox="0 0 130 75" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M6,68 Q6,4 65,2 Q124,4 124,68" fill="rgba(196,181,253,0.04)"/>
            <path d="M20,68 Q20,20 65,16 Q110,20 110,68" fill="rgba(196,181,253,0.04)"/>
            <path d="M36,68 Q36,36 65,32 Q94,36 94,68" fill="rgba(196,181,253,0.05)"/>
            <path d="M50,68 Q50,50 65,47 Q80,50 80,68" fill="rgba(196,181,253,0.06)"/>
            <line x1="2" y1="68" x2="128" y2="68"/>
            <line x1="2" y1="72" x2="128" y2="72"/>
          </svg>
          <span className="text-[8px] font-black tracking-[0.2em]">AUSTRÁLIA</span>
        </div>

        {/* CN Tower — right upper */}
        <div className="absolute hidden lg:flex flex-col items-center gap-1 select-none" style={{ right: '6%', top: '8%', opacity: 0.22, color: '#c4b5fd' }}>
          <svg width="36" viewBox="0 0 42 165" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <line x1="21" y1="2" x2="21" y2="70"/>
            <ellipse cx="21" cy="77" rx="14" ry="6" fill="rgba(196,181,253,0.08)"/>
            <ellipse cx="21" cy="83" rx="10" ry="4" fill="rgba(196,181,253,0.06)"/>
            <rect x="16" y="77" width="10" height="16" fill="rgba(196,181,253,0.05)"/>
            <path d="M14,93 L17,140 L25,140 L28,93" fill="rgba(196,181,253,0.04)"/>
            <ellipse cx="21" cy="144" rx="16" ry="6" fill="rgba(196,181,253,0.08)"/>
            <line x1="14" y1="110" x2="28" y2="110"/>
            <line x1="13" y1="125" x2="29" y2="125"/>
          </svg>
          <span className="text-[8px] font-black tracking-[0.2em]">CANADÁ</span>
        </div>

        {/* Sky Tower — right lower */}
        <div className="absolute hidden lg:flex flex-col items-center gap-1 select-none" style={{ right: '7%', bottom: '10%', opacity: 0.18, color: '#a78bfa' }}>
          <svg width="30" viewBox="0 0 38 175" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <line x1="19" y1="2" x2="19" y2="88"/>
            <ellipse cx="19" cy="93" rx="15" ry="6" fill="rgba(167,139,250,0.08)"/>
            <ellipse cx="19" cy="99" rx="11" ry="4" fill="rgba(167,139,250,0.07)"/>
            <rect x="15" y="93" width="8" height="14" fill="rgba(167,139,250,0.05)"/>
            <path d="M11,107 L14,152 L24,152 L27,107" fill="rgba(167,139,250,0.04)"/>
            <ellipse cx="19" cy="157" rx="15" ry="5" fill="rgba(167,139,250,0.08)"/>
            <line x1="11" y1="125" x2="27" y2="125"/>
          </svg>
          <span className="text-[8px] font-black tracking-[0.2em]">N. ZELÂNDIA</span>
        </div>

        {/* Cabeçalho */}
        <div className="relative text-center mb-10 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.12)', color: '#c4b5fd', backdropFilter: 'blur(8px)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
            VEJA NA PRÁTICA
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
            Situações Reais
          </h2>
          <p className="mt-3 text-sm font-light tracking-[0.35em] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Confira
          </p>
        </div>

        {/* DESKTOP — glassmorfismo + leque */}
        <div className="hidden md:flex items-center justify-center relative px-4" style={{ height: '560px' }}>
          <div className="relative w-full max-w-5xl"
            style={{ height: '560px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(48px)', WebkitBackdropFilter: 'blur(48px)', border: '1px solid rgba(255,255,255,0.11)', borderRadius: '44px', boxShadow: '0 0 140px rgba(124,58,237,0.18), 0 0 60px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.09)' }}>

            <div className="absolute" style={{ left: '5%', top: '50%', transform: 'translateY(-54%) rotate(-11deg)', width: '220px', aspectRatio: '9/16', borderRadius: '20px', overflow: 'hidden', zIndex: 1, boxShadow: '0 24px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.3)' }}>
              <video src="/video02.mp4" className="w-full h-full object-cover" controls playsInline preload="metadata" />
            </div>

            <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)', width: '260px', aspectRatio: '9/16', borderRadius: '22px', overflow: 'hidden', zIndex: 3, boxShadow: '0 32px 90px rgba(0,0,0,0.75), 0 0 0 2px rgba(139,92,246,0.55), 0 0 50px rgba(124,58,237,0.25)' }}>
              <video src="/video01.mp4" className="w-full h-full object-cover" controls playsInline preload="metadata" />
            </div>

            <div className="absolute" style={{ right: '5%', top: '50%', transform: 'translateY(-54%) rotate(11deg)', width: '220px', aspectRatio: '9/16', borderRadius: '20px', overflow: 'hidden', zIndex: 1, boxShadow: '0 24px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.3)' }}>
              <video src="/video03.mp4" className="w-full h-full object-cover" controls playsInline preload="metadata" />
            </div>
          </div>
        </div>

        {/* MOBILE — scroll horizontal */}
        <div className="flex md:hidden overflow-x-auto scrollbar-hide pb-2">
          <div className="flex gap-4 w-max mx-auto px-6">
            {['/video02.mp4', '/video01.mp4', '/video03.mp4'].map((src, i) => (
              <div key={i} className="shrink-0 rounded-2xl overflow-hidden bg-black" style={{ width: 'min(72vw, 240px)', aspectRatio: '9/16', boxShadow: '0 0 0 1px rgba(139,92,246,0.35)' }}>
                <video src={src} className="w-full h-full object-cover" controls playsInline preload="metadata" />
              </div>
            ))}
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
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
                <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
                COMO FUNCIONA NA PRÁTICA
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                Imersão real.<br />
                <span className="text-purple-brand">Como um intercâmbio</span><br />
                sem sair do Brasil.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mx-auto">
                Durante o programa, você vive o inglês no dia a dia — situações reais,
                conversas autênticas, desafios práticos que simulam um intercâmbio.
                Sem tradução. Sem decoreba.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Professores certificados', icon: <Award size={18} /> },
                  { label: 'Média de 4 alunos por turma', icon: <Users size={18} /> },
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
                Comece agora <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOTO TURMA + COMUNIDADE ───────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 text-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
                <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
                COMUNIDADE OPENLIFE
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                Mais que uma escola.<br />
                <span className="text-purple-brand">Uma comunidade</span><br />
                de alto padrão.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mx-auto">
                Quem estuda na OpenLife faz parte de uma rede de alunos comprometidos.
                A troca, o incentivo e o ambiente elevam o seu resultado além da sala de aula.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {['+100k alunos ativos', '5.0 Google', '21 anos de mercado', 'Certificação IELTS/TOEFL'].map((item, i) => (
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
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:-translate-y-1 transition-all flex flex-col">
                {/* Badge resultado */}
                <div className="inline-flex items-center gap-1.5 self-start bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  <CheckCircle2 size={11} />
                  {t.resultado}
                </div>
                <div className="flex mb-4">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} size={13} className="text-purple-brand" fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-purple-brand flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-900 font-bold text-sm truncate">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                  <span className="text-[11px] font-black text-purple-brand bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-full shrink-0">
                    {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUMNI COMPANIES ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <style>{`
          @keyframes marquee-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
          .marquee-left { animation: marquee-left 40s linear infinite; }
          .marquee-right { animation: marquee-right 40s linear infinite; }
          .marquee-left:hover, .marquee-right:hover { animation-play-state: paused; }
        `}</style>

        {/* Cabeçalho */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
            <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
            ONDE NOSSOS FORMADOS ESTÃO
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            +100 mil formados.<br />
            <span className="text-purple-brand">Nas maiores empresas do mundo.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Quem passa pela OpenLife entra nas empresas que antes pareciam distantes.
            Inglês abre portas para o mundo globalizado.
          </p>
        </div>

        {/* Trilho 1 — esquerda */}
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 marquee-left" style={{ width: 'max-content' }}>
            {[...ALUMNI_ROW1, ...ALUMNI_ROW1].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-3.5 shrink-0 select-none"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                  <span className="text-purple-brand font-black text-xs">
                    {c.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-slate-900 font-black text-sm leading-none">{c.name}</p>
                  <p className="text-slate-400 text-[10px] font-semibold mt-0.5 uppercase tracking-wider">{c.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trilho 2 — direita */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 marquee-right" style={{ width: 'max-content' }}>
            {[...ALUMNI_ROW2, ...ALUMNI_ROW2].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-violet-50 border border-violet-100 rounded-2xl px-6 py-3.5 shrink-0 select-none"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                  <span className="text-purple-brand font-black text-xs">
                    {c.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-slate-900 font-black text-sm leading-none">{c.name}</p>
                  <p className="text-slate-400 text-[10px] font-semibold mt-0.5 uppercase tracking-wider">{c.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: '+100 mil formados', sub: 'em 20 anos de metodologia' },
              { label: 'Big Techs', sub: 'Google, Amazon, Meta, Microsoft' },
              { label: 'Fintechs líderes', sub: 'Nubank, XP, BTG' },
              { label: 'Multinacionais', sub: 'Accenture, Salesforce, Ambev' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-bgsoft border border-gray-100 rounded-2xl px-6 py-4 min-w-[140px]"
              >
                <span className="text-slate-900 font-black text-sm">{s.label}</span>
                <span className="text-slate-400 text-xs mt-0.5 text-center">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VÍDEOS DEPOIMENTOS ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <Play size={14} className="fill-purple-brand text-purple-brand" />
              DEPOIMENTOS EM VÍDEO
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Ouça de quem <span className="text-purple-brand">já chegou lá</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Histórias reais de alunos que escolheram sair do "vou aprender inglês" e foram além.
            </p>
          </div>

          {/* 6 vídeos em linha única com scroll horizontal no mobile */}
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:overflow-visible" style={{ scrollbarWidth: 'none' }}>
            {['/video11.mp4','/video12.mp4','/video13.mp4','/video14.mp4','/video15.mp4','/video16.mp4'].map((src, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden cursor-pointer group shrink-0 w-36 md:w-auto"
                style={{ aspectRatio: '9/16', border: '1px solid #EDE9FE' }}
                onClick={(e) => {
                  const vid = e.currentTarget.querySelector('video') as HTMLVideoElement | null;
                  const overlay = e.currentTarget.querySelector('.play-overlay') as HTMLElement | null;
                  if (!vid) return;
                  if (vid.paused) { vid.play(); if (overlay) overlay.style.opacity = '0'; }
                  else { vid.pause(); if (overlay) overlay.style.opacity = '1'; }
                }}
              >
                <video
                  src={src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  preload="metadata"
                />
                <div className="play-overlay absolute inset-0 flex items-center justify-center transition-opacity duration-200" style={{ background: 'rgba(124,58,237,0.28)', backdropFilter: 'blur(2px)' }}>
                  <div className="w-11 h-11 rounded-full bg-white/25 border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={18} className="text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURSOS & PRODUTOS ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-sm font-semibold text-purple-brand">
              <span className="w-2 h-2 rounded-full bg-purple-brand inline-block" />
              CURSOS & PRODUTOS
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Um caminho para <span className="text-purple-brand">cada objetivo</span>
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Do primeiro contato com o idioma à certificação internacional.
            </p>
            <div>
              <Link
                to="/cursos"
                className="inline-flex items-center justify-center gap-2 text-purple-brand border border-purple-200 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-violet-50 active:bg-violet-50 transition-colors min-h-[44px] touch-manipulation"
              >
                Ver todos os cursos <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HOME_COURSES_ORDER.map((id, i) => {
              const course = COURSES.find(c => c.id === id);
              if (!course) return null;
              const isCenter = i === 1;
              return (
                <Link
                  key={course.id}
                  to={COURSE_LINKS[course.id] ?? '/cursos'}
                  className={`group rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 ${
                    isCenter
                      ? 'border-purple-brand shadow-lg shadow-purple-brand/10'
                      : 'border-gray-100 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isCenter && (
                    <div className="bg-purple-brand text-white text-center text-xs font-bold py-2 tracking-widest uppercase">
                      Mais popular
                    </div>
                  )}
                  <div className={`p-7 ${isCenter ? 'bg-gradient-to-b from-violet-50 to-white' : 'bg-white'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      isCenter ? 'bg-purple-brand text-white' : 'bg-violet-50 text-purple-brand'
                    }`}>
                      {courseIcons[course.id]}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-1">{course.title}</h3>
                    <p className="text-purple-brand text-sm font-semibold mb-3">{course.focus}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{course.description}</p>
                    <div className={`mt-6 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isCenter
                        ? 'bg-purple-brand text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-purple-brand group-hover:text-white'
                    }`}>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
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
