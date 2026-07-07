import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, MapPin } from 'lucide-react';

const faqs = [
  { q: "Quantas aulas por semana tem o curso?", a: "Módulo 1: uma aula ao vivo + atividades diárias. Módulos 2 a 5: de duas a três aulas semanais de 50 minutos. No total são quase 500 horas de conteúdo." },
  { q: "Qual a duração do curso?", a: "Do básico ao avançado em 18 meses. Com pausa para férias, pode se estender até 21 meses." },
  { q: "Qual nível alcançarei ao me formar?", a: "Nível avançado C1/C2 do CEFR. O módulo Journey for Life é modelado sobre o exame EF da Cambridge University." },
  { q: "Como funciona o material didático?", a: "Plataforma interativa + app exclusivo iOS/Android. Conteúdo em tempo real: textos, vídeos e atividades dinâmicas." },
  { q: "Posso trancar minha matrícula?", a: "Sim. Pausas de 15 dias ou 1 mês disponíveis. Sem contrato de fidelidade." },
  { q: "Tem multa de cancelamento?", a: "Não temos fidelidade. Em caso de cancelamento, apenas 10% de taxa administrativa sobre o saldo devedor." },
];

const destinations = [
  { city: 'Londres', country: 'Reino Unido', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1200&auto=format&fit=crop' },
  { city: 'Nova York', country: 'Estados Unidos', img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200&auto=format&fit=crop' },
  { city: 'Cambridge', country: 'Reino Unido', img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1200&auto=format&fit=crop' },
];

const students = [
  { name: 'Ana Paula S.', city: 'Porto Alegre', text: 'Em 14 meses fui de zero ao avançado. Consegui minha promoção graças ao inglês da OpenLife.', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Ricardo M.', city: 'São Paulo', text: 'Metodologia incrível. As aulas ao vivo com professores de verdade fazem toda a diferença.', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Fernanda L.', city: 'Bagé, RS', text: 'Consegui tirar o IELTS com 7.5 após concluir o curso. A preparação foi excepcional.', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
];

const stats = [
  { value: 18, suffix: '', label: 'meses para a fluência' },
  { value: 500, suffix: 'h', label: 'de conteúdo imersivo' },
  { value: 4, suffix: 'x', label: 'mais rápido que outros cursos' },
  { value: 21, suffix: '+', label: 'anos de experiência' },
];

/** Mecanismo 1: contador animado ao entrar na viewport */
const CountUp: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <p ref={ref} className="text-5xl font-black text-purple-brand leading-none">
      {count}<span className="text-orange-brand text-3xl">{suffix}</span>
    </p>
  );
};

/** Mecanismo 2: parallax suave no background da hero */
const useParallax = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return offset;
};

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const parallax = useParallax();

  return (
    <div className="-mt-20 overflow-x-hidden bg-white">

      {/* HERO — campus de Cambridge visível atrás do roxo, com parallax */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${parallax}px)`, height: '130%' }}>
          <img
            src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=2000&auto=format&fit=crop"
            alt="Campus de Cambridge"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(107,45,139,0.82) 0%, rgba(107,45,139,0.65) 45%, rgba(168,85,247,0.45) 80%, rgba(255,255,255,0.25) 100%)' }}
          />
        </div>

        <div className="relative z-10">
          <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-5">
            OpenLife English School
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-white">
            Sinta-se em<br />Cambridge,<br />todos os dias.
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-xl mx-auto leading-relaxed text-white/90">
            Imersão total no inglês, sem sair do Brasil.<br />Do zero ao avançado em 18 meses.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer"
              className="bg-orange-brand text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-orange-500 transition-all shadow-lg">
              Agendar Aula Grátis
            </a>
            <Link to="/cursos"
              className="text-white border border-white/50 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 transition-all">
              Conhecer os Cursos
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-80 z-10">
          <ChevronDown size={20} className="animate-bounce text-white" />
        </div>
      </section>

      {/* MECANISMO 3: marquee infinito de destinos/idiomas */}
      <div className="bg-purple-brand py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-12">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="inline-flex gap-12 shrink-0">
              {['🇬🇧 Londres', '🇺🇸 Nova York', '🎓 Cambridge', '🗽 Estátua da Liberdade', '⏰ Big Ben', '🇨🇦 Toronto', '🇦🇺 Sydney'].map((item, i) => (
                <span key={i} className="text-white/90 text-sm font-semibold tracking-wide">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DESTINOS — Big Ben, Estátua da Liberdade, Cambridge */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-purple-brand/60 text-xs font-bold tracking-[0.25em] uppercase mb-3">Alcance global</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-purple-brand mb-4 tracking-tight">
            Seu inglês vai te levar<br />a qualquer lugar do mundo.
          </h2>
          <p className="text-center text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Fluência real para estudar, trabalhar e viver em qualquer país de língua inglesa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destinations.map((d, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden group h-80 shadow-lg">
                <img
                  src={d.img}
                  alt={d.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(107,45,139,0.9) 0%, rgba(107,45,139,0.15) 55%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="text-white/80 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-1.5">
                    <MapPin size={12} /> {d.country}
                  </p>
                  <p className="text-white text-2xl font-black mt-1">{d.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID — cursos, tons de roxo e laranja */}
      <section className="bg-purple-50/40 py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-purple-brand/60 text-xs font-bold tracking-[0.25em] uppercase mb-3">Nossos Cursos</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-purple-brand mb-12 tracking-tight">
            Sua jornada rumo à fluência.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #6B2D8B 0%, #9333ea 100%)' }}>
              <div>
                <span className="text-white/60 font-bold text-xs tracking-[0.2em] uppercase">Journey 1</span>
                <h3 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">Básico ao<br />Intermediário</h3>
              </div>
              <div>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">Fundamentos sólidos com imersão ESL. Uma aula ao vivo por semana + atividades diárias.</p>
                <Link to="/cursos" className="text-white font-semibold text-sm flex items-center gap-1.5 group">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #a855f7 0%, #6B2D8B 100%)' }}>
              <div>
                <span className="text-white/60 font-bold text-xs tracking-[0.2em] uppercase">Journey 2 & 3</span>
                <h3 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">Intermediário<br />ao Avançado</h3>
              </div>
              <div>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">De duas a três aulas semanais de 50 minutos. Imersão total na língua inglesa.</p>
                <Link to="/cursos" className="text-white font-semibold text-sm flex items-center gap-1.5 group">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card branco com CountUp animado */}
            <div className="bg-white rounded-3xl p-10 flex flex-col justify-center min-h-72 shadow-lg border border-purple-100">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {stats.map((s, i) => (
                  <div key={i}>
                    <CountUp value={s.value} suffix={s.suffix} />
                    <p className="text-slate-500 text-sm mt-2">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #F57C20 0%, #fb923c 100%)' }}>
              <div>
                <span className="text-white/70 font-bold text-xs tracking-[0.2em] uppercase">Journey for Life</span>
                <h3 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">Nível<br />C1 / C2</h3>
              </div>
              <div>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">Preparação para o exame EF da Cambridge University. Certificação reconhecida mundialmente.</p>
                <Link to="/cursos" className="text-white font-semibold text-sm flex items-center gap-1.5 group">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA — fundo claro com foto real de alunos */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-5">Metodologia ESL</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05] text-purple-brand">
              Aprenda inglês<br />como quem vive<br />no exterior.
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Nossa metodologia ESL simula imersão total — com professores reais e colegas de verdade.
            </p>
            <Link to="/metodologia" className="inline-flex items-center gap-2 text-orange-brand font-semibold group mb-10">
              Conheça a metodologia <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Aulas ao Vivo', desc: 'Professores ESL reais, grupos de até 8 alunos.' },
                { title: 'Material Exclusivo', desc: 'Plataforma + app iOS/Android em tempo real.' },
              ].map((f, i) => (
                <div key={i} className="bg-purple-50/60 border border-purple-100 rounded-2xl p-5 text-left">
                  <p className="text-purple-brand font-bold mb-1 text-sm">{f.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
              alt="Grupo diverso de alunos estudando juntos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(107,45,139,0.55) 100%)' }} />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS — com fotos reais de alunos */}
      <section className="bg-purple-50/40 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-purple-brand/60 text-xs font-bold tracking-[0.25em] uppercase mb-3">Alunos</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-purple-brand mb-12 tracking-tight">
            Quem já transformou<br />seu inglês.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {students.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 flex flex-col gap-4 shadow-sm border border-purple-100">
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-purple-brand text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.city}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 fill-current text-orange-brand" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-purple-brand/60 text-xs font-bold tracking-[0.25em] uppercase mb-3">Dúvidas</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-purple-brand mb-12 tracking-tight">
            Perguntas<br />frequentes.
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-purple-50/50 rounded-2xl overflow-hidden border border-purple-100">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-semibold text-purple-brand pr-4 text-sm">{faq.q}</span>
                  <ChevronDown size={16} className={"shrink-0 text-orange-brand transition-transform duration-300 " + (openFaq === i ? 'rotate-180' : '')} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-purple-100 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-10">
            Tem mais dúvidas?{' '}
            <Link to="/contato" className="text-purple-brand font-semibold hover:underline">Fale com a gente</Link>
          </p>
        </div>
      </section>

      {/* CTA FINAL — gradiente roxo/laranja claro, sem escuro */}
      <section className="relative py-28 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #6B2D8B 0%, #9333ea 60%, #F57C20 140%)' }}>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white/80 font-bold text-xs tracking-[0.25em] uppercase mb-5">Comece agora</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            Pronto para ser<br />fluente em inglês?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Agende sua aula grátis e descubra como a OpenLife vai transformar seu inglês em 18 meses.
          </p>
          <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-purple-brand px-10 py-5 rounded-full font-bold text-base hover:bg-orange-50 transition-all shadow-2xl hover:-translate-y-0.5">
            Agendar Aula Grátis
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
