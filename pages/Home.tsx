import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  { q: "Quantas aulas por semana tem o curso?", a: "Módulo 1: uma aula ao vivo + atividades diárias. Módulos 2 a 5: de duas a três aulas semanais de 50 minutos. No total são quase 500 horas de conteúdo." },
  { q: "Qual a duração do curso?", a: "Do básico ao avançado em 18 meses. Com pausa para férias, pode se estender até 21 meses." },
  { q: "Qual nível alcançarei ao me formar?", a: "Nível avançado C1/C2 do CEFR. O módulo Journey for Life é modelado sobre o exame EF da Cambridge University." },
  { q: "Como funciona o material didático?", a: "Plataforma interativa + app exclusivo iOS/Android. Conteúdo em tempo real: textos, vídeos e atividades dinâmicas." },
  { q: "Posso trancar minha matrícula?", a: "Sim. Pausas de 15 dias ou 1 mês disponíveis. Sem contrato de fidelidade." },
  { q: "Tem multa de cancelamento?", a: "Não temos fidelidade. Em caso de cancelamento, apenas 10% de taxa administrativa sobre o saldo devedor — bem abaixo do mercado." },
];

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="-mt-20 overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-5">
          OpenLife English School
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] mb-8">
          Fluência<br />em inglês.
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          A metodologia mais intensiva do Brasil.<br />Do zero ao avançado em 18 meses.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://form.respondi.app/5HvbxD84"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-brand text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-orange-500 transition-all"
          >
            Agendar Aula Grátis
          </a>
          <Link
            to="/cursos"
            className="text-white border border-white/25 px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
          >
            Conhecer os Cursos
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* ─── BENTO GRID ─── */}
      <section className="bg-[#f5f5f7] py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Nossos Cursos</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">
            Sua jornada rumo à fluência.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-black rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300">
              <div>
                <span className="text-purple-brand font-bold text-xs tracking-[0.2em] uppercase">Journey 1</span>
                <h3 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">Básico ao<br />Intermediário</h3>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">Fundamentos sólidos com imersão ESL. Uma aula ao vivo por semana + atividades diárias.</p>
                <Link to="/cursos" className="text-orange-brand font-semibold text-sm flex items-center gap-1.5 group">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-purple-brand rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300">
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

            <div className="bg-white rounded-3xl p-10 flex flex-col justify-center min-h-72">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <p className="text-5xl font-black text-slate-900 leading-none">18</p>
                  <p className="text-gray-400 text-sm mt-2">meses para a fluência</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-slate-900 leading-none">500<span className="text-orange-brand text-3xl">h</span></p>
                  <p className="text-gray-400 text-sm mt-2">de conteúdo imersivo</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-slate-900 leading-none">4<span className="text-orange-brand text-3xl">×</span></p>
                  <p className="text-gray-400 text-sm mt-2">mais rápido que cursos tradicionais</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-slate-900 leading-none">21<span className="text-orange-brand text-2xl">+</span></p>
                  <p className="text-gray-400 text-sm mt-2">anos de experiência</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1c1c1e] rounded-3xl p-10 flex flex-col justify-between min-h-72 hover:scale-[1.01] transition-transform duration-300">
              <div>
                <span className="text-orange-brand font-bold text-xs tracking-[0.2em] uppercase">Journey for Life</span>
                <h3 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">Nível<br />C1 / C2</h3>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">Preparação para o exame EF da Cambridge University. Certificação reconhecida mundialmente.</p>
                <Link to="/cursos" className="text-orange-brand font-semibold text-sm flex items-center gap-1.5 group">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── METODOLOGIA ─── */}
      <section className="bg-black text-white py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-5">Metodologia ESL</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-[0.95]">
            Aprenda inglês<br />como quem vive<br />no exterior.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Nossa metodologia ESL simula uma experiência de imersão total — sem precisar sair do Brasil.
          </p>
          <Link to="/metodologia" className="inline-flex items-center gap-2 text-orange-brand font-semibold group">
            Conheça a metodologia <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { title: 'Aulas ao Vivo', desc: 'Com professores especializados em ESL, em grupos reduzidos de até 8 alunos.' },
            { title: 'Material Exclusivo', desc: 'Plataforma interativa + app iOS/Android com conteúdo em tempo real.' },
            { title: 'Flexibilidade Total', desc: 'Você agenda de segunda a sábado. Sem horário fixo obrigatório.' },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
              <p className="text-white font-bold mb-2">{f.title}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DEPOIMENTOS ─── */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Alunos</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">
            Quem já transformou<br />seu inglês.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { name: 'Ana Paula S.', text: 'Em 14 meses fui de zero ao avançado. Consegui minha promoção na empresa graças ao inglês da OpenLife.', city: 'Porto Alegre' },
              { name: 'Ricardo M.', text: 'Metodologia incrível. Diferente de tudo que já tentei. As aulas ao vivo fazem toda a diferença.', city: 'São Paulo' },
              { name: 'Fernanda L.', text: 'Consegui tirar o IELTS com 7.5 após concluir o curso. A preparação foi excepcional.', city: 'Bagé, RS' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 fill-current text-orange-brand" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Dúvidas</p>
          <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">
            Perguntas<br />frequentes.
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f5f5f7] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900 pr-4 text-sm">{faq.q}</span>
                  <ChevronDown size={16} className={`shrink-0 text-gray-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-200 pt-4">
                    {faq.a}
                  </div>
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

      {/* ─── CTA FINAL ─── */}
      <section className="bg-black text-white py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-5">Comece agora</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Pronto para ser<br />fluente em inglês?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Agende sua aula grátis e descubra como a OpenLife vai transformar seu inglês em 18 meses.
          </p>
          <a
            href="https://form.respondi.app/5HvbxD84"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-brand text-white px-10 py-5 rounded-full font-bold text-base hover:bg-orange-500 transition-all shadow-2xl shadow-orange-500/20 hover:-translate-y-0.5"
          >
            Agendar Aula Grátis
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
