import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ArrowRight, ChevronLeft, CheckCircle2, Loader2 } from 'lucide-react';

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface SmartFormOptions {
  product?: string;
  source?: string;
}

// ─── Trigger global ───────────────────────────────────────────────────────────
export const openSmartForm = (opts: SmartFormOptions = {}) => {
  window.dispatchEvent(new CustomEvent('openSmartForm', { detail: opts }));
};

// ─── UTM helpers ──────────────────────────────────────────────────────────────
const captureUTMs = (): Record<string, string> => {
  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const utms: Record<string, string> = {};
  keys.forEach(k => { const v = params.get(k); if (v) utms[k] = v; });
  try {
    const stored = sessionStorage.getItem('ol_utms');
    if (stored) Object.assign(utms, JSON.parse(stored));
    if (Object.keys(utms).length) sessionStorage.setItem('ol_utms', JSON.stringify(utms));
  } catch { /* noop */ }
  return utms;
};

// ─── Dados dos steps ──────────────────────────────────────────────────────────
const PERSONAS = [
  { id: 'universitario',  label: 'Universitário',            desc: 'Intercâmbio, SAT, carreira global', emoji: '🎓' },
  { id: 'ascensao',       label: 'Profissional em ascensão', desc: 'Multinacional, startup ou promoção', emoji: '📈' },
  { id: 'liberal',        label: 'Profissional liberal',     desc: 'Médico, advogado, engenheiro',       emoji: '⚖️' },
  { id: 'c_level',        label: 'Executivo / C-Level',      desc: 'Reuniões e negociações globais',     emoji: '💼' },
  { id: 'intercambio',    label: 'Intercâmbio',              desc: 'Estudar ou morar fora em breve',    emoji: '✈️' },
  { id: 'outro',          label: 'Outro objetivo',           desc: 'Viagem, hobby ou motivo pessoal',   emoji: '🌟' },
];

const NIVEIS = [
  { id: 'zero',           label: 'Zero absoluto',    desc: 'Nunca estudei seriamente' },
  { id: 'basico',         label: 'Básico',           desc: 'Sei algumas palavras e frases' },
  { id: 'intermediario',  label: 'Intermediário',    desc: 'Me viro em situações simples' },
  { id: 'avancado',       label: 'Avançado',         desc: 'Falo bem, quero aperfeiçoar' },
];

const URGENCIAS = [
  { id: 'urgente',     label: 'Preciso agora',   desc: 'Nos próximos 1–3 meses' },
  { id: 'planejando',  label: 'Planejando',       desc: 'Nos próximos 6–12 meses' },
  { id: 'explorando',  label: 'Só explorando',    desc: 'Ainda estou avaliando' },
];

const STEPS = [
  'Qual é o seu principal objetivo com o inglês?',
  'Qual é o seu nível atual de inglês?',
  'Com que urgência você quer começar?',
  'Onde enviamos sua proposta personalizada?',
];

const LGPD_VERSION = '2026.09';
const LGPD_TEXT =
  'Autorizo o uso dos meus dados para contato sobre os produtos da OpenLife Brasil, conforme a LGPD (Lei 13.709/2018).';

