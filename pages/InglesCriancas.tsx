import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Heart, Star, Smile, BookOpen, Music, ArrowRight } from 'lucide-react';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const InglesCriancas: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/15 border border-white/25 px-4 py-1.5 rounded-full text-sm font-bold">
            <Heart size={14} />
            <span>OpenLife Kids — 6 a 12 anos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Inglês para Crianças{' '}
            <span className="text-yellow-300">com Bilinguismo Real</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Método lúdico e imersivo para crianças de 6 a 12 anos.
            Bilinguismo precoce com professores especializados, gamificação e muito aprendizado divertido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-purple-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-900 transition-all shadow-xl">
              Agendar aula experimental grátis <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "OpenLife Kids — Inglês para Crianças",
        "description": "Curso de inglês para crianças de 6 a 12 anos com método imersivo e gamificado. Bilinguismo precoce com professores especializados.",
        "provider": { "@type": "EducationalOrganization", "name": "OpenLife English School", "url": "https://openlifebrasil.com.br" },
        "educationalLevel": "Infantil e Fundamental I",
        "url": "https://openlifebrasil.com.br/#/ingles-para-criancas",
        "audience": { "@type": "EducationalAudience", "educationalRole": "student", "audienceType": "Crianças 6-12 anos" }
      })}} />

      {/* Por que começar cedo */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Por que <span className="text-emerald-600">começar antes dos 12</span> faz toda a diferença?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A neurociência confirma: crianças absorvem idiomas de forma natural e automática até os 12 anos.
                Isso significa que seu filho pode atingir fluência real — com sotaque, entonação e naturalidade —
                muito mais facilmente do que um adulto.
              </p>
              <div className="space-y-4">
                {[
                  'Absorção natural do idioma como segunda língua',
                  'Sotaque e pronúncia próximos ao nativo',
                  'Vantagem cognitiva: bilíngues têm melhor memória e criatividade',
                  'Base C1 antes dos 18 — diferencial para qualquer carreira',
                  'Abertura cultural e empatia global desde cedo',
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-purple-brand text-white px-8 py-4 rounded-full font-bold hover:bg-purple-900 transition-all">
                Garantir vaga do meu filho <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
                alt="Crianças aprendendo inglês com método lúdico e imersivo"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona o Kids */}
      <section className="py-24 bg-page">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Como funciona o <span className="text-emerald-600">OpenLife Kids</span>
            </h2>
            <p className="text-slate-500">Método desenvolvido especificamente para crianças de 6 a 12 anos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Smile size={24} />, title: 'Aprendizado lúdico', desc: 'Jogos, músicas, histórias e atividades interativas que tornam o inglês natural e divertido.' },
              { icon: <Music size={24} />, title: 'Músicas e storytelling', desc: 'Músicas em inglês e histórias contadas em imersão total para desenvolver audição e pronúncia.' },
              { icon: <BookOpen size={24} />, title: 'Material exclusivo', desc: 'Material didático desenvolvido especificamente para cada faixa etária, com conteúdo cultural relevante.' },
              { icon: <Heart size={24} />, title: 'Professores especializados', desc: 'Todos os professores do Kids têm formação em pedagogia infantil e metodologia ESL adaptada.' },
              { icon: <Star size={24} />, title: 'Gamificação com recompensas', desc: 'Sistema de pontos, medalhas e missões que mantém as crianças engajadas e motivadas.' },
              { icon: <CheckCircle2 size={24} />, title: 'Acompanhamento para pais', desc: 'Relatórios de progresso regulares para os pais acompanharem a evolução do filho.' },
            ].map((b, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Dúvidas dos pais</h2>
          {[
            { q: 'A partir de qual idade meu filho pode começar?', a: 'O OpenLife Kids atende crianças a partir de 6 anos. Para crianças mais novas, recomendamos aguardar a alfabetização em português para uma absorção mais eficaz do inglês.' },
            { q: 'Meu filho já tem algum inglês na escola — serve?', a: 'Fazemos um nivelamento para identificar o ponto certo para começar. Crianças com alguma base avançam mais rápido e isso é aproveitado no método.' },
            { q: 'As aulas são presenciais ou online?', a: 'Oferecemos as duas modalidades. As aulas online têm a mesma qualidade das presenciais, com plataforma interativa e professores em vídeo ao vivo.' },
            { q: 'Como funciona a frequência das aulas?', a: 'De 1 a 3 aulas por semana, dependendo do módulo. O ideal é a frequência constante para que o cérebro da criança mantenha o contato regular com o idioma.' },
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
          <h2 className="text-3xl md:text-4xl font-black">Dê ao seu filho a vantagem do bilinguismo.</h2>
          <p className="text-purple-200">Aula experimental gratuita. Sem compromisso. Resultado para toda a vida.</p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-purple-brand text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-purple-900 transition-all shadow-xl">
            Agendar aula grátis para meu filho <ArrowRight className="ml-3" size={22} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InglesCriancas;
