import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Pages — existentes
import Home from './pages/Home';
import CoursesPage from './pages/Courses';
import Methodology from './pages/Methodology';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Franchise from './pages/Franchise';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Reels from './pages/Reels';
import OpenStore from './pages/OpenStore';

// Pages — novas (SEO nacional)
import InglesOnline from './pages/InglesOnline';
import InglesAdultos from './pages/InglesAdultos';
import InglesCriancas from './pages/InglesCriancas';
import InglesAdolescentes from './pages/InglesAdolescentes';
import InglesNegocios from './pages/InglesNegocios';

// SEO metadata por rota — atualizado dinamicamente no cliente
const SEO_META: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Curso de Inglês Online | Fluência em 18 Meses com Método ESL | OpenLife',
    description: 'Aprenda inglês com método ESL imersivo da OpenLife. Fluência em 18 meses. Para adultos, jovens e executivos. Online e presencial em todo o Brasil.',
    canonical: 'https://openlifebrasil.com.br/',
  },
  '/cursos': {
    title: 'Cursos de Inglês | Kids, Teens, Journey e Business | OpenLife',
    description: 'Escolha o curso de inglês ideal: Kids (6-9 anos), Teens (10-17 anos), Journey para adultos e Business para executivos. Método ESL imersivo.',
    canonical: 'https://openlifebrasil.com.br/#/cursos',
  },
  '/ingles-online': {
    title: 'Inglês Online | Aulas ao Vivo com Professores Certificados | OpenLife',
    description: 'Curso de inglês online com aulas ao vivo, professores certificados e método ESL imersivo. Aprenda de qualquer lugar do Brasil. Fluência em 18 meses.',
    canonical: 'https://openlifebrasil.com.br/#/ingles-online',
  },
  '/ingles-para-adultos': {
    title: 'Inglês para Adultos | Curso Intensivo do Zero ao Fluente | OpenLife',
    description: 'Curso de inglês para adultos e profissionais. Método ESL imersivo, horários flexíveis, do zero ao C1 em 18 meses. Presencial ou online em todo o Brasil.',
    canonical: 'https://openlifebrasil.com.br/#/ingles-para-adultos',
  },
  '/ingles-para-criancas': {
    title: 'Inglês para Crianças | Bilinguismo desde os 6 Anos | OpenLife Kids',
    description: 'Curso de inglês para crianças de 6 a 9 anos com método imersivo OpenLife Kids. Bilinguismo precoce, gamificação e professores especializados.',
    canonical: 'https://openlifebrasil.com.br/#/ingles-para-criancas',
  },
  '/ingles-para-adolescentes': {
    title: 'Inglês para Adolescentes | Fluência antes dos 18 | OpenLife Teens',
    description: 'Curso de inglês para adolescentes de 13 a 17 anos. Preparação para vestibular, SAT, intercâmbio e faculdade internacional. Método ESL OpenLife.',
    canonical: 'https://openlifebrasil.com.br/#/ingles-para-adolescentes',
  },
  '/ingles-para-negocios': {
    title: 'Inglês para Negócios | Business English para Executivos | OpenLife',
    description: 'Inglês para executivos e profissionais de negócios. Reuniões em inglês, negociações internacionais, LinkedIn global. Curso intensivo OpenLife Business.',
    canonical: 'https://openlifebrasil.com.br/#/ingles-para-negocios',
  },
  '/metodologia': {
    title: 'Metodologia ESL | Como Aprender Inglês em 18 Meses | OpenLife',
    description: 'Conheça o método ESL imersivo da OpenLife que já formou 66 mil alunos fluentes em 18 meses. 5 módulos progressivos, 500 horas de imersão, CEFR C1.',
    canonical: 'https://openlifebrasil.com.br/#/metodologia',
  },
  '/sobre': {
    title: 'Sobre a OpenLife | 21 Anos Formando Fluentes em Inglês no Brasil',
    description: 'A OpenLife é uma escola de inglês com mais de 21 anos de história, 66 mil alunos formados e metodologia ESL pioneira no Brasil. Conheça nossa história.',
    canonical: 'https://openlifebrasil.com.br/#/sobre',
  },
  '/blog': {
    title: 'Blog de Inglês | Dicas, Cultura e Carreira Internacional | OpenLife',
    description: 'Blog com dicas de inglês, estratégias para IELTS/TOEFL, cultura internacional, intercâmbio e carreira global. Conteúdo gratuito da OpenLife.',
    canonical: 'https://openlifebrasil.com.br/#/blog',
  },
  '/contato': {
    title: 'Contato | Agende sua Aula Experimental Grátis | OpenLife',
    description: 'Entre em contato com a OpenLife para agendar sua aula experimental gratuita. Atendimento online ou na sua cidade. Fale conosco agora pelo WhatsApp.',
    canonical: 'https://openlifebrasil.com.br/#/contato',
  },
  '/franquia': {
    title: 'Franquia de Escola de Inglês | Seja um Franqueado OpenLife',
    description: 'Seja um franqueado da OpenLife. Negócio lucrativo com suporte completo, metodologia validada e uma das marcas mais reconhecidas no ensino de inglês no Brasil.',
    canonical: 'https://openlifebrasil.com.br/#/franquia',
  },
};

const SEOUpdater: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = SEO_META[location.pathname] ?? SEO_META['/'];

    document.title = meta.title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', meta.canonical);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = meta.canonical;
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <SEOUpdater />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/metodologia" element={<Methodology />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/franquia" element={<Franchise />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/openstore" element={<OpenStore />} />
            {/* Novas páginas SEO — alcance nacional */}
            <Route path="/ingles-online" element={<InglesOnline />} />
            <Route path="/ingles-para-adultos" element={<InglesAdultos />} />
            <Route path="/ingles-para-criancas" element={<InglesCriancas />} />
            <Route path="/ingles-para-adolescentes" element={<InglesAdolescentes />} />
            <Route path="/ingles-para-negocios" element={<InglesNegocios />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
