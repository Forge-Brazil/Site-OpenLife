import React, { useState } from 'react';
import { Loader2, CheckCircle2, Send } from 'lucide-react';

const LeadForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot — invisível para humanos
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Preencha seu nome e um e-mail válido.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/leads/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          type: 'contact',
          source: 'site_contato',
          website,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Ocorreu um erro ao enviar seu cadastro.');
      }
    } catch (error) {
      console.error('Lead form error:', error);
      setStatus('error');
      setErrorMessage('Erro de conexão. Tente novamente mais tarde.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-slate-900">Cadastro recebido!</h3>
        <p className="text-slate-500">
          Enviamos um e-mail de confirmação pra você. Nossa equipe vai entrar em contato em breve.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-purple-brand font-bold text-sm hover:underline"
        >
          Cadastrar outro contato
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">Nome completo</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome completo"
          disabled={status === 'loading'}
          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-slate-800 focus:outline-none focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 transition-all font-medium disabled:opacity-50"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">WhatsApp / Contato</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            disabled={status === 'loading'}
            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-slate-800 focus:outline-none focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 transition-all font-medium disabled:opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            disabled={status === 'loading'}
            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-slate-800 focus:outline-none focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 transition-all font-medium disabled:opacity-50"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">O que você procura?</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conte pra gente seu objetivo: aula experimental, curso pra seu filho, inglês pra viagem..."
          rows={3}
          disabled={status === 'loading'}
          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-slate-800 focus:outline-none focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 transition-all font-medium resize-none disabled:opacity-50"
        />
      </div>

      {/* Honeypot — invisível para humanos, bots de formulário costumam preencher tudo */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-purple-brand text-white py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-purple-brand/20 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <Loader2 size={22} className="animate-spin" />
        ) : (
          <>
            <span>Quero Começar Agora</span>
            <Send size={18} />
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-500 font-medium text-sm text-center">{errorMessage}</p>
      )}
    </form>
  );
};

export default LeadForm;
