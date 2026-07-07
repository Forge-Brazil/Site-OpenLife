import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, ExternalLink, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-black"><span className="text-purple-brand">Vamos</span> <span className="text-purple-900">conversar?</span></h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Tire suas dúvidas, agende uma visita ou peça um orçamento personalizado. Estamos prontos para te atender e transformar sua fluência.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg text-purple-brand">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Telefone e WhatsApp</h4>
                    <p className="text-slate-500 hover:text-purple-brand transition-colors">
                      <a href="https://wa.me/5553999656216" target="_blank" rel="noopener noreferrer">+55 (53) 99965-6216</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg text-purple-brand">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">E-mail Acadêmico</h4>
                    <p className="text-slate-500 hover:text-purple-brand transition-colors">
                      <a href="mailto:contato@openlifebrasil.com">contato@openlifebrasil.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg text-purple-brand">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Localização</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Av. Presidente Vargas, 460<br />
                      CEP: 96400-410 Bagé/RS
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex space-x-4">
                <a href="https://www.instagram.com/openlifebrasil/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-lg hover:text-purple-brand transition-colors"><Instagram /></a>
                <a href="#" className="p-4 bg-white rounded-2xl shadow-lg hover:text-purple-brand transition-colors"><Youtube /></a>
              </div>
            </div>

            {/* CTA instead of form */}
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 flex flex-col items-center text-center justify-center space-y-8 min-h-[450px]">
              <div className="w-20 h-20 bg-purple-50 text-purple-brand rounded-3xl flex items-center justify-center">
                <MessageCircle size={40} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-slate-900 leading-tight">Agende sua Aula Experimental Gratuita</h2>
                <p className="text-slate-500 text-lg">
                  Clique no botão abaixo para preencher nosso formulário oficial e iniciar sua jornada rumo à fluência em 18 meses.
                </p>
              </div>
              <a 
                href="https://form.respondi.app/5HvbxD84" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-purple-brand text-white py-5 rounded-full font-bold text-xl hover:bg-purple-700 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-purple-brand/20 group"
              >
                <span>Quero Começar Agora</span>
                <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <p className="text-xs text-slate-400 font-medium italic">Você será redirecionado para o nosso portal de agendamento oficial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Link Section */}
      <section className="h-[400px] bg-slate-200 relative group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
          alt="Mapa Localização" 
          className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a 
            href="https://share.google/egMmZSfXSk33Uj1rN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white px-8 py-4 rounded-full font-bold text-slate-900 shadow-2xl flex items-center space-x-3 hover:bg-purple-brand hover:text-white transition-all transform hover:scale-105"
          >
            <MapPin size={20} />
            <span>Ver no Google Maps</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;