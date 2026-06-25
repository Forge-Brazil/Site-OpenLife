import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, FileText, Settings, 
  LogOut, Plus, Search, Filter, MoreVertical 
} from 'lucide-react';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leads' | 'posts'>('leads');

  const leads = [
    { id: '1', name: 'João Silva', email: 'joao@email.com', phone: '(11) 98888-7777', type: 'Teste de Nível', date: '16/05/2024' },
    { id: '2', name: 'Maria Souza', email: 'maria@email.com', phone: '(11) 97777-6666', type: 'Contato Site', date: '15/05/2024' },
  ];

  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0 pt-20">
        <div className="px-6 py-8">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-10 h-10 bg-orange-brand rounded-xl flex items-center justify-center font-black">AD</div>
            <div>
              <p className="font-bold text-sm">Admin OpenLife</p>
              <p className="text-xs text-slate-400">Portal de Gestão</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('leads')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'leads' ? 'bg-orange-brand text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <Users size={20} />
              <span className="font-bold">Leads</span>
            </button>
            <button 
              onClick={() => setActiveTab('posts')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'posts' ? 'bg-orange-brand text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <FileText size={20} />
              <span className="font-bold">Blog Posts</span>
            </button>
            <div className="pt-10 border-t border-slate-800 mt-10">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-colors">
                <LogOut size={20} />
                <span className="font-bold">Sair</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 capitalize">{activeTab === 'leads' ? 'Leads Capturados' : 'Gerenciar Blog'}</h1>
            <p className="text-slate-500">Acompanhe as conversões e conteúdos do site.</p>
          </div>
          <button className="bg-purple-brand text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 shadow-lg shadow-purple-brand/20">
            <Plus size={20} />
            <span>{activeTab === 'leads' ? 'Exportar CSV' : 'Novo Post'}</span>
          </button>
        </header>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex items-center space-x-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Pesquisar..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl outline-none focus:ring-1 focus:ring-purple-brand" />
          </div>
          <button className="px-4 py-3 bg-gray-50 rounded-xl text-slate-500 flex items-center space-x-2 border border-transparent hover:border-gray-200">
            <Filter size={18} />
            <span className="font-bold">Filtros</span>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <th className="px-8 py-5">Nome / Título</th>
                <th className="px-8 py-5">Contato / Categoria</th>
                <th className="px-8 py-5">Origem / Data</th>
                <th className="px-8 py-5 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeTab === 'leads' ? (
                leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <p className="font-bold text-slate-900">{lead.name}</p>
                      <p className="text-xs text-slate-500">{lead.email}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm font-medium text-slate-700">{lead.phone}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-purple-50 text-purple-brand text-[10px] font-bold rounded-full uppercase">
                        {lead.type}
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1">{lead.date}</p>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 text-slate-400 hover:text-slate-600"><MoreVertical size={20} /></button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-gray-50/50">
                  <td colSpan={4} className="px-8 py-20 text-center">
                    <div className="max-w-xs mx-auto space-y-4">
                      <FileText size={48} className="mx-auto text-slate-200" />
                      <p className="text-slate-400">Inicie criando seu primeiro post para engajar seus alunos.</p>
                      <button className="text-purple-brand font-bold">Adicionar agora</button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Admin;