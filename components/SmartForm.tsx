import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, Loader2, ArrowRight } from 'lucide-react';

// ─── Trigger global ───────────────────────────────────────────────────────────
interface SmartFormOptions { product?: string; source?: string; }
export const openSmartForm = (opts: SmartFormOptions = {}) => {
  window.dispatchEvent(new CustomEvent('openSmartForm', { detail: opts }));
};

// ─── UTM helpers ──────────────────────────────────────────────────────────────
const captureUTMs = (): Record<string, string> => {
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(k => {
    const v = params.get(k); if (v) utms[k] = v;
  });
  try {
    const stored = sessionStorage.getItem('ol_utms');
    if (stored) Object.assign(utms, JSON.parse(stored));
    if (Object.keys(utms).length) sessionStorage.setItem('ol_utms', JSON.stringify(utms));
  } catch { /* noop */ }
  return utms;
};

// ─── Dados do quiz ────────────────────────────────────────────────────────────
const CURSOS = [
  { id: 'OpenKids (6 a 10 anos)',                                    emoji: '🧒', label: 'OpenKids (6 a 10 anos)' },
  { id: 'OpenTeens (11 a 13 anos)',                                  emoji: '🧑', label: 'OpenTeens (11 a 13 anos)' },
  { id: 'Journey – Adultos (13+ anos)',                              emoji: '🧑‍💼', label: 'Journey – Adultos (13+ anos)' },
  { id: 'Keep the Fluency – Já falo, mas quero praticar meu inglês', emoji: '🌍', label: 'Keep the Fluency – Já falo, mas quero praticar meu inglês' },
];

const NIVEL_CONTATO = [
  { id: 'Sim, já estudei em outro curso',    label: 'Sim, já estudei em outro curso' },
  { id: 'Sim, aprendi sozinho(a)',            label: 'Sim, aprendi sozinho(a)' },
  { id: 'Pouco ou quase nada',               label: 'Pouco ou quase nada' },
  { id: 'Não, apenas o básico da escola',    label: 'Não, apenas o básico da escola' },
];

const MOTIVACOES = [
  { id: 'Viajar e explorar o mundo',                          emoji: '✈️',  label: 'Viajar e explorar o mundo' },
  { id: 'Construir uma carreira',                             emoji: '💼',  label: 'Construir uma carreira' },
  { id: 'Me desenvolver pessoalmente',                        emoji: '🧠',  label: 'Me desenvolver pessoalmente' },
  { id: 'Estudar fora e ter mais oportunidades acadêmicas',   emoji: '🎓',  label: 'Estudar fora e ter mais oportunidades acadêmicas' },
  { id: 'Me comunicar com o mundo com confiança',             emoji: '💬',  label: 'Me comunicar com o mundo com confiança' },
];

const COMO_CONHECEU = [
  { id: 'Indicação de um aluno OpenLife', label: 'Indicação de um aluno OpenLife' },
  { id: 'Instagram',                      label: 'Instagram' },
  { id: 'TikTok',                         label: 'TikTok' },
  { id: 'Facebook',                       label: 'Facebook' },
  { id: 'Google',                         label: 'Google' },
  { id: 'Outdoor ou anúncio físico',      label: 'Outdoor ou anúncio físico' },
];

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
const LGPD_VERSION = '2026.09';
const LGPD_TEXT = 'Autorizo o uso dos meus dados para contato sobre os produtos da OpenLife Brasil, conforme a LGPD (Lei 13.709/2018).';

// Mapeia curso + motivação → chave de persona para e-mail personalizado
function derivarPersona(curso: string, motivacao: string): string {
  if (curso.includes('Kids') || curso.includes('Teens')) return 'kids_teens';
  if (motivacao.includes('Viajar')) return 'viajante';
  if (motivacao.includes('acadêmicas') || motivacao.includes('Estudar fora')) return 'universitario';
  if (motivacao.includes('carreira') || motivacao.includes('desenvolver')) return 'profissional';
  if (curso.includes('Keep the Fluency')) return 'profissional';
  return 'profissional';
}

// ─── Componente ───────────────────────────────────────────────────────────────
interface Answers {
  nome: string; email: string; whatsapp: string; idade: string; cidade: string;
  curso: string; nivel_contato: string; motivacao: string; como_conheceu: string;
}

