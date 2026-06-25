import React, { useState } from 'react';
import { List, ChevronDown, ChevronUp, Eye, Shield, UserCheck, Share2, Database, Clock, Globe } from 'lucide-react';

const Privacy: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const sections = [
    {
      title: "Quem Somos e Introdução",
      icon: <Eye size={24} />,
      content: `A OpenLife English School é uma rede de escolas especializadas no ensino e prática da língua inglesa dedicado a pessoas que desejam aprender/praticar o idioma. Todo o conteúdo do curso é de propriedade da empresa OpenLife Franchise.\n\nPOLÍTICA DE PRIVACIDADE\nA Política de Privacidade da OpenLife English School foi criada para demonstrar o compromisso da OpenLife com a segurança e a privacidade das informações coletadas dos nossos visitantes ou dos nossos clientes cadastrados na Plataforma.\n\nA Política esclarece as condições gerais de coleta, uso, armazenamento e demais formas de tratamento e proteção de dados pessoais no nosso Site e Plataforma, em conformidade com a legislação brasileira (LGPD, Marco Civil da Internet).\n\nPara efeitos desta Política, a OpenLife é qualificada como empresa Controladora. Foi designado um Encarregado pelo Tratamento de Dados Pessoais. Dúvidas: suporte@openlifebrasil.com`
    },
    {
      title: "1. Abrangência",
      icon: <Globe size={24} />,
      content: `A presente Política aplica-se a todos os usuários do Site, sendo coletados os seus dados pessoais sempre que você:\n\n- Visitar ou interagir no Site e na Plataforma;\n- Solicitar informações para se tornar um franqueado;\n- Solicitar informações de cursos e aulas para nossos Consultores;\n- Baixar nosso material gratuito;\n- Contratar e utilizar qualquer um dos nossos produtos;\n- Entrar em contato conosco pelos nossos canais de atendimento.`
    },
    {
      title: "2. Informações que Coletamos",
      icon: <Database size={24} />,
      content: `Você não é obrigado a nos conceder suas informações, entretanto, isso pode limitar o acesso a algumas funcionalidades.\n\nColetamos:\n- Informações de contato: nome, e-mail, telefone e cidade.\n- Informações sobre franquias: endereço, e-mail, telefone, cidade e estado.\n- Baixar e-books: nome, e-mail, unidade próxima.\n- Login: e-mail e senha.\n- Conteúdo do Usuário: comunicações, feedback, provas, materiais.\n- Geolocalização: IP ou GPS.\n- Dados de log e dispositivo: IP, sistema operacional, navegador.\n- Cookies: de acordo com nossa Política de Cookies.`
    },
    {
      title: "3. Base Legal para o Tratamento",
      icon: <Shield size={24} />,
      content: `Os dados tendem a ser coletados somente:\n- Com o seu consentimento;\n- Para execução de contrato;\n- Para obrigação legal ou regulatória;\n- Para o exercício regular de direitos em processo judicial;\n- Quando o processamento está de acordo com os interesses legítimos da OpenLife.`
    },
    {
      title: "4. Finalidade da Coleta",
      icon: <UserCheck size={24} />,
      content: `Propósitos:\n- Permitir acesso à Área do Aluno;\n- Atender questionamentos e solicitações;\n- Enviar comunicações institucionais;\n- Prestar suporte técnico;\n- Repasse a parceiros quando autorizado;\n- Personalizar sua experiência;\n- Enviar marketing e prospecção;\n- Melhorar nosso site e desenvolver produtos;\n- Atender autoridades governamentais.`
    },
    {
      title: "5. Compartilhamento de Dados",
      icon: <Share2 size={24} />,
      content: `Quando necessário para atingir as finalidades descritas, a OpenLife poderá compartilhar seus dados pessoais com terceiros listados (provedores, parceiros), visando a correta prestação dos serviços e segurança de armazenamento.`
    },
    {
      title: "6. Direitos dos Titulares",
      icon: <List size={24} />,
      content: `Você pode requerer:\n- Confirmação de tratamento;\n- Acesso e correção de dados;\n- Anonimização ou bloqueio;\n- Portabilidade de dados;\n- Eliminação de dados pessoais;\n- Revogação do consentimento.\n\nRequerimentos podem ser feitos para suporte@openlifebrasil.com.`
    },
    {
      title: "7 a 12. Armazenamento, Retenção e Geral",
      icon: <Clock size={24} />,
      content: `7. Armazenamento: Ambiente controlado e seguro.\n8. Transferência Internacional: Possível para serviços em nuvem no exterior.\n9. Retenção: Pelo tempo exigido por lei ou término do tratamento.\n10. Alterações: Política pode ser atualizada a qualquer tempo.\n11. Comunicação: Evitamos SPAM. Você pode optar por sair (opt-out).\n12. Links Externos: Não somos responsáveis por sites de terceiros.\n\nAUTORIZAÇÃO DE IMAGEM: Autorizo o uso da minha imagem, fotografia, grafia e voz em campanhas promocionais e institucionais pelo período de 05 anos.`
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-purple-brand">Política de <span className="text-orange-brand">Privacidade</span></h1>
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
            Nossa missão é ensinar inglês com transparência. Seus dados estão seguros conosco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;