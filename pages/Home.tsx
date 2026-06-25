import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Star, Play, CheckCircle2, Clock, 
  MessageCircle, Globe, Zap, ArrowRight, BookOpen, MapPin, Award,
  ChevronDown, ChevronUp, List
} from 'lucide-react';
import { COURSES } from '../constants';

const Home: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqData = [
    {
      id: 0,
      category: "Informações sobre os cursos",
      icon: <List size={24} />,
      questions: [
        { q: "Quantas aulas por semana tem o curso?", a: "Nosso curso tem a seguinte estrutura semanal:\n\n- Módulo 1: Uma aula ao vivo e atividades diárias no material interativo.\n- Módulo 2: Duas aulas ao vivo de 50 minutos e atividades diárias.\n- Módulo 3, 4 e 5: Três aulas ao vivo de 50 minutos e atividades diárias.\n\nAs aulas e atividades no material são dinâmicas, interativas e oferecem uma experiência de aprendizado significativa. No total são quase 500 horas de aulas e conteúdos." },
        { q: "Qual a duração do curso?", a: "O curso completo, do nível básico ao avançado, é projetado para ser concluído em 18 meses." },
        { q: "Qual será meu nível quando me formar?", a: "A OpenLife English School tem como objetivo capacitar você ao nível avançado de proficiência em inglês, correspondente aos níveis C1 e C2 do Quadro Comum Europeu de Referência para Línguas (CEFR). Além disso, o último módulo do nosso curso, chamado Journey for Life, é modelado em torno do exame de proficiência English First (EF) da Cambridge University, uma respeitada certificação internacional. Portanto, ao concluir o curso conosco, você estará bem preparado para esse e outros exames internacionais, caso deseje obter uma certificação adicional." },
        { q: "Como funciona o material didático?", a: "O material didático da OpenLife English School, foi desenvolvido com o propósito de proporcionar o melhor da didática e tecnologia para acelerar sua jornada rumo à fluência em inglês.\n\nA abordagem didática é atual e relevante, apresentando conteúdos que se conectam diretamente à realidade do aluno. Buscamos estimular o interesse e a participação ativa do aluno, trabalhando todos os aspectos do idioma - fala, leitura, escrita, audição, vocabulário e pensamento em inglês - de forma integrada, incentivando você a ser protagonista do seu aprendizado.\n\nNo que diz respeito à tecnologia, oferecemos uma plataforma intuitiva e aplicativos exclusivos, compatíveis com dispositivos iOS, Android, nas modalidades desktop e mobile. A plataforma proporciona acesso ao material didático em tempo real e em diversos formatos, como textos e vídeos. Tudo isso e muito mais, sempre ao alcance de suas mãos." },
        { q: "Tem um formato mais intensivo?", a: "Na verdade, a OpenLife English School é reconhecida por ser o curso mais intensivo de inglês do Brasil. Nossa metodologia exclusiva e acelerada foi desenhada para simular uma experiência de imersão linguística, similar ao que você teria ao viver e estudar no exterior aprendendo inglês através de um programa de ESL (English as a Second Language).\n\nÉ essa abordagem intensiva que permite aos nossos alunos aprenderem inglês até quatro vezes mais rápido do que em outros cursos. Para colocar isso em perspectiva, um aluno que concluir nosso curso adquire um nível de fluência em inglês que normalmente exigiria de 6 meses a 1 ano de estudo no exterior.\n\nNosso programa de ensino já está configurado para maximizar o aprendizado em um período de tempo curto, imitando uma verdadeira experiência de ESL aqui no Brasil." },
        { q: "O que eu tenho acesso ao comprar o curso da OpenLife?", a: "Quase 500 horas de aulas e conteúdos\nToda plataforma de ensino com material interativo da OpenLife\nFluência completa em inglês\nReposição de aulas\nCertificado de conclusão\nCertificado de horas\nFlexibilidade de horários\nAcesso a todas comunidade OpenLife\nMonitorias recorrentes\n3 meses de trancamento para férias e descansos." },
      ]
    },
    {
      id: 1,
      category: "Funcionamento das escolas",
      icon: <MapPin size={24} />,
      questions: [
        { q: "Quais os horários e dias das aulas?", a: "Na OpenLife, você agenda suas aulas de acordo com sua rotina. As marcações podem ser feitas semanalmente, sem um horário fixo, em comum acordo com agenda da escola. Caso precise, você pode facilmente ajustar as aulas. A agenda está disponível de segunda a sexta, das 9h às 22h, e aos sábados das 9h às 17h." },
        { q: "Quantos alunos têm por aula na OpenLife English School?", a: "Nossas aulas contam com uma média de 4 alunos, podendo chegar até 8 em certas atividades. Optamos por turmas menores para favorecer a interação e a atenção individualizada. No entanto, em atividades que simulam situações reais, ampliamos para até 8 alunos, a fim de enriquecer a experiência e estimular a prática do inglês em diferentes contextos sociais." },
        { q: "Posso trancar minha matrícula para férias?", a: "Sim! Oferecemos pausas de um mês cada ou de 15 em 15 dias, possibilitando ajustar seu aprendizado às demandas pessoais e profissionais. Se as pausas forem usadas, o curso pode se estender por até 21 meses, permitindo flexibilidade para aprender no seu ritmo." },
        { q: "Tem multa de cancelamento ou fidelidade?", a: "Na OpenLife English School, não temos contratos de fidelidade; queremos que você permaneça por causa dos resultados. Se houver um cancelamento, aplicamos uma taxa administrativa de 10% sobre o saldo devedor. Este valor, significativamente mais baixo do que a média do setor que na maioria das vezes cobra algo entre 30% a 50%, cobre os custos operacionais investidos em preparar a melhor experiênca de aprendizado para você." },
      ]
    },
    {
      id: 2,
      category: "Certificações e Dúvidas",
      icon: <Award size={24} />,
      questions: [
        { q: "Tem certificado do MEC?", a: "Aqui na OpenLife, temos orgulho da excelência que oferecemos, pois na legislação brasileira, cursos de inglês ou idiomas são considerados \"cursos livres\" e, por isso, não necessitam de certificação ou autorização do MEC. Esta regra aplica-se unicamente a universidades e faculdades.\n\nNo entanto, nossa qualidade de ensino é assegurada por parâmetros rigorosos. Seguimos o Quadro Comum Europeu de Referência para Línguas (CEFR), padrão internacionalmente reconhecido." },
        { q: "O certificado é válido em todos os lugares?", a: "Na OpenLife, nossa meta é garantir a fluência efetiva dos alunos em inglês. Por isso, focamos no desenvolvimento integrado das quatro habilidades linguísticas: ouvir, falar, ler e escrever. No módulo Journey for life (avançado), nossos alunos aprimoram a fluência através de um material que simula a preparação para a prova de proficiência English First (EF) da Cambridge University, uma certificação mundialmente reconhecida.\n\nEntretanto, existem várias certificações internacionais de proficiência em inglês, e a escolha apropriada dependerá de suas necessidades pessoais e profissionais. Além do EF, há certificações como IELTS, TOEFL, TOEIC e exames da Cambridge English." },
        { q: "A OpenLife entrega certificado ao final do curso?", a: "Sim, na conclusão do curso OpenLife, cada aluno recebe um certificado que não apenas valida a conclusão do curso, mas também atesta com quase 500 horas de imersão na língua inglesa, e mais importante, a fluência adquirida." },
        { q: "Tem teste de proficiência internacional?", a: "A OpenLife English School tem como objetivo capacitar você ao nível avançado de proficiência em inglês, correspondente aos níveis C1 e C2 do Quadro Comum Europeu de Referência para Línguas (CEFR). Além disso, o último módulo do nosso curso, chamado Journey for Life, é modelado em torno do exame de proficiência English First (EF) da Cambridge University, uma respeitada certificação internacional. Portanto, ao concluir o curso conosco, você estará bem preparado para esse e outros exames internacionais, caso deseje obter uma certificação adicional. Entretanto não somos centro aplicador de provas de certificação." },
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-brand px-4 py-1.5 rounded-full text-sm font-bold">
                < Zap size={16} />
                <span>Inglês rápido e sem tradução</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-purple-brand leading-tight">
                Fale inglês em <span className="text-orange-brand">18 meses!</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                A melhor escola de idiomas de Bagé e região, com metodologia imersiva, horários flexíveis e aulas 100% em inglês desde o primeiro dia. Online ou presencial. Certificação internacional.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer" className="bg-orange-brand text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-brand/20 flex items-center justify-center group">
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
                <div className="h-10 w-px bg-slate-200"></div>
                <div className="flex flex-col">
                  <div className="flex text-orange-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-xs text-slate-500 uppercase font-bold mt-1">5/5 Estrelas (Google)</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-400 text-sm font-medium">
                <MapPin size={16} className="text-purple-brand" />
                <span>Unidades em Bagé, Santa Maria, Porto Alegre e Online</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-purple-brand/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" 
                  alt="Melhor escola de idiomas em Bagé e região" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-full flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-bold">Imersão Total ESL</p>
                      <p className="text-white/70 text-xs">Aulas 100% em inglês desde o dia 1</p>
                    </div>
                    <button className="w-12 h-12 bg-orange-brand text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play fill="currentColor" size={20} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attention Section */}
      <section className="py-12 md:py-20 bg-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-600 text-base md:text-xl font-medium mb-2">
            Este <span className="font-bold">não</span> é um curso de inglês tradicional
          </p>
          <div className="relative inline-block">
            <h2 className="text-7xl md:text-[160px] font-black text-purple-brand uppercase tracking-tighter leading-none select-none">
              ATENÇÃO
            </h2>
            <div className="absolute top-1/2 left-0 w-[110%] h-1.5 md:h-3 bg-orange-brand -translate-y-1/2 -ml-[5%] rounded-full opacity-90"></div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              <span className="text-orange-brand">Diferenciais</span> <span className="text-purple-brand">que aceleram sua</span> <span className="text-orange-brand">fluência.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Curso de inglês em Bagé com metodologia ESL: comunicação, imersão e resultados reais em 18 meses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock />, title: "Fluência em 18 meses", desc: "Resultados reais e consistentes, não em 5 anos como no método tradicional." },
              { icon: <Award />, title: "Certificação Internacional", desc: "Formação com foco nos padrões internacionais de proficiência (CEFR C1/C2)." },
              { icon: <MessageCircle />, title: "Contato Diário", desc: "Aulas dinâmicas aliadas a uma plataforma gamificada para prática diária." },
              { icon: <Zap />, title: "Metodologia ESL", desc: "Aprenda a pensar direto em inglês, eliminando a tradução mental para sempre." },
              { icon: <Users />, title: "Turmas Pequenas", desc: "Máximo aproveitamento com média de 4 alunos por turma para atenção total." },
              { icon: <Clock />, title: "Horários Flexíveis", desc: "Estude de segunda a sábado, adaptando o curso à sua rotina profissional." },
              { icon: <Globe />, title: "Ambiente 100% Inglês", desc: "Imersão total desde a recepção da escola para uma experiência autêntica." },
              { icon: <Globe />, title: "Suporte Intercâmbio", desc: "Preparação completa para intercâmbio acadêmico, profissional e turístico." }
            ].map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-purple-brand mb-4">Conheça o curso ideal que vai transformar o seu inglês!</h2>
            <p className="text-slate-500">Curso de inglês online e presencial com metodologia validada por 66 mil alunos.</p>
            <Link to="/cursos" className="text-orange-brand font-bold inline-flex items-center hover:text-purple-brand transition-colors">
              Ver todos os programas <ChevronRight className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {COURSES.map((course) => (
              <div key={course.id} className="group relative bg-slate-100 rounded-3xl overflow-hidden aspect-[3/4]">
                <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-orange-brand font-bold text-xs uppercase tracking-widest mb-2">{course.focus}</span>
                  <h3 className="text-white text-2xl font-black mb-1">{course.title}</h3>
                  <p className="text-white/70 text-xs mb-4">{course.age}</p>
                  <Link to={`/cursos`} className="bg-white text-slate-900 text-center py-2.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Saiba Mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqData.map((cat, catIdx) => (
              <div key={catIdx} className={`rounded-[32px] overflow-hidden transition-all duration-300 bg-[#6B2D8B] ${expandedCategory === cat.id ? 'pb-6' : ''}`}>
                <button 
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className="w-full flex items-center justify-between p-6 text-white text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 border border-white/20 rounded-xl">
                      {cat.icon}
                    </div>
                    <span className="text-xl md:text-2xl font-bold tracking-tight">{cat.category}</span>
                  </div>
                  {expandedCategory === cat.id ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                </button>

                {expandedCategory === cat.id && (
                  <div className="px-6 space-y-2 animate-in slide-in-from-top-4 duration-300">
                    {cat.questions.map((item, qIdx) => (
                      <div key={qIdx} className="bg-white/10 rounded-2xl overflow-hidden">
                        <button 
                          onClick={() => setExpandedQuestion(expandedQuestion === item.q ? null : item.q)}
                          className="w-full flex items-center justify-between p-5 text-white text-left hover:bg-white/20 transition-colors"
                        >
                          <span className="font-bold pr-4">{item.q}</span>
                          {expandedQuestion === item.q ? <ChevronDown size={20} /> : <ChevronRightIcon size={20} />}
                        </button>
                        {expandedQuestion === item.q && (
                          <div className="p-5 pt-0 text-white text-sm leading-relaxed whitespace-pre-line border-t border-white/5 animate-in fade-in duration-300">
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

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-brand rounded-[40px] overflow-hidden relative p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-brand/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white">Comece agora sua jornada rumo à fluência.</h2>
              <p className="text-purple-100 text-xl">
                Agende sua aula experimental com um de nossos professores certificados. Atendimento imediate via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="https://form.respondi.app/5HvbxD84" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-orange-brand text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-brand/20 flex items-center justify-center group">
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

const ChevronRightIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Home;