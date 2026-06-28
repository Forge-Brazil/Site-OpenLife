import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Globe, Clock, Users, Award, Wifi, ArrowRight, Star } from 'lucide-react';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const InglesOnline: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-brand to-indigo-900 text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-brand/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold">
            <Wifi size={14} />
            <span>100% Online — Ao Vivo — Brasil todo</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Curso de Inglês Online{' '}
            <span className="text-orange-brand">com Aulas ao Vivo</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Aprenda inglês de qualquer lugar do Brasil com professores certificados,
            método ESL imersivo e turmas pequenas. Fluência garantida em 18 meses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-orange-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl">
              Começar aula experimental grátis <ArrowRight className="ml-2" size={20} />
            </a>
            <Link to="/metodologia" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Ver metodologia
            </Link>
          </div>
          <div className="flex justify-center gap-8 pt-4 flex-wrap">
            {['+66k alunos', '5.0 ★ Google', '18 meses', 'CEFR C1'].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-black text-lg">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Curso de Inglês Online — OpenLife",
        "description": "Curso de inglês online com aulas ao vivo, professores certificados e método ESL imersivo. Fluência em 18 meses. Para qualquer lugar do Brasil.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "OpenLife English School",
          "url": "https://openlifebrasil.com.br"
        },
        "educationalLevel": "A1 ao C1 (CEFR)",
        "timeRequired": "P18M",
        "availableOnDevice": "Online",
        "inLanguage": "pt-BR",
        "url": "https://openlifebrasil.com.br/#/ingles-online"
      })}} />

      {/* Benefícios */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Por que o inglês online da <span className="text-purple-brand">OpenLife</span> é diferente
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Não é um curso gravado. São aulas ao vivo, professor real, método imersivo — e você aprende de qualquer lugar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe size={24} />, title: 'Aprenda de qualquer lugar', desc: 'São Paulo, Rio, Curitiba, ou até do exterior. Basta ter internet.' },
              { icon: <Users size={24} />, title: 'Turmas com 4 alunos', desc: 'Atenção individual garantida. Sem se perder em turmas de 30 pessoas.' },
              { icon: <Clock size={24} />, title: 'Horários flexíveis', desc: 'Agende suas aulas de acordo com sua rotina. Segunda a sábado, 9h às 22h.' },
              { icon: <Award size={24} />, title: 'Professores certificados', desc: 'Todos com formação pedagógica ESL e experiência em ensino online.' },
              { icon: <CheckCircle2 size={24} />, title: 'Plataforma exclusiva', desc: 'Acesso 24/7 ao material interativo, exercícios e comunidade de alunos.' },
              { icon: <Star size={24} />, title: 'Certificação CEFR C1', desc: 'Ao concluir o Journey 18 Meses, você recebe certificado de nível C1.' },
            ].map((b, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-purple-50 text-purple-brand rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-brand group-hover:text-white transition-all">
                  {b.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Como funciona o inglês online</h2>
            <p className="text-slate-500">4 passos simples para começar sua jornada à fluência.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { n: '01', title: 'Agende sua aula gratuita', desc: 'Preencha o formulário, nosso time entra em contato em até 1h e agenda sua aula experimental grátis.' },
              { n: '02', title: 'Faça o teste de nivelamento', desc: 'Descobrimos seu nível atual (A1-C2) e o módulo ideal do Journey 18 Meses para você.' },
              { n: '03', title: 'Comece as aulas ao vivo', desc: 'Acesse a plataforma, entre na sua turma (máx. 4 alunos) e comece a imersão desde o primeiro dia.' },
              { n: '04', title: 'Fluência em 18 meses', desc: 'Com constância e nosso método ESL, você alcança o C1 em 18 meses e recebe sua certificação internacional.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-purple-brand text-white rounded-2xl flex items-center justify-center font-black text-sm">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Perguntas sobre o inglês online</h2>
          {[
            { q: 'Preciso de equipamento especial?', a: 'Não. Basta ter um computador ou celular com câmera e conexão à internet razoável. Indicamos um headset para melhor experiência, mas não é obrigatório.' },
            { q: 'As aulas são gravadas?', a: 'As aulas ao vivo não são gravadas por padrão para proteger a privacidade dos alunos. Mas você tem acesso ilimitado ao material da plataforma para revisar a qualquer hora.' },
            { q: 'Posso fazer aulas de celular?', a: 'Sim! Nossa plataforma tem app iOS e Android. Você pode acompanhar o material pelo celular, mas recomendamos um computador ou tablet para as aulas ao vivo.' },
            { q: 'E se eu perder uma aula?', a: 'Você pode repor aulas perdidas. Temos reposições disponíveis para garantir que você não fique para trás no conteúdo.' },
          ].map((item, i) => (
            <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:bg-slate-50 transition-colors list-none">
                {item.q}
                <span className="text-purple-brand ml-4 shrink-0 text-xl group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-brand text-white text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Comece hoje. Do seu sofá.</h2>
          <p className="text-purple-100">Aula experimental gratuita. Sem compromisso. Online agora.</p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-orange-brand text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-xl">
            Quero minha aula grátis <ArrowRight className="ml-3" size={22} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InglesOnline;
