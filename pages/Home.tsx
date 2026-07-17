import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Star, Play, CheckCircle2, Clock,
  MessageCircle, Globe, Zap, ArrowRight, MapPin, Award,
  ChevronDown, ChevronUp, List,
} from 'lucide-react';
import { COURSES } from '../constants';
import { HOME_FAQ_CATEGORIES as faqData } from '../data/faq';
import NewsletterBox from '../components/NewsletterBox';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

// Cada curso do carrossel manda para a página de SEO dedicada quando ela
// existe; senão cai no catálogo geral.
const COURSE_LINKS: Record<string, string> = {
  kids: '/ingles-para-criancas',
  teens: '/ingles-para-adolescentes',
  journey: '/ingles-para-adultos',
  keep: '/cursos',
};

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  list: <List size={24} />,
  mapPin: <MapPin size={24} />,
  award: <Award size={24} />,
};

const benefits = [
  { icon: <Clock />, title: 'Fluência em 18 meses', desc: 'Resultados reais e consistentes, não em 5 anos como no método tradicional.' },
  { icon: <Award />, title: 'Certificação Internacional', desc: 'Formação com foco nos padrões internacionais de proficiência (CEFR C1/C2).' },
  { icon: <MessageCircle />, title: 'Contato Diário', desc: 'Aulas dinâmicas aliadas a uma plataforma gamificada para prática diária.' },
  { icon: <Zap />, title: 'Metodologia ESL', desc: 'Aprenda a pensar direto em inglês, eliminando a tradução mental para sempre.' },
  { icon: <Users />, title: 'Turmas Pequenas', desc: 'Máximo aproveitamento com média de 4 alunos por turma para atenção total.' },
  { icon: <Clock />, title: 'Horários Flexíveis', desc: 'Estude de segunda a sábado, adaptando o curso à sua rotina profissional.' },
  { icon: <Globe />, title: 'Ambiente 100% Inglês', desc: 'Imersão total desde a recepção da escola para uma experiência autêntica.' },
  { icon: <Globe />, title: 'Suporte Intercâmbio', desc: 'Preparação completa para intercâmbio acadêmico, profissional e turístico.' },
];

