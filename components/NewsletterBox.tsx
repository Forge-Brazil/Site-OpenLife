import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Loader2, CheckCircle2, Globe2, GraduationCap, Briefcase } from 'lucide-react';

// O objetivo declarado segmenta a newsletter no ERP (Marketing › Newsletter):
// cada edição escolhe se vai para quem busca o inglês Cultural, Acadêmico ou
// Profissional. Os valores precisam bater com INTERESSES em
// erp/server/services/newsletterRegras.ts.
type Interesse = 'cultural' | 'academico' | 'profissional';

const OBJETIVOS: { id: Interesse; rotulo: string; descricao: string; Icone: typeof Globe2 }[] = [
  { id: 'cultural', rotulo: 'Cultural', descricao: 'Viagens, séries, música e cultura', Icone: Globe2 },
  { id: 'academico', rotulo: 'Acadêmico', descricao: 'Estudos, provas e intercâmbio', Icone: GraduationCap },
  { id: 'profissional', rotulo: 'Profissional', descricao: 'Carreira, reuniões e negócios', Icone: Briefcase },
];

const NewsletterBox = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [interesse, setInteresse] = useState<Interesse | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Por favor, insira um e-mail válido.');
      return;
    }
    if (!interesse) {
      setStatus('error');
      setMessage('Escolha o que você busca com o inglês.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nome: nome.trim() || undefined, interesse }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setNome('');
        setInteresse(null);
        setMessage('Inscrição realizada com sucesso! Verifique sua caixa de entrada.');
      } else {
        setStatus('error');
        setMessage(data.error || 'Ocorreu um erro ao processar sua inscrição.');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setStatus('error');
      setMessage('Erro de conexão. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="mt-16 bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-soft text-center max-w-4xl mx-auto flex flex-col items-center">
      <div className="w-16 h-16 bg-violet-50 text-purple-brand rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        {status === 'success' ? <CheckCircle2 size={32} className="text-green-500" /> : <MessageCircle size={32} />}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-purple-brand mb-4">
        {status === 'success' ? 'Bem-vindo à comunidade!' : 'Inscreva-se na nossa Newsletter'}
      </h3>

      <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
        {status === 'success' ? message : 'Receba dicas de estudo, vocabulário e novidades do mundo do inglês pensadas para o seu objetivo, direto no seu e-mail.'}
      </p>

      {status !== 'success' && (
        <form className="w-full max-w-xl mx-auto space-y-5" onSubmit={handleSubmit}>
          <fieldset disabled={status === 'loading'} className="space-y-3">
            <legend className="text-sm font-bold text-slate-700 mb-3">O que você busca com o inglês?</legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup">
              {OBJETIVOS.map(({ id, rotulo, descricao, Icone }) => {
                const ativo = interesse === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="radio"
                    aria-checked={ativo}
                    onClick={() => setInteresse(id)}
                    className={`flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-1 text-left sm:text-center px-4 py-3 rounded-xl border-2 transition-all ${
                      ativo
                        ? 'border-purple-brand bg-violet-50 text-purple-brand shadow-sm'
                        : 'border-gray-200 text-slate-600 hover:border-purple-brand/50'
                    }`}
                  >
                    <Icone size={22} className="shrink-0" />
                    <span>
                      <span className="block font-bold">{rotulo}</span>
                      <span className="block text-xs text-slate-500">{descricao}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              disabled={status === 'loading'}
              maxLength={120}
              autoComplete="given-name"
              className="sm:w-2/5 px-6 py-4 rounded-xl border border-gray-200 text-slate-800 focus:outline-none focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 transition-all font-medium disabled:opacity-50"
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              autoComplete="email"
              className="flex-1 px-6 py-4 rounded-xl border border-gray-200 text-slate-800 focus:outline-none focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 transition-all font-medium disabled:opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto bg-purple-brand text-white px-10 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all shadow-md inline-flex items-center justify-center space-x-2 min-w-[160px] disabled:opacity-70"
          >
            {status === 'loading' ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <>
                <span>Assinar</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-4 text-red-500 font-medium text-sm">{message}</p>
      )}

      {status === 'success' && (
        <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-purple-brand font-bold text-sm hover:underline"
        >
            Inscrição realizada! Cadastrar outro e-mail?
        </button>
      )}
    </div>
  );
};

export default NewsletterBox;
