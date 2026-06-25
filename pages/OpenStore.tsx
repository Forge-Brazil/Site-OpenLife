import React, { useState, useEffect } from 'react';
import {
  Smartphone, Star, Download, Shield, Zap, Globe,
  BookOpen, X, Share, Plus, ChevronRight, CheckCircle2
} from 'lucide-react';

const PWA_URL = 'https://erp.openlifebrasil.com.br/login';

type Platform = 'android' | 'ios' | 'desktop';

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return 'desktop';
}

/* ── Modal iOS ── */
const IOSModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-4"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      {/* Header */}
      <div className="bg-[#6B2D8B] px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AppleIcon className="text-white" />
          <h3 className="text-lg font-black text-white">Instalar no iPhone / iPad</h3>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white">
          <X size={22} />
        </button>
      </div>

      <div className="p-6">
        <p className="text-slate-600 text-sm mb-6">
          No iOS, siga os <strong className="text-slate-900">3 passos abaixo</strong> no navegador Safari:
        </p>

        <div className="space-y-4">
          <ModalStep number={1} title="Abra no Safari">
            Toque no link abaixo para abrir o app no Safari.
          </ModalStep>
          <ModalStep number={2} title='Toque em "Compartilhar" ↑'>
            Na barra inferior do Safari, toque no ícone de compartilhar (quadrado com seta para cima).
          </ModalStep>
          <ModalStep number={3} title='"Adicionar à Tela de Início"'>
            Role as opções e toque em <strong>"Adicionar à Tela de Início"</strong>, depois em <strong>"Adicionar"</strong>.
          </ModalStep>
        </div>

        <a
          href={PWA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 bg-[#F57C20] text-white w-full py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-colors"
        >
          Abrir o app no Safari
          <ChevronRight size={18} />
        </a>
        <p className="text-center text-xs text-slate-400 mt-3">Certifique-se de usar o Safari (não Chrome)</p>
      </div>
    </div>
  </div>
);

const ModalStep: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6B2D8B] text-white flex items-center justify-center font-black text-sm">
      {number}
    </div>
    <div>
      <p className="font-bold text-slate-900 text-sm">{title}</p>
      <p className="text-slate-500 text-sm mt-0.5">{children}</p>
    </div>
  </div>
);

/* ── Features ── */
const features = [
  { icon: <BookOpen size={22} />, title: 'Material Didático', desc: 'Todo o conteúdo do curso direto no app, sempre atualizado.' },
  { icon: <Zap size={22} />, title: 'Aulas ao Vivo', desc: 'Entre nas suas aulas com um toque, sem complicação.' },
  { icon: <Shield size={22} />, title: 'Seguro e Rápido', desc: 'Dados protegidos e carregamento ultrarrápido.' },
  { icon: <Globe size={22} />, title: 'Imersão Total', desc: 'Pratique inglês a qualquer hora, em qualquer lugar.' },
];

