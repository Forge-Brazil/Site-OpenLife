import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Award, Briefcase, Target, TrendingUp, ArrowRight, Users } from 'lucide-react';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const InglesAdultos: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-purple-brand text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold">
            <Briefcase size={14} />
            <span>Adultos • Universitários • Profissionais Liberais</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Inglês para Adultos{' '}
            <span className="text-orange-brand">do Zero ao Fluente</span>{' '}
            em 18 Meses
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Método ESL imersivo com horários que se adaptam à sua rotina.
            Presencial ou online. Certificação internacional CEFR C1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-purple-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-900 transition-all shadow-xl">
              Agendar aula experimental grátis <ArrowRight className="ml-2" size={20} />
            </a>
            <Link to="/metodologia" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Conhecer a metodologia
            </Link>
          </div>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Inglês para Adultos — Journey 18 Meses OpenLife",
        "description": "Curso de inglês para adultos com método ESL imersivo. Do zero ao C1 em 18 meses. Horários flexíveis, online e presencial.",
        "provider": { "@type": "EducationalOrganization", "name": "OpenLife English School", "url": "https://openlifebrasil.com.br" },
        "educationalLevel": "A1 ao C1 (CEFR)",
        "timeRequired": "P18M",
        "url": "https://openlifebrasil.com.br/#/ingles-para-adultos"
      })}} />

      {/* Problema/Solução */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Por que a maioria dos adultos <span className="text-purple-brand">nunca fica fluente?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Não é falta de inteligência. É falta de método. Cursos tradicionais ensinam gramática no vácuo,
                sem contexto real, e fazem você traduzir o tempo todo — o que nunca leva à fluência.
              </p>
              <div className="space-y-4">
                {[
                  'Método ESL: você pensa diretamente em inglês desde o início',
                  'Aulas ao vivo com professor certificado — não vídeos gravados',
                  'Turmas de 4 alunos: atenção individual garantida',
                  'Horários de segunda a sábado, das 9h às 22h',
                  'Online ou presencial em todo o Brasil',
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-purple-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-900 transition-all">
                Começar agora <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=800"
                alt="Adulto aprendendo inglês online com método ESL"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Para quem é o Journey 18 Meses?</h2>
            <p className="text-slate-500">Se você se identifica com algum desses perfis, o Journey foi feito para você.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Briefcase size={24} />, label: 'Profissional Liberal', desc: 'Advogados, médicos, engenheiros que querem se destacar em conferências internacionais e publicações globais.' },
              { icon: <TrendingUp size={24} />, label: 'Executivo', desc: 'Líderes que precisam conduzir reuniões, negociar contratos e se comunicar com times globais em inglês.' },
              { icon: <Target size={24} />, label: 'Universitário', desc: 'Estudantes que querem tirar IELTS/TOEFL, fazer intercâmbio ou trabalhar em startups internacionais ao se formar.' },
              { icon: <Award size={24} />, label: 'Profissional de Tech', desc: 'Devs, designers e product managers que querem trabalhar em big techs americanas e startups globais.' },
              { icon: <Clock size={24} />, label: 'Carreira em transição', desc: 'Quem está mudando de área e precisa do inglês para entrar em empresas multinacionais.' },
              { icon: <Users size={24} />, label: 'Qualquer adulto motivado', desc: 'Do zero ao avançado — desde que tenha comprometimento. O método garante o resultado em 18 meses.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-purple-50 text-purple-brand rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2">{item.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline resumida */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-16">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Sua jornada de 18 meses</h2>
            <p className="text-slate-500">5 módulos progressivos — do A1 ao C1 CEFR.</p>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['A1→A2', 'A2→B1', 'B1→B2', 'B2→C1', 'C1→C2'].map((level, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs ${i === 4 ? 'bg-emerald-500' : 'bg-purple-brand'}`}>
                  M{i + 1}
                </div>
                <div className="h-1 bg-purple-brand/20 w-full hidden sm:block"></div>
                <p className="text-xs font-bold text-slate-600">{level}</p>
              </div>
            ))}
          </div>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-purple-brand text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-purple-900 transition-all shadow-xl">
            Começar minha jornada <ArrowRight className="ml-3" size={22} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Dúvidas frequentes</h2>
          {[
            { q: 'Funciona para quem está no zero absoluto?', a: 'Sim! O módulo 1 começa do zero absoluto (A1). Não é necessário nenhum conhecimento prévio de inglês.' },
            { q: 'Quanto tempo por dia preciso dedicar?', a: 'Recomendamos ao menos 1-2 horas por dia entre aulas ao vivo (50 min) e atividades na plataforma. Quanto mais constante, mais rápido o resultado.' },
            { q: 'Posso fazer as aulas no horário de almoço?', a: 'Sim! Nosso horário vai de 9h às 22h, de segunda a sábado. Você agenda de acordo com sua disponibilidade semanal.' },
            { q: 'Tem mensalidade ou é tudo parcelado?', a: 'Entre em contato para conhecer os planos atuais. Trabalhamos com diferentes opções de pagamento para se adaptar ao seu orçamento.' },
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
    </div>
  );
};

export default InglesAdultos;
