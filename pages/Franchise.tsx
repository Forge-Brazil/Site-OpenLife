
import React, { useState } from 'react';
import { 
  TrendingUp, CheckCircle2, Award, Users, Rocket, 
  FileText, Globe, MessageCircle, ArrowRight, ShieldCheck, 
  BarChart3, HeartHandshake, Zap
} from 'lucide-react';

const Franchise: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    type: 'Nova unidade'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo interesse! Nossa equipe de expansão entrará em contato em breve.');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-white" style={{ backgroundColor: '#1A1033' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Rocket size={18} className="text-purple-200" />
            <span className="text-xs font-black uppercase tracking-widest">Expansão OpenLife 2024</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight max-w-5xl mx-auto">
            Invista em uma franquia com <span className="text-purple-200">propósito, resultado</span> e transformação real de vidas.
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto font-medium leading-relaxed">
            Empreenda com a marca que revolucionou o ensino de idiomas. Mais que uma escola, um modelo de negócio altamente rentável e transformador.
          </p>
          <div className="pt-8">
            <a href="#contato-franquia" className="bg-white text-purple-brand px-10 py-5 rounded-full font-black text-xl hover:bg-purple-50 transition-all shadow-2xl inline-flex items-center group">
              Seja um franqueado OpenLife
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 bg-page border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Anos de Know-how", value: "+20" },
              { label: "Alunos Formados", value: "+66k" },
              { label: "Satisfação Alunos", value: "95%" },
              { label: "Colaboradores", value: "+600" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-4xl md:text-6xl font-black text-purple-brand">{stat.value}</p>
                <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apresentação da Marca */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-brand/10 rounded-[40px] blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Reunião de negócios OpenLife" 
                className="relative rounded-[40px] shadow-2xl h-[500px] w-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Empreenda com quem <span className="text-purple-brand">domina o mercado.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A OpenLife é mais do que uma escola de inglês. É um ecossistema de transformação pessoal, cultural e profissional. Com mais de 20 anos de história, desenvolvemos uma metodologia exclusiva que garante fluência real em 18 meses.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nosso modelo de franquia foi desenhado para ser resiliente, escalável e, acima de tudo, focado na experiência do aluno e no sucesso do franqueado. Ao se tornar um parceiro, você herda duas décadas de acertos e uma estrutura de suporte de classe mundial.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                  <ShieldCheck className="text-purple-brand" size={24} />
                  <span className="font-bold text-purple-brand">Modelo Validado</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                  <BarChart3 className="text-purple-brand" size={24} />
                  <span className="font-bold text-purple-brand">Alta Rentabilidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que ser um franqueado? */}
      <section className="py-24 text-white overflow-hidden relative" style={{ backgroundColor: '#1A1033' }}>
        <div className="absolute top-0 right-0 p-20 opacity-5">
          <Globe size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16">Por que ser um <span className="text-purple-200">franqueado OpenLife?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle2 />, title: "Metodologia Exclusiva", desc: "Sistema imersivo validado por 66 mil alunos que garante fluência em 18 meses." },
              { icon: <Users />, title: "Suporte 360º", desc: "Acompanhamento pedagógico, comercial, marketing e gestão para sua unidade brilhar." },
              { icon: <Zap />, title: "Inovação Tecnológica", desc: "Plataforma gamificada própria e apps que aumentam a retenção e satisfação do aluno." },
              { icon: <Globe />, title: "Marca Consolidada", desc: "Reconhecimento em todo o Sul do Brasil com mais de duas décadas de tradição." },
              { icon: <BarChart3 />, title: "Gestão Eficiente", desc: "Dashboards em tempo real para controle total dos seus indicadores financeiros." },
              { icon: <HeartHandshake />, title: "Capacitação Contínua", desc: "Treinamentos recorrentes para você e sua equipe na OpenLife University." }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 text-left space-y-6 hover:bg-white/15 transition-all">
                <div className="text-purple-200">{item.icon}</div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="text-purple-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Vantagens Competitivas</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">O negócio certo para quem busca solidez e impacto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-page p-10 rounded-[40px] space-y-6 border border-gray-100">
              <h3 className="text-2xl font-black text-purple-brand">Potencial de Mercado</h3>
              <p className="text-slate-600 leading-relaxed">
                Apenas 3% da população brasileira fala inglês fluentemente. Você estará atuando em um nicho com demanda reprimida e busca constante por qualificação para o mercado global.
              </p>
              <ul className="space-y-3">
                {["Alta recorrência de receita", "Baixa inadimplência", "Atração orgânica de alunos"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-page p-10 rounded-[40px] space-y-6 border border-gray-100">
              <h3 className="text-2xl font-black text-purple-brand">Flexibilidade de Modelos</h3>
              <p className="text-slate-600 leading-relaxed">
                Temos formatos de negócio adaptáveis para cidades pequenas, médias e grandes, garantindo que o seu investimento seja otimizado de acordo com a sua região.
              </p>
              <ul className="space-y-3">
                {["Modelo Presencial", "Modelo Híbrido", "Estrutura enxuta e eficiente"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-16">Histórias de <span className="text-purple-brand">Sucesso</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                text: "Empreender com a OpenLife foi a melhor decisão da minha vida. Hoje, além de ter um negócio rentável, transformo vidas todos os dias.",
                name: "Ana Paula",
                city: "Franqueada em Santa Maria/RS",
                img: "https://i.pravatar.cc/150?u=ana"
              },
              { 
                text: "Nunca imaginei que educação pudesse ser tão lucrativa e gratificante ao mesmo tempo. O suporte da franqueadora é impecável.",
                name: "Carlos Eduardo",
                city: "Franqueado em Caxias do Sul/RS",
                img: "https://i.pravatar.cc/150?u=carlos"
              }
            ].map((dep, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 space-y-8 relative">
                <div className="absolute top-10 right-10 text-slate-100">
                  <Quote size={80} />
                </div>
                <p className="text-2xl text-slate-600 italic leading-relaxed relative z-10">"{dep.text}"</p>
                <div className="flex items-center space-x-6">
                  <img src={dep.img} className="w-16 h-16 rounded-full grayscale border-2 border-purple-100" alt={dep.name} />
                  <div>
                    <h4 className="text-xl font-black text-slate-900">{dep.name}</h4>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">{dep.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato-franquia" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center space-y-8" style={{ backgroundColor: '#1A1033' }}>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Vamos construir o <span className="text-purple-200">seu futuro</span> juntos?</h2>
              <p className="text-xl text-purple-100">
                Preencha o formulário e receba em primeira mão a apresentação completa da nossa franquia.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="text-purple-200" size={24} />
                  </div>
                  <p className="font-bold">Atendimento personalizado em até 24h</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <FileText className="text-purple-200" size={24} />
                  </div>
                  <p className="font-bold">Dossiê completo da franquia incluso</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 md:p-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Nome Completo</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-purple-brand outline-none transition-all"
                    placeholder="Como podemos te chamar?"
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest">E-mail</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-purple-brand outline-none transition-all"
                      placeholder="seu@email.com"
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest">WhatsApp</label>
                    <input 
                      required 
                      type="tel" 
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-purple-brand outline-none transition-all"
                      placeholder="(00) 00000-0000"
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Cidade/Estado</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-purple-brand outline-none transition-all"
                    placeholder="Onde você deseja abrir sua unidade?"
                    onChange={e => setFormState({...formState, city: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Tipo de Interesse</label>
                  <select 
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-purple-brand outline-none transition-all appearance-none"
                    onChange={e => setFormState({...formState, type: e.target.value})}
                  >
                    <option>Nova unidade</option>
                    <option>Conversão de escola existente</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-purple-brand text-white py-5 rounded-full font-black text-xl hover:bg-purple-900 transition-all shadow-xl shadow-purple-brand/20">
                    Baixar apresentação agora
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 text-center uppercase font-bold tracking-widest">
                  Seus dados estão seguros conosco conforme a LGPD.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Quote = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 30H10V50H25C25 60 20 65 10 65V75C25 75 35 65 35 50V30ZM75 30H55V50H70C70 60 65 65 55 65V75C70 75 80 65 80 50V30Z" />
  </svg>
);

export default Franchise;
