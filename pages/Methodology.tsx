import React from 'react';
import { 
  Target, Zap, MessageSquare, Repeat, Check, X, 
  Users, GraduationCap, Briefcase, Globe, Smartphone, 
  CheckCircle2, ArrowRight, Star, Quote 
} from 'lucide-react';

const Methodology: React.FC = () => {
  const comparisonData = [
    { feature: "Tradução mental", trad: "Sim", open: "Não" },
    { feature: "Comunicação desde o início", trad: "Não", open: "Sim" },
    { feature: "Contato diário com o idioma", trad: "Raramente", open: "Sim" },
    { feature: "Fluência em 18 meses", trad: "Não", open: "Sim" },
    { feature: "Certificação internacional", trad: "Opcional", open: "Inclusa" },
    { feature: "Suporte para intercâmbio", trad: "Limitado", open: "Completo" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 text-center text-white relative overflow-hidden" style={{ backgroundColor: '#1A1033' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <div className="w-[120%] h-[120%] bg-gradient-to-br from-purple-brand via-purple-800 to-purple-900 blur-3xl rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="block">Sistema Natural,</span>
            <span className="text-purple-200 block">a metodologia que transforma seu inglês</span>
            <span className="text-white block">em 18 meses!</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 leading-relaxed font-medium">
            Aprenda inglês de forma natural, sem tradução mental, com contato diário e foco em comunicação real. Uma experiência imersiva que transforma sua carreira e sua vida.
          </p>
          <div className="pt-6">
            <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-brand px-10 py-5 rounded-full font-black text-xl hover:bg-purple-50 transition-all shadow-2xl inline-flex items-center group">
              Quero aprender com a metodologia OpenLife
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Bloco 1 – O Que é a Metodologia OpenLife? */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Na <span className="text-purple-brand">OpenLife</span>, você não aprende inglês como em escolas tradicionais.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Aqui, você vive o idioma desde o primeiro dia, com uma metodologia exclusiva baseada nos 4 pilares do ESL (English as a Second Language):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: <MessageSquare className="text-purple-brand" />, title: "Comunicação", desc: "Desde o primeiro dia" },
                  { icon: <Repeat className="text-purple-brand" />, title: "Contato Diário", desc: "Obrigatório com o idioma" },
                  { icon: <Zap className="text-purple-brand" />, title: "Sem Tradução", desc: "Pense direto em inglês" },
                  { icon: <Target className="text-purple-brand" />, title: "Regularidade", desc: "Natural como sua língua materna" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-purple-brand">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 font-medium">
                Essa abordagem foi criada para acelerar sua fluência real em apenas 18 meses, mesmo que você comece do zero.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-brand/5 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Alunos OpenLife" 
                className="relative rounded-[40px] shadow-2xl h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2 – Para Quem é Essa Metodologia? */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Para quem é a <span className="text-purple-brand">OpenLife</span>?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A OpenLife foi pensada para quem não tem tempo a perder e precisa do inglês como ferramenta de transformação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <GraduationCap size={40} />, title: "Estudantes", desc: "Universitários que buscam destaque em intercâmbios e programas de mestrado internacionais." },
              { icon: <Briefcase size={40} />, title: "Executivos", desc: "Profissionais liberais que buscam crescimento em multinacionais e bigtechs globais." },
              { icon: <Globe size={40} />, title: "Viajantes", desc: "Pessoas que sonham em trabalhar, estudar ou viver no exterior com total segurança." }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center space-y-6">
                <div className="w-20 h-20 bg-purple-50 text-purple-brand rounded-3xl flex items-center justify-center mx-auto">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{card.title}</h3>
                <p className="text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 3 – Como Funciona na Prática? */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-900 mb-16 text-center">
            Como a <span className="text-purple-brand">OpenLife</span> funciona na prática?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Turmas Reduzidas", desc: "Aulas presenciais ou online ao vivo, com máx. 8 alunos para atenção total.", icon: <Users className="text-purple-brand" /> },
              { title: "Plataforma Gamificada", desc: "Atividades diárias com feedback instantâneo para fixação natural.", icon: <Zap className="text-purple-brand" /> },
              { title: "Ambiente 100% Inglês", desc: "Imersão total, inclusive na recepção e em todos os nossos eventos.", icon: <Globe className="text-purple-brand" /> },
              { title: "Eventos Imersivos", desc: "Simulações mensais de situações reais de viagem, trabalho e networking.", icon: <Star className="text-purple-brand" /> },
              { title: "App Exclusivo", desc: "Conteúdo acessível 24h por dia, multiplataforma e com modo offline.", icon: <Smartphone className="text-purple-brand" /> },
              { title: "Suporte 24/7", desc: "Tira-dúvidas acadêmico sempre disponível para sua jornada não parar.", icon: <MessageSquare className="text-purple-brand" /> }
            ].map((item, i) => (
              <div key={i} className="flex space-x-6">
                <div className="shrink-0 w-12 h-12 bg-purple-50 text-purple-brand rounded-xl flex items-center justify-center font-bold">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-purple-brand">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 4 – Resultados Comprovados */}
      <section className="py-24 text-white overflow-hidden relative" style={{ backgroundColor: '#1A1033' }}>
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Quote size={200} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Resultados Comprovados</h2>
            <p className="text-purple-100 text-lg">O que dizem nossos alunos que atingiram a fluência em 18 meses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 space-y-6">
              <p className="text-2xl font-medium italic leading-relaxed">
                “Em 18 meses, eu saí do básico para fazer entrevistas em inglês com empresas da Europa.”
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-brand rounded-full"></div>
                <div>
                  <p className="font-bold">Lucas A., 27 anos</p>
                  <p className="text-sm text-purple-200">Desenvolvedor de Software</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 space-y-6">
              <p className="text-2xl font-medium italic leading-relaxed">
                “Hoje, dou palestras em inglês e lidero reuniões com clientes internacionais.”
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-brand rounded-full"></div>
                <div>
                  <p className="font-bold">Renata M., 35 anos</p>
                  <p className="text-sm text-purple-200">Executiva de Marketing</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-purple-200 text-lg">
              Com mais de <span className="text-white font-bold">66.000 alunos formados</span>, temos um dos índices de fluência mais altos do Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 5 – Por Que Funciona? */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-black text-slate-900">Por Que Funciona?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A metodologia OpenLife é baseada em neurociência da aprendizagem de idiomas e nos princípios da aquisição natural de linguagem. Ao invés de decorar regras gramaticais, você absorve o inglês como um segundo idioma real, através de:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Exposição constante", "Repetição com propósito", "Interação significativa", "Feedback imediato"].map((item, i) => (
                <div key={i} className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <span className="font-black text-purple-brand text-sm uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 6 – Comparativo Visual */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 leading-tight">
              <span className="text-purple-brand block">Sistema Natural &quot;ESL&quot;</span>
              <span className="text-slate-400 block my-2">x</span>
              <span className="text-slate-500 block">Escolas Tradicionais</span>
            </h2>
          </div>

          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="text-white text-center">
                  <th className="p-6 md:p-8 text-lg font-black w-1/3" style={{ backgroundColor: '#1A1033' }}>Característica</th>
                  <th className="p-6 md:p-8 text-lg font-black bg-slate-500 w-1/3 border-x border-white/10">Método Tradicional</th>
                  <th className="p-6 md:p-8 text-lg font-black bg-purple-brand w-1/3">Método OpenLife</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 md:p-8 font-bold text-slate-900 text-center border-r border-gray-100">
                      {row.feature}
                    </td>
                    <td className="p-6 md:p-8 text-slate-400 text-center border-r border-gray-100">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        {row.open === "Sim" ? <X className="text-red-400" size={20} /> : <Check className="text-slate-300" size={20} />}
                        <span className="text-sm font-medium">{row.trad}</span>
                      </div>
                    </td>
                    <td className="p-6 md:p-8 text-slate-900 font-bold text-center bg-purple-50/20">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <Check className="text-green-500" size={24} />
                        <span className="text-sm">{row.open}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bloco 7 – O Que Você Vai Desenvolver */}
      <section className="py-24 bg-page">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">O Que Você Vai Desenvolver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Speaking", desc: "Fale com naturalidade em reuniões, viagens e entrevistas" },
              { title: "Listening", desc: "Entenda nativos sem depender de legenda" },
              { title: "Reading", desc: "Leia artigos, livros e documentos com autonomia" },
              { title: "Writing", desc: "Escreva e-mails, relatórios e textos com clareza" }
            ].map((skill, i) => (
              <div key={i} className="flex items-start space-x-4 bg-white p-6 rounded-3xl shadow-sm">
                <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-slate-900 text-xl">{skill.title}</h4>
                  <p className="text-slate-500">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 8 – Chamada à Ação (CTA) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden" style={{ backgroundColor: '#1A1033' }}>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black">Pronto para transformar sua carreira com o inglês?</h2>
              <p className="text-purple-100 text-xl font-medium">
                Faça o teste de nível gratuito e agende sua aula experimental com um de nossos consultores.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-brand px-12 py-5 rounded-full font-black text-xl hover:bg-purple-50 transition-all shadow-2xl transform hover:scale-105">
                  Quero aprender com a metodologia OpenLife
                </a>
              </div>
              <div className="pt-8">
                <p className="text-sm text-purple-200 font-bold uppercase tracking-widest mb-4">Unidades Presenciais e Online</p>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-white/60">
                  <span>BAGÉ</span>
                  <span>SANTA MARIA</span>
                  <span>PORTO ALEGRE</span>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;