const Home: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  return (
    <div className="overflow-hidden -mt-20">

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-brand px-4 py-1.5 rounded-full text-sm font-bold">
                <Zap size={16} />
                <span>Inglês rápido e sem tradução</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-purple-brand leading-tight">
                Fale inglês em <span className="text-orange-brand">18 meses!</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                A melhor escola de idiomas de Bagé e região, com metodologia imersiva, horários
                flexíveis e aulas 100% em inglês desde o primeiro dia. Online ou presencial.
                Certificação internacional.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
                  className="bg-orange-brand text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-brand/20 flex items-center justify-center group">
                  Quero ser fluente com a OpenLife
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Prova Social */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900">+66k</span>
                  <span className="text-xs text-slate-500 uppercase font-bold">Alunos Fluentes</span>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div className="flex flex-col">
                  <div className="flex text-orange-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-xs text-slate-500 uppercase font-bold mt-1">5/5 Estrelas (Google)</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-400 text-sm font-medium">
                <MapPin size={16} className="text-purple-brand" />
                <span>Sede em Bagé/RS · Online para todo o Brasil</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-purple-brand/10 rounded-full blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200"
                  alt="Melhor escola de idiomas em Bagé e região"
                  loading="eager"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-full flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-bold">Imersão Total ESL</p>
                      <p className="text-white/70 text-xs">Aulas 100% em inglês desde o dia 1</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-brand text-white rounded-full flex items-center justify-center">
                      <Play fill="currentColor" size={20} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atenção */}
      <section className="py-12 md:py-20 bg-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-600 text-base md:text-xl font-medium mb-2">
            Este <span className="font-bold">não</span> é um curso de inglês tradicional
          </p>
          <div className="relative inline-block">
            <h2 className="text-7xl md:text-[160px] font-black text-purple-brand uppercase tracking-tighter leading-none select-none">
              ATENÇÃO
            </h2>
            <div className="absolute top-1/2 left-0 w-[110%] h-1.5 md:h-3 bg-orange-brand -translate-y-1/2 -ml-[5%] rounded-full opacity-90" />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              <span className="text-orange-brand">Diferenciais</span>{' '}
              <span className="text-purple-brand">que aceleram sua</span>{' '}
              <span className="text-orange-brand">fluência.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Curso de inglês em Bagé com metodologia ESL: comunicação, imersão e resultados reais em 18 meses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-hover hover:-translate-y-2 transition-all group">
                <div className="w-12 h-12 bg-purple-brand/10 text-purple-brand rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-brand group-hover:text-white transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-brand mb-3">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos Preview */}
      <section className="py-24 bg-bgsoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-purple-brand mb-4">
              Conheça o curso ideal que vai transformar o seu inglês!
            </h2>
            <p className="text-slate-500">Curso de inglês online e presencial com metodologia validada por 66 mil alunos.</p>
            <Link to="/cursos" className="text-orange-brand font-bold inline-flex items-center hover:text-purple-brand transition-colors">
              Ver todos os programas <ChevronDown className="ml-1 -rotate-90" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {COURSES.map((course) => (
              <Link key={course.id} to={COURSE_LINKS[course.id] ?? '/cursos'}
                className="group relative bg-slate-100 rounded-3xl overflow-hidden aspect-[3/4]">
                <img src={course.image} alt={course.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-orange-brand font-bold text-xs uppercase tracking-widest mb-2">{course.focus}</span>
                  <h3 className="text-white text-2xl font-black mb-1">{course.title}</h3>
                  <p className="text-white/70 text-xs mb-4">{course.age}</p>
                  <span className="bg-white text-slate-900 text-center py-2.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Saiba Mais
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-purple-brand mb-4">Perguntas frequentes</h2>
            <p className="text-slate-500">Tudo o que você precisa saber antes de começar.</p>
          </div>
          <div className="space-y-6">
            {faqData.map((cat) => (
              <div key={cat.id} className={`rounded-[32px] overflow-hidden transition-all duration-300 bg-purple-brand ${expandedCategory === cat.id ? 'pb-6' : ''}`}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className="w-full flex items-center justify-between p-6 text-white text-left"
                  aria-expanded={expandedCategory === cat.id}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 border border-white/20 rounded-xl">
                      {CATEGORY_ICON[cat.icon]}
                    </div>
                    <span className="text-xl md:text-2xl font-bold tracking-tight">{cat.category}</span>
                  </div>
                  {expandedCategory === cat.id ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                </button>

                {expandedCategory === cat.id && (
                  <div className="px-6 space-y-2 animate-in">
                    {cat.questions.map((item) => (
                      <div key={item.q} className="bg-white/10 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setExpandedQuestion(expandedQuestion === item.q ? null : item.q)}
                          className="w-full flex items-center justify-between p-5 text-white text-left hover:bg-white/20 transition-colors"
                          aria-expanded={expandedQuestion === item.q}
                        >
                          <span className="font-bold pr-4">{item.q}</span>
                          <ChevronDown size={20} className={`shrink-0 transition-transform ${expandedQuestion === item.q ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedQuestion === item.q && (
                          <div className="p-5 pt-0 text-white/90 text-sm leading-relaxed whitespace-pre-line border-t border-white/5 animate-in">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterBox />
      </div>

      {/* CTA Final */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-brand rounded-[40px] overflow-hidden relative p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-brand/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white">Comece agora sua jornada rumo à fluência.</h2>
              <p className="text-purple-100 text-xl">
                Agende sua aula experimental com um de nossos professores certificados. Atendimento imediato via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-orange-brand text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-brand/20 flex items-center justify-center">
                  Agendar Aula Grátis Agora
                </a>
                <div className="flex items-center space-x-2 text-white/80">
                  <CheckCircle2 className="text-orange-brand" size={24} />
                  <span className="font-medium">Vagas Limitadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
