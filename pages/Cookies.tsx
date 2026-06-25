import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cookie, Info, ShieldCheck, Settings, HelpCircle, Table } from 'lucide-react';

const Cookies: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const sections = [
    {
      title: "Introdução e O que são Cookies",
      icon: <Cookie size={24} />,
      content: `A nossa missão é ensinar inglês de forma efetiva e imersiva para milhares de alunos. Fazer isto com transparência, informando como seus dados são utilizados, é extremamente importante, por isso valorizamos e respeitamos essas informações.\n\nO que é um cookie?\nUm cookie é um pequeno arquivo adicionado ao seu dispositivo ou computador que permite ativar os recursos e funcionalidades do Site. Por exemplo, os cookies nos permitem identificar o seu dispositivo ou computador, viabilizando entrar e sair do Site com segurança, e nos ajudam a saber se alguém tentou acessar sua conta a partir de um outro dispositivo ou computador.`
    },
    {
      title: "Uso e Tipos de Cookies",
      icon: <Info size={24} />,
      content: `O Site utiliza cookies? Sim, utilizamos cookies e outras tecnologias similares para que aqueles que acessam o Site tenham a melhor experiência possível.\n\nQue tipos de cookies o Site utiliza?\nUsamos dois tipos de cookies: cookies persistentes e cookies de sessão.\n- Cookie persistente: Ajuda a reconhecer o usuário, possibilitando retornar ao Site sem entrar na conta novamente.\n- Cookies de sessão: Duram até a sessão terminar.\n\nPara que os cookies são utilizados?\nReconhecimento, armazenamento de preferências, personalização de experiência e apresentação de publicidade.`
    },
    {
      title: "Controle e Desativação",
      icon: <Settings size={24} />,
      content: `Controle de cookies\nA maioria dos navegadores permite que você controle cookies em suas configurações. Entretanto, se você limitar a utilização de cookies, você não terá a experiência que preparamos para você.\n\nComo desativar ou remover os cookies?\nCaso não deseje que suas informações sejam coletadas por meio de cookies, você pode alterar a configuração no seu navegador. Cada navegador possui uma configuração específica para ativar, desativar e limpar os cookies.`
    },
    {
      title: "Nossos Cookies (Tabela Detalhada)",
      icon: <Table size={24} />,
      content: `Cookies Necessários:\n- 1P_JAR (google.com): Armazenar informações de acesso.\n- NID (google.com): Lembrar preferências (idioma, etc).\n- XSRF-TOKEN (Openlifebrasil.com): Controle de requisição.\n\nCookies de Estatística:\n- _gid (google.com): Relatório analítico de uso.\n- _ga (google.com): Calcular dados do visitante e sessão.\n- _gcl_au / _gcl_aw / _gac_UA (google.com): Eficiência de publicidade e rastreamento de cliques.\n\nCookies de Marketing:\n- _fbp (facebook.com): Publicidade personalizada no Facebook.\n- rdtrk / __trf.src (rdstation.com.br): Origem de visita e histórico de páginas.`
    },
    {
      title: "Requisitos Técnicos e Geral",
      icon: <ShieldCheck size={24} />,
      content: `REQUISITOS TÉCNICOS PLATAFORMA DE AULAS:\nCompatível com Mac OS X, Windows 10, Ubuntu 16.\nNavegadores: Chrome (>76), Safari (>13), Firefox (>70).\n\nRequisitos para streaming:\nConexão banda larga, Webcam USB, Processador quad-core.\n\nREQUISITOS TÉCNICOS APPLIFE:\nIOS (>9.0) e Android (>9.0).\n\nAlterações da Política: A OpenLife pode alterar esta Política de Cookies conforme necessário e a qualquer tempo.\n\nEntre em contato: suporte@openlifebrasil.com.`
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-purple-brand">Política de <span className="text-orange-brand">Cookies</span></h1>
          <p className="text-slate-500 font-medium">Versão: 2024 - OpenLife English School</p>
        </div>

        <div className="space-y-6">
          {sections.map((section, idx) => (
            <div key={idx} className={`rounded-[32px] overflow-hidden transition-all duration-300 bg-[#6B2D8B] ${expandedSection === idx ? 'pb-6 shadow-xl' : 'hover:bg-purple-700'}`}>
              <button 
                onClick={() => setExpandedSection(expandedSection === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-white text-left focus:outline-none"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 border border-white/20 rounded-xl bg-white/5">
                    {section.icon}
                  </div>
                  <span className="text-lg md:text-xl font-bold tracking-tight">{section.title}</span>
                </div>
                {expandedSection === idx ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
              </button>

              {expandedSection === idx && (
                <div className="px-8 space-y-4 animate-in slide-in-from-top-4 duration-300">
                  <div className="p-6 bg-white/10 rounded-2xl text-white text-sm leading-relaxed whitespace-pre-line border border-white/5">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-[40px] border border-gray-100 text-center">
          <p className="text-slate-600 text-sm">
            Os cookies nos ajudam a oferecer uma jornada de aprendizado personalizada para você.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;