import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { openSmartForm } from '../components/SmartForm';


const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block bg-purple-50 text-purple-brand border border-purple-200 text-[11px] font-bold uppercase tracking-[0.15em] px-3.5 py-1 rounded-full">Programas</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Nossos <span className="text-purple-brand">Cursos</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Uma trilha completa de aprendizado desenhada para cada fase da sua vida.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {COURSES.map((course, index) => (
              <div
                key={course.id}
                className={`flex flex-col lg:items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-[440px] object-cover"
                    />
                    <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-purple-brand font-semibold text-xs shadow-sm border border-purple-100">
                      {course.age}
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-6 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                  <div className="space-y-3">
                    <span className="inline-block bg-violet-50 text-purple-brand border border-violet-200 text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-0.5 rounded-full">{course.focus}</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">{course.title}</h2>
                    <p className="text-slate-400 leading-relaxed">{course.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-700 text-sm">O que você vai encontrar:</h4>
                    <ul className="space-y-2.5">
                      {course.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-3 text-slate-500">
                          <CheckCircle2 size={16} strokeWidth={1.5} className="text-purple-brand shrink-0 mt-0.5" />
                          <span className="text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => openSmartForm()}
                      className="inline-flex items-center space-x-2 bg-purple-brand text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-purple-900 transition-all shadow-sm group"
                    >
                      <span>Quero saber mais</span>
                      <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    {course.link && (
                      <Link
                        to={course.link}
                        className="inline-flex items-center space-x-2 border-2 border-purple-brand text-purple-brand px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-purple-50 transition-all group"
                      >
                        <span>Ver programa completo</span>
                        <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-purple-deep">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <div className="flex justify-center">
            <span className="inline-block w-8 h-1 bg-purple-brand rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Não sabe por onde começar?</h2>
          <p className="text-slate-400">
            Agende uma aula experimental gratuita e descubra qual curso é o ideal para o seu momento.
          </p>
          <button
            onClick={() => openSmartForm()}
            className="inline-flex items-center bg-purple-brand text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-purple-900 transition-all shadow-sm group"
          >
            Agendar Aula Grátis
            <ArrowRight size={17} strokeWidth={1.5} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
