import React, { useState, useEffect } from 'react';
import { MOCK_POSTS } from '../constants';
import { Post } from '../types';
import { Search, Calendar, ArrowRight, Tag, ChevronLeft, ChevronRight, MessageCircle, Star, Target, Zap, Quote } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Início');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const categories = ['Início', 'Aprender Inglês', 'Business', 'Cultura', 'Dicas', 'Games', 'Intercâmbio', 'Músicas', 'News', 'Séries e Filmes', 'Trip'];
  
  const filteredPosts = MOCK_POSTS.filter(p => 
    (activeCategory === 'Início' || p.category === activeCategory || p.tags.includes(activeCategory)) &&
    (p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getRelatedPosts = (post: Post) => {
    return MOCK_POSTS
      .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
      .slice(0, 3);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  if (selectedPost) {
    return (
      <div className="bg-white min-h-screen">
        {/* Navigation Bar */}
        <div className="sticky top-20 bg-white border-b border-gray-100 z-40 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center space-x-2 text-slate-500 hover:text-purple-brand font-bold text-sm transition-all"
            >
              <ChevronLeft size={20} />
              <span>Voltar ao Blog</span>
            </button>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Você está lendo:</span>
              <span className="text-[10px] font-black text-purple-brand uppercase tracking-widest">{selectedPost.category}</span>
            </div>
          </div>
        </div>

        {/* Minimalist Hero Section */}
        <section className="text-white py-16 md:py-24" style={{ backgroundColor: '#1A1033' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-px bg-purple-200"></span>
                  <span className="text-purple-200 text-xs font-black uppercase tracking-widest">{selectedPost.category}</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                  {selectedPost.title}
                </h1>
                <p className="text-lg md:text-xl text-purple-100 font-medium leading-relaxed">
                  {selectedPost.excerpt}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Single Column Content */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <article className="space-y-12">
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-gray-100 pb-10">
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-purple-brand" />
                <span>Publicado em {selectedPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag size={14} className="text-purple-brand" />
                <span>{selectedPost.tags.join(' / ')}</span>
              </div>
            </div>

            {/* Structured/Technical Content */}
            <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-purple-brand">
              {!selectedPost.contentNode && (
                <div className="bg-slate-50 border-l-4 border-purple-brand p-8 md:p-10 rounded-r-3xl mb-12">
                  <p className="text-xl md:text-2xl text-slate-700 font-bold italic m-0 leading-relaxed">
                    "{selectedPost.excerpt}"
                  </p>
                </div>
              )}

              {/* Main Content Body */}
              {selectedPost.contentNode ? (
                <div className="space-y-0">
                  {selectedPost.contentNode}
                </div>
              ) : (
                <div className="space-y-8 whitespace-pre-line text-lg text-slate-600 leading-relaxed">
                  {selectedPost.content}
                </div>
              )}

              {/* CTA Section - Integrated and Standardized */}
              <div className="mt-20 p-10 md:p-16 rounded-[40px] text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: '#1A1033' }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 space-y-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-black m-0 leading-tight">Domine o inglês de forma técnica e definitiva</h2>
                  <p className="text-purple-100 text-lg m-0 max-w-2xl mx-auto">
                    Nossa metodologia ESL é focada em resultados reais para sua carreira e vida acadêmica. Não perca mais tempo com métodos tradicionais lentos.
                  </p>
                  <div className="pt-4">
                    <a 
                      href="https://form.respondi.app/5HvbxD84" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center space-x-3 bg-white text-purple-brand px-10 py-5 rounded-full font-black text-xl hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl"
                    >
                      <span>Agendar Aula Experimental</span>
                      <ArrowRight size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Bottom Related Section - Standardized Grid */}
          <section className="mt-32 pt-20 border-t border-gray-100">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl font-black text-slate-900">Continue lendo</h3>
              <button onClick={() => setSelectedPost(null)} className="text-purple-brand font-bold text-sm flex items-center hover:translate-x-1 transition-transform">
                Ver todo o blog <ChevronRight size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getRelatedPosts(selectedPost).map(post => (
                <div 
                  key={post.id} 
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer space-y-4"
                >
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-purple-brand uppercase tracking-widest">{post.category}</span>
                    <h4 className="text-lg font-black text-slate-900 group-hover:text-purple-brand transition-colors leading-tight line-clamp-2">{post.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Blog Main Hero */}
      <section className="bg-white pt-10 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
           <h1 className="text-5xl md:text-7xl font-black text-slate-900">OpenLife <span className="text-purple-brand">Blog</span></h1>
           <p className="text-xl text-slate-500 font-medium">Conteúdo estratégico para quem não quer apenas aprender inglês, mas dominar o mundo.</p>
        </div>
      </section>

      {/* Navigation & Search */}
      <div className="bg-white border-y border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
          <nav className="flex items-center space-x-8 overflow-x-auto whitespace-nowrap scrollbar-hide pr-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-black uppercase tracking-widest transition-all pb-2 border-b-2 ${
                  activeCategory === cat ? 'text-purple-brand border-purple-brand' : 'text-slate-400 border-transparent hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
             <Search size={18} className="text-slate-400 mr-2" />
             <input 
              type="text" 
              placeholder="Pesquisar..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-xs font-bold text-slate-600 placeholder:text-slate-400 w-48"
             />
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredPosts.map(post => (
              <article 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                className="group flex flex-col bg-white overflow-hidden cursor-pointer h-full transition-transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-[40px] aspect-[16/11] mb-8 shadow-xl shadow-slate-100 border border-gray-50">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-purple-brand text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-wider shadow-2xl">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 flex-grow flex flex-col px-4">
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-purple-brand transition-colors leading-[1.2]">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 mt-auto flex items-center justify-between border-t border-gray-50">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.date}</span>
                    <span className="text-purple-brand font-black text-[10px] uppercase flex items-center group-hover:translate-x-2 transition-transform">
                      Ler Artigo <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center space-y-6">
            <Zap size={64} className="mx-auto text-gray-200" />
            <p className="text-slate-400 text-2xl font-black italic">Conteúdo não encontrado.</p>
            <button onClick={() => setActiveCategory('Início')} className="text-purple-brand font-bold underline">Voltar para o início</button>
          </div>
        )}
      </section>

      {/* Pagination */}
      {filteredPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-32 flex items-center justify-center space-x-3">
          <button className="p-4 bg-gray-50 text-slate-400 rounded-2xl hover:bg-purple-brand hover:text-white transition-all"><ChevronLeft size={24} /></button>
          <button className="w-14 h-14 bg-purple-brand text-white rounded-2xl font-black shadow-2xl shadow-purple-brand/40">1</button>
          <button className="w-14 h-14 bg-gray-50 text-slate-600 hover:bg-purple-brand hover:text-white transition-all rounded-2xl font-black">2</button>
          <button className="p-4 bg-gray-50 text-purple-brand rounded-2xl hover:bg-purple-brand hover:text-white transition-all"><ChevronRight size={24} /></button>
        </div>
      )}
    </div>
  );
};

export default Blog;