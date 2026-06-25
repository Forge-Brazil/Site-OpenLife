import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const CoursesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Nossos <span className="text-purple-brand">Cursos</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Uma trilha completa de aprendizado desenhada para cada fase da sua vida.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {COURSES.map((course, index) => (
              <div key={course.id} className={`flex flex-col lg:items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <div className="flex-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src={course.image} alt={course.title} className="w-full h-[500px] object-cover" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-purple-brand font-bold text-sm shadow-sm">
                      {course.age}
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <span className="text-orange-brand font-bold uppercase tracking-widest text-sm">{course.focus}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900">{course.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 text-lg">O que você vai encontrar:</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {course.highlights.map((h, i) => (
                        <li key={i} className="flex items-center space-x-3 text-slate-600">
                          <CheckCircle2 className="text-orange-brand shrink-0" size={20} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <a 
                      href="https://form.respondi.app/5HvbxD84" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center space-x-3 bg-purple-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg group"
                    >
                      <span>Quero saber mais</span>
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-black text-white">Não sabe por onde começar?</h2>
          <p className="text-slate-400 text-lg">
            Agende uma aula experimental gratuita agora e descubra qual curso é o ideal para o seu momento.
          </p>
          <a 
            href="https://form.respondi.app/5HvbxD84" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-orange-brand text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-2xl"
          >
            Agendar Aula Grátis
          </a>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;