/* ── Main Component ── */
const OpenStore: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>('desktop');
  const [iosModal, setIosModal] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const handleAndroid = () => {
    // Abre o PWA diretamente — Chrome no Android mostra o prompt de instalação nativo
    window.open(PWA_URL, '_blank', 'noopener,noreferrer');
  };

  const handleIOS = () => {
    // Abre o link em nova aba e exibe as instruções
    window.open(PWA_URL, '_blank', 'noopener,noreferrer');
    setIosModal(true);
  };

  const handleDesktop = (os: 'android' | 'ios') => {
    if (os === 'ios') { setIosModal(true); }
    else { window.open(PWA_URL, '_blank', 'noopener,noreferrer'); }
  };

  const onInstall = (os: 'android' | 'ios') => {
    if (platform === 'android') handleAndroid();
    else if (platform === 'ios') handleIOS();
    else handleDesktop(os);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {iosModal && <IOSModal onClose={() => setIosModal(false)} />}

      {/* ── Hero ── */}
      <section className="bg-[#6B2D8B] px-4 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 mb-8">
            <Smartphone size={14} className="text-white" />
            <span className="text-white text-xs font-bold tracking-wide uppercase">OpenStore · App Oficial</span>
          </div>

          {/* App info row */}
          <div className="flex items-center gap-5 mb-8">
            <img
              src="/favicon.png"
              alt="OpenLife"
              className="w-20 h-20 rounded-2xl shadow-xl bg-white object-cover flex-shrink-0"
            />
            <div>
              <h1 className="text-3xl font-black text-white leading-tight">OpenLife</h1>
              <p className="text-white/70 text-sm mt-0.5">Escola de Inglês · Educação</p>
              <div className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={13} fill="#F57C20" className="text-[#F57C20]" />
                ))}
                <span className="text-white/60 text-xs ml-1">5.0 · Google</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-snug">
            Seu inglês na <span className="text-[#F57C20]">palma da mão</span>
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl">
            Acesse aulas, materiais e pratique inglês a qualquer hora. Grátis, sem App Store, funciona como app nativo.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onInstall('android')}
              className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base transition-all ${
                platform === 'android'
                  ? 'bg-[#F57C20] text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600'
                  : 'bg-white text-[#6B2D8B] hover:bg-gray-100'
              }`}
            >
              <AndroidIcon />
              {platform === 'android' ? 'Instalar agora — Android' : 'Baixar para Android'}
            </button>

            <button
              onClick={() => onInstall('ios')}
              className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base transition-all ${
                platform === 'ios'
                  ? 'bg-[#F57C20] text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600'
                  : 'bg-white/15 border border-white/30 text-white hover:bg-white/25'
              }`}
            >
              <AppleIcon />
              {platform === 'ios' ? 'Instalar agora — iOS' : 'Baixar para iOS'}
            </button>
          </div>

          {platform !== 'desktop' && (
            <p className="mt-4 text-white/60 text-xs">
              {platform === 'android'
                ? '✓ Seu dispositivo Android foi detectado — Chrome abrirá o prompt de instalação automaticamente.'
                : '✓ Seu iPhone/iPad foi detectado — siga as instruções para adicionar à tela inicial.'}
            </p>
          )}
        </div>
      </section>

      {/* ── Como instalar (visual rápido) ── */}
      <section className="bg-white px-4 py-14 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-black text-slate-900 mb-8 text-center">Como instalar em 3 passos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Toque no botão', desc: 'Clique em "Baixar" para Android ou iOS acima.' },
              { step: '2', title: 'Abra no navegador', desc: 'Android: Chrome abre o prompt automaticamente. iOS: use o Safari.' },
              { step: '3', title: 'Adicione à tela', desc: 'Confirme a instalação. O app aparece como qualquer outro na tela inicial.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#6B2D8B] text-white flex items-center justify-center font-black text-xl flex-shrink-0">
                  {step}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="text-slate-500 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-4 py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-black text-slate-900 mb-8 text-center">
            Tudo que você precisa para <span className="text-[#F57C20]">aprender inglês</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-white flex gap-4 p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#6B2D8B]/10 text-[#6B2D8B] flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{f.title}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O que é PWA ── */}
      <section className="px-4 py-14 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-black text-slate-900 mb-4 text-center">O que é um app PWA?</h3>
          <p className="text-slate-600 text-sm text-center leading-relaxed mb-8 max-w-xl mx-auto">
            Um <strong className="text-slate-900">Progressive Web App</strong> é instalado direto pelo navegador — sem App Store ou Google Play. Aparece na tela inicial como qualquer app, abre sem barra de URL e funciona rapidamente.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Gratuito', 'Sem App Store', 'Sem Google Play', 'Funciona Offline', 'Seguro', 'Leve'].map(tag => (
              <div key={tag} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                <CheckCircle2 size={16} className="text-[#6B2D8B] flex-shrink-0" />
                <span className="text-slate-700 text-sm font-semibold">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="px-4 py-14 bg-slate-50 border-t border-gray-100">
        <div className="max-w-md mx-auto text-center">
          <Download size={36} className="text-[#F57C20] mx-auto mb-4" />
          <h3 className="text-2xl font-black text-slate-900 mb-2">Pronto para instalar?</h3>
          <p className="text-slate-500 text-sm mb-6">Escolha seu sistema e tenha o OpenLife na sua tela inicial em menos de 1 minuto.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onInstall('android')}
              className="flex items-center justify-center gap-2 bg-[#6B2D8B] text-white px-6 py-4 rounded-2xl font-bold hover:bg-purple-800 transition-colors shadow-md"
            >
              <AndroidIcon /> Android
            </button>
            <button
              onClick={() => onInstall('ios')}
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-md"
            >
              <AppleIcon /> iOS / iPhone
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ── SVG Icons ── */
const AndroidIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
  </svg>
);

const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

export default OpenStore;
