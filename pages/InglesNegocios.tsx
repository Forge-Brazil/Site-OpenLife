import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Briefcase, Globe, TrendingUp, Award, MessageCircle, ArrowRight, Users, BarChart2, Linkedin } from 'lucide-react';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const InglesNegocios: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-brand/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-orange-brand/20 border border-orange-brand/30 text-orange-brand px-4 py-1.5 rounded-full text-sm font-bold">
            <Briefcase size={14} />
            <span>Business English — Executivos & Profissionais</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Inglês para Negócios{' '}
            <span className="text-orange-brand">para Executivos</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reuniões internacionais, negociações, apresentações para boards e LinkedIn global.
            Business English com método ESL — do zero ao fluente em 18 meses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-orange-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl">
              Agendar aula experimental grátis <ArrowRight className="ml-2" size={20} />
            </a>
            <Link to="/metodologia" className="inline-flex items-center justify-center border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-white hover:text-white transition-all">
              Conhecer metodologia
            </Link>
          </div>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Inglês para Negócios — OpenLife Business",
        "description": "Business English para executivos e profissionais. Reuniões, negociações e apresentações em inglês. Método ESL imersivo, fluência em 18 meses.",
        "provider": { "@type": "EducationalOrganization", "name": "OpenLife English School", "url": "https://openlifebrasil.com.br" },
        "educationalLevel": "Profissional Avançado",
        "audience": { "@type": "BusinessAudience", "audienceType": "Executivos e profissionais de negócios" },
        "url": "https://openlifebrasil.com.br/#/ingles-para-negocios"
      })}} />

      {/* Problema/Solução */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Quantas oportunidades você já perdeu por <span className="text-orange-brand">não falar inglês?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Uma promoção. Um contrato. Uma reunião com a matriz americana onde você não conseguiu se expressar.
                Um LinkedIn em inglês que nunca foi longe. Isso acaba aqui.
              </p>
              <div className="space-y-4">
                {[
                  'Reuniões com times internacionais — sem travar',
                  'Negociações e fechamento de contratos em inglês',
                  'Apresentações para boards e investidores estrangeiros',
                  'LinkedIn global com artigos e posts em inglês',
                  'IELTS e TOEFL para vistos e certificações profissionais',
                  'Network global em eventos e conferências',
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-orange-brand shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                Quero falar inglês nos negócios <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=800"
                alt="Executivo em reunião internacional falando inglês fluente"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">O que você vai dominar</h2>
            <p className="text-slate-500">Habilidades reais para um executivo no mundo globalizado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MessageCircle size={24} />, title: 'Conversação fluente', desc: 'Elimine o travamento em conversas. Responda rápido, com naturalidade e confiança.' },
              { icon: <Users size={24} />, title: 'Reuniões e calls', desc: 'Conduza e participe de reuniões em inglês com times globais sem perder nenhum detalhe.' },
              { icon: <BarChart2 size={24} />, title: 'Apresentações de negócio', desc: 'Estruture e entregue pitch decks, relatórios e apresentações executivas em inglês.' },
              { icon: <Briefcase size={24} />, title: 'Negociação e contratos', desc: 'Vocabulário e fraseologia específicos para negociar e fechar contratos internacionais.' },
              { icon: <Linkedin size={24} />, title: 'LinkedIn e escrita profissional', desc: 'Emails, relatórios, posts e artigos em inglês que constroem sua autoridade global.' },
              { icon: <Globe size={24} />, title: 'Networking global', desc: 'Converse com naturalidade em eventos, conferências e feiras internacionais.' },
              { icon: <Award size={24} />, title: 'IELTS & TOEFL Prep', desc: 'Preparação integrada para exames de proficiência exigidos em processos seletivos globais.' },
              { icon: <TrendingUp size={24} />, title: 'Crescimento de carreira', desc: 'Inglês fluente aumenta seu salário em média 60% e dobra as oportunidades de carreira.' },
              { icon: <CheckCircle2 size={24} />, title: 'Certificação CEFR C1', desc: 'Certificado internacionalmente reconhecido que valida sua proficiência para qualquer empresa global.' },
            ].map((b, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-11 h-11 bg-orange-50 text-orange-brand rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-brand group-hover:text-white transition-all">
                  {b.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <blockquote className="text-xl md:text-2xl font-bold italic leading-relaxed text-slate-200">
            "Em 14 meses comecei a conduzir reuniões com o time da matriz dos EUA sozinho. Antes eu precisava de um intérprete. A OpenLife mudou a trajetória da minha carreira."
          </blockquote>
          <div>
            <p className="font-black text-white">Rodrigo M.</p>
            <p className="text-slate-400 text-sm">Diretor de Operações — São Paulo/SP</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Perguntas de executivos</h2>
          {[
            { q: 'Tenho pouco tempo. Funciona para agenda cheia de executivo?', a: 'Sim. O Journey foi desenvolvido para profissionais com rotina intensa. Horários flexíveis, aulas de 50 min, e material que pode ser acessado de qualquer dispositivo, de qualquer lugar.' },
            { q: 'Você tem inglês básico? Vale a pena?', a: 'Absolutamente. Nosso módulo 1 começa do zero e avança de forma acelerada. Em 6-8 meses você já tem base suficiente para participar de reuniões simples em inglês.' },
            { q: 'O Business English é um curso separado?', a: 'O Journey 18 Meses já inclui Business English progressivo a partir do módulo 2. Não é um produto separado — é integrado à formação de fluência, com foco crescente no vocabulário de negócios.' },
            { q: 'Empresa pode patrocinar o curso?', a: 'Sim! Emitimos nota fiscal e temos convênios corporativos. Entre em contato para mais informações sobre pacotes empresariais e cotas para equipes.' },
          ].map((item, i) => (
            <details key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 list-none hover:bg-slate-50 transition-colors">
                {item.q}
                <span className="text-orange-brand ml-4 shrink-0 text-xl group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-brand to-orange-600 text-white text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Seu próximo nível na carreira começa com inglês.</h2>
          <p className="text-orange-100">Aula experimental gratuita com um de nossos especialistas em Business English.</p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-orange-brand px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all shadow-xl">
            Agendar minha aula grátis <ArrowRight className="ml-3 text-orange-brand" size={22} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InglesNegocios;
