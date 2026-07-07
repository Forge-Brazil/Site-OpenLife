import React, { useState } from 'react';
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
  {
    city: 'Londres',
    country: 'Reino Unido',
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1200&auto=format&fit=crop',
  },
  {
    city: 'Nova York',
    country: 'Estados Unidos',
    img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200&auto=format&fit=crop',
  },
  {
    city: 'Cambridge',
    country: 'Reino Unido',
    img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1200&auto=format&fit=crop',
  },
];

const students = [
  { name: 'Ana Paula S.', city: 'Porto Alegre', text: 'Em 14 meses fui de zero ao avançado. Consegui minha promoção graças ao inglês da OpenLife.', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Ricardo M.', city: 'São Paulo', text: 'Metodologia incrível. As aulas ao vivo com professores de verdade fazem toda a diferença.', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Fernanda L.', city: 'Bagé, RS', text: 'Consegui tirar o IELTS com 7.5 após concluir o curso. A preparação foi excepcional.', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
];

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="-mt-20 overflow-x-hidden">

      {/* HERO — campus estilo Cambridge com pessoas reais */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
            alt="Estudantes em campus universitário internacional"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(59,7,100,0.92) 0%, rgba(107,45,139,0.85) 45%, rgba(168,85,247,0.55) 80%, rgba(243,232,255,0.35) 100%)' }}
          />
        </div>

        <div className="relative z-10">
          <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-5">
            OpenLife English School
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-white">
            Sinta-se em<br />Cambridge,<br />todos os dias.
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-xl mx-auto leading-relaxed text-white/85">
            Imersão total no inglês, sem sair do Brasil.<br />Do zero ao avançado em 18 meses.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer"
              className="bg-orange-brand text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-orange-500 transition-all shadow-lg">
              Agendar Aula Grátis
            </a>
            <Link to="/cursos"
              className="text-white border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 transition-all">
              Conhecer os Cursos
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70 z-10">
          <ChevronDown size={20} className="animate-bounce text-white" />
        </div>
      </section>

      {/* DESTINOS — Big Ben, Estátua da Liberdade, Cambridge */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Alcance global</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Seu inglês vai te levar<br />a qualquer lugar do mundo.
          </h2>
          <p className="text-center text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Fluência real para estudar, trabalhar e viver em qualquer país de língua inglesa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destinations.map((d, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden group h-80">
                <img
                  src={d.img}
                  alt={d.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(59,7,100,0.85) 0%, rgba(59,7,100,0.1) 55%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="text-white/70 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-1.5">
                    <MapPin size={12} /> {d.country}
                  </p>
                  <p className="text-white text-2xl font-black mt-1">{d.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID — cursos */}
      <section className="bg-[#f5f5f7] py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Nossos Cursos</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">
            Sua jornada rumo à fluência.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6B2D8B 100%)' }}>
              <div>
                <span className="text-white/50 font-bold text-xs tracking-[0.2em] uppercase">Journey 1</span>
                <h3 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">Básico ao<br />Intermediário</h3>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">Fundamentos sólidos com imersão ESL. Uma aula ao vivo por semana + atividades diárias.</p>
                <Link to="/cursos" className="text-orange-brand font-semibold text-sm flex items-center gap-1.5 group">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #6B2D8B 0%, #9333ea 100%)' }}>
              <div>
                <span className="text-white/50 font-bold text-xs tracking-[0.2em] uppercase">Journey 2 & 3</span>
                <h3 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">Intermediário<br />ao Avançado</h3>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">De duas a três aulas semanais de 50 minutos. Imersão total na língua inglesa.</p>
                <Link to="/cursos" className="text-white font-semibold text-sm flex items-center gap-1.5 group">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-10 flex flex-col justify-center min-h-72 shadow-sm">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div><p className="text-5xl font-black text-slate-900 leading-none">18</p><p className="text-gray-400 text-sm mt-2">meses para a fluência</p></div>
                <div><p className="text-5xl font-black text-slate-900 leading-none">500<span className="text-orange-brand text-3xl">h</span></p><p className="text-gray-400 text-sm mt-2">de conteúdo imersivo</p></div>
                <div><p className="text-5xl font-black text-slate-900 leading-none">4<span className="text-orange-brand text-3xl">x</span></p><p className="text-gray-400 text-sm mt-2">mais rápido que outros cursos</p></div>
                <div><p className="text-5xl font-black text-slate-900 leading-none">21<span className="text-orange-brand text-2xl">+</span></p><p className="text-gray-400 text-sm mt-2">anos de experiência</p></div>
              </div>
            </div>
            <div className="rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #F57C20 100%)' }}>
              <div>
                <span className="text-white/60 font-bold text-xs tracking-[0.2em] uppercase">Journey for Life</span>
                <h3 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">Nível<br />C1 / C2</h3>
              </div>
              <div>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">Preparação para o exame EF da Cambridge University. Certificação reconhecida mundialmente.</p>
                <Link to="/cursos" className="text-white font-semibold text-sm flex items-center gap-1.5 group">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA — com foto de sala de aula real */}
      <section className="relative text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
            alt="Grupo diverso de alunos estudando juntos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(107,45,139,0.93) 0%, rgba(59,7,100,0.95) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-5">Metodologia ESL</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-[0.95] text-white">
            Aprenda inglês<br />como quem vive<br />no exterior.
          </h2>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Nossa metodologia ESL simula imersão total — com professores reais e colegas de verdade.
          </p>
          <Link to="/metodologia" className="inline-flex items-center gap-2 text-orange-brand font-semibold group">
            Conheça a metodologia <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { title: 'Aulas ao Vivo', desc: 'Professores ESL reais, grupos reduzidos de até 8 alunos.' },
            { title: 'Material Exclusivo', desc: 'Plataforma + app iOS/Android com conteúdo em tempo real.' },
            { title: 'Flexibilidade Total', desc: 'Agende de segunda a sábado. Sem horário fixo.' },
          ].map((f, i) => (
            <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-left backdrop-blur-sm">
              <p className="text-white font-bold mb-2">{f.title}</p>
              <p className="text-white/65 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS — com fotos reais de alunos */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Alunos</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">
            Quem já transformou<br />seu inglês.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {students.map((t, i) => (
              <div key={i} className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.city}</p>
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
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Dúvidas</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">
            Perguntas<br />frequentes.
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-semibold text-slate-900 pr-4 text-sm">{faq.q}</span>
                  <ChevronDown size={16} className={"shrink-0 text-gray-400 transition-transform duration-300 " + (openFaq === i ? 'rotate-180' : '')} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-10">
            Tem mais dúvidas?{' '}
            <Link to="/contato" className="text-purple-brand font-semibold hover:underline">Fale com a gente</Link>
          </p>
        </div>
      </section>

      {/* CTA FINAL — com foto de pessoas comemorando */}
      <section className="relative text-white py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
            alt="Estudantes formandos comemorando"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(107,45,139,0.95) 0%, rgba(59,7,100,0.95) 60%, rgba(30,5,54,0.97) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-5">Comece agora</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            Pronto para ser<br />fluente em inglês?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Agende sua aula grátis e descubra como a OpenLife vai transformar seu inglês em 18 meses.
          </p>
          <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-orange-brand text-white px-10 py-5 rounded-full font-bold text-base hover:bg-orange-500 transition-all shadow-2xl hover:-translate-y-0.5">
            Agendar Aula Grátis
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
