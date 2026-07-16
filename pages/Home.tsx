import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Check, X as XIcon, Sparkles, Users, Award, Globe } from 'lucide-react';
import { HOME_FAQS as faqs } from '../data/faq';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const stats = [
  { value: '21', label: 'anos de método comprovado' },
  { value: '18', label: 'meses até a fluência' },
  { value: 'C1/C2', label: 'certificação internacional CEFR' },
  { value: '100%', label: 'em inglês desde o dia 1' },
];

const journeys = [
  {
    tag: 'OpenLife Kids', age: '6 a 9 anos', accent: '#FF8E72', soft: '#FFEDE8',
    desc: 'Bilinguismo precoce com aulas lúdicas — o inglês entra na vida da criança como brincadeira, não como matéria.',
    link: '/ingles-para-criancas',
  },
  {
    tag: 'Journey For Teens', age: '10 a 13 anos', accent: '#4FB3A9', soft: '#E5F3F1',
    desc: 'Cultura pop, gamificação e speaking de verdade — inglês conectado ao mundo em que o adolescente já vive.',
    link: '/ingles-para-adolescentes',
  },
  {
    tag: 'Journey 13+', age: 'Adolescentes e adultos', accent: '#2D1B4E', soft: '#F3F0F7',
    desc: 'Nossa jornada principal: do básico à fluência em 18 meses, com imersão ESL total e certificação internacional.',
    link: '/ingles-para-adultos',
  },
  {
    tag: 'Keep the Fluency', age: 'Fluentes', accent: '#A98435', soft: '#F5EEDD',
    desc: 'Debates de alto nível, networking e comunidade — para quem conquistou a fluência e não pretende perdê-la.',
    link: '/cursos',
  },
];

const methodSteps = [
  {
    icon: Globe, title: 'Imersão desde o dia 1',
    desc: 'Aulas 100% em inglês desde a primeira palavra. Você adquire o idioma como quem vive no exterior — sem tradução mental.',
  },
  {
    icon: Users, title: 'Turmas reduzidas, professores reais',
    desc: 'Você fala em todas as aulas, não só escuta. Acompanhamento próximo de quem conhece seu nome e seu objetivo.',
  },
  {
    icon: Sparkles, title: 'Método ESL comprovado',
    desc: 'A mesma metodologia usada em países de língua inglesa, aplicada há 21 anos no Brasil com resultado documentado.',
  },
  {
    icon: Award, title: 'Certificação internacional',
    desc: 'Você se forma no nível C1/C2 do CEFR, preparado para exames internacionais, entrevistas e o mercado global.',
  },
];

const timeline = [
  { phase: 'Meses 1–4', level: 'Fundação', desc: 'Você entende e responde em inglês em situações do dia a dia. O bloqueio de falar começa a cair.' },
  { phase: 'Meses 5–10', level: 'Conversação', desc: 'Conversas reais sem tradução mental. Séries e músicas passam a fazer sentido sem legenda.' },
  { phase: 'Meses 11–15', level: 'Autonomia', desc: 'Reuniões, viagens e entrevistas em inglês deixam de assustar. Você pensa no idioma.' },
  { phase: 'Meses 16–18', level: 'Fluência C1/C2', desc: 'Certificação internacional e fluência plena — pronta para o mercado global.' },
];

