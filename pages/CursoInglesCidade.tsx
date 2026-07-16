import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Wifi, Users, Award } from 'lucide-react';
import type { CityData } from '../data/cities';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const CursoInglesCidade: React.FC<{ city: CityData }> = ({ city }) => {
  return (
    <div className="-mt-20 bg-white">

      {/* HERO */}
      <section className="bg-purple-brand min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <p className="text-orange-brand font-bold text-xs tracking-[0.25em] uppercase mb-4">
          Curso de Inglês em {city.name}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 text-white max-w-3xl">
          Fluência em inglês para quem mora em {city.name}, com o Método ESL.
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-xl mx-auto text-white/85">
          Aulas ao vivo, 100% online, com o mesmo método imersivo da unidade de Bagé/RS.
          Do zero ao avançado em 18 meses.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
            className="bg-orange-brand text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-orange-500 transition-colors">
            Agendar Aula Grátis
          </a>
          <Link to="/ingles-online"
            className="text-white border border-white/50 px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">
            Conhecer o Curso Online
          </Link>
        </div>
      </section>

      {/* POR QUE ONLINE */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-purple-brand mb-5">
            Inglês imersivo em {city.name}, sem sair de casa.
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
            A OpenLife tem unidade física em Bagé (RS) e atende alunos de {city.name} e de toda a região {city.region} com
            aulas 100% online e ao vivo — o mesmo método ESL imersivo, os mesmos professores, a mesma metodologia que já
            formou milhares de alunos fluentes em todo o Brasil.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
          {[
            { icon: <Wifi size={22} />, title: 'Aulas ao vivo', desc: `Direto de ${city.name} para nossos professores, sem gravações.` },
            { icon: <Users size={22} />, title: 'Turmas reduzidas', desc: 'Grupos pequenos para você falar mais em cada aula.' },
            { icon: <Award size={22} />, title: 'Certificação', desc: 'Preparo para exames internacionais como IELTS e TOEFL.' },
          ].map((f, i) => (
            <div key={i} className="border border-purple-100 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-50 text-purple-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <p className="font-bold text-purple-brand mb-1">{f.title}</p>
              <p className="text-slate-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-purple-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-purple-brand mb-8 text-center">
            Por que alunos de {city.name} escolhem a OpenLife
          </h2>
          <ul className="space-y-4">
            {[
              `Fluência real em 18 meses, com aulas 100% em inglês desde o primeiro dia`,
              `Flexibilidade de horário para quem trabalha ou estuda em ${city.name}`,
              `Sem taxa de matrícula ou fidelidade abusiva`,
              `Plataforma e app exclusivos para praticar fora do horário de aula`,
              `Professores certificados e metodologia validada há mais de 20 anos`,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <CheckCircle2 size={20} className="text-orange-brand shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-orange-brand py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Comece hoje seu inglês em {city.name}
          </h2>
          <p className="text-white/90 mb-8">
            Agende sua aula experimental gratuita e conheça o método na prática.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-brand px-8 py-3.5 rounded-full font-bold text-sm hover:bg-purple-50 transition-colors">
            Agendar Aula Grátis <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default CursoInglesCidade;
