import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Star, GraduationCap, Globe2, BookOpenText, Music4,
  MessagesSquare, HeartHandshake, ChevronDown, ArrowRight, Plane,
} from 'lucide-react';
import { KIDS_FAQS as faqs } from '../data/kidsFaq';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

/** Revela a seção com fade + subida suave assim que ela entra na viewport —
 * cria a sensação de "funil" em que cada bloco precisa ser visto para
 * liberar o próximo, sem travar o scroll do usuário. */
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

const stages = [
  { tag: 'Explorador', age: '6–7 anos', desc: 'Primeiro contato lúdico: cores, sons, músicas e histórias em inglês. O idioma vira brincadeira.' },
  { tag: 'Comunicador', age: '7–8 anos', desc: 'Frases curtas, jogos em dupla e pequenas conversas guiadas. A criança começa a responder sem pensar em português.' },
  { tag: 'Contador de histórias', age: '8–9 anos', desc: 'Storytelling, teatro e vocabulário do dia a dia. Ela já brinca de "traduzir" o mundo ao redor.' },
  { tag: 'Cidadão do mundo', age: '9+ anos', desc: 'Vocabulário de viagem, cultura internacional e simulações reais — a base para um futuro intercâmbio.' },
];

const moments = [
  {
    icon: Music4, title: 'Músicas e storytelling',
    desc: 'Cada aula começa com música e termina com uma história contada 100% em inglês.',
  },
  {
    icon: MessagesSquare, title: 'Turmas pequenas, muita fala',
    desc: 'No máximo 8 crianças por turma — cada uma fala em praticamente todas as aulas.',
  },
  {
    icon: Star, title: 'Gamificação com recompensas',
    desc: 'Missões, medalhas e pontos que transformam progresso em conquista visível.',
  },
  {
    icon: HeartHandshake, title: 'Professores especializados',
    desc: 'Formação em pedagogia infantil + metodologia ESL adaptada para cada faixa etária.',
  },
];

const gallery = [
  { src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&q=80&w=800', alt: 'Criança lendo um livro em inglês, sorrindo' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800', alt: 'Crianças comemorando juntas depois da aula' },
  { src: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&q=80&w=800', alt: 'Criança em aula online de inglês com o notebook' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800', alt: 'Crianças brincando e aprendendo em grupo' },
];

const testimonials = [
  { name: 'Mãe da Sofia, 7 anos', quote: 'Em 4 meses ela já canta as músicas inteiras e corrige a pronúncia dos pais. Nunca vi tanto entusiasmo com "dever de casa".' },
  { name: 'Pai do Bernardo, 8 anos', quote: 'O que mais me surpreendeu foi ele começar a "narrar" o próprio dia em inglês, sozinho, brincando. Isso não se ensina, se conquista.' },
  { name: 'Mãe da Helena, 6 anos', quote: 'Escolhemos pensando no intercâmbio lá na frente. Hoje vejo que o ganho é muito antes disso — autoconfiança todos os dias.' },
];

