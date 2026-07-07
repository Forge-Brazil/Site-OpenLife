
import React from 'react';
// Import Link from react-router-dom to fix the "Cannot find name 'Link'" error on lines 104 and 106
import { Link } from 'react-router-dom';
import { Target, Heart, Award, Users, Camera, Globe, History, Sparkles, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-white" style={{ backgroundColor: '#1A1033' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Mais que uma escola,<br />
            <span className="text-purple-200">um projeto de vida.</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto font-medium">
            Há 21 anos empoderando pessoas para uma vida sem limites através da fluência real no inglês.
          </p>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-brand/10 rounded-[40px] blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
                alt="História OpenLife" 
                className="relative rounded-[40px] shadow-2xl h-[500px] w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-brand p-8 rounded-[30px] shadow-2xl text-white">
                <p className="text-4xl font-black">21</p>
                <p className="text-xs font-bold uppercase tracking-widest text-purple-200">Anos de Excelência</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Nossa jornada começou com um <span className="text-purple-brand">propósito claro.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A OpenLife English School nasceu em Bagé com a visão de que o ensino de idiomas no Brasil precisava evoluir. Não queríamos apenas ensinar gramática; queríamos dar voz a quem sonha em conquistar o mundo.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ao longo de duas décadas, aperfeiçoamos a metodologia ESL para torná-la a ferramenta mais rápida e eficiente de fluência no país, formando mais de 66.000 alunos que hoje brilham em carreiras globais.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Aluno" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-purple-brand flex items-center justify-center text-white text-xs font-black">
                    +66k
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Alunos Formados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">No que acreditamos</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Nossos valores são a base de cada aula e interação.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target size={32} />, title: "Empoderamento", desc: "Damos as ferramentas para que você seja o protagonista da sua própria história global." },
              { icon: <Sparkles size={32} />, title: "Inovação ESL", desc: "Buscamos constantemente o que há de mais moderno em neurociência para acelerar seu aprendizado." },
              { icon: <Globe size={32} />, title: "Vida Sem Limites", desc: "Acreditamos que o inglês é a chave para a liberdade geográfica e profissional." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 space-y-6 group">
                <div className="w-16 h-16 bg-purple-50 text-purple-brand rounded-2xl flex items-center justify-center group-hover:bg-purple-brand group-hover:text-white transition-colors">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-purple-brand mb-4">
                Estrutura pensada para a <span className="text-purple-brand">imersão total.</span>
              </h2>
              <p className="text-lg text-slate-500">
                Nossas unidades em Bagé, Santa Maria e Porto Alegre oferecem ambientes modernos que respiram o idioma, além de uma plataforma online de última geração.
              </p>
            </div>
            <Link to="/contato" className="text-purple-brand font-black flex items-center hover:text-purple-900 transition-colors">
              Conheça nossas unidades <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[600px]">
            <div className="col-span-2 row-span-2 rounded-[40px] overflow-hidden shadow-xl border border-gray-100">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Unidade" />
            </div>
            <div className="col-span-1 row-span-1 rounded-[30px] overflow-hidden shadow-xl border border-gray-100">
              <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Unidade" />
            </div>
            <div className="col-span-1 row-span-1 rounded-[30px] overflow-hidden shadow-xl border border-gray-100">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Unidade" />
            </div>
            <div className="col-span-2 row-span-1 rounded-[40px] overflow-hidden shadow-xl border border-gray-100">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Unidade" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden" style={{ backgroundColor: '#1A1033' }}>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black">Faça parte da nossa história.</h2>
              <p className="text-purple-100 text-xl font-medium">
                Junte-se a milhares de alunos que já transformaram suas vidas com o Sistema Natural OpenLife.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-brand px-12 py-5 rounded-full font-black text-xl hover:bg-purple-50 transition-all shadow-2xl transform hover:scale-105">
                  Agendar Aula Grátis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
