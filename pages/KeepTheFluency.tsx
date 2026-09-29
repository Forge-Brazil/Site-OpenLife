import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, Headphones, Users, Globe, Star, ArrowRight,
  CheckCircle2, Zap, Coffee, Mic, Clock, Shield, Award, Play,
  ChevronDown,
} from 'lucide-react';
import { openSmartForm } from '../components/SmartForm';

const SESSION_TYPES = [
  {
    id: 'conversation',
    icon: <MessageCircle size={22} />,
    label: 'Conversation Circle',
    desc: 'Debates ao vivo sobre tópicos reais: cultura pop, negócios, atualidades e situações do cotidiano. Você fala, discute e improvisa — exatamente como em uma conversa de verdade.',
    tags: ['Fluidez oral', 'Argumentação', 'Vocabulário contextual'],
    color: 'purple',
  },
  {
    id: 'listening',
    icon: <Headphones size={22} />,
    label: 'Listening Lab',
    desc: 'Episódios de podcast, cenas de séries, músicas e notícias internacionais — tudo debatido em inglês com o professor ao vivo. Seu ouvido se afia, seu vocabulário se expande.',
    tags: ['Compreensão auditiva', 'Sotaque natural', 'Cultura global'],
    color: 'blue',
  },
  {
    id: 'current',
    icon: <Globe size={22} />,
    label: 'Current Events',
    desc: 'O que está acontecendo no mundo, discutido em inglês. Notícias do NYT, BBC, CNN — você lê, opina e debate com professores e colegas. Inglês conectado com o mundo real.',
    tags: ['Leitura crítica', 'Expressão de opinião', 'Vocabulário internacional'],
    color: 'green',
  },
];

const DIFFERENTIALS = [
  {
    icon: <Coffee size={24} />,
    title: 'Sem pressão. Sem cobrança.',
    desc: 'Nada de lista de exercícios, prova ou dever de casa. Cada sessão é um encontro leve com a língua — como um café com amigos de outro país.',
  },
  {
    icon: <Mic size={24} />,
    title: 'Professores experts ao vivo',
    desc: 'Cada sessão é conduzida por professores especializados em conversação e listening. Não é tutoria, não é app. É aula de verdade, com profissional de verdade.',
  },
  {
    icon: <Users size={24} />,
    title: 'Turmas de até 4 alunos',
    desc: 'Você realmente fala. Sem ficar esperando sua vez em grupos de 20. Atenção real do professor e tempo de prática em cada aula.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Plataforma imersiva exclusiva',
    desc: 'Acesso à plataforma interativa da OpenLife — materiais curados, biblioteca de áudios, exercícios contextuais e comunidade ativa de alunos.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Experiência de intercâmbio toda semana',
    desc: 'A cultura OpenLife: descontraída, envolvente, 100% em inglês. Cada aula é um mergulho real no idioma — como se você estivesse em outro país.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Flexibilidade total',
    desc: 'Escolha os dias e horários que se encaixam na sua rotina. De segunda a sábado, 9h às 22h. Cancele, pause ou retome quando quiser.',
  },
];

const FOR_WHO = [
  { icon: '🎓', title: 'Ex-alunos OpenLife', desc: 'Você completou o Journey e quer manter o C1 afiado. O Keep é o próximo passo natural — e o mais prazeroso.' },
  { icon: '✈️', title: 'Quem morou fora', desc: 'Voltou do intercâmbio ou do exterior com inglês fluente. Não deixe o idioma enferrujar por falta de uso.' },
  { icon: '💼', title: 'Profissionais B2/C1', desc: 'Você usa inglês no trabalho mas quer mais fluência espontânea. O Keep te deixa afiado para qualquer situação.' },
  { icon: '🌍', title: 'Apaixonados por cultura global', desc: 'Séries, podcasts, música, viagens — você vive em inglês. O Keep formaliza essa imersão com estrutura e comunidade.' },
];

const COMPARE = [
  { feature: 'Professor especialista ao vivo', keep: true, cambly: false, apps: false, escola: true },
  { feature: 'Turmas pequenas (máx. 4)', keep: true, cambly: false, apps: false, escola: false },
  { feature: 'Metodologia ESL estruturada', keep: true, cambly: false, apps: false, escola: false },
  { feature: 'Sem cobrança excessiva', keep: true, cambly: true, apps: true, escola: false },
  { feature: 'Foco em conversação real', keep: true, cambly: true, apps: false, escola: false },
  { feature: 'Ambiente imersivo', keep: true, cambly: false, apps: false, escola: false },
  { feature: 'Comunidade ativa de alunos', keep: true, cambly: false, apps: false, escola: true },
];

