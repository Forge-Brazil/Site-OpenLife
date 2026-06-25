import React, { useState } from 'react';
import { List, ChevronDown, ChevronUp, FileText, Shield, Info, Scale, LifeBuoy, Lock } from 'lucide-react';

const Terms: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const sections = [
    {
      title: "Introdução e Objeto",
      icon: <Info size={24} />,
      content: `O presente documento tem por objeto estabelecer os Termos de Uso (“Termos”), os quais são um contrato vinculativo entre você, sendo Usuário ou Cliente, e a OpenLife English School inscrita no CNPJ nº 53.543.041.0001-910 (aqui referida como “OpenLife”, “nós”, “nos” ou “nosso”), mantenedora e única titular do site https://www.openlifebrasil.com (“Site”) e Plataforma indicada pela OpenLife. Para obter acesso à Plataforma, foi firmado um contrato entre uma empresa (“OpenLife English School”) ou diretamente com um Contratante (“Aluno”) e a OpenLife. O acesso à Plataforma se dará por meio de login e senha gerados automaticamente para o Aluno e para a(s) pessoa(s) indicada(s) pela Franqueadora (“Usuários”, “Usuário” ou “você”).\n\nA OpenLife é uma empresa que atua no ramo de educação, sendo especializada no ensino de língua estrangeira, oferecendo cursos e materiais para o ensino da língua inglesa para brasileiros.\n\nAo acessar a Plataforma, todos os Usuários declaram aceitar os termos e condições estabelecidos nestes Termos e na Política de Privacidade. Caso você não concorde com os termos e condições contidos nestes documentos, não utilize a Plataforma. A OpenLife se reserva o direito de atualizar os documentos periodicamente, ao nosso exclusivo critério, e você deve revisá-lo periodicamente para eventuais modificações e atualizações.\n\nPor favor, revise os Termos e demais documentos cuidadosamente antes de utilizar a Plataforma.\n\nI - DO OBJETO\n1.1. O presente instrumento tem por finalidade definir os direitos e obrigações do Franqueado e de seus Usuários (alunos e colaboradores) ao utilizar a Plataforma.\n1.2. A Plataforma tem como objetivo fornecer cursos e materiais para ensino da língua inglesa à brasileiros, de acordo com as especificidades contratadas.\n1.3. Os presentes Termos foram desenvolvidos para governar o uso da Plataforma e, juntamente com a Política de Privacidade, indica quais informações serão coletadas em razão da utilização da Plataforma e como tais informações serão tratadas, em observação à Lei 13.709 de 14 de agosto de 2018, Lei Geral de Proteção de Dados (“LGPD”) que dispõe sobre a proteção de dados pessoais.`
    },
    {
      title: "II – DA OpenLife",
      icon: <Shield size={24} />,
      content: `2.1. A Plataforma se trata de um SaaS (software como serviço) de educação da língua inglesa à distância, que permite o cadastramento de Usuários para prestação do serviço.\n2.2. Para obter acesso inicial à Plataforma, a OpenLife encaminhará ao Usuário, via e-mail, o login e senha, bem como um link que o remeterá à Plataforma. O acesso à Plataforma também poderá ser realizado pelo Site www.openlifebrasil.com através do campo “Acesso Plataforma” localizado no canto superior direito.\n\n2.3. Caso o Usuário desejar alterar a senha fornecida, deverá solicitar a alteração diretamente na Plataforma, através da opção “ALTERAR SENHA” localizado em “Dados”, no canto superior direito da Plataforma. Cumpre salientar que todas as senhas são armazenadas de forma criptografada, não tendo a OpenLife acesso a tais informações;\n2.4. Ao realizar o login na Plataforma, o Usuário acessa a tela com seus dados de cadastro, não tendo possibilidade de alterá-los. Em caso de necessidade de alteração, o Usuário deverá solicitar diretamente ao Franqueado.\n2.5. No módulo do Aluno e professores, haverá a aba “Atividades” no banner localizado a esquerda da Plataforma, onde Usuário terá 03 (três) sub-acessos. A primeira opção de acesso é a sua “Agenda”, onde constarão as aulas e atividades agendadas. Na segunda opção o Usuário poderá acessar “Aula ao vivo”, quando seu contrato permitir. Por fim, há a opção de “Atividade de Aula”, onde o Usuário entregará suas atividades, ou no caso dos professores, irá corrigir as atividades entregues, podendo elas serem ofertadas e feitas presencialmente direto na escola.\n2.6. Ao acessar a opção “Aulas ao vivo”, a Plataforma direcionará o Usuário para um link, onde ocorrerá o curso;\n2.7. Ao acessar a aba “FAQ’s”, o Usuário terá acesso as perguntas mais frequentes as respostas em formato de vídeo explicativo ou texto.\n2.8. As abas da Plataforma poderão vir a ter novas versões, resultantes de modificações em suas atuais características, por razões técnicas de compatibilização com a evolução de seus recursos, e principalmente, objetivando as melhorias solicitadas e observadas na Plataforma.\n2.9. Para a utilização da Plataforma, é indispensável que o aparelho utilizado tenha acesso à internet e navegador moderno devidamente atualizado (tais como: Google Chrome, Mozilla Firefox, Safari, Internet Explorer e Microsoft Edge ou outros que venham surgir mais modernos ao longo do tempo).`
    },
    {
      title: "III – Armazenamento, Uso e Privacidade",
      icon: <Lock size={24} />,
      content: `3.1. Ao acessar a Plataforma, o Franqueado e o Usuário atestam que leram e estão de acordo com nossas seguintes políticas:\nPolítica de Privacidade de Uso de Dados\nTermos de Uso\n3.2. Cada documento tem suas especificações das quais o Cliente e o Usuário deverão ler e, ao realizar o primeiro acesso à Plataforma, marcar o checkbox informando que estão de acordo com o conteúdo presente nos referidos documentos, não podendo o Usuário alegar o não conhecimento das regras e informações lá dispostas.`
    },
    {
      title: "IV – Cadastro e Responsabilidades",
      icon: <List size={24} />,
      content: `4.1. É de responsabilidade do Franqueado orientar os Usuários a ler estes Termos de Uso e a nossa Política de Privacidade ao acessar a Plataforma.\n4.2. O cadastro será realizado apenas para os Usuários que tenham capacidade legal para contratar, sendo vedado o seu uso por incapazes, inclusive pessoas que tenham sido inabilitadas por decisão da OpenLife, por ordem judicial ou de autoridade competente. O cadastro de menores de idade só será realizado mediante autorização expressa do responsável legal, coletada no Termo de Tratamento de Dados Pessoais.\n4.3. A OpenLife não se responsabiliza pela correção dos dados pessoais inseridos pelo Franqueado e pelos Usuários, sendo o Cliente responsável, em qualquer caso, pela veracidade, exatidão e autenticidade dos dados cadastrados.\n4.4. O Franqueado e os Usuários comprometem-se a notificar a OpenLife imediatamente e através de meio seguro, email, a respeito de qualquer uso não autorizado de sua conta, bem como o acesso não autorizado por terceiros. Os Usuários serão responsáveis pelas operações efetuadas em sua respectiva conta, uma vez que o acesso só será possível mediante o uso de login e senha, cujo conhecimento é exclusivo do Usuário.\n4.5. O Usuário reconhece que a sua senha de acesso à Plataforma é de uso pessoal e intransferível, não podendo fornecê-la a terceiros em nenhuma hipótese, devendo tomar todas as providências cabíveis para garantir sua confidencialidade, devendo inclusive efetuar o logoff para finalizar seu acesso à Plataforma.\n4.6. A recuperação de senhas perdidas ou esquecidas dar-se-á mediante acesso ao campo “Esqueci minha senha” presente na página de acesso da Plataforma.\n4.7. O Franqueado e o Usuário reconhecem que devem providenciar a devida segurança no uso de seus equipamentos de informática e utilizar sempre que possível sistema de antivírus, firewalls e outros sistemas de segurança atualizados, não cabendo à OpenLife qualquer responsabilidade acerca da não utilização de medidas devidas de segurança.\n4.8. É extremamente proibido qualquer procedimento realizado pelo Franqueado ou pelo Usuário que implique no aluguel, arrendamento, cessão, empréstimo, seja total, seja parcial, da Plataforma a terceiros, salvo autorização por escrito da OpenLife, sob pena de responsabilização pelos prejuízos causados.`
    },
    {
      title: "V – Suporte Técnico",
      icon: <LifeBuoy size={24} />,
      content: `5.1. O suporte à Plataforma deverá ser solicitado na aba “Ajuda” no banner superior da Plataforma, quando o login do Usuário permitir, ou através do e-mail suporte@openlifebrasil.com.\n5.2. Ressalvadas condições especiais, o atendimento para suporte será realizado de segunda a sexta-feira, salvo em feriados, das 09:00 – 12:00 / 13:30 – 17:00.\n5.3. A OpenLife não é responsável pela configuração de equipamentos e funcionalidades operacionais que sejam vinculados, direta ou indiretamente, às funcionalidades da Plataforma, tais como notebooks, tablets, celulares, access points, servers de proxy, servidores de DNS, servidores web, servidores FTP, etc.`
    },
    {
      title: "VI - Propriedade Intelectual",
      icon: <Scale size={24} />,
      content: `6.1. A OpenLife é exclusiva proprietária e detentora dos direitos autorais sobre o código-fonte da Plataforma e das demais tecnologias desenvolvidas, sendo todos protegidos e regulados pela Lei 9.609/98, sendo vedada a cópia de objetos, marcas, imagens, layout, métodos e funcionalidades da OpenLife, seus cursos e materiais e da Plataforma como um todo.\n6.2. É vedado o uso do nome, logotipo, imagem de marca ou marcas registradas da OpeLife sem autorização.\n6.3. Não é permitida a utilização de nenhum dispositivo, software, ou outro recurso que venha a interferir nas atividades da Plataforma e do banco de dados. Qualquer intromissão, tentativa de, ou atividade que viole ou contrarie as leis de direito de propriedade intelectual e/ou as proibições aqui estipuladas, tornarão o responsável passível das ações legais pertinentes.\n6.4. O Franqueado e o Usuário se obrigam a não utilizarem a Plataforma além dos limites estabelecidos.\n6.5. É expressamente vedada a utilização da Plataforma sem a respectiva licença, assim como é vedada a modificação, cessão, distribuição, reprodução, publicação e licenciamento, gratuito, oneroso ou a qualquer outro título, a quem quer que seja, desrespeitando a legislação de proteção aos direitos autorais.\n6.6. A emissão não autorizada de cópias da Plataforma implicará nas sanções penais cabíveis (artigo 184 do Código Penal e artigo 12 da Lei nº 9.609/98), sem prejuízo de reparação através de indenização por perdas e danos nos termos da lei civil.`
    },
    {
      title: "VII - Declarações e Garantias",
      icon: <FileText size={24} />,
      content: `7,1, Toda informação presente na Plataforma será armazenada em servidores ou meios magnéticos de alta segurança. A OpenLife tomará todas as medidas possíveis para manter a confidencialidade e a segurança descritas nesta cláusula, porém não responderá por prejuízo que possa ocorrer derivado da violação dessas medidas por parte de terceiros que utilizem as redes públicas ou a internet, subvertendo os sistemas de segurança para acessar as informações dos bancos de dados da OpenLife.\n7.2. O Franqueado e o Usuário expressamente autorizam que suas informações e dados pessoais sejam compartilhados pela OpenLife com empresas parceiras responsáveis pelo desenvolvimento e execução da Plataforma. A forma de tratamento dos dados pessoais está especificada em nossa Política de Privacidade.\n7.3. O Franqueado e o Usuário não poderão atribuir à Openlife nenhuma responsabilidade, nem exigir o pagamento por lucro cessante em virtude de prejuízos resultantes de dificuldades técnicas ou falhas nos sistemas ou na internet. Eventualmente, a Plataforma poderá não estar disponível por motivos técnicos ou falhas da internet, ou por qualquer outro evento fortuito ou de força maior alheio ao controle da OpenLife.\n7.4. A OpenLife não se responsabilizará pelos resultados produzidos pela Plataforma, caso o aparelho utilizado para acessá-la seja afetado por algum tipo de programa externo, como aqueles conhecidos popularmente como vírus, ou por falha de operação.\n7.5. A OpenLfie não se responsabilizará, ainda, por: (i) integração da Plataforma com qualquer outro software de terceiros ou do Franqueado que não those objetos do escopo de contratação; (ii) operação da Plataforma por pessoas não autorizadas; (iii) qualquer defeito decorrente de culpa exclusiva do Franqueado e do Usuário; e (iv) pelos danos ou prejuízos decorrentes de decisões administrativas, gerenciais ou comerciais tomadas com base nas informações fornecidas pela Plataforma.\n7.6. A OpenLfie não será responsabilizada pelo uso abusivo, ou uso em desacordo com as especificações técnicas aplicáveis da Plataforma, ou em razão de modificações ou ajustes sistêmicos realizados (inclusive combinação, conexão, operação ou uso de qualquer componente com equipamento ou documentação não fornecido pela OpenLife) da Plataforma pela OpenLife ou por qualquer terceiro não autorizado pela OpenLife, inclusive por lucros cessantes, perda de dados, descontinuidade de negócios, relacionados ao uso ou mau uso da Plataforma, mesmo nos casos em que a OpenLife tenha sido comunicada.\n7.7. Qualquer prejuízo que o Franqueado ou o Usuário vier a experimentar decorrente do uso inadequado da Plataforma pelo cadastramento incorreto de quaisquer dados nas plataformas do Franqueado não serão suportados pela OpenLife.`
    },
    {
      title: "VIII - Proteção de Dados e Foro",
      icon: <Scale size={24} />,
      content: `8.1. A proteção dos dados pessoais do Usuário é levada muito a sério pela OpenLife e por isso nos submetemos ao cumprimento dos deveres e obrigações referentes à proteção de dados pessoais conforme disposto na Política de Privacidade e Política de Cookies, tratando os dados pessoais do Usuário de acordo com a legislação vigente aplicável.\n\nIX- EXTINÇÃO E VIOLAÇÕES\n9.1. Qualquer violação pelo Usuário a estes Termos ensejará a comunicação ao Franqueado. A conta do Usuário poderá ser suspensa temporariamente ou definitivamente caso a OpenLife identifique risco à Plataforma.\n\nX – INDENIZAÇÃO\n10.1 Você concorda em indenizar a OpenLife contra reivindicações decorrentes de sua violação destes Termos.\n\nXI – ALTERAÇÕES\n11.1. A OpenLife poderá alterar estes Termos a qualquer tempo.\n\nXII - CONDIÇÕES GERAIS\n12.1. Casos fortuitos ou de força maior excluem a responsabilidade pelo descumprimento.\n\nXIII – FORO DE ELEIÇÃO\n13.1. É eleito o Foro da Comarca de Bagé, RS.\n\nXIV - ACEITAÇÃO CONTRATUAL\n14.1. Ao clicar em “Li e Concordo”, você aceita estes Termos de Uso.`
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-purple-brand">Termos de <span className="text-orange-brand">Uso</span></h1>
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
          <p className="text-slate-600 text-sm italic">
            Para dúvidas sobre estes termos, entre em contato através de suporte@openlifebrasil.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;