const EMPTY_ANSWERS: Answers = {
  nome: '', email: '', whatsapp: '', idade: '', cidade: '',
  curso: '', nivel_contato: '', motivacao: '', como_conheceu: '',
};

// Opção de múltipla escolha
function ChoiceOption({
  id, label, emoji, index, selected, onSelect,
}: {
  id: string; label: string; emoji?: string; index: number;
  selected: boolean; onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-all ${
        selected
          ? 'border-orange-brand bg-orange-50'
          : 'border-gray-200 bg-white hover:border-purple-200 hover:bg-purple-50'
      }`}
    >
      <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black transition-all ${
        selected ? 'bg-orange-brand text-white' : 'bg-gray-100 text-gray-500'
      }`}>
        {LETTERS[index]}
      </span>
      {emoji && <span className="text-lg leading-none">{emoji}</span>}
      <span className={`font-medium text-sm leading-snug ${selected ? 'text-orange-700' : 'text-slate-700'}`}>
        {label}
      </span>
    </button>
  );
}

// Input de texto com underline
function TextInput({
  type = 'text', placeholder, value, onChange, onEnter, error, autoFocus = false,
  prefix,
}: {
  type?: string; placeholder: string; value: string;
  onChange: (v: string) => void; onEnter?: () => void; error?: string;
  autoFocus?: boolean; prefix?: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <div className={`flex items-center gap-2 border-b-2 py-2 transition-all ${
        error ? 'border-red-400' : 'border-gray-200 focus-within:border-purple-brand'
      }`}>
        {prefix}
        <input
          type={type}
          autoFocus={autoFocus}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onEnter?.()}
          className="flex-1 text-slate-800 font-medium text-base focus:outline-none placeholder:text-slate-300 bg-transparent py-1"
        />
      </div>
      {error && <p className="text-red-400 text-xs pt-1">{error}</p>}
    </div>
  );
}

