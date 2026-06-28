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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2.5 shrink-0">
          <img
            src="/2.png"
            alt="OpenLife English School"
            className="w-10 h-10 object-contain"
          />
          <div className="leading-tight">
            <span className="block text-base font-black text-purple-brand tracking-tight">OpenLife</span>
            <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase">English School</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-purple-brand bg-purple-50'
                  : 'text-slate-500 hover:text-purple-brand hover:bg-slate-50'
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
            className="flex items-center space-x-1 text-xs font-medium text-slate-400 hover:text-purple-brand transition-colors"
          >
            <span>Plataforma</span>
            <ExternalLink size={12} />
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-brand text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-purple-900 transition-all shadow-sm hover:shadow-purple-brand/20"
          >
            Agendar Aula Grátis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
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
