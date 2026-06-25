import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-brand text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/2.png"
                alt="OpenLife Logo" 
                className="w-14 h-14 object-contain" 
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold">OpenLife</span>
            </Link>
            <p className="text-purple-100 text-sm leading-relaxed">
              Transformando vidas através da fluência no inglês há mais de 21 anos. Metodologia ESL pioneira com resultados em 18 meses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/openlifebrasil/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-orange-brand transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange-brand transition-colors"><Youtube size={18} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange-brand transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-purple-100 text-sm">
              <li><Link to="/cursos" className="hover:text-white transition-colors">Cursos Disponíveis</Link></li>
              <li><Link to="/metodologia" className="hover:text-white transition-colors">Metodologia ESL</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Nossa História</Link></li>
              <li><Link to="/franquia" className="hover:text-white transition-colors font-bold text-orange-brand">Seja um Franqueado</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Dicas</Link></li>
              <li><a href="https://openlifebrasil.classbuild.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">Acesso a Plataforma <ExternalLink size={12} className="ml-1" /></a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-purple-100 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-orange-brand shrink-0" />
                <a href="https://wa.me/5553999656216" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 (53) 99965-6216</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-orange-brand shrink-0" />
                <a href="mailto:contato@openlifebrasil.com" className="hover:text-white transition-colors">contato@openlifebrasil.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-brand shrink-0" />
                <a href="https://share.google/egMmZSfXSk33Uj1rN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-relaxed">
                  Av. Presidente Vargas, 460<br />
                  CEP: 96400-410 Bagé/RS
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-bold mb-6">Comece agora</h4>
            <p className="text-purple-100 text-sm mb-6">Pronto para dominar o inglês em 18 meses?</p>
            <a 
              href="https://form.respondi.app/5HvbxD84" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-orange-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-black/20"
            >
              Agendar Aula Grátis
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-purple-200/40">
          <p>© 2024 OpenLife English School. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <Link to="/termos" className="hover:text-white">Termos de Uso</Link>
            <Link to="/privacidade" className="hover:text-white">Privacidade</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;