const InglesCriancas: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="-mt-20 bg-cream">

      {/* Schema JSON-LD adicional — a página tem visão própria além do
          courseSchema + faqPageSchema já injetados no build (data/schema.ts) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'OpenLife Kids — Curso de Inglês para Crianças em Bagé',
        description: 'Escola de idiomas kids em Bagé com método lúdico e imersivo para crianças a partir de 6 anos. Presencial em Bagé/RS ou online para todo o Brasil.',
        provider: { '@type': 'EducationalOrganization', name: 'OpenLife English School', url: 'https://openlifebrasil.com.br' },
        educationalLevel: 'Infantil e Fundamental I',
        url: 'https://openlifebrasil.com.br/ingles-para-criancas',
        audience: { '@type': 'EducationalAudience', educationalRole: 'student', audienceType: 'Crianças a partir de 6 anos' },
      }) }} />

      {/* ── HERO ── gradiente violeta com ícones-linha flutuando, no estilo
          do dashboard OpenLife — duas audiências: brilho pro kid, prova pro pai */}
      <section className="relative overflow-hidden bg-brand-gradient min-h-[94vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-20">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(245,124,32,0.16), transparent 70%)' }} />

        {/* Ícones decorativos leves — estética do dashboard de referência */}
        <GraduationCap size={64} strokeWidth={1} className="hidden md:block absolute top-28 right-[12%] text-white/15 rotate-6" aria-hidden="true" />
        <Star size={40} strokeWidth={1} className="hidden md:block absolute top-[38%] left-[9%] text-white/15 -rotate-12" aria-hidden="true" />
        <Globe2 size={56} strokeWidth={1} className="hidden md:block absolute bottom-24 left-[14%] text-white/15" aria-hidden="true" />
        <BookOpenText size={46} strokeWidth={1} className="hidden md:block absolute bottom-32 right-[10%] text-white/15 rotate-6" aria-hidden="true" />

        <p className="relative inline-flex items-center gap-2 border border-white/30 bg-white/10 text-white text-[11px] tracking-[0.22em] uppercase font-semibold px-4 py-1.5 rounded-full mb-8">
          <Sparkles size={12} /> OpenLife Kids · a partir de 6 anos
        </p>

        <h1 className="relative font-display text-4xl sm:text-5xl md:text-[4rem] font-extrabold leading-[1.08] mb-6 text-white max-w-3xl">
          O mundo fica pequeno<br />
          <span className="highlight-pill text-lavender">quando se fala inglês.</span>
        </h1>

        <p className="relative text-base md:text-lg mb-10 max-w-xl mx-auto text-white/85 leading-relaxed">
          Curso de inglês kids em Bagé com método lúdico e imersivo — turmas pequenas,
          professores especializados e a mesma metodologia que já formou milhares de fluentes.
          Presencial ou online.
        </p>

        <div className="relative flex flex-col sm:flex-row items-center gap-4">
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
            className="text-white/90 border border-white/30 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 hover:text-white transition-colors">
            Conhecer a experiência Kids
          </a>
        </div>

        <ChevronDown size={20} className="relative text-white/50 mt-14 animate-bounce" aria-hidden="true" />
      </section>

      {/* ── HOOK EMOCIONAL ── */}
      <section className="bg-cream py-24 px-6">
        <Reveal className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=900"
              alt="Crianças participando animadas de uma aula de inglês"
              loading="lazy"
              className="rounded-[2rem] shadow-xl w-full aspect-[4/5] object-cover"
            />
          </div>
          <div>
            <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-4">Antes dos 12</p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-extrabold text-purple-brand leading-tight mb-5">
              Para o seu filho, inglês não é matéria. É descoberta.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Até os 12 anos, o cérebro absorve um segundo idioma quase da mesma forma que absorveu
              o primeiro — sem esforço, sem tradução, sem medo de errar. É a janela biológica que a
              OpenLife usa há 20 anos para formar crianças que pensam em inglês, não que decoram inglês.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Uma escola de idiomas kids em Bagé pensada para que seu filho ganhe hoje o que a maioria
              só consegue conquistar — com muito mais esforço — na vida adulta.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── PROVA / CIÊNCIA — banda violeta, estilo card do dashboard ── */}
      <section className="relative overflow-hidden bg-brand-gradient py-24 px-6">
        <Sparkles size={44} strokeWidth={1} className="hidden md:block absolute top-16 right-[16%] text-white/15" aria-hidden="true" />
        <Reveal className="max-w-4xl mx-auto text-center">
          <p className="text-white/75 font-bold text-xs tracking-[0.25em] uppercase mb-4">Para quem decide por ele</p>
          <h2 className="font-display text-3xl md:text-[2.4rem] font-extrabold text-white leading-tight mb-6">
            Quem começa mais cedo, evolui mais rápido. 💜
          </h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            Bilíngues precoces desenvolvem melhor memória de trabalho, mais criatividade na resolução
            de problemas e maior empatia cultural — vantagens que acompanham seu filho muito além do inglês.
          </p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto mt-14">
          {[
            { v: '6+', l: 'idade mínima recomendada' },
            { v: '8', l: 'crianças por turma, no máximo' },
            { v: '20', l: 'anos de método em Bagé' },
            { v: '100%', l: 'das aulas em imersão' },
          ].map((s) => (
            <div key={s.l} className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-white">{s.v}</p>
              <p className="text-white/65 text-[11px] mt-1.5 leading-snug">{s.l}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── COMO É UMA AULA ── */}
      <section className="bg-cream py-24 px-6">
        <Reveal className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-4">Dentro da sala</p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-extrabold text-purple-brand leading-tight">
              O que acontece numa aula OpenLife Kids
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {moments.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-purple-100 hover:shadow-lg hover:shadow-purple-brand/10 transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center mb-5">
                  <m.icon size={20} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-purple-brand mb-2.5">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── GALERIA / EXPERIÊNCIA CULTURAL ── */}
      <section className="bg-white py-24 px-6 border-y border-purple-100">
        <Reveal className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-4">Vivência cultural</p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-extrabold text-purple-brand leading-tight mb-4">
              Cada aula é uma pequena viagem
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Datas comemorativas internacionais, músicas, jogos e histórias de outras culturas —
              seu filho aprende inglês vivendo o mundo, não decorando ele.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy"
                className="rounded-2xl w-full aspect-square object-cover shadow-sm hover:shadow-lg transition-shadow" />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── JORNADA KIDS — 4 fases, estilo timeline ── */}
      <section className="relative overflow-hidden bg-brand-gradient py-24 px-6">
        <Plane size={48} strokeWidth={1} className="hidden md:block absolute top-20 left-[10%] text-white/15 -rotate-12" aria-hidden="true" />
        <Reveal className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-white/75 font-bold text-xs tracking-[0.25em] uppercase mb-4">A jornada do seu filho</p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-extrabold text-white leading-tight">
              De curioso a cidadão do mundo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {stages.map((s, i) => (
              <div key={i} className="relative bg-white/10 border border-white/15 rounded-2xl p-6">
                <p className="text-white text-[11px] font-bold tracking-[0.18em] uppercase mb-2 bg-white/15 inline-block px-2.5 py-1 rounded-full">{s.age}</p>
                <h3 className="font-display text-lg font-bold text-white mb-2.5 mt-3">{s.tag}</h3>
                <p className="text-white/70 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── DEPOIMENTOS DOS PAIS ── */}
      <section className="bg-cream py-24 px-6">
        <Reveal className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-4">Quem já vive isso</p>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-extrabold text-purple-brand leading-tight">
              O que os pais contam
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-purple-100">
                <div className="flex gap-0.5 text-orange-brand mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">"{t.quote}"</p>
                <p className="text-purple-brand font-bold text-xs">{t.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-24 px-6 border-t border-purple-100">
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="text-center font-display text-3xl md:text-[2.4rem] font-extrabold text-purple-brand mb-3">
            Dúvidas frequentes dos pais
          </h2>
          <p className="text-center text-slate-500 text-sm mb-12">
            Tudo sobre o curso de inglês kids em Bagé e online da OpenLife.
          </p>
          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-cream border border-purple-100 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
                  <span className="font-bold text-purple-brand text-sm">{faq.q}</span>
                  <ChevronDown size={16} className={"shrink-0 text-orange-brand transition-transform " + (openFaq === i ? 'rotate-180' : '')} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-purple-100 pt-3.5">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-brand-gradient py-24 px-6 text-center">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 100%, rgba(245,124,32,0.16), transparent 70%)' }} />
        <Reveal className="relative max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 border border-white/30 bg-white/10 text-white text-[11px] tracking-[0.22em] uppercase font-semibold px-4 py-1.5 rounded-full mb-6">
            <Sparkles size={12} /> Vagas limitadas por turma
          </p>
          <h2 className="font-display text-3xl md:text-[2.4rem] font-extrabold text-white mb-5 leading-tight">
            Dê ao seu filho a vantagem<br />de falar inglês de verdade.
          </h2>
          <p className="text-white/80 mb-10 leading-relaxed">
            Aula experimental gratuita, sem compromisso — venha sentir o método OpenLife Kids na prática.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-orange-brand text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-orange-500 transition-colors shadow-lg shadow-black/20">
            Agendar aula experimental gratuita
          </a>
          <p className="text-white/50 text-xs mt-6">
            Presencial em Bagé/RS · Online para todo o Brasil ·{' '}
            <Link to="/ingles-para-adolescentes" className="underline hover:text-white/80">Conheça também o Teens</Link>
          </p>
        </Reveal>
      </section>

    </div>
  );
};

export default InglesCriancas;