const SmartForm: React.FC = () => {
  // screen: 0=welcome 1-9=perguntas 10=lgpd+submit 11=sucesso
  const [open, setOpen]         = useState(false);
  const [screen, setScreen]     = useState(0);
  const [source, setSource]     = useState('');
  const [answers, setAnswers]   = useState<Answers>(EMPTY_ANSWERS);
  const [lgpd, setLgpd]         = useState(false);
  const [leadId, setLeadId]     = useState<string | null>(null);
  const [submitting, setSub]    = useState(false);
  const [errors, setErrors]     = useState<Record<string, string>>({});

  // ── Evento global ────────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<SmartFormOptions>).detail ?? {};
      setSource(detail.source ?? window.location.pathname);
      setOpen(true);
      setScreen(0);
    };
    window.addEventListener('openSmartForm', handler);
    return () => window.removeEventListener('openSmartForm', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // ── Reset e fechar ───────────────────────────────────────────────────────
  const reset = () => {
    setScreen(0); setAnswers(EMPTY_ANSWERS); setLgpd(false);
    setLeadId(null); setSub(false); setErrors({});
  };
  const close = () => { setOpen(false); setTimeout(reset, 300); };

  // ── Cria lead parcial no 1° passo ────────────────────────────────────────
  const startLead = async () => {
    try {
      const res = await fetch('/api/lead/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pagina_origem: source || window.location.pathname, status: 'iniciado', ...captureUTMs() }),
      });
      if (res.ok) {
        const data = await res.json();
        setLeadId(data.id);
        try { localStorage.setItem('ol_lead_id', data.id); } catch { /* noop */ }
      }
    } catch { /* noop */ }
  };

  // ── Validação por etapa ──────────────────────────────────────────────────
  const validate = (step: number): boolean => {
    const errs: Record<string, string> = {};
    if (step === 1  && !answers.nome.trim())                                    errs.nome         = 'Informe seu nome completo';
    if (step === 2  && (!answers.email.includes('@') || !answers.email.includes('.'))) errs.email = 'E-mail inválido';
    if (step === 3  && !/^\d{10,11}$/.test(answers.whatsapp.replace(/\D/g, '')))       errs.whatsapp     = 'WhatsApp inválido (com DDD)';
    if (step === 4  && !answers.idade.trim())                                   errs.idade        = 'Informe a idade';
    if (step === 5  && !answers.cidade.trim())                                  errs.cidade       = 'Informe sua cidade';
    if (step === 6  && !answers.curso)                                          errs.curso        = 'Selecione o curso desejado';
    if (step === 7  && !answers.nivel_contato)                                  errs.nivel_contato= 'Selecione uma opção';
    if (step === 8  && !answers.motivacao)                                      errs.motivacao    = 'Selecione uma opção';
    if (step === 9  && !answers.como_conheceu)                                  errs.como_conheceu= 'Selecione uma opção';
    if (step === 10 && !lgpd)                                                   errs.lgpd         = 'Aceite os termos para continuar';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ── Avançar ──────────────────────────────────────────────────────────────
  const advance = async () => {
    if (!validate(screen)) return;
    setErrors({});
    if (screen === 10) { await handleSubmit(); return; }
    if (screen === 1 && !leadId) startLead(); // cria lead ao capturar o nome
    setScreen(s => s + 1);
  };

  const back = () => { setErrors({}); setScreen(s => Math.max(0, s - 1)); };

  // ── Submissão final ──────────────────────────────────────────────────────
  const handleSubmit = async () => {
    setSub(true);
    try {
      const lid = leadId || `local_${Date.now()}`;
      const persona = derivarPersona(answers.curso, answers.motivacao);
      await fetch(`/api/lead/${lid}/complete`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagina_origem: source || window.location.pathname,
          persona,
          ...answers,
          consentimento_lgpd: { aceito: true, data: new Date().toISOString(), versao: LGPD_VERSION },
          ...captureUTMs(),
        }),
      });
    } catch { /* noop — sempre mostra sucesso */ }
    setSub(false);
    setScreen(11);
    try { localStorage.removeItem('ol_lead_id'); } catch { /* noop */ }
  };

  if (!open) return null;

  const progress = screen === 0 ? 0 : screen >= 11 ? 100 : (screen / 10) * 100;

  const setAnswer = (field: keyof Answers, value: string) =>
    setAnswers(a => ({ ...a, [field]: value }));

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Formulário de interesse OpenLife"
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in flex flex-col"
        style={{ maxHeight: '92vh' }}
      >
        {/* Barra de progresso */}
        <div className="h-1.5 bg-gray-100 flex-shrink-0">
          <div
            className="h-full bg-gradient-to-r from-purple-brand to-orange-brand transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Cabeçalho */}
        {screen > 0 && screen < 11 && (
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-50 flex-shrink-0">
            <button
              onClick={back}
              className="text-slate-400 hover:text-purple-brand transition-colors p-1 rounded-full"
              aria-label="Voltar"
            >
              <ChevronLeft size={20} />
            </button>
            {screen >= 1 && screen <= 9 && (
              <p className="text-xs font-bold text-slate-400 tracking-wide">
                {screen} de 9
              </p>
            )}
            <button onClick={close} className="text-slate-300 hover:text-slate-600 transition-colors p-1 rounded-full" aria-label="Fechar">
              <X size={18} />
            </button>
          </div>
        )}

        {/* Botão fechar na welcome */}
        {screen === 0 && (
          <button onClick={close} className="absolute top-4 right-4 z-10 text-slate-300 hover:text-slate-600 p-1 transition-colors" aria-label="Fechar">
            <X size={18} />
          </button>
        )}

        {/* Corpo */}
        <div className="overflow-y-auto flex-1 px-6 py-6">

          {/* ── Tela 0: Boas-vindas ────────────────────────────────────── */}
          {screen === 0 && (
            <div className="text-center space-y-4 py-4">
              <div className="text-5xl mb-2">🌍</div>
              <h2 className="text-2xl font-black text-slate-900 leading-tight">
                Seja bem vindo à<br />
                <span className="text-purple-brand">OpenLife English School!!</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Você está prestes a dar o primeiro passo rumo à sua nova versão:{' '}
                <strong className="text-slate-700">Fluente, confiante e pronto(a) para o mundo.</strong> 🌍💬
              </p>
              <p className="text-slate-400 text-sm">💡 Leva só <strong className="text-slate-600">1 minutinho</strong>.</p>
              <button
                onClick={() => setScreen(1)}
                className="w-full mt-4 bg-purple-brand text-white py-4 rounded-full font-black text-lg hover:bg-purple-deep transition-all shadow-lg shadow-purple-brand/25"
              >
                Borá! 🚀
              </button>
              <div className="flex items-center justify-center gap-1.5 pt-1">
                <span className="text-orange-brand text-xs">★★★★★</span>
                <span className="text-[11px] text-slate-400">+66k alunos formados · OpenLife Brasil</span>
              </div>
            </div>
          )}

          {/* ── Tela 1: Nome ──────────────────────────────────────────── */}
          {screen === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                Qual o seu nome completo? ✍️
              </h2>
              <TextInput
                placeholder="Digite seu nome completo"
                value={answers.nome}
                onChange={v => setAnswer('nome', v)}
                onEnter={advance}
                error={errors.nome}
                autoFocus
              />
            </div>
          )}

          {/* ── Tela 2: E-mail ─────────────────────────────────────────── */}
          {screen === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                Qual é o seu melhor e-mail? 📧
              </h2>
              <TextInput
                type="email"
                placeholder="seuemail@exemplo.com"
                value={answers.email}
                onChange={v => setAnswer('email', v)}
                onEnter={advance}
                error={errors.email}
                autoFocus
              />
            </div>
          )}

          {/* ── Tela 3: WhatsApp ───────────────────────────────────────── */}
          {screen === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                E o número do seu WhatsApp? 📱
              </h2>
              <TextInput
                type="tel"
                placeholder="( 00 ) 00000-0000"
                value={answers.whatsapp}
                onChange={v => setAnswer('whatsapp', v)}
                onEnter={advance}
                error={errors.whatsapp}
                autoFocus
                prefix={
                  <div className="flex items-center gap-1.5 pr-2 border-r border-gray-200 flex-shrink-0">
                    <span className="text-lg">🇧🇷</span>
                    <span className="text-slate-400 text-sm font-medium">+55</span>
                  </div>
                }
              />
            </div>
          )}

          {/* ── Tela 4: Idade ──────────────────────────────────────────── */}
          {screen === 4 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                Qual é a idade do futuro aluno? 🎂
              </h2>
              <TextInput
                type="number"
                placeholder="Ex: 28"
                value={answers.idade}
                onChange={v => setAnswer('idade', v)}
                onEnter={advance}
                error={errors.idade}
                autoFocus
              />
            </div>
          )}

          {/* ── Tela 5: Cidade ─────────────────────────────────────────── */}
          {screen === 5 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                Em qual cidade você mora? 📍
              </h2>
              <TextInput
                placeholder="Ex: Bagé/RS"
                value={answers.cidade}
                onChange={v => setAnswer('cidade', v)}
                onEnter={advance}
                error={errors.cidade}
                autoFocus
              />
            </div>
          )}

          {/* ── Tela 6: Curso ──────────────────────────────────────────── */}
          {screen === 6 && (
            <div className="space-y-4">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                Qual curso você está buscando? 🎓
              </h2>
              <div className="space-y-2.5">
                {CURSOS.map((c, i) => (
                  <ChoiceOption
                    key={c.id} id={c.id} label={c.label} emoji={c.emoji} index={i}
                    selected={answers.curso === c.id}
                    onSelect={() => setAnswer('curso', c.id)}
                  />
                ))}
              </div>
              {errors.curso && <p className="text-red-400 text-xs">{errors.curso}</p>}
            </div>
          )}

          {/* ── Tela 7: Nível de contato com inglês ────────────────────── */}
          {screen === 7 && (
            <div className="space-y-4">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                Já teve contato com o inglês antes? 🎓
              </h2>
              <div className="space-y-2.5">
                {NIVEL_CONTATO.map((n, i) => (
                  <ChoiceOption
                    key={n.id} id={n.id} label={n.label} index={i}
                    selected={answers.nivel_contato === n.id}
                    onSelect={() => setAnswer('nivel_contato', n.id)}
                  />
                ))}
              </div>
              {errors.nivel_contato && <p className="text-red-400 text-xs">{errors.nivel_contato}</p>}
            </div>
          )}

          {/* ── Tela 8: Motivação ──────────────────────────────────────── */}
          {screen === 8 && (
            <div className="space-y-4">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                O que mais te motiva a aprender inglês? 💡
              </h2>
              <div className="space-y-2.5">
                {MOTIVACOES.map((m, i) => (
                  <ChoiceOption
                    key={m.id} id={m.id} label={m.label} emoji={m.emoji} index={i}
                    selected={answers.motivacao === m.id}
                    onSelect={() => setAnswer('motivacao', m.id)}
                  />
                ))}
              </div>
              {errors.motivacao && <p className="text-red-400 text-xs">{errors.motivacao}</p>}
            </div>
          )}

          {/* ── Tela 9: Como conheceu ──────────────────────────────────── */}
          {screen === 9 && (
            <div className="space-y-4">
              <h2 className="text-xl font-black text-purple-brand leading-tight">
                Como você conheceu a OpenLife? 📣
              </h2>
              <div className="space-y-2.5">
                {COMO_CONHECEU.map((c, i) => (
                  <ChoiceOption
                    key={c.id} id={c.id} label={c.label} index={i}
                    selected={answers.como_conheceu === c.id}
                    onSelect={() => setAnswer('como_conheceu', c.id)}
                  />
                ))}
              </div>
              {errors.como_conheceu && <p className="text-red-400 text-xs">{errors.como_conheceu}</p>}
            </div>
          )}

          {/* ── Tela 10: Termos LGPD + enviar ─────────────────────────── */}
          {screen === 10 && (
            <div className="space-y-5">
              <div className="text-center space-y-2">
                <div className="text-3xl">✨</div>
                <h2 className="text-xl font-black text-slate-900">
                  Quase lá, {answers.nome.split(' ')[0]}!
                </h2>
                <p className="text-sm text-slate-500">
                  Confirme sua autorização para nossa equipe entrar em contato.
                </p>
              </div>
              <label className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer border-2 transition-colors ${
                lgpd ? 'border-purple-brand bg-purple-50' : errors.lgpd ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-slate-50'
              }`}>
                <button
                  type="button"
                  onClick={() => setLgpd(v => !v)}
                  className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                    lgpd ? 'bg-purple-brand border-purple-brand' : 'border-gray-300 bg-white'
                  }`}
                >
                  {lgpd && <span className="text-white text-[10px] font-black leading-none">✓</span>}
                </button>
                <span className="text-xs text-slate-600 leading-relaxed">{LGPD_TEXT}</span>
              </label>
              {errors.lgpd && <p className="text-red-400 text-xs">{errors.lgpd}</p>}
            </div>
          )}

          {/* ── Tela 11: Sucesso ───────────────────────────────────────── */}
          {screen === 11 && (
            <div className="text-center space-y-5 py-4">
              <div className="text-5xl">✨</div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  Parabéns por chegar até aqui!
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Você deu um passo real em direção ao seu futuro.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 space-y-2.5 text-sm">
                <p className="text-slate-600">🎁 Em breve, nossa equipe vai entrar em contato.</p>
                <p className="font-black text-purple-brand">🚀 Seu futuro pode ser +.</p>
                <p className="text-slate-600">
                  📲 Fique de olho no WhatsApp! 💜<br />
                  <strong className="text-slate-800">(53) 99965-6216</strong>
                </p>
              </div>
              <p className="text-[11px] text-slate-400">Sua opinião é muito importante pra gente.</p>
              <button
                onClick={close}
                className="w-full bg-purple-brand text-white py-4 rounded-full font-black text-lg hover:bg-purple-deep transition-all shadow-lg shadow-purple-brand/20"
              >
                Fechar
              </button>
            </div>
          )}
        </div>

        {/* Rodapé: botão Avançar (etapas 1-10) */}
        {screen >= 1 && screen <= 10 && (
          <div className="px-6 pb-5 pt-3 flex-shrink-0 border-t border-gray-50">
            <button
              onClick={advance}
              disabled={submitting}
              className="w-full bg-purple-brand text-white py-4 rounded-full font-black text-base hover:bg-purple-deep transition-all flex items-center justify-center gap-2 shadow-md shadow-purple-brand/20 disabled:opacity-70"
            >
              {submitting ? (
                <Loader2 size={20} className="animate-spin" />
              ) : screen === 10 ? (
                <>Enviar <ArrowRight size={18} /></>
              ) : (
                'Avançar'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartForm;
