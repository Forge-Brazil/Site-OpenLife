import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, GraduationCap, Globe, TrendingUp, Award, Zap, ArrowRight, Star } from 'lucide-react';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const InglesAdolescentes: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-700 to-purple-brand text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-brand/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold">
            <TrendingUp size={14} />
            <span>OpenLife Teens — 13 a 17 anos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Inglês para Adolescentes —{' '}
            <span className="text-orange-brand">Fluência antes dos 18</span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Método ESL imersivo com foco em intercâmbio, SAT, vestibular e carreira global.
            Seu filho fluente antes de entrar na faculdade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-purple-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-900 transition-all shadow-xl">
              Agendar aula experimental grátis <ArrowRight className="ml-2" size={20} />
            </a>
            <Link to="/cursos" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Ver todos os cursos
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-4">
            {[{ n: '13-17', l: 'Faixa etária' }, { n: 'C1', l: 'Nível final CEFR' }, { n: '18 m', l: 'Tempo ao fluente' }].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black">{s.n}</p>
                <p className="text-xs text-indigo-200 uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "OpenLife Teens — Inglês para Adolescentes",
        "description": "Curso de inglês para adolescentes de 13 a 17 anos. Preparação para vestibular, SAT, intercâmbio e faculdade internacional.",
        "provider": { "@type": "EducationalOrganization", "name": "OpenLife English School", "url": "https://openlifebrasil.com.br" },
        "educationalLevel": "Fundamental II e Médio",
        "audience": { "@type": "EducationalAudience", "audienceType": "Adolescentes 13-17 anos" },
        "url": "https://openlifebrasil.com.br/#/ingles-para-adolescentes"
      })}} />

      {/* Diferenciais */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              O que o inglês fluente abre para seu filho
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Fluência antes dos 18 é um diferencial competitivo para o resto da vida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <GraduationCap size={24} />, title: 'Vestibular com vantagem', desc: 'Questões de inglês no ENEM e vestibulares de ponta — respondidas com segurança e naturalidade.' },
              { icon: <Globe size={24} />, title: 'Intercâmbio real', desc: 'Programas de high school nos EUA, Canadá, Austrália e Irlanda. Seu filho vai preparado para aproveitar de verdade.' },
              { icon: <Star size={24} />, title: 'SAT e college americano', desc: 'Prep para o SAT e aplicações para universidades americanas. Harvard, MIT, Stanford — com inglês fluente.' },
              { icon: <TrendingUp size={24} />, title: 'Carreira global aos 22', desc: 'Formar-se com C1 de CEFR coloca qualquer profissional à frente em multinacionais e startups globais.' },
              { icon: <Award size={24} />, title: 'Certificações IELTS/TOEFL', desc: 'Módulo 5 do Journey prepara especificamente para exames internacionais de proficiência.' },
              { icon: <Zap size={24} />, title: 'Inglês de forma natural', desc: 'Método ESL imersivo — adolescentes aprendem a pensar em inglês, não a traduzir. Resultado mais rápido e duradouro.' },
            ].map((b, i) => (
              <div key={i} className="p-7 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all group">
                <div className="w-11 h-11 bg-purple-50 text-purple-brand rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-brand group-hover:text-white transition-all">
                  {b.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-20 bg-page">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
          <div className="flex justify-center text-purple-brand">
            {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-bold text-slate-900 italic leading-relaxed">
            "Meu filho entrou na OpenLife aos 14 com zero de inglês. Aos 16, fez intercâmbio em Boston por 6 meses e voltou fluente. A diferença na faculdade e na vida social foi impressionante."
          </blockquote>
          <p className="text-slate-500 font-medium">— Pai de aluno, Porto Alegre/RS</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Perguntas frequentes</h2>
          {[
            { q: 'Qual a diferença do Teens para o programa adulto?', a: 'O OpenLife Teens tem metodologia adaptada para adolescentes — temas relevantes para essa faixa etária, gamificação, foco em pop culture, redes sociais em inglês e preparação para vestibular e intercâmbio.' },
            { q: 'Meu filho não tem interesse. O método funciona mesmo assim?', a: 'O método ESL é comprovadamente mais engajante porque usa contexto real — músicas, séries, esportes, tecnologia. Adolescentes que "odeiam" inglês tradicional costumam se apaixonar pelo método imersivo.' },
            { q: 'Em quanto tempo meu filho estaria pronto para intercâmbio?', a: 'Um adolescente que começa do zero e dedica 1h/dia atinge nível B2 (suficiente para intercâmbio) em 9-12 meses. Com mais dedicação, em 6 meses já tem base sólida para vivência no exterior.' },
            { q: 'Tem turmas com outros adolescentes?', a: 'Sim! As turmas do Teens são compostas por adolescentes da mesma faixa etária, o que torna as aulas mais dinâmicas, divertidas e socialmente relevantes.' },
          ].map((item, i) => (
            <details key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 list-none hover:bg-slate-50 transition-colors">
                {item.q}
                <span className="text-purple-brand ml-4 shrink-0 text-xl group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center px-4" style={{ backgroundColor: '#1A1033' }}>
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">O futuro do seu filho começa agora.</h2>
          <p className="text-purple-200">Fluência antes dos 18 é a vantagem competitiva mais valiosa que você pode dar.</p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-purple-brand text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-purple-900 transition-all shadow-xl">
            Agendar aula grátis <ArrowRight className="ml-3" size={22} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InglesAdolescentes;
