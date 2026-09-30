import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react';
import { openSmartForm } from './SmartForm';

// Rotas cujo topo da página é roxo/escuro (hero colorido) — enquanto o
// header estiver transparente sobre elas, a logomarca precisa ser a
// versão branca para manter contraste. Nas demais (fundo branco), usa
// a versão colorida normal.
const DARK_HERO_PATHS = new Set([
  '/keep-the-fluency',
  '/ingles-online',
  '/ingles-para-adultos',
  '/ingles-para-adolescentes',
  '/ingles-para-negocios',
  '/ingles-para-criancas',
  '/metodologia',
  '/sobre',
  '/franquia',
  '/blog',
  '/openstore',
  '/reels',
]);

const CURSOS_DROPDOWN = [
  { name: 'Inglês para Adultos', path: '/ingles-para-adultos', tag: 'Journey 18 Meses' },
  { name: 'Keep the Fluency', path: '/keep-the-fluency', tag: 'B2 → C2' },
  { name: 'Inglês para Negócios', path: '/ingles-para-negocios', tag: 'Executivos' },
  { name: 'Inglês Online', path: '/ingles-online', tag: 'Ao vivo' },
  { name: 'Inglês para Adolescentes', path: '/ingles-para-adolescentes', tag: 'Teens' },
  { name: 'Inglês para Crianças', path: '/ingles-para-criancas', tag: 'Kids' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const cursosRef = useRef<HTMLDivElement>(null);

  const isDarkHero = DARK_HERO_PATHS.has(location.pathname) || location.pathname.startsWith('/curso-de-ingles-');
  const useWhiteLogo = isDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setCursosOpen(false); }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (cursosRef.current && !cursosRef.current.contains(e.target as Node)) {
        setCursosOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Metodologia', path: '/metodologia' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo — branca sobre hero roxo/escuro, colorida sobre fundo branco */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={useWhiteLogo ? '/logomarca-branca.png' : '/logomarca-nobg.png'}
            alt="OpenLife English School"
            className="w-24 h-24 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-purple-brand ${isActive('/') ? 'text-purple-brand' : scrolled ? 'text-slate-600' : isDarkHero ? 'text-white/90' : 'text-slate-600'}`}>
            Home
          </Link>

          {/* Cursos dropdown */}
          <div ref={cursosRef} className="relative">
            <button
              onClick={() => setCursosOpen(!cursosOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-purple-brand ${
                location.pathname.startsWith('/ingles') || location.pathname === '/cursos' || location.pathname === '/keep-the-fluency'
                  ? 'text-purple-brand'
                  : scrolled ? 'text-slate-600' : isDarkHero ? 'text-white/90' : 'text-slate-600'
              }`}
            >
              Cursos
              <ChevronDown size={14} className={`transition-transform ${cursosOpen ? 'rotate-180' : ''}`} />
            </button>
            {cursosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                <div className="p-2">
                  {CURSOS_DROPDOWN.map((c) => (
                    <Link
                      key={c.path}
                      to={c.path}
                      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-violet-50 transition-colors group"
                    >
                      <span className={`text-sm font-medium group-hover:text-purple-brand ${isActive(c.path) ? 'text-purple-brand' : 'text-slate-700'}`}>{c.name}</span>
                      <span className="text-[10px] font-bold text-purple-brand bg-violet-50 group-hover:bg-white px-2 py-0.5 rounded-full border border-violet-200 transition-colors">{c.tag}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link to="/cursos" className="flex items-center px-4 py-3 text-xs font-semibold text-purple-brand hover:bg-violet-50 rounded-xl transition-colors">
                      Ver todos os programas →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-purple-brand ${isActive(link.path) ? 'text-purple-brand' : scrolled ? 'text-slate-600' : isDarkHero ? 'text-white/90' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://erp.openlifebrasil.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold flex items-center transition-colors ${scrolled || !isDarkHero ? 'text-slate-400 hover:text-slate-600' : 'text-white/60 hover:text-white'}`}
          >
            Plataforma <ExternalLink size={12} className="ml-1" />
          </a>
          <button
            onClick={() => openSmartForm()}
            className="bg-purple-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-brand/20"
          >
            Agendar Aula Grátis
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" className={`block px-3 py-3.5 text-base font-medium rounded-lg ${isActive('/') ? 'text-purple-brand bg-violet-50' : 'text-slate-700 hover:bg-gray-50'}`}>Home</Link>

            {/* Cursos mobile group */}
            <div className="px-3 pt-3 pb-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Cursos</p>
              {CURSOS_DROPDOWN.map((c) => (
                <Link key={c.path} to={c.path}
                  className={`flex items-center justify-between py-3 text-sm font-medium border-b border-gray-50 last:border-0 ${isActive(c.path) ? 'text-purple-brand' : 'text-slate-700'}`}
                >
                  {c.name}
                  <span className="text-[10px] font-bold text-purple-brand bg-violet-50 px-2 py-0.5 rounded-full">{c.tag}</span>
                </Link>
              ))}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3.5 text-base font-medium rounded-lg ${isActive(link.path) ? 'text-purple-brand bg-violet-50' : 'text-slate-700 hover:bg-gray-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a
                href="https://erp.openlifebrasil.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 font-medium text-slate-600"
              >
                Acesso à Plataforma
              </a>
              <button
                onClick={() => openSmartForm()}
                className="bg-purple-brand text-white text-center py-4 rounded-xl font-bold w-full hover:bg-purple-700 transition-colors"
              >
                Agendar Aula Grátis
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