const FAQS = [
  {
    q: 'Qual o nível mínimo para entrar no Keep the Fluency?',
    a: 'O programa é para alunos a partir do nível B2 (intermediário avançado). Se você já teve aulas de inglês por alguns anos e consegue se comunicar bem, provavelmente está pronto. Faremos um bate-papo rápido de nivelamento na aula experimental.',
  },
  {
    q: 'Quantas aulas por semana são recomendadas?',
    a: 'Recomendamos de 2 a 4 sessões por semana para manutenção efetiva da fluência. Com 2 sessões, você mantém o contato e evita o "enferrujamento". Com 4, evolui progressivamente mesmo já sendo avançado.',
  },
  {
    q: 'É totalmente diferente de um curso normal?',
    a: 'Sim. O Keep the Fluency não é uma progressão de módulos nem tem provas ou dever de casa. É um programa de manutenção focado em uso real do idioma — conversação espontânea, listening e cultura. O ritmo é seu, o compromisso é leve.',
  },
  {
    q: 'As aulas têm material de apoio ou é só conversação?',
    a: 'Cada sessão tem um tema e material curado pelo professor — artigo, trecho de série, episódio de podcast ou situação real. A aula começa com o material e evolui para conversação livre. Você tem acesso a todo o conteúdo pela plataforma após a aula.',
  },
  {
    q: 'Posso cancelar ou pausar quando quiser?',
    a: 'Sim. O Keep the Fluency foi desenhado para se encaixar na sua vida, não o contrário. Você pode pausar, retomar ou ajustar sua frequência com total flexibilidade.',
  },
];