// ─── Componente ───────────────────────────────────────────────────────────────
const SmartForm: React.FC = () => {
  const [open, setOpen]         = useState(false);
  const [step, setStep]         = useState(0);
  const [persona, setPersona]   = useState('');
  const [nivel, setNivel]       = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [nome, setNome]         = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail]       = useState('');
  const [lgpd, setLgpd]         = useState(false);
  const [leadId, setLeadId]     = useState<string | null>(null);
  const [source, setSource]     = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [errors, setErrors]     = useState<Record<string, string>>({});

  const debounceRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leadStarted  = useRef(false);

  // ── Escuta evento global ──────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<SmartFormOptions>).detail ?? {};
      setSource(detail.source ?? window.location.pathname);
      setOpen(true);
      tryRecover();
    };
    window.addEventListener('openSmartForm', handler);
    return () => window.removeEventListener('openSmartForm', handler);
  }, []);

  // ── Bloqueia scroll do body ───────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // ── Recupera lead existente do localStorage ───────────────────────────────
  const tryRecover = async () => {
    try {
      const storedId = localStorage.getItem('ol_lead_id');
      if (!storedId) return;
      const res = await fetch(`/api/lead/${storedId}`);
      if (!res.ok) return;
      const data = await res.json();
      setLeadId(storedId);
      leadStarted.current = true;
      if (data.persona)  setPersona(data.persona);
      if (data.nivel)    setNivel(data.nivel);
      if (data.urgencia) setUrgencia(data.urgencia);
      const campos = data.campos ?? {};
      if (campos.nome)      setNome(campos.nome);
      if (campos.whatsapp)  setWhatsapp(campos.whatsapp);
      if (campos.email)     setEmail(campos.email);
      // Avança ao step mais distante já preenchido
      if (data.persona && data.nivel && data.urgencia) setStep(3);
      else if (data.persona && data.nivel) setStep(2);
      else if (data.persona) setStep(1);
    } catch { /* noop */ }
  };

  // ── Cria lead no backend (1ª vez) ────────────────────────────────────────
  const startLead = async (firstPersona: string) => {
    if (leadStarted.current) return;
    leadStarted.current = true;
    try {
      const res = await fetch('/api/lead/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagina_origem: source || window.location.pathname,
          persona: firstPersona,
          status: 'iniciado',
          ...captureUTMs(),
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setLeadId(data.id);
        try { localStorage.setItem('ol_lead_id', data.id); } catch { /* noop */ }
      }
    } catch { /* noop — graceful degradation */ }
  };

  // ── Autosave com debounce de 700ms ────────────────────────────────────────
  const autosave = useCallback(
    (patch: Record<string, unknown>) => {
      if (!leadId) return;
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(async () => {
        try {
          await fetch(`/api/lead/${leadId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(patch),
          });
        } catch { /* noop */ }
      }, 700);
    },
    [leadId],
  );

  // ── Handlers de cada step ────────────────────────────────────────────────
  const handlePersona = (p: string) => {
    setPersona(p);
    startLead(p);
    setTimeout(() => setStep(1), 280);
  };

  const handleNivel = (n: string) => {
    setNivel(n);
    autosave({ nivel: n });
    setTimeout(() => setStep(2), 280);
  };

  const handleUrgencia = (u: string) => {
    setUrgencia(u);
    autosave({ urgencia: u });
    setTimeout(() => setStep(3), 280);
  };

  const handleField = (field: 'nome' | 'whatsapp' | 'email', value: string) => {
    if (field === 'nome')     setNome(value);
    if (field === 'whatsapp') setWhatsapp(value);
    if (field === 'email')    setEmail(value);
    autosave({ campos: { [field]: value } });
  };

  // ── Validação e envio ────────────────────────────────────────────────────
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!nome.trim())                                   errs.nome     = 'Informe seu nome';
    if (!/^\d{10,11}$/.test(whatsapp.replace(/\D/g, ''))) errs.whatsapp = 'WhatsApp inválido';
    if (!email.includes('@') || !email.includes('.'))   errs.email    = 'E-mail inválido';
    if (!lgpd)                                          errs.lgpd     = 'Aceite os termos para continuar';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const endpoint = leadId ? `/api/lead/${leadId}/complete` : '/api/lead/start';
      const method   = leadId ? 'PATCH' : 'POST';
      await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagina_origem: source || window.location.pathname,
          persona, nivel, urgencia,
          status: 'concluido',
          campos: { nome, whatsapp, email },
          consentimento_lgpd: {
            aceito: true,
            data: new Date().toISOString(),
            versao: LGPD_VERSION,
          },
          ...captureUTMs(),
        }),
      });
    } catch { /* noop — sempre mostra sucesso */ }
    setSubmitted(true);
    setSubmitting(false);
    try { localStorage.removeItem('ol_lead_id'); } catch { /* noop */ }
  };

  // ── Reset e fechar ───────────────────────────────────────────────────────
  const reset = () => {
    setStep(0); setPersona(''); setNivel(''); setUrgencia('');
    setNome(''); setWhatsapp(''); setEmail(''); setLgpd(false);
    setLeadId(null); setSubmitted(false); setErrors({});
    leadStarted.current = false;
  };

  const close = () => { setOpen(false); setTimeout(reset, 300); };

  if (!open) return null;

  const progress = submitted ? 100 : ((step + 1) / 4) * 100;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Agendamento de aula experimental"
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in"
      >
        {/* Barra de progresso */}
        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-purple-brand to-purple-deep transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Cabeçalho */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {step > 0 && !submitted && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="text-slate-400 hover:text-purple-brand transition-colors p-1"
                aria-label="Voltar"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            <p className="text-[10px] font-black text-purple-brand uppercase tracking-widest">
              {submitted ? 'Concluído!' : `Etapa ${step + 1} de 4 · ${STEPS[step].split('?')[0].slice(0, 26)}…`}
            </p>
          </div>
          <button
            onClick={close}
            className="text-slate-300 hover:text-slate-600 transition-colors p-1 rounded-full"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Corpo */}
        <div className="px-6 py-6">
          {/* ── Sucesso ───────────────────────────────────────────────────── */}
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} className="text-purple-brand" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Recebemos tudo!</h3>
              <p className="text-slate-500 leading-relaxed text-sm max-w-xs mx-auto">
                Nossa equipe vai analisar seu perfil e entrar em contato pelo WhatsApp em até{' '}
                <strong className="text-slate-700">2 horas úteis</strong>.
              </p>
              {whatsapp && (
                <p className="text-xs text-slate-400">
                  Fique de olho em <strong>{whatsapp}</strong>
                </p>
              )}
              <button
                onClick={close}
                className="mt-2 bg-purple-brand text-white px-8 py-3 rounded-full font-bold hover:bg-purple-deep transition-all"
              >
                Fechar
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-black text-slate-900 mb-5 leading-tight">
                {STEPS[step]}
              </h2>

              {/* ── Step 0: Persona ──────────────────────────────────────── */}
              {step === 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {PERSONAS.map(p => (
                    <button
                      key={p.id}
                      onClick={() => handlePersona(p.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all hover:border-purple-brand hover:bg-purple-50 ${
                        persona === p.id
                          ? 'border-purple-brand bg-purple-50'
                          : 'border-gray-100 bg-white'
                      }`}
                    >
                      <span className="text-2xl block mb-2">{p.emoji}</span>
                      <p className="font-black text-slate-900 text-sm leading-tight">{p.label}</p>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">{p.desc}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* ── Step 1: Nível ────────────────────────────────────────── */}
              {step === 1 && (
                <div className="flex flex-col gap-3">
                  {NIVEIS.map(n => (
                    <button
                      key={n.id}
                      onClick={() => handleNivel(n.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-4 hover:border-purple-brand hover:bg-purple-50 ${
                        nivel === n.id
                          ? 'border-purple-brand bg-purple-50'
                          : 'border-gray-100 bg-white'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                          nivel === n.id
                            ? 'border-purple-brand bg-purple-brand'
                            : 'border-gray-300'
                        }`}
                      >
                        {nivel === n.id && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-sm">{n.label}</p>
                        <p className="text-[11px] text-slate-400">{n.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* ── Step 2: Urgência ─────────────────────────────────────── */}
              {step === 2 && (
                <div className="flex flex-col gap-3">
                  {URGENCIAS.map(u => (
                    <button
                      key={u.id}
                      onClick={() => handleUrgencia(u.id)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all hover:border-purple-brand hover:bg-purple-50 ${
                        urgencia === u.id
                          ? 'border-purple-brand bg-purple-50'
                          : 'border-gray-100 bg-white'
                      }`}
                    >
                      <p className="font-black text-slate-900">{u.label}</p>
                      <p className="text-sm text-slate-400 mt-0.5">{u.desc}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* ── Step 3: Contato ──────────────────────────────────────── */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Nome */}
                  <div>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={nome}
                      onChange={e => handleField('nome', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-xl border-2 text-slate-800 font-medium focus:outline-none focus:border-purple-brand transition-all placeholder:text-slate-400 ${
                        errors.nome ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.nome && (
                      <p className="text-red-400 text-xs mt-1">{errors.nome}</p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp com DDD: (00) 00000-0000"
                      value={whatsapp}
                      onChange={e => handleField('whatsapp', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-xl border-2 text-slate-800 font-medium focus:outline-none focus:border-purple-brand transition-all placeholder:text-slate-400 ${
                        errors.whatsapp ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.whatsapp && (
                      <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div>
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={e => handleField('email', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-xl border-2 text-slate-800 font-medium focus:outline-none focus:border-purple-brand transition-all placeholder:text-slate-400 ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* LGPD */}
                  <label
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                      errors.lgpd ? 'bg-red-50 border border-red-200' : 'bg-slate-50'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setLgpd(v => !v)}
                      aria-checked={lgpd}
                      role="checkbox"
                      className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 border-2 flex items-center justify-center transition-all ${
                        lgpd ? 'bg-purple-brand border-purple-brand' : 'border-gray-300 bg-white'
                      }`}
                    >
                      {lgpd && <span className="text-white text-[10px] font-black">✓</span>}
                    </button>
                    <span className="text-[11px] text-slate-500 leading-relaxed">{LGPD_TEXT}</span>
                  </label>
                  {errors.lgpd && (
                    <p className="text-red-400 text-xs -mt-2 pl-1">{errors.lgpd}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-orange-brand text-white py-4 rounded-full font-black text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-brand/20 disabled:opacity-70"
                  >
                    {submitting ? (
                      <Loader2 size={22} className="animate-spin" />
                    ) : (
                      <>Quero minha aula grátis <ArrowRight size={20} /></>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Sem compromisso. Resposta em até 2 horas úteis.
                  </p>
                </form>
              )}
            </>
          )}
        </div>

        {/* Rodapé de prova social */}
        {!submitted && (
          <div className="px-6 pb-5 flex items-center gap-2 border-t border-gray-50 pt-4">
            <div className="flex text-orange-brand text-xs">{'★★★★★'}</div>
            <span className="text-[11px] text-slate-400">
              +66k alunos formados · OpenLife Brasil
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartForm;
