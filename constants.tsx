
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

export const MOCK_POSTS: Post[] = [
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