const KeepTheFluency: React.FC = () => {
  const [activeSession, setActiveSession] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0533] via-purple-deep to-purple-brand text-white py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-brand/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-bold tracking-wide">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Conversation & Listening — Para B2 a C2</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight">
            Seu inglês não pode{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">enferrujar.</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Você já conquistou a fluência. O <strong className="text-white">Keep the Fluency</strong> é o programa que mantém
            seu inglês vivo e natural — com conversas ao vivo, sem cobrança excessiva, no seu ritmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => openSmartForm()}
              className="inline-flex items-center justify-center bg-white text-purple-brand px-8 py-4 rounded-xl font-black text-lg hover:bg-purple-50 transition-all shadow-2xl shadow-black/30"
            >
              Quero minha aula experimental grátis <ArrowRight className="ml-2" size={20} />
            </button>
            <Link
              to="/metodologia"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              Ver metodologia OpenLife
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            {[
              { val: '+100k', label: 'alunos formados' },
              { val: '20 anos', label: 'de metodologia ESL' },
              { val: '5.0 ★', label: 'Google Reviews' },
              { val: 'B2 → C2', label: 'níveis atendidos' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-black text-xl text-white">{s.val}</p>
                <p className="text-purple-300 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section className="py-20 bg-bgsoft">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-100 px-4 py-1.5 rounded-full text-sm font-bold text-red-600">
            <span>O problema que ninguém fala</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Inglês não é como andar de bicicleta.<br />
            <span className="text-purple-brand">Sem prática, ele enferruja.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Você passou anos aprendendo, fez cursos, morou fora, chegou ao B2 ou C1 — e agora percebe
            que as palavras não fluem como antes. O vocabulário some. A confiança cai. As reuniões
            em inglês dão aquele frio na barriga que você achava que tinha superado.
          </p>
          <p className="text-slate-700 font-semibold text-lg">
            A solução não é voltar a estudar inglês. É <span className="text-purple-brand">praticar inglês</span>.
          </p>
        </div>
      </section>

      {/* A Solução — Sessões */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Três tipos de sessão,{' '}
              <span className="text-purple-brand">uma experiência</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Cada encontro é curado pelo professor, ao vivo, em inglês. Descontraído como um happy hour
              com amigos de outro país — só que você sai de lá com o idioma mais afiado.
            </p>
          </div>

          {/* Session Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
            {SESSION_TYPES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveSession(i)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all border-2 ${
                  activeSession === i
                    ? 'bg-purple-brand text-white border-purple-brand shadow-lg shadow-purple-brand/30'
                    : 'bg-white text-slate-700 border-gray-100 hover:border-purple-brand/40'
                }`}
              >
                <span className={activeSession === i ? 'text-white' : 'text-purple-brand'}>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Active Session Detail */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-purple-50 text-purple-brand rounded-2xl flex items-center justify-center shrink-0">
                {SESSION_TYPES[activeSession].icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900">{SESSION_TYPES[activeSession].label}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{SESSION_TYPES[activeSession].desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {SESSION_TYPES[activeSession].tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-3 py-1.5 bg-violet-50 text-purple-brand text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-24 bg-bgsoft">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Keep the Fluency é para você{' '}
              <span className="text-purple-brand">se...</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOR_WHO.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4">
                <div className="text-4xl">{p.icon}</div>
                <h3 className="font-black text-slate-900 text-lg">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Por que o <span className="text-purple-brand">Keep the Fluency</span> funciona
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Metodologia de 20 anos aplicada ao objetivo de quem já é fluente: manter o inglês natural, vivo e confiante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIALS.map((d, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-purple-50 text-purple-brand rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-brand group-hover:text-white transition-all">
                  {d.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-3 text-lg">{d.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-24 bg-bgsoft">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Por que não é só{' '}
              <span className="text-purple-brand">baixar um app</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Existem outras formas de "praticar" inglês. Mas nenhuma combina metodologia, imersão e qualidade humana como o Keep.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-5 px-6 text-slate-600 font-bold w-1/2">Critério</th>
                    <th className="py-5 px-4 text-center">
                      <div className="text-purple-brand font-black text-base">Keep<br /><span className="text-xs font-bold">OpenLife</span></div>
                    </th>
                    <th className="py-5 px-4 text-center text-slate-400 font-medium text-xs">Cambly/<br />tutores</th>
                    <th className="py-5 px-4 text-center text-slate-400 font-medium text-xs">Apps<br />duolingo</th>
                    <th className="py-5 px-4 text-center text-slate-400 font-medium text-xs">Escola<br />tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                      <td className="py-4 px-6 text-slate-700 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {row.keep ? (
                          <CheckCircle2 size={18} className="text-purple-brand mx-auto" />
                        ) : (
                          <span className="text-slate-300 text-lg">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.cambly ? (
                          <CheckCircle2 size={18} className="text-green-400 mx-auto" />
                        ) : (
                          <span className="text-slate-300 text-lg">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.apps ? (
                          <CheckCircle2 size={18} className="text-green-400 mx-auto" />
                        ) : (
                          <span className="text-slate-300 text-lg">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.escola ? (
                          <CheckCircle2 size={18} className="text-green-400 mx-auto" />
                        ) : (
                          <span className="text-slate-300 text-lg">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Começar é simples como{' '}
              <span className="text-purple-brand">marcar um café</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Agende a aula experimental',
                desc: 'Preencha o formulário. Nosso time entra em contato em até 1h para confirmar o horário e fazer um bate-papo rápido de nivelamento.',
              },
              {
                n: '02',
                title: 'Escolha seu formato',
                desc: 'Conversation, Listening ou Current Events — você decide quais tipos de sessão fazem mais sentido pra você. 2x ou 4x por semana.',
              },
              {
                n: '03',
                title: 'Comece a viver o inglês',
                desc: 'Acesse a plataforma, entre na sua turma e mergulhe. Sem pressão, sem lição de casa. Só inglês fluindo com qualidade.',
              },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-brand text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto">
                  {step.n}
                </div>
                <h3 className="font-black text-slate-900 text-lg">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Intermediário */}
      <section className="py-16 bg-violet-50 border-y border-violet-100">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <p className="text-purple-brand font-bold text-sm uppercase tracking-widest">Experimente sem compromisso</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Uma sessão gratuita para você sentir{' '}
            <span className="text-purple-brand">na prática</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Agendar sua aula experimental do Keep the Fluency não tem custo e não exige compromisso.
            Você experimenta a sessão, sente a dinâmica e decide depois.
          </p>
          <button
            onClick={() => openSmartForm()}
            className="inline-flex items-center bg-purple-brand text-white px-10 py-5 rounded-full font-black text-xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-brand/30"
          >
            Quero minha sessão grátis <ArrowRight className="ml-3" size={22} />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
            Perguntas frequentes
          </h2>
          {FAQS.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-purple-brand shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-[#1a0533] via-purple-deep to-purple-brand text-white text-center px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto">
            <MessageCircle size={28} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Inglês que não se usa,<br />é inglês que some.
          </h2>
          <p className="text-purple-200 text-lg max-w-lg mx-auto leading-relaxed">
            Metodologia de 20 anos. Professores especialistas. Turmas de até 4 alunos.
            Uma sessão gratuita para você começar hoje, sem compromisso.
          </p>
          <button
            onClick={() => openSmartForm()}
            className="inline-flex items-center bg-white text-purple-brand px-10 py-5 rounded-full font-black text-xl hover:bg-purple-50 transition-all shadow-2xl"
          >
            Agendar sessão gratuita <ArrowRight className="ml-3" size={22} />
          </button>
          <p className="text-purple-300 text-sm">
            Aula experimental 100% gratuita · Sem cartão de crédito · Sem compromisso
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Keep the Fluency — OpenLife',
            description: 'Programa de manutenção de fluência em inglês com aulas de conversação e listening ao vivo para níveis B2 a C2. Sem pressão, sem cobrança excessiva. OpenLife Brasil.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'OpenLife English School',
              url: 'https://openlifebrasil.com.br',
            },
            educationalLevel: 'B2 ao C2 (CEFR)',
            inLanguage: 'pt-BR',
            url: 'https://openlifebrasil.com.br/keep-the-fluency',
          }),
        }}
      />
    </div>
  );
};

export default KeepTheFluency;
