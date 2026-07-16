import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  { q: "Quantas aulas por semana tem o curso?", a: "Módulo 1: uma aula ao vivo + atividades diárias. Módulos 2 a 5: de duas a três aulas semanais de 50 minutos." },
  { q: "Qual a duração do curso?", a: "Do básico ao avançado em 18 meses. Com pausa para férias, pode se estender até 21 meses." },
  { q: "Qual nível alcançarei ao me formar?", a: "Nível avançado C1/C2 do CEFR, com preparação para exames internacionais." },
  { q: "Posso trancar minha matrícula?", a: "Sim. Pausas de 15 dias ou 1 mês disponíveis. Sem contrato de fidelidade." },
];

const courses = [
  { title: 'Journey 1', subtitle: 'Básico ao Intermediário', desc: 'Fundamentos sólidos com imersão ESL.' },
  { title: 'Journey 2 & 3', subtitle: 'Intermediário ao Avançado', desc: 'Aulas semanais com imersão total.' },
  { title: 'Journey for Life', subtitle: 'Nível C1 / C2', desc: 'Preparação para certificações internacionais.' },
];

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="-mt-20 bg-white">

      {/* HERO */}
      <section className="bg-purple-brand min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-4">
          OpenLife English School
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-white">
          Fluência em inglês<br />em 18 meses.
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-xl mx-auto text-white/85">
          Metodologia ESL imersiva. Do zero ao avançado, sem sair do Brasil.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer"
            className="bg-orange-brand text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-orange-500 transition-colors">
            Agendar Aula Grátis
          </a>
          <Link to="/cursos"
            className="text-white border border-white/50 px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">
            Conhecer os Cursos
          </Link>
        </div>
        <ChevronDown size={20} className="text-white/60 mt-10" />
      </section>

      {/* CURSOS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-black text-purple-brand mb-12">
            Nossos Cursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {courses.map((c, i) => (
              <div key={i} className="border border-purple-100 rounded-2xl p-8 hover:border-purple-brand transition-colors">
                <span className="text-orange-brand font-bold text-xs tracking-widest uppercase">{c.title}</span>
                <h3 className="text-xl font-black text-purple-brand mt-2 mb-3">{c.subtitle}</h3>
                <p className="text-slate-500 text-sm mb-4">{c.desc}</p>
                <Link to="/cursos" className="text-purple-brand font-semibold text-sm flex items-center gap-1.5">
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="bg-purple-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-4">Metodologia ESL</p>
          <h2 className="text-3xl md:text-4xl font-black text-purple-brand mb-5">
            Aprenda inglês como quem vive no exterior.
          </h2>
          <p className="text-slate-500 mb-6 leading-relaxed">
            Nossa metodologia simula imersão total, com professores reais e turmas reduzidas.
          </p>
          <Link to="/metodologia" className="inline-flex items-center gap-2 text-purple-brand font-semibold">
            Conheça a metodologia <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-black text-purple-brand mb-10">
            Perguntas Frequentes
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-purple-100 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left">
                  <span className="font-semibold text-purple-brand text-sm">{faq.q}</span>
                  <ChevronDown size={16} className={"shrink-0 text-orange-brand transition-transform " + (openFaq === i ? 'rotate-180' : '')} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-slate-500 text-sm border-t border-purple-100 pt-3">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-orange-brand py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Pronto para ser fluente em inglês?
          </h2>
          <p className="text-white/90 mb-8">
            Agende sua aula grátis e comece hoje mesmo.
          </p>
          <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-orange-brand px-8 py-3.5 rounded-full font-bold text-sm hover:bg-purple-50 transition-colors">
            Agendar Aula Grátis
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
