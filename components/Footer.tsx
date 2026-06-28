import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Phone, Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const CTA_URL = 'https://form.respondi.app/5HvbxD84';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">

      {/* CTA strip */}
      <div className="border-b border-white/5 py-7 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-base">Pronto para falar inglês de verdade?</p>
            <p className="text-slate-400 text-sm">Aula experimental 100% gratuita. Sem compromisso.</p>
          </div>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center bg-purple-brand text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-purple-900 transition-all"
          >
            Agendar Aula Grátis
            <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand — spans 2 */}
          <div className="col-span-2 space-y-5">
            <Link to="/" className="flex items-center space-x-2.5">
              <img src="/2.png" alt="OpenLife English School" className="w-10 h-10 object-contain" />
              <div className="leading-tight">
                <span className="block text-base font-black">OpenLife</span>
                <span className="block text-[10px] text-slate-500 tracking-widest uppercase">English School</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Transformando vidas através da fluência em inglês há mais de 21 anos.
              Metodologia ESL pioneira com resultados em 18 meses.
            </p>
            <div className="flex space-x-2.5">
              <a href="https://www.instagram.com/openlifebrasil/" target="_blank" rel="noopener noreferrer"
                className="p-2.5 bg-white/5 rounded-xl hover:bg-purple-brand transition-colors border border-white/5">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-purple-brand transition-colors border border-white/5">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/openlife-english-school-bage/" target="_blank" rel="noopener noreferrer"
                className="p-2.5 bg-white/5 rounded-xl hover:bg-purple-brand transition-colors border border-white/5">
                <Linkedin size={16} strokeWidth={1.5} />
              </a>
            </div>
            <div className="space-y-2 pt-1">
              <a href="tel:+5553999656216" className="flex items-center space-x-2 text-slate-400 hover:text-white text-xs transition-colors">
                <Phone size={13} strokeWidth={1.5} className="text-orange-brand shrink-0" />
                <span>+55 (53) 99965-6216</span>
              </a>
              <a href="mailto:contato@openlifebrasil.com" className="flex items-center space-x-2 text-slate-400 hover:text-white text-xs transition-colors">
                <Mail size={13} strokeWidth={1.5} className="text-orange-brand shrink-0" />
                <span>contato@openlifebrasil.com</span>
              </a>
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">Cursos</h4>
            <ul className="space-y-3 text-xs">
              <li><Link to="/ingles-online" className="text-slate-400 hover:text-white transition-colors">Inglês Online</Link></li>
              <li><Link to="/ingles-para-adultos" className="text-slate-400 hover:text-white transition-colors">Inglês para Adultos</Link></li>
              <li><Link to="/ingles-para-criancas" className="text-slate-400 hover:text-white transition-colors">Inglês para Crianças</Link></li>
              <li><Link to="/ingles-para-adolescentes" className="text-slate-400 hover:text-white transition-colors">Inglês para Adolescentes</Link></li>
              <li><Link to="/ingles-para-negocios" className="text-slate-400 hover:text-white transition-colors">Inglês para Negócios</Link></li>
              <li><Link to="/cursos" className="text-purple-brand hover:text-purple-200 font-semibold transition-colors">Ver todos →</Link></li>
            </ul>
          </div>

          {/* Cidades */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">Cidades</h4>
            <ul className="space-y-3 text-xs">
              <li><Link to="/contato" className="text-slate-400 hover:text-white transition-colors">Inglês em São Paulo</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-white transition-colors">Inglês no Rio de Janeiro</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-white transition-colors">Inglês em Curitiba</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-white transition-colors">Inglês em Porto Alegre</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-white transition-colors">Inglês em BH</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-white transition-colors">Inglês em Brasília</Link></li>
              <li>
                <a href="https://share.google/egMmZSfXSk33Uj1rN" target="_blank" rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-white transition-colors">
                  <MapPin size={11} strokeWidth={1.5} className="mr-1.5 text-orange-brand" /> Bagé/RS (sede)
                </a>
              </li>
            </ul>
          </div>

          {/* Intercâmbio */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">Intercâmbio</h4>
            <ul className="space-y-3 text-xs">
              <li><Link to="/metodologia" className="text-slate-400 hover:text-white transition-colors">Prep IELTS</Link></li>
              <li><Link to="/metodologia" className="text-slate-400 hover:text-white transition-colors">Prep TOEFL</Link></li>
              <li><Link to="/metodologia" className="text-slate-400 hover:text-white transition-colors">Canadá</Link></li>
              <li><Link to="/metodologia" className="text-slate-400 hover:text-white transition-colors">Estados Unidos</Link></li>
              <li><Link to="/metodologia" className="text-slate-400 hover:text-white transition-colors">Irlanda</Link></li>
              <li><Link to="/metodologia" className="text-slate-400 hover:text-white transition-colors">Certificação CEFR</Link></li>
            </ul>
          </div>

          {/* OpenLife */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">OpenLife</h4>
            <ul className="space-y-3 text-xs">
              <li><Link to="/sobre" className="text-slate-400 hover:text-white transition-colors">Nossa História</Link></li>
              <li><Link to="/metodologia" className="text-slate-400 hover:text-white transition-colors">Metodologia ESL</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/franquia" className="text-slate-400 hover:text-white transition-colors">Seja Franqueado</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-white transition-colors">Contato</Link></li>
              <li>
                <a href="https://openlifebrasil.classbuild.com/login" target="_blank" rel="noopener noreferrer"
                  className="flex items-center text-purple-brand hover:text-purple-200 font-semibold transition-colors">
                  Plataforma <ExternalLink size={11} strokeWidth={1.5} className="ml-1.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} OpenLife English School · Todos os direitos reservados</p>
          <div className="flex space-x-5">
            <Link to="/termos" className="hover:text-slate-400 transition-colors">Termos de Uso</Link>
            <Link to="/privacidade" className="hover:text-slate-400 transition-colors">Privacidade</Link>
            <Link to="/cookies" className="hover:text-slate-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
