import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
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

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isDarkHero = DARK_HERO_PATHS.has(location.pathname) || location.pathname.startsWith('/curso-de-ingles-');
  const useWhiteLogo = isDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cursos', path: '/cursos' },
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
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-purple-brand ${isActive(link.path) ? 'text-purple-brand' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://erp.openlifebrasil.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-400 hover:text-slate-600 flex items-center"
          >
            Acesso à Plataforma <ExternalLink size={12} className="ml-1" />
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
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-4 text-base font-medium rounded-lg ${isActive(link.path) ? 'text-purple-brand bg-violet-50' : 'text-slate-700 hover:bg-gray-50'}`}
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
