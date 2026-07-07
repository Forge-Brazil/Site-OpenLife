import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  // Header é transparente apenas na hero da Home (topo, sem scroll)
  const isHomeHero = location.pathname === '/' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomeHero
          ? 'bg-transparent py-5'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logomarca-nobg.png"
            alt="OpenLife English School"
            className="w-20 h-20 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isHomeHero
                  ? isActive(link.path) ? 'text-white bg-white/15' : 'text-white/80 hover:text-white hover:bg-white/10'
                  : isActive(link.path) ? 'text-purple-brand bg-purple-50' : 'text-slate-500 hover:text-purple-brand hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://openlifebrasil.classbuild.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-1 text-xs font-medium transition-colors ${isHomeHero ? 'text-white/70 hover:text-white' : 'text-slate-400 hover:text-purple-brand'}`}
          >
            <span>Plataforma</span>
            <ExternalLink size={12} />
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-brand text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-500 transition-all shadow-sm"
          >
            Agendar Aula Grátis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${isHomeHero ? 'text-white hover:bg-white/10' : 'text-slate-500 hover:bg-slate-100'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg animate-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-purple-brand bg-purple-50'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-purple-brand'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="https://openlifebrasil.classbuild.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 py-3 text-sm font-medium text-slate-400"
              >
                <span>Acesso à Plataforma</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-purple-brand text-white text-center py-3.5 rounded-xl text-sm font-semibold hover:bg-purple-900 transition-all"
              >
                Agendar Aula Grátis
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
