
import React from 'react';
import { Course, Post, LevelQuestion } from './types';

export const COLORS = {
  purple: '#6B2D8B',
  orange: '#F57C20',
};

export const COURSES: Course[] = [
  {
    id: 'kids',
    title: 'OpenLife Kids',
    age: '6-9 anos',
    focus: 'Bilinguismo Precoce',
    description: 'Focado em bilinguismo precoce e desenvolvimento cognitivo. Um mundo de descobertas onde o inglês faz parte da brincadeira e do crescimento natural.',
    highlights: ['Aulas lúdicas e interativas', 'Desenvolvimento cognitivo acelerado', 'Professores especializados em alfabetização'],
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'teens',
    title: 'OpenLife Teens',
    age: '10-12 anos',
    focus: 'Cultura Pop e Certificações',
    description: 'Inglês conectado com cultura pop, gamificação e certificações. Focado em comunicação real para a generation tecnológica.',
    highlights: ['Metodologia gamificada', 'Foco total em speaking', 'Preparação para certificados internacionais'],
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'journey',
    title: 'OpenLife Journey',
    age: '13+ anos',
    focus: 'Fluência em 18 Meses',
    description: 'Fluência em 18 meses com metodologia ESL exclusiva. Nosso curso carro-chefe para quem precisa de resultados rápidos, imersão e comunicação sem tradução.',
    highlights: ['Metodologia ESL imersiva', 'Comunicação sem tradução mental', 'Certificação Internacional CEFR C1/C2'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'keep',
    title: 'Keep the Fluency',
    age: 'Avançado',
    focus: 'Comunidade e Desafios',
    description: 'Mantenha sua fluência com desafios e uma comunidade ativa. Ideal para networking e aprimoramento contínuo do vocabulário avançado.',
    highlights: ['Debates de alto nível', 'Networking internacional', 'Aperfeiçoamento gramatical fino'],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200'
  }
];

const FilmesSeriesContent = (
  <div>
    {/* Schema JSON-LD Article + FAQPage */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Melhores filmes e séries para aprender inglês",
      "description": "Descubra os melhores filmes e séries para aprender inglês por nível, plataforma e faixa etária. Guia completo com método para realmente evoluir.",
      "url": "https://openlifebrasil.com.br/blog/filmes-series-para-aprender-ingles",
      "datePublished": "2026-06-26",
      "dateModified": "2026-06-26",
      "author": { "@type": "Organization", "name": "OpenLife English School" },
      "publisher": { "@type": "Organization", "name": "OpenLife English School", "logo": { "@type": "ImageObject", "url": "https://openlifebrasil.com.br/logo.png" } },
      "image": { "@type": "ImageObject", "url": "https://openlifebrasil.com.br/blog/imagens/filmes-series-para-aprender-ingles-capa.jpg" }
    })}} />

    {/* BLOCO 02 — Banner CTA de topo */}
    <div className="rounded-3xl p-8 md:p-12 mb-14 text-white" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' }}>
      <p className="text-xl md:text-2xl font-black leading-snug mb-3">
        Você assiste série em inglês há anos — e ainda depende da legenda?
      </p>
      <p className="text-purple-200 text-base md:text-lg font-medium mb-8 leading-relaxed">
        Aprenda o método certo e transforme entretenimento em fluência de verdade.
      </p>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-white text-base transition-all hover:scale-105 shadow-xl"
        style={{ background: '#F97316' }}
      >
        Quero minha aula grátis agora →
      </a>
    </div>

    {/* Opening */}
    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
      <p>
        Você já passou horas assistindo <strong className="text-slate-800">Stranger Things</strong> ou{' '}
        <strong className="text-slate-800">The Office</strong> com legenda em inglês — e sentiu que estava
        aprendendo. Mas na hora de falar, a língua trava. O vocabulário some. A confiança vai embora.
      </p>
      <p>
        A boa notícia é que filmes e séries realmente funcionam para aprender inglês —{' '}
        <strong className="text-slate-800">desde que você use o método certo</strong>. Assistir passivamente
        ajuda um pouco. Assistir com estratégia muda tudo. Neste guia, você vai encontrar as melhores
        indicações organizadas por nível, por faixa etária e por plataforma — mais o passo a passo para
        sair do "entendo, mas não consigo falar" de vez.
      </p>

      {/* H2 — Por que filmes funcionam */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Por que filmes e séries funcionam (mas só até certo ponto)
      </h2>
      <p>
        O linguista Stephen Krashen, da University of Southern California, popularizou o conceito de{' '}
        <em>input compreensível</em>: você adquire uma língua quando é exposto a conteúdo levemente acima
        do seu nível atual — não tão fácil que não desafie, não tão difícil que você não entenda nada.
      </p>
      <p>Filmes e séries são excelentes fontes de input compreensível porque:</p>
      <ul className="space-y-3 pl-0">
        {[
          'Combinam áudio, contexto visual e emoção — o que facilita a retenção de vocabulário',
          'Expõem você ao inglês falado naturalmente, com contrações, gírias e ritmo real',
          'Apresentam situações cotidianas que raramente aparecem em livros didáticos',
          'Tornam o estudo genuinamente prazeroso — o que aumenta a consistência',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#7C3AED' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p>
        O problema é que <strong className="text-slate-800">input sozinho não é suficiente</strong>.
        Pesquisas sobre aquisição de linguagem mostram que a produção ativa (falar, escrever, interagir)
        é insubstituível para desenvolver fluência. Filmes são a base — mas não o método completo.
      </p>
      <p className="text-sm text-slate-400 italic border-l-4 border-slate-100 pl-4">
        Referência: Krashen, S. (1982). <em>Principles and Practice in Second Language Acquisition</em> —
        USC / sdkrashen.com
      </p>

      {/* H2 — Como usar filmes */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Como usar filmes para aprender inglês de verdade (o método certo)
      </h2>
      <p>
        Assistir com legenda em português não é estudar — é só assistir. Para transformar entretenimento
        em aprendizado, use este protocolo em 3 etapas:
      </p>
      <div className="rounded-2xl bg-slate-50 p-6 md:p-8 space-y-5">
        {[
          { step: 'Etapa 1 — Primeira assistida', text: 'Assista sem parar, com legenda em inglês (não português). Entenda o contexto geral sem se preocupar com cada palavra.' },
          { step: 'Etapa 2 — Revisão ativa', text: 'Escolha 1 ou 2 cenas que você gostou. Assista sem legenda. Depois, assista com legenda em inglês e pause em cada frase nova — anote no celular as expressões que você não conhecia.' },
          { step: 'Etapa 3 — Shadowing', text: 'Repita as falas em voz alta, imitando o ritmo, o sotaque e a entonação. Parece idiota. Funciona muito.' },
        ].map(({ step, text }, i) => (
          <div key={i} className="flex gap-4">
            <span className="font-black text-sm px-3 py-1 rounded-full text-white flex-shrink-0 h-fit" style={{ background: '#7C3AED' }}>
              {i + 1}
            </span>
            <div>
              <strong className="text-slate-800 block mb-1">{step}</strong>
              <span className="text-slate-600">{text}</span>
            </div>
          </div>
        ))}
      </div>
      <p>
        O que mais acelera o processo é ter alguém para praticar o que você aprendeu. Um professor que
        corrija em tempo real vale mais do que 100 horas de Netflix passivo.
      </p>

      {/* H2 — Iniciantes */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Melhores filmes para iniciantes (A1–A2)
      </h2>
      <p>
        Se você está começando do zero ou ainda tem dificuldade para entender inglês falado, priorize
        filmes com diálogos simples e diretos, personagens que falam devagar e com clareza, e vocabulário
        cotidiano.
      </p>
      <div className="space-y-3">
        {[
          { title: 'Toy Story', platform: 'Disney+', desc: 'Vocabulário simples, vozes claras, personagens icônicos. Perfeito para quem está começando do zero.' },
          { title: 'The Lion King', platform: 'Disney+', desc: 'Diálogos curtos, contexto visual forte, pronúncia americana padrão.' },
          { title: 'Home Alone', platform: 'Star+', desc: 'Situações cotidianas domésticas, frases curtas, muito humor físico que facilita o entendimento.' },
          { title: 'Forrest Gump', platform: 'Prime Video', desc: 'Narração em primeira pessoa, vocabulário acessível, clássico americano.' },
          { title: 'The Intern', platform: 'Prime Video', desc: 'Diálogos de escritório, inglês americano claro, ótimo para vocabulário profissional básico.' },
        ].map(({ title, platform, desc }, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="font-black text-lg w-8 text-center flex-shrink-0" style={{ color: '#7C3AED' }}>{i + 1}</span>
            <div>
              <span className="font-black text-slate-900">{title}</span>
              <span className="text-xs font-bold ml-2 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">{platform}</span>
              <p className="text-slate-500 text-sm mt-1 mb-0">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm bg-amber-50 border border-amber-100 rounded-xl p-4 text-amber-800">
        <strong>Dica importante:</strong> no nível A1–A2, use legenda em inglês — não em português. Parece
        difícil no começo, mas é o que treina seu cérebro a pensar diretamente em inglês.
      </p>

      {/* H2 — Intermediários */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Melhores séries para intermediários (B1–B2)
      </h2>
      <p>
        No nível intermediário, você já entende boa parte do inglês falado, mas ainda trava em conversas
        rápidas, gírias e sotaques variados. Séries são perfeitas para esse estágio porque você tem
        episódios curtos para rever cenas e personagens recorrentes que você vai conhecendo aos poucos.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: '#7C3AED' }} className="text-white">
              <th className="text-left px-5 py-4 font-black">Série</th>
              <th className="text-left px-5 py-4 font-black">Plataforma</th>
              <th className="text-left px-5 py-4 font-black">Por que funciona</th>
            </tr>
          </thead>
          <tbody>
            {[
              { serie: 'Friends', plat: 'Netflix', why: 'Diálogos do dia a dia, humor situacional, inglês americano neutro' },
              { serie: 'The Office', plat: 'Peacock / Prime Video', why: 'Inglês corporativo + informal, ótimo para vocabulário profissional' },
              { serie: 'Modern Family', plat: 'Disney+', why: 'Famílias reais, diversidade de sotaques suaves, gírias contemporâneas' },
              { serie: 'Suits', plat: 'Netflix', why: 'Inglês formal e estratégico — perfeito para quem quer inglês profissional' },
              { serie: 'Brooklyn Nine-Nine', plat: 'Netflix', why: 'Ritmo acelerado mas previsível, gírias americanas modernas' },
            ].map(({ serie, plat, why }, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-5 py-3 font-bold text-slate-900">{serie}</td>
                <td className="px-5 py-3 text-slate-500">{plat}</td>
                <td className="px-5 py-3 text-slate-600">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-slate-500 italic">
        Para séries no nível B1–B2, tente assistir o primeiro episódio sem legenda. Se você entender
        60–70%, está no nível certo.
      </p>
    </div>

    {/* CTA Intermediário 1 */}
    <div className="my-12 rounded-3xl p-8 md:p-12 text-white" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' }}>
      <h3 className="text-xl md:text-2xl font-black mb-3">Séries não ensinam a falar — professores sim</h3>
      <p className="text-purple-200 mb-6 leading-relaxed">
        O método OpenLife combina imersão com prática real orientada por professores humanos.
      </p>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white text-sm transition-all hover:scale-105"
        style={{ background: '#F97316' }}
      >
        Experimentar o método OpenLife →
      </a>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
      {/* H2 — Avançados */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-2 pb-2">
        Melhores filmes e séries para avançados (C1–C2)
      </h2>
      <p>
        No nível avançado, o desafio é o inglês autêntico: rápido, cheio de referências culturais,
        sotaques regionais e nuances de significado que o dicionário não explica. Os conteúdos a seguir
        vão empurrar o seu nível de verdade:
      </p>
      <div className="space-y-3">
        {[
          { title: 'The Crown', where: 'Netflix', desc: 'Inglês britânico formal de alto nível, vocabulário histórico e político' },
          { title: 'Breaking Bad', where: 'Netflix', desc: 'Diálogos tensos e complexos, vocabulário técnico e coloquial americano' },
          { title: 'Succession', where: 'HBO Max', desc: 'Negócios, poder e ironia — o inglês corporativo mais sofisticado da TV' },
          { title: 'Peaky Blinders', where: 'Netflix', desc: 'Sotaque de Birmingham, inglês britânico regional pesado (difícil e muito recompensador)' },
          { title: 'The Wire', where: 'HBO Max', desc: 'Considerada por linguistas como a série com o inglês mais autêntico já filmado' },
        ].map(({ title, where, desc }, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <span className="font-black text-lg w-8 text-center flex-shrink-0" style={{ color: '#7C3AED' }}>{i + 1}</span>
            <div>
              <span className="font-black text-slate-900">{title}</span>
              <span className="text-xs font-bold ml-2 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">{where}</span>
              <p className="text-slate-500 text-sm mt-1 mb-0">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        Para filmes, <strong className="text-slate-800">Interstellar</strong>,{' '}
        <strong className="text-slate-800">The Social Network</strong> e{' '}
        <strong className="text-slate-800">Parasite</strong> (em inglês) são excelentes para vocabulário
        científico, de negócios e cinema de autor.
      </p>

      {/* H2 — Kids */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Filmes e séries para Kids (4–11 anos)
      </h2>
      <p>
        Crianças aprendem inglês de forma diferente dos adultos. Para elas, o conteúdo precisa ser
        altamente visual, repetitivo, musical e divertido.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { title: 'Peppa Pig', where: 'YouTube/Netflix', age: '4–6 anos', desc: 'Inglês britânico simples, episódios de 5 minutos' },
          { title: 'Bluey', where: 'Disney+', age: '5–8 anos', desc: 'Diálogos familiares naturais, série australiana excelente' },
          { title: 'Paw Patrol', where: 'Paramount+', age: '4–7 anos', desc: 'Vocabulário de ação, frases curtas e repetitivas' },
          { title: 'Moana / Encanto', where: 'Disney+', age: '6–10 anos', desc: 'Músicas que gravam vocabulário de forma natural' },
          { title: 'Shaun the Sheep', where: 'Netflix', age: '5–9 anos', desc: 'Praticamente sem diálogo — aprende pelo contexto visual' },
        ].map(({ title, where, age, desc }, i) => (
          <div key={i} className="p-4 bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-black text-slate-900 text-sm">{title}</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">{age}</span>
            </div>
            <span className="text-xs text-purple-600 font-semibold block mb-1">{where}</span>
            <p className="text-slate-500 text-xs mb-0">{desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm bg-blue-50 border border-blue-100 rounded-xl p-4 text-blue-800">
        <strong>Dica para pais:</strong> trocar o idioma do streaming para inglês e deixar a legenda em
        inglês desde cedo cria imersão passiva poderosa. Não force — deixe ser entretenimento normal.
      </p>

      {/* H2 — Teens */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Séries e filmes para Teens (12–17 anos)
      </h2>
      <p>
        Para adolescentes, a chave é o conteúdo que eles já querem assistir mesmo — não conteúdo
        "educativo". Teens que estudam inglês na OpenLife costumam citar estas séries:
      </p>
      <div className="space-y-3">
        {[
          { title: 'Stranger Things', where: 'Netflix', desc: 'Inglês americano dos anos 80, vocabulário emocional intenso, altamente motivante' },
          { title: 'Outer Banks', where: 'Netflix', desc: 'Inglês jovem americano contemporâneo, gírias de praia e aventura' },
          { title: 'Avatar: The Last Airbender', where: 'Netflix', desc: 'Fantasia com vocabulário rico e emoções complexas' },
          { title: 'Spider-Man: Into the Spider-Verse', where: 'Netflix', desc: 'Inglês urbano e diverso, animação visual explicativa' },
          { title: 'The Maze Runner', where: 'Prime Video/Disney+', desc: 'Ficção científica jovem com vocabulário de ação' },
        ].map(({ title, where, desc }, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <span className="font-black text-lg w-8 text-center flex-shrink-0" style={{ color: '#F97316' }}>{i + 1}</span>
            <div>
              <span className="font-black text-slate-900">{title}</span>
              <span className="text-xs font-bold ml-2 px-2 py-0.5 rounded-full bg-orange-50 text-orange-700">{where}</span>
              <p className="text-slate-500 text-sm mt-1 mb-0">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        Para teens gamers, <strong className="text-slate-800">YouTube e Twitch em inglês</strong> têm um
        nível de imersão difícil de igualar — e o vocabulário de games em inglês é vasto e muito útil.
      </p>
    </div>

    {/* CTA Intermediário 2 */}
    <div className="my-12 rounded-3xl p-8 md:p-12 text-white" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' }}>
      <h3 className="text-xl md:text-2xl font-black mb-3">Seu filho ainda depende da legenda em português?</h3>
      <p className="text-purple-200 mb-6 leading-relaxed">
        O método imersivo OpenLife prepara kids e teens para falar inglês com confiança — em até 18 meses.
      </p>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white text-sm transition-all hover:scale-105"
        style={{ background: '#F97316' }}
      >
        Garantir a vaga do meu filho agora →
      </a>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
      {/* H2 — Plataformas */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-2 pb-2">
        Guia rápido por plataforma
      </h2>
      <p>Você não precisa assinar tudo — veja onde concentrar o seu streaming para aprender inglês:</p>
      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: '#7C3AED' }} className="text-white">
              <th className="text-left px-5 py-4 font-black">Plataforma</th>
              <th className="text-left px-5 py-4 font-black">Destaque para inglês</th>
              <th className="text-left px-5 py-4 font-black">Melhor para</th>
            </tr>
          </thead>
          <tbody>
            {[
              { plat: 'Netflix', dest: 'Friends, Stranger Things, The Crown, Breaking Bad', best: 'Todos os níveis' },
              { plat: 'Disney+', dest: 'Pixar, Bluey, Modern Family, Avatar', best: 'Kids, iniciantes, intermediários' },
              { plat: 'Prime Video', dest: 'The Office, Suits, The Intern', best: 'Intermediários, profissional' },
              { plat: 'HBO Max', dest: 'Succession, The Wire, Game of Thrones', best: 'Avançados' },
              { plat: 'YouTube', dest: 'Peppa Pig, canais educativos, gaming', best: 'Kids, iniciantes' },
              { plat: 'Apple TV+', dest: 'Ted Lasso, Severance, For All Mankind', best: 'Intermediários, avançados' },
            ].map(({ plat, dest, best }, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-5 py-3 font-bold text-slate-900">{plat}</td>
                <td className="px-5 py-3 text-slate-600">{dest}</td>
                <td className="px-5 py-3 text-purple-700 font-semibold text-xs">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm bg-purple-50 border border-purple-100 rounded-xl p-4 text-purple-800">
        <strong>Ted Lasso (Apple TV+)</strong> merece menção especial: é a série mais recomendada por
        professores de inglês nos últimos 3 anos — inglês americano e britânico misturados, motivacional,
        fácil de seguir.
      </p>

      {/* H2 — Entretenimento vs estudo */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Entretenimento vs. estudo: a diferença que poucos entendem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100">
          <h4 className="font-black text-slate-700 mb-2">🎬 Entretenimento passivo</h4>
          <p className="text-sm text-slate-500 mb-0">
            Legenda em português, assistindo relaxado — cria familiaridade com o som da língua e amplia o
            vocabulário de forma lenta e inconsciente. É bom, mas não é suficiente.
          </p>
        </div>
        <div className="p-6 rounded-2xl border-2 text-white" style={{ background: '#7C3AED' }}>
          <h4 className="font-black mb-2">📚 Estudo ativo com séries</h4>
          <p className="text-sm text-purple-200 mb-0">
            Shadowing, anotação de expressões, revisão de cenas, repetição em voz alta — acelera o
            processo significativamente. Um estudo da Universidade de Antuérpia mostrou que alunos
            evoluíam <strong className="text-white">40% mais rápido</strong> combinando séries com prática de fala.
          </p>
        </div>
      </div>
      <p>
        O maior erro é achar que está "estudando inglês" quando está apenas assistindo.{' '}
        <strong className="text-slate-800">A Netflix não vai te deixar fluente.</strong> O que vai te deixar
        fluente é usar o que você assistiu — com um professor, em conversas reais, com feedback.
      </p>

      {/* H2 — Conclusão */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">Conclusão</h2>
      <p>
        Filmes e séries são uma das ferramentas mais poderosas para aprender inglês — quando usados com
        intenção. Você tem agora um guia completo: os melhores conteúdos por nível, por faixa etária e
        por plataforma, mais o método para transformar entretenimento em aprendizado real.
      </p>
      <p>
        O próximo passo é praticar o que você absorveu. E para isso, você precisa de mais do que uma tela
        — precisa de alguém que corrija você em tempo real, que empurre o seu nível e que transforme o
        vocabulário da série favorita em conversas que funcionam na vida real. É exatamente isso que a
        OpenLife faz.
      </p>
    </div>

    {/* BLOCO 04 — CTA Final */}
    <div className="mt-16 rounded-[40px] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)' }}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10 space-y-6">
        <h2 className="text-3xl md:text-4xl font-black leading-tight">Pare de só assistir. Comece a falar.</h2>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Aula experimental gratuita com professor humano — método imersivo que leva do iniciante ao
          fluente em até 18 meses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://form.respondi.app/5HvbxD84"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-black text-white text-lg transition-all hover:scale-105 shadow-xl"
            style={{ background: '#F97316' }}
          >
            Quero minha aula grátis agora
          </a>
          <a
            href="/metodologia"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-black text-white text-lg border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            Conhecer o método OpenLife
          </a>
        </div>
      </div>
    </div>

    {/* BLOCO 05 — FAQ */}
    <div className="mt-16 space-y-4">
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Perguntas frequentes</h2>
      {[
        {
          q: 'Qual é o melhor filme para aprender inglês do zero?',
          a: 'Para quem está começando do zero, Toy Story e The Lion King são os mais indicados. Ambos têm diálogos simples, vocabulário visual e pronúncia americana clara. O segredo é ativar a legenda em inglês (não em português) desde o início — seu cérebro vai acostumar mais rápido do que você imagina.',
        },
        {
          q: 'Dá para aprender inglês só assistindo séries?',
          a: 'Séries ajudam muito no vocabulário e no listening — mas não são suficientes para desenvolver fluência completa. Pesquisas em aquisição de linguagem mostram que a produção ativa (falar, ser corrigido, interagir) é insubstituível. Séries são uma excelente ferramenta de suporte, não um método completo.',
        },
        {
          q: 'Como usar filmes para aprender inglês de forma mais eficaz?',
          a: 'O método mais eficaz combina 3 etapas: (1) primeira assistida com legenda em inglês para entender o contexto; (2) revisão de cenas específicas pausando para anotar expressões novas; (3) shadowing — repetir as falas em voz alta imitando ritmo e entonação. Essa combinação supera em muito o modo passivo de assistir.',
        },
        {
          q: 'Quais séries são melhores para inglês intermediário?',
          a: 'Para o nível B1–B2, Friends, The Office e Modern Family são os clássicos mais recomendados por professores. Eles têm inglês americano neutro, diálogos cotidianos e muitas situações do dia a dia. Para quem quer inglês profissional, Suits tem um vocabulário corporativo excelente.',
        },
        {
          q: 'Que filmes são indicados para crianças aprenderem inglês?',
          a: 'Para crianças de 4 a 8 anos, Peppa Pig, Bluey e os filmes da Pixar são os mais indicados. Para crianças de 8 a 12 anos, Paw Patrol, Avatar: The Last Airbender e Moana funcionam muito bem. O ideal é trocar o idioma do streaming para inglês e deixar como entretenimento normal — sem pressão.',
        },
        {
          q: 'Qual plataforma tem o melhor conteúdo para aprender inglês?',
          a: 'Netflix tem a maior variedade para todos os níveis. Disney+ é a melhor para kids e iniciantes. Para nível avançado, HBO Max (Succession, The Wire) e Apple TV+ (Ted Lasso, Severance) oferecem inglês mais sofisticado e autêntico. O ideal é escolher pela série — não pela plataforma.',
        },
      ].map(({ q, a }, i) => (
        <details key={i} className="group border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
          <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-black text-slate-900 list-none hover:bg-slate-50 transition-colors">
            <span>{q}</span>
            <span className="text-2xl font-light flex-shrink-0 transition-transform group-open:rotate-45" style={{ color: '#7C3AED' }}>+</span>
          </summary>
          <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-gray-50 pt-4">
            {a}
          </div>
        </details>
      ))}
    </div>

    {/* Schema FAQPage JSON-LD */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Qual é o melhor filme para aprender inglês do zero?", "acceptedAnswer": { "@type": "Answer", "text": "Para quem está começando do zero, Toy Story e The Lion King são os mais indicados. Ambos têm diálogos simples, vocabulário visual e pronúncia americana clara." } },
        { "@type": "Question", "name": "Dá para aprender inglês só assistindo séries?", "acceptedAnswer": { "@type": "Answer", "text": "Séries ajudam muito no vocabulário e no listening — mas não são suficientes para desenvolver fluência completa. A produção ativa (falar, ser corrigido, interagir) é insubstituível." } },
        { "@type": "Question", "name": "Como usar filmes para aprender inglês de forma mais eficaz?", "acceptedAnswer": { "@type": "Answer", "text": "O método mais eficaz combina 3 etapas: primeira assistida com legenda em inglês, revisão ativa de cenas e shadowing (repetição em voz alta)." } },
        { "@type": "Question", "name": "Quais séries são melhores para inglês intermediário?", "acceptedAnswer": { "@type": "Answer", "text": "Para o nível B1–B2, Friends, The Office e Modern Family são os clássicos mais recomendados por professores." } },
        { "@type": "Question", "name": "Que filmes são indicados para crianças aprenderem inglês?", "acceptedAnswer": { "@type": "Answer", "text": "Para crianças de 4 a 8 anos, Peppa Pig, Bluey e os filmes da Pixar são os mais indicados. Para 8 a 12 anos, Paw Patrol, Avatar e Moana." } },
        { "@type": "Question", "name": "Qual plataforma tem o melhor conteúdo para aprender inglês?", "acceptedAnswer": { "@type": "Answer", "text": "Netflix tem a maior variedade. Disney+ é a melhor para kids e iniciantes. Para avançados, HBO Max e Apple TV+ oferecem inglês mais sofisticado." } },
      ]
    })}} />
  </div>
);

const RecessoContent = (
  <div>
    {/* Schema JSON-LD — Article + FAQPage */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Praticar inglês no recesso: 7 formas simples de não perder o ritmo",
          "description": "Guia completo com ideias práticas e leves para praticar inglês no recesso, sem pressão e com foco em evolução real.",
          "author": { "@type": "Organization", "name": "OpenLife English School" },
          "publisher": { "@type": "Organization", "name": "OpenLife English School", "logo": { "@type": "ImageObject", "url": "https://openlifebrasil.com.br/2.png" } },
          "mainEntityOfPage": "https://openlifebrasil.com.br/blog/praticar-ingles-no-recesso",
          "image": "https://openlifebrasil.com.br/og-image.jpg",
          "datePublished": "2026-07-09",
          "dateModified": "2026-07-09"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Como praticar inglês nas férias sem ficar cansado?", "acceptedAnswer": { "@type": "Answer", "text": "Defina um tempo curto por dia, tipo 15 a 30 minutos, e misture atividades leves: podcast, música, séries, leitura e escrita. O objetivo nas férias é manter contato com o idioma, não estudar pesado. Foque em coisas que você gosta e encaixe o inglês na sua rotina normal." } },
            { "@type": "Question", "name": "É possível melhorar meu inglês mesmo só praticando no recesso?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, se você já tem uma base e usa o recesso para aumentar o contato com o idioma, dá para melhorar vocabulário, listening e confiança. O ideal é combinar prática nas férias com um curso estruturado durante o ano, para garantir evolução contínua e correção de erros." } },
            { "@type": "Question", "name": "O que fazer se eu esquecer muita coisa depois do recesso?", "acceptedAnswer": { "@type": "Answer", "text": "Isso é normal. Se você praticou um pouco, vai recuperar mais rápido. No retorno às aulas, foque em revisão: relembrar vocabulário, estruturas básicas e ouvir bastante inglês. Um bom professor ou curso ajuda a reorganizar o que você já sabe e retomar o ritmo mais rápido." } },
            { "@type": "Question", "name": "Qual a melhor forma de praticar speaking sozinho nas férias?", "acceptedAnswer": { "@type": "Answer", "text": "Use o celular para gravar áudios sobre seu dia, repetir frases de filmes e séries, ou descrever o que está fazendo em inglês. Não se preocupe com perfeição. A meta é destravar, acostumar sua boca e mente a formar frases em inglês. Depois, você pode aperfeiçoar com um professor." } },
            { "@type": "Question", "name": "Vale a pena fazer aula experimental de inglês durante o recesso?", "acceptedAnswer": { "@type": "Answer", "text": "Vale muito. A aula experimental te ajuda a entender seu nível atual, ter orientação sobre o que praticar nas férias e planejar sua evolução para o próximo ano. É um jeito inteligente de usar o recesso para ajustar sua rota e começar o ano seguinte já com um plano claro." } },
            { "@type": "Question", "name": "Quantos minutos por dia eu preciso para não perder o ritmo?", "acceptedAnswer": { "@type": "Answer", "text": "Para manter o ritmo, 15 a 30 minutos por dia já fazem diferença, desde que seja contato real com o idioma: ouvir, ver, ler, escrever ou falar. Se conseguir mais tempo, ótimo. Se não, foque em consistência: pouco todo dia é melhor que muito só uma vez." } }
          ]
        }
      ]
    })}} />

    {/* Banner CTA topo */}
    <div className="rounded-3xl p-8 md:p-12 mb-14 text-white" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' }}>
      <p className="text-xl md:text-2xl font-black leading-snug mb-3">
        Não deixe seu inglês congelar no recesso
      </p>
      <p className="text-purple-200 text-base md:text-lg font-medium mb-8 leading-relaxed">
        Práticas rápidas que mantêm seu cérebro no modo inglês — sem virar mais uma obrigação.
      </p>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-purple-700 text-base transition-all hover:scale-105 shadow-xl"
        style={{ background: '#fff' }}
      >
        Quero manter meu inglês ativo nas férias →
      </a>
    </div>

    {/* Conteúdo principal */}
    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

      {/* Introdução */}
      <p>
        Recesso, férias, pausa… tudo que você queria, né? Mas aí bate aquela dúvida:{' '}
        <strong className="text-slate-800">como praticar inglês no recesso</strong> sem virar "mais uma obrigação"
        e sem perder tudo o que você já conquistou?
      </p>
      <p>
        A verdade é que você não precisa estudar horas por dia para continuar evoluindo. Pequenas práticas
        diárias — tipo 10, 15 minutinhos — mantêm seu cérebro em contato com o idioma e fazem você voltar
        às aulas mais confiante, sem aquela sensação de "travei".
      </p>
      <p>
        Neste artigo, você vai encontrar <strong className="text-slate-800">7 formas simples, práticas e até
        divertidas</strong> de manter o ritmo de inglês nas férias. Vamos falar de podcasts, músicas, séries,
        leitura leve, escrita do dia a dia, speaking sozinho e ferramentas para treinar pronúncia. Tudo pensado
        para jovens e adultos que querem aproveitar o recesso, mas sem abandonar o sonho de falar inglês de verdade.
      </p>

      {/* H2 — 1 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Por que o recesso é perigoso para o seu inglês (e como virar o jogo)
      </h2>
      <p>
        Quando você para totalmente de praticar inglês por algumas semanas, o cérebro faz o quê? Organiza espaço.
        O que não é usado vai ficando mais "escondido". Não é que você esquece tudo, mas o acesso fica mais lento.
      </p>
      <p>
        Para jovens e adultos, isso é ainda mais relevante: a rotina é cheia, o tempo é curto e cada pausa longa
        pode atrasar o plano de aprender inglês para conquistar melhores oportunidades. Para não cair nessa, vale
        entender três pontos:
      </p>
      <ul className="space-y-3 pl-0">
        {[
          'Consistência vence intensidade: 15 minutos por dia durante o recesso podem ser mais eficazes do que 2 horas só em um dia.',
          'Contato diário com o idioma mantém a fluência ativa: ouvir, ver, falar e escrever em inglês, mesmo de forma leve, mantém sua "máquina" ligada.',
          'Seu objetivo não é avançar loucamente, é não regredir: recesso é período de manutenção inteligente.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#7C3AED' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-400 italic border-l-4 border-slate-100 pl-4">
        Estudos sobre aprendizado de idiomas mostram que o "esquecimento" acontece rapidamente sem contato
        contínuo — conceito da Curva de Esquecimento de Ebbinghaus, amplamente estudado em universidades como Harvard.
      </p>

      {/* H2 — 2 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-10 pb-2">
        Use o poder do áudio: como ouvir inglês todos os dias sem esforço
      </h2>
      <p>
        Ouvir inglês é uma das formas mais naturais de manter o idioma vivo na sua mente. E o melhor: você pode
        fazer isso enquanto lava louça, treina na academia ou pega ônibus.
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Podcasts curtos para encaixar na rotina</h3>
      <p>
        Procure podcasts de 5 a 15 minutos com temas leves ou de aprendizagem. Escolha 1 podcast e ouça um episódio
        por dia. Sempre que possível, repita o mesmo episódio outra vez, focando em entender mais detalhes.
      </p>
      <ul className="space-y-2 pl-0">
        {[
          'Podcasts de inglês para iniciantes ou intermediários',
          'Conteúdos sobre temas que você gosta: tecnologia, viagens, curiosidades',
          'Episódios que trazem transcrição do áudio (ajuda muito)',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#7C3AED' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Músicas com letra: diversão que vira estudo</h3>
      <p>
        Música é uma maneira excelente de <strong className="text-slate-800">praticar inglês sozinho</strong>. Escolha
        músicas que você gosta, busque a letra (lyrics), ouça acompanhando e marque expressões interessantes. Cante
        junto, mesmo que pareça estranho — é treino de speaking!
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Notícias em inglês: conteúdo real e atualizado</h3>
      <p>
        Procure notícias curtas (tipo "Breaking News") ou conteúdos em inglês simplificado, como{' '}
        <a href="https://www.bbc.co.uk/learningenglish" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold hover:underline">
          BBC Learning English
        </a>{' '}
        e{' '}
        <a href="https://learningenglish.voanews.com" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold hover:underline">
          VOA Learning English
        </a>. Isso ajuda a aprender vocabulário atual e expressões usadas em contextos reais.
      </p>

      {/* H2 — 3 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-10 pb-2">
        Transforme suas séries e filmes em uma mini aula de inglês
      </h2>
      <p>
        Já que você provavelmente vai maratonar algo no recesso, por que não configurar isso a seu favor? Ver séries
        e filmes em inglês é uma forma poderosa de manter o ouvido e o vocabulário ativos, sem parecer estudo "formal".
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Legenda em inglês é sua melhor amiga</h3>
      <p>
        Se você já entende o básico, troque a legenda em português por legenda em inglês. Isso ajuda a conectar som
        e escrita, perceber frases inteiras no contexto e identificar a pronúncia real de palavras que você já "conhece"
        apenas lendo. Para quem está começando, alterne: primeiro em português + áudio em inglês, depois a mesma cena
        com legenda em inglês.
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Técnicas para assistir sem virar só entretenimento</h3>
      <ul className="space-y-2 pl-0">
        {[
          'Pause em trechos com falas interessantes e repita em voz alta',
          'Anote 3 novas expressões por episódio',
          'Tente recontar a cena em inglês ("In this scene, they are talking about…")',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#7C3AED' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* H2 — 4 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-10 pb-2">
        Leitura leve em inglês: 10 minutos que valem ouro
      </h2>
      <p>
        Ler em inglês não significa encarar um livro pesado de 300 páginas. Durante o recesso, foque em leitura
        curta e constante. Boas opções: artigos curtos de blogs internacionais, notícias em sites como BBC e CNN,
        pequenos textos sobre temas que você já conhece em português.
      </p>
      <p>
        O segredo é não cair na armadilha da tradução palavra por palavra. Leia um parágrafo inteiro, entenda o
        sentido geral, e só depois busque palavras-chave que você não conhece. Existem extensões de navegador e apps
        que mostram tradução ao passar o mouse sobre a palavra, sem tirar você da página.
      </p>
    </div>

    {/* CTA intermediário 1 */}
    <div className="my-12 rounded-3xl p-8 md:p-10 border-2 flex flex-col md:flex-row items-center gap-6" style={{ borderColor: '#7C3AED', background: '#F5F3FF' }}>
      <div className="flex-1">
        <p className="text-xl font-black text-slate-900 mb-1">Quer transformar sua rotina em treino de inglês?</p>
        <p className="text-slate-600">A OpenLife te ajuda a criar um plano leve e eficiente.</p>
      </div>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full font-black text-white text-base transition-all hover:scale-105 shadow-lg"
        style={{ background: '#7C3AED' }}
      >
        Quero montar meu plano →
      </a>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

      {/* H2 — 5 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-4 pb-2">
        Escrever em inglês no dia a dia: treino silencioso, resultado gigante
      </h2>
      <p>
        Escrever é uma das habilidades que mais consolidam o que você aprende. No recesso, você pode usar a
        escrita de forma simples, sem parecer tarefa escolar.
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Diário em inglês: sua vida, seu vocabulário</h3>
      <p>
        Escreva 5 a 10 linhas por dia sobre o que você fez, sentiu, planejou. Não se preocupe em ser perfeito
        — foque em se expressar. Isso ajuda a fixar estruturas básicas como "Today I woke up late and I…" ou
        "Next year I want to…".
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Pequenos textos sobre sua rotina e planos</h3>
      <p>
        Você pode escrever descrições de lugares que visitou, como foi seu dia ou semana, metas para o próximo
        ano ("Next year I want to improve my speaking…"). Se quiser subir o nível, tente postar pequenos textos
        em inglês em uma rede social ou enviar para colegas que também estão aprendendo.
      </p>

      {/* H2 — 6 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-10 pb-2">
        Speaking sozinho: sim, funciona (e muito)
      </h2>
      <p>
        Muita gente acha que só dá para treinar speaking com outra pessoa. Na prática, dá para começar sozinho —
        e isso já muda bastante a sua confiança.
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Gravar áudios sobre o seu dia</h3>
      <p>
        Pegue o celular, abra o gravador e fale em inglês por 2 a 5 minutos sobre como foi seu dia, o que vai
        fazer amanhã ou o que está achando do recesso. Depois, ouça e perceba onde você travou, quais palavras
        faltaram e os momentos em que conseguiu falar mais solto.
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Repetir frases de filmes e séries (shadowing)</h3>
      <p>
        Enquanto assiste a algo em inglês, pause uma frase que achou interessante e repita tentando imitar ritmo
        e pronúncia. Faça isso com 3 a 5 frases por episódio. Essa técnica é conhecida como{' '}
        <strong className="text-slate-800">shadowing</strong> e é usada em vários métodos de aprendizagem de idiomas.
      </p>

      <h3 className="text-xl font-black text-slate-800 pt-4 pb-1">Ferramentas para praticar pronúncia</h3>
      <p>
        Use aplicativos que avaliam sua pronúncia (como <strong className="text-slate-800">ELSA Speak</strong> ou{' '}
        <strong className="text-slate-800">Duolingo</strong>), sites com exercícios de repetição de frases ou recursos
        com reconhecimento de voz. O objetivo não é ser perfeito — é se acostumar a produzir sons em inglês todo dia.
      </p>
    </div>

    {/* CTA intermediário 2 */}
    <div className="my-12 rounded-3xl p-8 md:p-10 border-2 flex flex-col md:flex-row items-center gap-6" style={{ borderColor: '#7C3AED', background: '#F5F3FF' }}>
      <div className="flex-1">
        <p className="text-xl font-black text-slate-900 mb-1">Quer companhia guiada para praticar speaking?</p>
        <p className="text-slate-600">Experimente uma aula de conversação com professores OpenLife.</p>
      </div>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full font-black text-white text-base transition-all hover:scale-105 shadow-lg"
        style={{ background: '#7C3AED' }}
      >
        Quero testar uma aula →
      </a>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

      {/* H2 — 7 (Rotina) */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-4 pb-2">
        Montando sua mini rotina de inglês para o recesso
      </h2>
      <p>
        Agora que você viu várias formas de <strong className="text-slate-800">praticar inglês no recesso</strong>,
        a dúvida é: como organizar isso sem virar uma lista impossível? Uma sugestão de rotina leve para jovens e
        adultos — <strong className="text-slate-800">30 minutos por dia</strong>:
      </p>
    </div>

    {/* Tabela de rotina */}
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: '#1A1033' }}>
            <th className="text-left px-6 py-4 font-black text-purple-200 uppercase tracking-widest w-28">Dia</th>
            <th className="text-left px-6 py-4 font-black text-purple-200 uppercase tracking-widest">Atividade</th>
          </tr>
        </thead>
        <tbody>
          {[
            { dia: 'Segunda', atividade: '10 min de podcast + 20 min de série com legenda em inglês' },
            { dia: 'Terça', atividade: '15 min de leitura + 15 min de diário em inglês' },
            { dia: 'Quarta', atividade: '20 min de filme/série + 10 min repetindo frases (shadowing)' },
            { dia: 'Quinta', atividade: '10 min de música + 20 min escrevendo sobre seu dia' },
            { dia: 'Sexta', atividade: '15 min de notícias em inglês + 15 min de gravação de áudio' },
            { dia: 'Fim de semana', atividade: 'Algo mais leve: música + séries, sem pressão' },
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-purple-50/40'}>
              <td className="px-6 py-4 font-black text-slate-900">{row.dia}</td>
              <td className="px-6 py-4 text-slate-600">{row.atividade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
      <p>
        Adapte esse plano para sua realidade. O mais importante: defina um horário fixo como se fosse um compromisso
        com você mesmo. Se falhar um dia, não desista — retome no dia seguinte, sem culpa.
      </p>

      {/* H2 — OpenLife */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-10 pb-2">
        Como a OpenLife pode te ajudar a manter o inglês vivo o ano inteiro
      </h2>
      <p>
        Praticar inglês no recesso é uma parte da jornada. Mas ter uma estrutura durante o ano faz toda diferença
        para evoluir com segurança. Na <strong className="text-slate-800">OpenLife English School</strong>, jovens
        e adultos contam com:
      </p>
      <ul className="space-y-3 pl-0">
        {[
          'Cursos imersivos com foco em comunicação real (Journey 18 meses, Teens e Keep the Fluency)',
          'Metodologia presencial ou online, pensada para encaixar na sua rotina',
          'Material interativo e uso de tecnologia para tornar o contato com o idioma constante',
          'Horários flexíveis, para que estudar inglês não seja um peso, e sim parte natural do seu dia',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#7C3AED' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p>
        Durante o recesso, nossa equipe também pode orientar o que você pode fazer para manter seu nível ou se
        preparar para subir de nível no próximo ciclo.{' '}
        <a href="/#/cursos" className="text-purple-700 font-bold hover:underline">Conheça nossos cursos</a> e{' '}
        <a href="/#/contato" className="text-purple-700 font-bold hover:underline">agende uma conversa sem compromisso</a>.
      </p>

      {/* Conclusão */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-10 pb-2">Conclusão</h2>
      <p>
        Recesso não precisa ser sinônimo de "pausa total" no seu inglês. Com práticas simples — ouvir, assistir,
        ler, escrever e falar um pouco todos os dias — você mantém o idioma vivo, chega no próximo ano mais
        preparado e transforma seu aprendizado em algo contínuo, não em altos e baixos.
      </p>
      <p>
        O segredo é encaixar o inglês no seu dia a dia, do jeito que funciona para você. Se quiser uma orientação
        mais estruturada, com plano de estudos e acompanhamento próximo, a OpenLife está pronta para caminhar ao
        seu lado nessa jornada. Transforme essas ideias em ação — faça do seu recesso um aliado do seu inglês,
        não um inimigo.
      </p>
    </div>

    {/* FAQ */}
    <div className="mt-16 space-y-4">
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">
        Perguntas frequentes sobre praticar inglês no recesso
      </h2>
      {[
        {
          q: 'Como praticar inglês nas férias sem ficar cansado?',
          a: 'Defina um tempo curto por dia, tipo 15 a 30 minutos, e misture atividades leves: podcast, música, séries, leitura e escrita. O objetivo nas férias é manter contato com o idioma, não estudar pesado. Foque em coisas que você gosta e encaixe o inglês na sua rotina normal.',
        },
        {
          q: 'É possível melhorar meu inglês mesmo só praticando no recesso?',
          a: 'Sim, se você já tem uma base e usa o recesso para aumentar o contato com o idioma, dá para melhorar vocabulário, listening e confiança. O ideal é combinar prática nas férias com um curso estruturado durante o ano, para garantir evolução contínua e correção de erros.',
        },
        {
          q: 'O que fazer se eu esquecer muita coisa depois do recesso?',
          a: 'Isso é normal. Se você praticou um pouco, vai recuperar mais rápido. No retorno às aulas, foque em revisão: relembrar vocabulário, estruturas básicas e ouvir bastante inglês. Um bom professor ou curso ajuda a reorganizar o que você já sabe e retomar o ritmo mais rápido.',
        },
        {
          q: 'Qual a melhor forma de praticar speaking sozinho nas férias?',
          a: 'Use o celular para gravar áudios sobre seu dia, repetir frases de filmes e séries, ou descrever o que está fazendo em inglês. Não se preocupe com perfeição. A meta é destravar, acostumar sua boca e mente a formar frases em inglês. Depois, você pode aperfeiçoar com um professor.',
        },
        {
          q: 'Vale a pena fazer aula experimental de inglês durante o recesso?',
          a: 'Vale muito. A aula experimental te ajuda a entender seu nível atual, ter orientação sobre o que praticar nas férias e planejar sua evolução para o próximo ano. É um jeito inteligente de usar o recesso para ajustar sua rota e começar o ano seguinte já com um plano claro.',
        },
        {
          q: 'Quantos minutos por dia eu preciso para não perder o ritmo?',
          a: 'Para manter o ritmo, 15 a 30 minutos por dia já fazem diferença, desde que seja contato real com o idioma: ouvir, ver, ler, escrever ou falar. Se conseguir mais tempo, ótimo. Se não, foque em consistência: pouco todo dia é melhor que muito só uma vez.',
        },
      ].map((item, i) => (
        <div key={i} className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-black text-slate-900 text-base list-none select-none hover:bg-purple-50/50 transition-colors">
              <span>{item.q}</span>
              <span className="ml-4 flex-shrink-0 text-purple-700 text-xl font-light group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
              {item.a}
            </div>
          </details>
        </div>
      ))}
    </div>

    {/* Artigos relacionados */}
    <div className="mt-16 pt-12 border-t border-slate-100">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Continue aprendendo</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Como aprender inglês rápido com imersão total', tag: 'Aprender Inglês' },
          { title: 'Melhores filmes e séries para aprender inglês', tag: 'Séries e Filmes' },
          { title: 'Inglês para negócios: expressões essenciais', tag: 'Business' },
        ].map((art, i) => (
          <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-purple-200 hover:shadow-sm transition-all">
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#7C3AED' }}>{art.tag}</span>
            <p className="mt-2 font-black text-slate-900 text-sm leading-snug">{art.title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ListeningContent = (
  <div>
    {/* Schema JSON-LD — Article + FAQPage */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Como Melhorar o Listening em Inglês: O Guia Completo Para Destravar Sua Compreensão Auditiva",
          "description": "Aprenda como melhorar o listening em inglês com métodos que funcionam, rotina prática e os melhores podcasts e vídeos para treinar hoje.",
          "url": "https://openlifebrasil.com.br/blog/como-melhorar-listening-ingles",
          "datePublished": "2026-07-28",
          "dateModified": "2026-07-28",
          "author": { "@type": "Organization", "name": "OpenLife English School" },
          "publisher": { "@type": "Organization", "name": "OpenLife English School", "logo": { "@type": "ImageObject", "url": "https://openlifebrasil.com.br/2.png" } },
          "image": { "@type": "ImageObject", "url": "https://openlifebrasil.com.br/og-image.jpg" }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Quanto tempo por dia preciso treinar para melhorar o listening em inglês?", "acceptedAnswer": { "@type": "Answer", "text": "Entre 10 e 20 minutos de escuta ativa e focada por dia já geram progresso real e consistente. Consistência importa mais que intensidade: pouco todos os dias supera uma maratona no fim de semana. Some momentos de escuta passiva (podcast de fundo no trânsito ou na academia) para acostumar o ouvido ao ritmo da língua." } },
            { "@type": "Question", "name": "Devo assistir séries com legenda em português para treinar o listening?", "acceptedAnswer": { "@type": "Answer", "text": "Não. Legenda em português treina sua leitura em português, não seu ouvido em inglês. O ideal é usar legenda em inglês para conectar o som à palavra escrita. Conforme evolui, reassista cenas sem legenda nenhuma para medir quanto seu ouvido já capta sozinho." } },
            { "@type": "Question", "name": "É normal não entender tudo o que ouço em inglês?", "acceptedAnswer": { "@type": "Answer", "text": "Totalmente normal, inclusive para avançados. Ninguém recupera um áudio de forma 100% completa, nem em português. O cérebro preenche lacunas pelo contexto. Foque na ideia geral primeiro; os detalhes vêm com repetição. Exigir perfeição aumenta a ansiedade e trava o aprendizado." } },
            { "@type": "Question", "name": "Quais são os melhores podcasts para aprender inglês do zero?", "acceptedAnswer": { "@type": "Answer", "text": "Para iniciantes, o BBC Learning English (com o 6 Minute English) é a melhor porta de entrada gratuita, junto com Simple English Listening e Espresso English. Todos usam linguagem controlada e episódios curtos. Conforme avança, migre para All Ears English e Thinking in English." } },
            { "@type": "Question", "name": "Consigo ficar fluente só ouvindo podcasts em inglês?", "acceptedAnswer": { "@type": "Answer", "text": "Podcast é a ferramenta mais rápida para fechar o gap de compreensão, mas sozinho não gera fluência. Ele constrói o input, não a produção. Para falar com confiança, combine escuta diária com prática de conversação e correção, de preferência com um professor que dá feedback em tempo real." } }
          ]
        }
      ]
    })}} />

    {/* Banner CTA topo */}
    <div className="rounded-3xl p-8 md:p-12 mb-14 text-white" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' }}>
      <p className="text-xl md:text-2xl font-black leading-snug mb-3">
        Cansado de depender da legenda para entender inglês?
      </p>
      <p className="text-purple-200 text-base md:text-lg font-medium mb-8 leading-relaxed">
        Treine seu ouvido com método, progressão real e feedback humano — não com sorte.
      </p>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-white text-base transition-all hover:scale-105 shadow-xl"
        style={{ background: '#F97316' }}
      >
        Quero minha aula experimental grátis →
      </a>
    </div>

    {/* Conteúdo principal */}
    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

      {/* Introdução */}
      <p>
        Você entende inglês quando lê, mas trava quando alguém fala rápido? Você não está sozinho — e o problema
        quase nunca é o seu ouvido.
      </p>
      <p>
        Saber <strong className="text-slate-800">como melhorar o listening em inglês</strong> é o passo que separa
        quem "estuda inglês" de quem realmente vive o idioma. É a habilidade que faz você entender uma reunião com
        clientes gringos, seguir uma série sem legenda e responder na hora certa numa entrevista internacional.
      </p>
      <p>
        A boa notícia: listening não é dom. É treino guiado, com estratégia. Neste guia você vai entender por que
        trava, o que os melhores métodos fazem de diferente, onde treinar de graça e como montar uma rotina que
        cabe na sua vida real. Bora destravar isso de vez.
      </p>

      {/* H2 — 1 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Por que o listening é a habilidade que destrava todas as outras
      </h2>
      <p>
        Tem uma ordem natural no aprendizado de qualquer língua, e ela começa pelo ouvido. Antes de falar, o bebê
        passa meses só escutando. Com você não é diferente.
      </p>
      <p>
        Pesquisadores da aquisição de segunda língua colocam a escuta como o precursor natural da fala. Os estágios
        iniciais de qualquer idioma dependem primeiro da escuta — é ela que abastece tudo o que vem depois.
      </p>
      <p>
        Ou seja: seu listening não é uma habilidade isolada. Ele alimenta seu speaking, sua leitura e até sua
        escrita. Quando o ouvido melhora, a fluência inteira acelera junto.
      </p>

      {/* Destaque */}
      <div className="my-4 pl-6 border-l-4 py-2 rounded-r-xl" style={{ borderColor: '#7C3AED', background: '#F5F3FF' }}>
        <p className="text-slate-700 font-bold italic">
          A verdade que ninguém te conta: falar bem inglês começa por ouvir bem. Quem pula essa etapa fala travado
          e inseguro para sempre.
        </p>
      </div>

      {/* H2 — 2 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        O erro nº 1 de quem tenta treinar listening (e como parar de cometê-lo)
      </h2>
      <p>
        Aqui está o maior sabotador silencioso: tentar entender 100% do que ouve. Você trava em uma palavra, perde
        as três seguintes e desiste achando que "não sabe inglês".
      </p>
      <p>
        A literatura pedagógica é direta: até o aluno mais avançado não consegue recapitular um áudio de forma
        completa e precisa — e isso é totalmente normal. Seu cérebro foi feito para preencher lacunas. Você faz
        isso em português o tempo todo, num áudio de WhatsApp cortado ou numa ligação com ruído.
      </p>
      <p>Para tirar a pressão do seu ombro, adote esta mentalidade a partir de hoje:</p>
      <ul className="space-y-3 pl-0">
        {[
          'Entender a ideia geral primeiro já é vitória — detalhe vem depois.',
          'Palavra desconhecida não é fracasso, é conteúdo novo entrando.',
          'Errar faz parte. Erro é o som do seu ouvido calibrando.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#7C3AED' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p>
        Quando você para de exigir perfeição, o filtro afetivo cai — e o inglês entra muito mais fácil.
      </p>

      {/* H2 — 3 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Top-down: como seu cérebro realmente processa o que ouve
      </h2>
      <p>
        Existe uma técnica que muda tudo, e ela se chama <strong className="text-slate-800">top-down</strong>. Em
        vez de tentar decodificar palavra por palavra (o famoso e ineficiente "bottom-up"), você parte do contexto
        para dentro.
      </p>
      <p>
        Funciona assim: antes de ouvir algo sobre viagens, seu cérebro já ativa tudo que você sabe sobre
        aeroportos, check-in, passaporte. Esse conhecimento prévio vira um andaime que segura a compreensão.
        Ativar o conhecimento de mundo e aplicá-lo ao novo input facilita enormemente o processamento da língua.
      </p>
      <p>
        Na prática, antes de dar play em qualquer áudio, pergunte-se: <em>sobre o que provavelmente é isso? Que
        palavras eu já esperaria ouvir?</em> Esse pré-aquecimento mental é metade da batalha vencida. Confira também{' '}
        <a href="/#/metodologia" className="text-purple-700 font-bold hover:underline">
          como o método imersivo da OpenLife trabalha essa progressão
        </a>.
      </p>
    </div>

    {/* CTA Intermediário 1 */}
    <div className="my-12 rounded-3xl p-8 md:p-10 text-white" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' }}>
      <p className="text-xl font-black mb-2">Seu ouvido precisa de treino guiado, não de sorte</p>
      <p className="text-purple-200 mb-6 leading-relaxed">
        Na OpenLife você treina listening com método, feedback humano e progressão real de nível.
      </p>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-black text-purple-700 text-base transition-all hover:scale-105 shadow-lg bg-white"
      >
        Quero treinar listening com método →
      </a>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

      {/* H2 — 4 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-4 pb-2">
        Como aproveitar ao máximo suas aulas de listening
      </h2>
      <p>
        Uma aula de listening bem feita não é "escutar e responder perguntas". É uma sequência pensada para te
        levar de ouvinte passivo a ativo. Conhecer essa estrutura faz você extrair muito mais de cada aula.
      </p>
      <p>
        O método que usamos segue <strong className="text-slate-800">cinco etapas</strong>, cada uma com um papel claro:
      </p>
    </div>

    {/* Tabela das 5 etapas */}
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: '#1A1033' }}>
            <th className="text-left px-6 py-4 font-black text-purple-200 uppercase tracking-widest w-12">#</th>
            <th className="text-left px-6 py-4 font-black text-purple-200 uppercase tracking-widest w-48">Etapa</th>
            <th className="text-left px-6 py-4 font-black text-purple-200 uppercase tracking-widest">O que acontece</th>
          </tr>
        </thead>
        <tbody>
          {[
            { n: '1', etapa: 'Warm-up', desc: 'O professor traz o tópico à tona e ativa vocabulário que você já tem.' },
            { n: '2', etapa: 'Pre-listening', desc: 'Você prepara a estrutura e as palavras-chave que vão aparecer no áudio.' },
            { n: '3', etapa: 'Compreensão oral', desc: 'O áudio roda duas vezes: 1ª para a ideia geral, 2ª para detalhes.' },
            { n: '4', etapa: 'Prática controlada', desc: 'Você aplica o que ouviu em exercícios guiados.' },
            { n: '5', etapa: 'Atividade aberta', desc: 'Você usa aquilo numa conversa real, em pares — o output fecha o ciclo.' },
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-purple-50/40'}>
              <td className="px-6 py-4 font-black text-purple-700">{row.n}</td>
              <td className="px-6 py-4 font-black text-slate-900">{row.etapa}</td>
              <td className="px-6 py-4 text-slate-600">{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
      <p>
        <strong className="text-slate-800">O segredo do áudio tocado duas vezes:</strong> na primeira, relaxe e
        capte o quê, onde, quando. Só na segunda vá atrás dos detalhes. Não tente fazer tudo de uma vez. Veja mais
        sobre{' '}
        <a href="/#/cursos" className="text-purple-700 font-bold hover:underline">
          como funciona o método imersivo da OpenLife
        </a>{' '}
        e como essa progressão é aplicada em cada módulo do curso.
      </p>

      {/* H2 — 5 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        A regra de ouro: input "levemente difícil demais"
      </h2>
      <p>
        Se você guardar uma única coisa deste guia, guarde esta. O melhor material de listening é aquele um
        pouquinho acima do seu nível atual — desafiador o suficiente para te esticar, fácil o suficiente para
        você acompanhar pelo contexto.
      </p>
      <p>
        Áudio fácil demais parece produtivo, mas não constrói nada. Áudio difícil demais só gera frustração.
        O ponto ideal — o que a ciência da aquisição chama de{' '}
        <strong className="text-slate-800">input compreensível</strong> — fica no meio: entender cerca de 70% a
        80% sem esforço extremo. Esse é o seu ponto de crescimento.
      </p>

      <div className="my-4 pl-6 border-l-4 py-2 rounded-r-xl" style={{ borderColor: '#F97316', background: '#FFF7ED' }}>
        <p className="text-slate-700 font-bold italic">
          E há um detalhe que multiplica resultado: escolha temas que você AMA. Conteúdo que te interessa mantém
          a atenção lá em cima e a ansiedade lá embaixo — e é exatamente nesse estado que o inglês gruda.
        </p>
      </div>

      {/* H2 — 6 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Onde treinar listening fora da sala de aula: os melhores podcasts
      </h2>
      <p>
        Aqui está o que você veio buscar: onde treinar de verdade, de graça, todo dia. Podcast é a ferramenta
        número um — cabe no ônibus, na academia, na louça. Escolha por nível:
      </p>
    </div>

    {/* Cards de podcasts por nível */}
    <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        {
          nivel: 'Básico — Intermediário',
          cefr: 'A2 – B1',
          color: '#7C3AED',
          podcasts: [
            { nome: 'BBC Learning English', desc: '6 Minute English: episódios curtos, tema único, linguagem controlada.' },
            { nome: 'Simple English Listening', desc: 'Histórias em inglês mais devagar, feitos para intermediários.' },
            { nome: 'Espresso English Podcast', desc: 'Lições curtas e práticas, ótimas para encaixar na rotina.' },
          ],
        },
        {
          nivel: 'Intermediário — Avançado',
          cefr: 'B1 – B2',
          color: '#5B21B6',
          podcasts: [
            { nome: 'All Ears English', desc: 'Conversa real entre americanas, foco em comunicação e conexão.' },
            { nome: 'Thinking in English', desc: 'Política, história, filosofia: você aprende em inglês, não sobre inglês.' },
            { nome: 'Leonardo English', desc: 'Temas fascinantes com transcrição interativa na velocidade certa.' },
          ],
        },
        {
          nivel: 'Avançado',
          cefr: 'C1 – C2',
          color: '#1A1033',
          podcasts: [
            { nome: "Luke's English Podcast", desc: 'Inglês britânico com humor, episódios longos e envolventes.' },
            { nome: 'The Daily (NY Times)', desc: 'Notícias em ritmo nativo, vocabulário rico, inglês do mundo real.' },
            { nome: 'Podcasts nativos', desc: 'Qualquer podcast que você ouviria em português — agora em inglês.' },
          ],
        },
      ].map((grupo, i) => (
        <div key={i} className="rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <div className="px-6 py-4 text-white" style={{ backgroundColor: grupo.color }}>
            <p className="font-black text-sm uppercase tracking-widest">{grupo.nivel}</p>
            <p className="text-white/70 text-xs font-bold mt-1">{grupo.cefr}</p>
          </div>
          <div className="p-6 space-y-4 bg-white">
            {grupo.podcasts.map((p, j) => (
              <div key={j}>
                <p className="font-black text-slate-900 text-sm">{p.nome}</p>
                <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
      <div className="my-2 pl-6 border-l-4 py-2 rounded-r-xl" style={{ borderColor: '#7C3AED', background: '#F5F3FF' }}>
        <p className="text-slate-700 font-bold">
          Regra prática: 10 a 20 minutos de escuta focada por dia rendem mais que uma maratona de 2 horas no fim de semana.
        </p>
      </div>
    </div>

    {/* CTA Intermediário 2 */}
    <div className="my-12 rounded-3xl p-8 md:p-10 text-white" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)' }}>
      <p className="text-xl font-black mb-2">Podcast sozinho não te leva à fluência</p>
      <p className="text-purple-200 mb-6 leading-relaxed">
        Junte input diário com aulas, correção e conversação de verdade. Esse é o combo que destrava o inglês.
      </p>
      <a
        href="https://form.respondi.app/5HvbxD84"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-black text-white text-base transition-all hover:scale-105 shadow-lg"
        style={{ background: '#F97316' }}
      >
        Quero começar minha jornada agora →
      </a>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

      {/* H2 — 7 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-4 pb-2">
        Vídeos, séries e YouTube: como usar do jeito certo
      </h2>
      <p>
        Vídeo tem uma vantagem enorme sobre áudio puro: você lê o rosto, os gestos e o contexto visual. Isso é
        andaime de graça para o seu ouvido. Mas tem jeito certo de usar.
      </p>
      <p>
        O recurso mais poderoso e gratuito são as{' '}
        <strong className="text-slate-800">TED Talks</strong>. Palestrantes do TED estão entre os falantes mais
        articulados do mundo, e os vídeos vêm com transcrição. Use o método dos três passos:
      </p>
      <ul className="space-y-3 pl-0">
        {[
          '1ª assistida: sem ler nada — só para captar a ideia e treinar o ouvido cru.',
          '2ª assistida: lendo a transcrição — agora você conecta som e palavra.',
          '3ª assistida: sem ler — e sinta quanto a mais você entende.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#7C3AED' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p>
        Para tirar proveito real das suas séries favoritas, siga esta ordem: comece com legenda em inglês (nunca
        em português — isso só treina leitura). Reassista cenas que você amou sem legenda. E repita em voz alta
        uma fala que gostou — isso se chama <strong className="text-slate-800">shadowing</strong> e turbina
        pronúncia e ouvido juntos.
      </p>
      <p>
        Confira nossa lista de{' '}
        <a href="/#/blog" className="text-purple-700 font-bold hover:underline">
          melhores séries para aprender inglês por nível
        </a>{' '}
        e o guia completo no blog. Para materiais extras com áudio autêntico e exercícios estruturados, o{' '}
        <a
          href="https://learnenglish.britishcouncil.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 font-bold hover:underline"
        >
          British Council LearnEnglish
        </a>{' '}
        é referência global gratuita.
      </p>

      {/* H2 — 8 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Sua rotina de listening: o que realmente funciona no dia a dia
      </h2>
      <p>
        Consistência ganha de intensidade, sempre. Vinte minutos por dia constroem mais ouvido do que quatro horas
        num domingo isolado, porque o cérebro precisa de exposição espaçada para fixar padrões de som.
      </p>
      <p>
        Existe uma diferença que muda tudo: <strong className="text-slate-800">escuta ativa versus escuta passiva</strong>.
        As duas têm valor, mas fazem coisas diferentes:
      </p>
    </div>

    {/* Comparativo ativa vs passiva */}
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        {
          tipo: 'Escuta ativa',
          tempo: '10–15 min/dia',
          cor: '#7C3AED',
          bg: '#F5F3FF',
          desc: 'Fones, atenção total, talvez com transcrição. É aqui que você cresce de nível — foco, intenção e análise.',
        },
        {
          tipo: 'Escuta passiva',
          tempo: 'o resto do dia',
          cor: '#1A1033',
          bg: '#F8F7FF',
          desc: 'Podcast de fundo na academia, no trânsito, cozinhando. Mantém o ouvido ligado e acostuma o cérebro à melodia da língua.',
        },
      ].map((item, i) => (
        <div key={i} className="rounded-3xl border p-6" style={{ borderColor: item.cor, background: item.bg }}>
          <p className="font-black text-lg mb-1" style={{ color: item.cor }}>{item.tipo}</p>
          <p className="text-xs font-black uppercase tracking-widest mb-3 text-slate-400">{item.tempo}</p>
          <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
      <p>
        <strong className="text-slate-800">Dica de ouro para profissionais ocupados:</strong> troque um hábito que
        já existe. Aquele tempo de scroll no Instagram vira um episódio de podcast. O trajeto de carro vira imersão.
        Você não precisa de mais tempo — precisa realocar o que já tem.
      </p>
      <p>
        E marque seu progresso: a cada duas semanas, reouça um áudio que era difícil no começo. Ver o quanto ficou
        mais fácil é o combustível que te mantém no jogo.
      </p>

      {/* H2 — 9 */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">
        Os erros que travam seu progresso (e que quase todo mundo comete)
      </h2>
      <p>
        Alguns hábitos parecem inofensivos, mas sabotam seu listening por meses. Reconheça cada um — e substitua
        agora:
      </p>
    </div>

    {/* Tabela de erros */}
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: '#1A1033' }}>
            <th className="text-left px-6 py-4 font-black text-red-300 uppercase tracking-widest">❌ O que você faz</th>
            <th className="text-left px-6 py-4 font-black text-green-300 uppercase tracking-widest">✅ O que fazer em vez disso</th>
          </tr>
        </thead>
        <tbody>
          {[
            { erro: 'Traduzir palavra por palavra enquanto ouve', certo: 'Deixe o sentido geral fluir — contexto primeiro, tradução nunca.' },
            { erro: 'Usar legenda em português', certo: 'Troque para legenda em inglês ou nenhuma — treine o ouvido, não a leitura.' },
            { erro: 'Escutar só material fácil demais', certo: 'Suba a régua: escolha áudio em que você entende ~70% sem esforço extremo.' },
            { erro: 'Parar no primeiro "não entendi"', certo: 'Continue — seu cérebro vai preencher as lacunas pelo contexto.' },
            { erro: 'Estudar sem feedback de ninguém', certo: 'Combine podcast com aulas: só um professor corrige você em tempo real.' },
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="px-6 py-4 text-slate-600">{row.erro}</td>
              <td className="px-6 py-4 text-slate-700 font-medium">{row.certo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
      <p>
        Esse último ponto é o divisor de águas. Apps e podcasts constroem compreensão, mas não te corrigem em
        tempo real nem te empurram para a produção — e é a produção que fecha o ciclo da fluência.
      </p>

      {/* Conclusão */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 pt-8 pb-2">Conclusão</h2>
      <p>
        Melhorar o listening não é questão de talento nem de "ter facilidade com idiomas". É seguir a ordem natural
        da língua: ouvir primeiro, com estratégia, sem exigir perfeição e com input um pouco acima do seu nível.
      </p>
      <p>
        Você agora tem o mapa completo — o erro a evitar, a técnica top-down, a estrutura das aulas, a regra do
        input ideal, os melhores podcasts por nível e a rotina que cabe na sua vida real. Só falta um detalhe:
        ferramenta gratuita constrói metade do caminho. A outra metade — correção, conversação e progressão
        garantida — vem de um método com gente de verdade do seu lado. E é exatamente isso que a OpenLife entrega.
      </p>
    </div>

    {/* FAQ */}
    <div className="mt-16 space-y-4">
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">
        Perguntas frequentes sobre como melhorar o listening em inglês
      </h2>
      {[
        {
          q: 'Quanto tempo por dia preciso treinar para melhorar o listening em inglês?',
          a: 'Entre 10 e 20 minutos de escuta ativa e focada por dia já geram progresso real e consistente. Consistência importa muito mais que intensidade: pouco todos os dias supera uma maratona no fim de semana. Some a isso momentos de escuta passiva (podcast de fundo no trânsito ou na academia) para acostumar o ouvido ao ritmo da língua.',
        },
        {
          q: 'Devo assistir séries com legenda em português para treinar o listening?',
          a: 'Não. Legenda em português treina sua leitura em português, não seu ouvido em inglês. O ideal é usar legenda em inglês — assim você conecta o som à palavra escrita. Conforme evolui, reassista cenas sem legenda nenhuma para medir quanto seu ouvido já capta sozinho.',
        },
        {
          q: 'É normal não entender tudo o que ouço em inglês?',
          a: 'Totalmente normal, inclusive para quem já é avançado. Ninguém recupera um áudio de forma 100% completa, nem em português. Seu cérebro foi feito para preencher lacunas pelo contexto. Foque na ideia geral primeiro; os detalhes vêm com repetição e prática. Exigir perfeição só aumenta a ansiedade e trava o aprendizado.',
        },
        {
          q: 'Quais são os melhores podcasts para aprender inglês do zero?',
          a: 'Para quem está começando, o BBC Learning English (com o 6 Minute English) é a melhor porta de entrada gratuita, junto com Simple English Listening e Espresso English. Todos usam linguagem controlada e episódios curtos. Conforme avança, migre para All Ears English e Thinking in English.',
        },
        {
          q: 'Consigo ficar fluente só ouvindo podcasts em inglês?',
          a: 'Podcast é a ferramenta mais rápida para fechar o gap de compreensão, mas sozinho não gera fluência. Ele constrói o input, não a produção. Para falar com confiança você precisa combinar escuta diária com prática de conversação e correção — de preferência com um professor que te dá feedback em tempo real.',
        },
      ].map((item, i) => (
        <div key={i} className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-black text-slate-900 text-base list-none select-none hover:bg-purple-50/50 transition-colors">
              <span>{item.q}</span>
              <span className="ml-4 flex-shrink-0 text-purple-700 text-xl font-light group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
              {item.a}
            </div>
          </details>
        </div>
      ))}
    </div>

    {/* Artigos relacionados */}
    <div className="mt-16 pt-12 border-t border-slate-100">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Continue aprendendo</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Como destravar o speaking e parar de ter medo de falar', tag: 'Fluência', desc: 'Guia prático para vencer o bloqueio e ganhar confiança em inglês de verdade.' },
          { title: 'Melhores séries para aprender inglês por nível', tag: 'Séries e Filmes', desc: 'Lista com método para treinar listening e vocabulário assistindo o que você ama.' },
          { title: 'Inglês para negócios: expressões essenciais para reuniões', tag: 'Business', desc: 'O inglês que abre portas em multinacionais — e como se preparar para ele.' },
        ].map((art, i) => (
          <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-purple-200 hover:shadow-sm transition-all">
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#7C3AED' }}>{art.tag}</span>
            <p className="mt-2 font-black text-slate-900 text-sm leading-snug mb-2">{art.title}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{art.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const MOCK_POSTS: Post[] = [
  // LISTENING — Post rico (mais recente)
  {
    id: 'listening-guia-completo-2026',
    title: 'Como Melhorar o Listening em Inglês: O Guia Completo Para Destravar Sua Compreensão Auditiva',
    excerpt: 'Aprenda como melhorar o listening em inglês com métodos que funcionam, rotina prática e os melhores podcasts e vídeos para treinar hoje.',
    content: '',
    contentNode: ListeningContent,
    category: 'Aprender Inglês',
    tags: ['Aprender Inglês', 'Listening', 'Dicas', 'Podcasts', 'Fluência'],
    date: '28/07/2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    slug: 'como-melhorar-listening-ingles',
  },
  // RECESSO ESCOLAR — Post rico
  {
    id: 'recesso-ingles-2026',
    title: 'Praticar inglês no recesso: 7 formas simples de não perder o ritmo',
    excerpt: 'Praticar inglês no recesso é fácil: veja 7 ideias simples, diárias e divertidas para manter o ritmo e evoluir sem pressão.',
    content: '',
    contentNode: RecessoContent,
    category: 'Aprender Inglês',
    tags: ['Aprender Inglês', 'Dicas', 'Férias', 'Speaking', 'Listening'],
    date: '09/07/2026',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1200',
    slug: 'praticar-ingles-no-recesso',
  },
  // SÉRIES E FILMES — Post rico
  {
    id: 'movies-series-guide-1',
    title: 'Melhores filmes e séries para aprender inglês (por nível, plataforma e faixa etária)',
    excerpt: 'Descubra os melhores filmes e séries para aprender inglês por nível, plataforma e faixa etária. Guia completo com método para realmente evoluir.',
    content: '',
    contentNode: FilmesSeriesContent,
    category: 'Séries e Filmes',
    tags: ['Séries e Filmes', 'Aprender Inglês', 'Dicas', 'Kids', 'Teens', 'Fluência'],
    date: '26/06/2026',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200',
    slug: 'filmes-series-para-aprender-ingles',
  },
  // APRENDER INGLÊS
  {
    id: 'learn-1',
    title: 'Como aprender inglês rápido com imersão total: o segredo da fluência em 18 meses',
    excerpt: 'Você já tentou aprender inglês por anos e ainda sente que não consegue se comunicar com naturalidade? A resposta pode estar na imersão total. Neste artigo, você vai entender como essa abordagem acelera o aprendizado, ativa áreas específicas do cérebro e permite alcançar fluência real em até 18 meses — mesmo começando do zero.',
    content: `Por que aprender inglês rápido parece impossível para tanta gente?\n\nSe você já passou por cursos tradicionais, provavelmente conhece essa sensação: “Estudo há anos, mas na hora de falar… travo.” Isso acontece porque a maioria dos métodos foca apenas em gramática e tradução, deixando de lado o que realmente importa: a exposição real e constante ao idioma. A imersão total muda esse jogo.\n\nO que é imersão total em inglês?\n\nImersão total é uma abordagem em que o aluno vive o inglês em vez de apenas estudá-lo. Significa estar em contato com o idioma de forma contínua, natural e contextualizada — como uma criança aprende a falar. Na OpenLife, por exemplo, a imersão acontece em todos os momentos da aula, seja online ou presencial. O aluno escuta inglês desde o primeiro minuto, fala em situações reais simuladas, aprende vocabulário dentro de contextos úteis e recebe feedback imediato. Não é sobre decorar regras. É sobre viver o idioma.\n\nComo a imersão acelera o cérebro?\n\nEstudos em neurociência mostram que o cérebro aprende línguas mais rápido quando está imerso em contextos reais. Isso ativa áreas responsáveis por reconhecimento de padrões (gramática intuitiva), memória de longo prazo (vocabulário duradouro) e produção oral espontânea (fluência real). Além disso, a imersão reduz o chamado filtro afetivo — aquela ansiedade que bloqueia a fala. Quando o aluno se sente seguro, motivado e engajado, o cérebro aprende mais e melhor.\n\nFluência em 18 meses: é possível mesmo?\n\nSim — desde que o método seja o certo. Na OpenLife, a fluência em até 18 meses é alcançada com uma combinação de: Aulas 100% em inglês (cria hábito de pensar no idioma), Método híbrido (flexibilidade + contato frequente), Plataforma digital imersiva (prática diária), Professores treinados em ESL (foco em comunicação real) e Situações simuladas para o mundo real.\n\nExemplo real:\n\nImagine que você está aprendendo como pedir comida em um restaurante. No método tradicional, você decoraria frases. Na imersão, você vive a situação: “Waiter: What would you like to order? / You: I’d like a cheeseburger and a lemonade, please.” Você aprende a responder de forma natural, sem traduzir mentalmente.\n\nComo aplicar a imersão no seu dia a dia?\n\n1. Mude o idioma do seu celular e apps: Isso força seu cérebro a reconhecer palavras no contexto.\n2. Assista a séries com áudio e legenda em inglês: Comece com algo que você já conhece (Ex: Friends, Brooklyn 99).\n3. Use comandos em inglês no dia a dia: “I’m going to the gym.”\n4. Converse com você mesmo em inglês: Narre o que está fazendo: “I’m making coffee.”\n5. Pratique com alguém que te corrija com empatia: Na OpenLife, os professores corrigem sem interromper a fluência, criando um ambiente seguro para aprender.\n\nFAQ – Perguntas frequentes sobre imersão total\n\n1. Imersão funciona para iniciantes? Sim! O método é adaptado para cada nível. Mesmo quem começa do zero acompanha pelo contexto e repetição natural.\n2. Preciso morar fora? Não. Com o método ESL e plataforma imersiva, você vive o inglês sem sair do país.\n3. Quantas horas são necessárias? Com 3 a 5 horas semanais + prática diária, é possível atingir fluência funcional em 18 meses.\n4. E se eu travar? Isso é normal no início. O segredo está em praticar em um ambiente seguro e com incentivo constante.\n\nConclusão: aprender inglês rápido é possível se você mudar a forma de aprender.\n\nA fluência não vem de decorar listas ou fazer provas de gramática. Ela vem de viver o inglês todos os dias, com naturalidade, propósito e apoio. A imersão total é o caminho mais rápido e eficaz para quem quer falar inglês de verdade. Se você quer descobrir seu nível atual e receber um plano de estudo personalizado, agende um nivelamento gratuito com a OpenLife.`,
    category: 'Aprender Inglês',
    tags: ['Aprender Inglês', 'Fluência', 'Imersão'],
    date: '20/05/2024',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
    slug: 'como-aprender-ingles-rapido-com-imersao-total'
  },
  {
    id: 'learn-2',
    title: 'Por que traduzir mentalmente atrasa seu inglês (e como evitar isso)',
    excerpt: 'A tradução mental é o maior inimigo da fluência. Entenda por que seu cérebro trava e como destravar com o método ESL.',
    content: 'Quando você traduz, seu cérebro faz o dobro do trabalho. Na OpenLife, ensinamos você a associar a imagem diretamente à palavra em inglês. É o que chamamos de pensamento direto. Isso reduz o tempo de resposta e cria uma conversação fluida e natural.',
    category: 'Aprender Inglês',
    tags: ['Aprender Inglês', 'Metodologia'],
    date: '18/05/2024',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
    slug: 'por-que-traduzir-mentalmente-atrasa-ingles'
  },
  // BUSINESS
  {
    id: 'biz-1',
    title: 'Inglês para negócios: expressões essenciais para reuniões e e-mails',
    excerpt: 'Melhore seu vocabulário corporativo com termos reais usados em multinacionais e ambientes de alta performance.',
    content: 'No mundo dos negócios, a precisão é tudo. Termos como "ASAP", "Bottom line" e "Feedback loop" são comuns. Nosso curso Business English foca nessas situações reais, preparando você para liderar reuniões e negociar com segurança internacional.',
    category: 'Business',
    tags: ['Business', 'Carreira'],
    date: '15/05/2024',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    slug: 'ingles-para-negocios-expressoes-essenciais'
  },
  {
    id: 'biz-2',
    title: 'Como o inglês pode acelerar sua carreira profissional',
    excerpt: 'Profissionais bilíngues ganham até 60% mais. Veja como o domínio do inglês abre portas para promoções e vagas globais.',
    content: 'O mercado global não espera. Dominar o inglês não é mais um "plus", é o requisito mínimo para quem busca liberdade geográfica e salários competitivos. Com a fluência em 18 meses da OpenLife, você antecipa seus planos de carreira em anos.',
    category: 'Business',
    tags: ['Business', 'Sucesso'],
    date: '12/05/2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    slug: 'como-ingles-acelera-carreira-profissional'
  },
  // GAMES
  {
    id: 'game-1',
    title: '5 jogos que ajudam você a aprender inglês de forma divertida',
    excerpt: 'Aprender jogando é uma das formas mais eficientes de fixar vocabulário. Confira nossa lista de games ideais.',
    content: 'Games como The Sims, RPGs e até MOBAs online são laboratórios de imersão. Na OpenLife, usamos a gamificação para tornar o aprendizado viciante e eficaz, transformando o esforço de estudar em puro entretenimento.',
    category: 'Games',
    tags: ['Games', 'Dicas'],
    date: '10/05/2024',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
    slug: '5-jogos-aprender-ingles-divertido'
  },
  // TRIP
  {
    id: 'trip-1',
    title: 'Inglês para viagens: frases essenciais para não passar perrengue',
    excerpt: 'Vai viajar? Prepare-se com as frases mais importantes para aeroportos, hotéis e restaurantes.',
    content: 'Nada estraga mais uma viagem do que não conseguir pedir um prato ou entender uma instrução de voo. Nosso workshop de inglês para viagens foca no "Survival English", garantindo que sua única preocupação seja aproveitar o destino.',
    category: 'Trip',
    tags: ['Trip', 'Dicas'],
    date: '08/05/2024',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200',
    slug: 'ingles-para-viagens-frases-essenciais'
  },
  // SÉRIES E FILMES
  {
    id: 'movie-1',
    title: 'As melhores séries para aprender inglês com legendas (e depois sem!)',
    excerpt: 'Confira nosso guia de séries divididas por nível de dificuldade para treinar seu ouvido.',
    content: 'Series como Friends (iniciante) e The Crown (avançado) são ótimas para entender sotaques e gírias. O segredo é começar com legenda em inglês e, aos poucos, removê-la completamente para atingir a fluência auditiva total.',
    category: 'Séries e Filmes',
    tags: ['Séries e Filmes', 'Cultura'],
    date: '05/05/2024',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200',
    slug: 'melhores-series-aprender-ingles'
  },
  // INTERCÂMBIO
  {
    id: 'exchange-1',
    title: 'Como o inglês da OpenLife prepara você para o intercâmbio dos sonhos',
    excerpt: 'Não basta ir, é preciso estar preparado. Veja como nossa metodologia simula a vida no exterior antes mesmo de você embarcar.',
    content: 'Muitos alunos chegam ao intercâmbio e travam. Nosso método ESL cria um ambiente imersivo na própria escola, para que quando você chegar em Londres ou Nova York, se sinta em casa e aproveite cada segundo da experiência.',
    category: 'Intercâmbio',
    tags: ['Intercâmbio', 'Trip'],
    date: '01/05/2024',
    image: 'https://images.unsplash.com/photo-1523050335456-cda8a3a79eb1?auto=format&fit=crop&q=80&w=1200',
    slug: 'preparacao-intercambio-sonhos'
  }
];

export const LEVEL_QUESTIONS: LevelQuestion[] = [
  {
    id: 1,
    question: "Qual frase está gramaticalmente correta?",
    options: ["She go to school", "She goes to school", "She going to school", "She is go to school"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Complete: If I ____ you, I would study harder.",
    options: ["am", "was", "were", "be"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Qual o significado de 'I am looking forward to meeting you'?",
    options: ["Estou te procurando", "Estou ansioso para te encontrar", "Estou olhando para você", "Eu te encontrei atrás"],
    correctAnswer: 1
  }
];
