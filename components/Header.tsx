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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 shrink-0">
          <img src="/logomarca-nobg.png" alt="OpenLife English School" className="w-16 h-16 object-contain" />
          <span className="text-xl font-bold tracking-tight text-purple-brand font-heading">OpenLife</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-orange-brand ${isActive(link.path) ? 'text-orange-brand' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://openlifebrasil.classbuild.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-400 hover:text-slate-600 flex items-center"
          >
            Acesso à Plataforma <ExternalLink size={12} className="ml-1" />
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-brand/20"
          >
            Agendar Aula Grátis
          </a>
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
                className={`block px-3 py-4 text-base font-medium rounded-lg ${isActive(link.path) ? 'text-orange-brand bg-orange-50' : 'text-slate-700 hover:bg-gray-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a
                href="https://openlifebrasil.classbuild.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 font-medium text-slate-600"
              >
                Acesso à Plataforma
              </a>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-brand text-white text-center py-4 rounded-xl font-bold"
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