const compare = {
  apps: [
    'Você aprende palavras soltas',
    'Ninguém corrige sua pronúncia',
    'Sequências infinitas, zero conversação',
    'Anos de streak, travado na primeira conversa',
  ],
  openlife: [
    'Você conversa desde a primeira aula',
    'Professores reais acompanham sua evolução',
    'Imersão total: pensar em inglês vira hábito',
    '18 meses com certificação internacional C1/C2',
  ],
};

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="-mt-20 bg-cream">

      {/* HERO */}
      <section className="bg-purple-brand relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-20">
        {/* brilho dourado sutil */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(201,169,97,0.16), transparent 70%)' }} />

        <p className="relative inline-flex items-center gap-2 border border-[#C9A961]/40 text-[#E8D9B5] text-[11px] tracking-[0.22em] uppercase font-medium px-4 py-1.5 rounded-full mb-8">
          <Sparkles size={12} /> 21 anos de Método ESL Imersivo
        </p>

        <h1 className="relative font-display text-4xl sm:text-5xl md:text-[4.2rem] font-semibold leading-[1.08] mb-6 text-white max-w-4xl">
          Fluência real em inglês<br />
          <span className="text-[#C9A961]">em 18 meses.</span>
        </h1>

        <p className="relative text-base md:text-lg mb-10 max-w-xl mx-auto text-white/80 leading-relaxed">
          Imersão 100% em inglês desde o primeiro dia, turmas reduzidas e certificação
          internacional. Presencial em Bagé ou online para todo o Brasil.
        </p>

        <div className="relative flex flex-col sm:flex-row gap-3 justify-center">
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
            className="bg-orange-brand px-9 py-4 rounded-full font-semibold text-sm hover:bg-orange-500 transition-colors shadow-lg shadow-black/20">
            Agendar Aula Experimental Gratuita
          </a>
          <Link to="/metodologia"
            className="text-white border border-white/40 px-9 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">
            Como funciona o método
          </Link>
        </div>

        {/* Stats — prova imediata */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 mt-16 pt-10 border-t border-white/10 w-full max-w-3xl">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-semibold text-[#C9A961]">{s.value}</p>
              <p className="text-white/60 text-xs mt-1.5 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MÉTODO ESL */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-orange-brand font-semibold text-xs tracking-[0.25em] uppercase mb-4">Metodologia ESL</p>
            <h2 className="font-display text-3xl md:text-[2.6rem] font-semibold text-purple-brand leading-tight mb-5">
              Existe diferença entre estudar inglês e falar inglês.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Em 21 anos ensinando inglês, descobrimos por que brasileiros travam na hora de
              conversar — e como a imersão ESL corrige isso desde a primeira aula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {methodSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-purple-100">
                <div className="w-11 h-11 rounded-xl bg-purple-brand flex items-center justify-center mb-5">
                  <step.icon size={20} className="text-[#C9A961]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-purple-brand mb-2.5">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/metodologia" className="inline-flex items-center gap-2 text-purple-brand font-semibold text-sm hover:text-orange-brand transition-colors">
              Conheça a metodologia completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* JORNADA 18 MESES — timeline */}
      <section className="bg-purple-brand py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#C9A961] font-semibold text-xs tracking-[0.25em] uppercase mb-4">Sua Jornada</p>
            <h2 className="font-display text-3xl md:text-[2.6rem] font-semibold text-white leading-tight">
              Do zero à fluência, mês a mês.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {timeline.map((t, i) => (
              <div key={i} className="relative bg-white/[0.06] border border-white/10 rounded-2xl p-6">
                <p className="text-[#C9A961] text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">{t.phase}</p>
                <h3 className="font-display text-lg font-semibold text-white mb-2.5">{t.level}</h3>
                <p className="text-white/65 text-[13px] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-orange-brand px-9 py-4 rounded-full font-semibold text-sm hover:bg-orange-500 transition-colors">
              Começar minha jornada
            </a>
          </div>
        </div>
      </section>

      {/* CURSOS POR JORNADA DE VIDA */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-orange-brand font-semibold text-xs tracking-[0.25em] uppercase mb-4">Cursos</p>
            <h2 className="font-display text-3xl md:text-[2.6rem] font-semibold text-purple-brand leading-tight">
              Uma jornada para cada fase da vida.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {journeys.map((j) => (
              <Link key={j.tag} to={j.link}
                className="group bg-white rounded-2xl p-8 border border-purple-100 hover:border-purple-brand transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full"
                    style={{ color: j.accent, backgroundColor: j.soft }}>
                    {j.tag}
                  </span>
                  <span className="text-slate-400 text-xs">{j.age}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{j.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-purple-brand font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Conhecer a jornada <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APP vs OPENLIFE */}
      <section className="bg-white py-24 px-6 border-y border-purple-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-[2.6rem] font-semibold text-purple-brand leading-tight mb-4">
              O aplicativo te ensina palavras.<br />Nós te ensinamos a conversar.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Se você tem anos de streak e continua travando numa conversa real, o problema não é você — é o formato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="font-semibold text-slate-400 text-xs tracking-[0.18em] uppercase mb-5">Estudar sozinho no app</p>
              <ul className="space-y-3.5">
                {compare.apps.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-500">
                    <XIcon size={16} className="text-slate-300 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-purple-brand p-8 shadow-purple-brand/20">
              <p className="font-semibold text-[#C9A961] text-xs tracking-[0.18em] uppercase mb-5">Imersão ESL na OpenLife</p>
              <ul className="space-y-3.5">
                {compare.openlife.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <Check size={16} className="text-[#C9A961] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center font-display text-3xl md:text-[2.6rem] font-semibold text-purple-brand mb-12">
            Perguntas frequentes
          </h2>
          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-purple-100 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
                  <span className="font-semibold text-purple-brand text-sm">{faq.q}</span>
                  <ChevronDown size={16} className={"shrink-0 text-orange-brand transition-transform " + (openFaq === i ? 'rotate-180' : '')} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-purple-100 pt-3.5">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-purple-brand relative overflow-hidden py-24 px-6 text-center">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 100%, rgba(201,169,97,0.14), transparent 70%)' }} />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-[2.6rem] font-semibold text-white mb-5 leading-tight">
            18 meses. Fluência real.<br />Certificação internacional.
          </h2>
          <p className="text-white/75 mb-10 leading-relaxed">
            Agende sua aula experimental gratuita — 45 minutos que mostram por que o método funciona.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-orange-brand px-10 py-4 rounded-full font-semibold text-sm hover:bg-orange-500 transition-colors shadow-lg shadow-black/20">
            Agendar Aula Experimental Gratuita
          </a>
          <p className="text-white/40 text-xs mt-6">Presencial em Bagé/RS · Online para todo o Brasil · Sem compromisso</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
