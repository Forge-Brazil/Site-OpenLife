import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Por favor, insira um e-mail válido.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
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
      <div className="w-16 h-16 bg-orange-50 text-orange-brand rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        {status === 'success' ? <CheckCircle2 size={32} className="text-green-500" /> : <MessageCircle size={32} />}
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-purple-brand mb-4">
        {status === 'success' ? 'Bem-vindo à comunidade!' : 'Inscreva-se na nossa Newsletter'}
      </h3>
      
      <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
        {status === 'success' ? message : 'Receba toda semana dicas valiosas de estudo, vocabulário e novidades do mundo do inglês diretamente no seu e-mail.'}
      </p>

      {status !== 'success' && (
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className="flex-1 px-6 py-4 rounded-xl border border-gray-200 text-slate-800 focus:outline-none focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 transition-all font-medium disabled:opacity-50" 
            required
          />
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="bg-orange-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-brand/90 transition-all shadow-md flex items-center justify-center space-x-2 min-w-[140px] disabled:opacity-70"
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
