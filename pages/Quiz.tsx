import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Loader2, ArrowRight } from 'lucide-react';

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
const WA_NUMBER = '5553999656216';

function derivarPersona(curso: string, motivacao: string): string {
  if (curso.includes('Kids') || curso.includes('Teens')) return 'kids_teens';
  if (motivacao.includes('Viajar')) return 'viajante';
  if (motivacao.includes('acadêmicas') || motivacao.includes('Estudar fora')) return 'universitario';
  if (motivacao.includes('carreira') || motivacao.includes('desenvolver')) return 'profissional';
  if (curso.includes('Keep the Fluency')) return 'profissional';
  return 'profissional';
}

// ─── Sub-componentes ──────────────────────────────────────────────────────────
interface ChoiceOptionProps {
  id: string; label: string; emoji?: string; index: number;
  selected: boolean; onSelect: () => void;
}

function ChoiceOption({ id, label, emoji, index, selected, onSelect }: ChoiceOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left flex items-center gap-3 px-4 py-4 rounded-2xl border-2 transition-all active:scale-[0.99] ${
        selected
          ? 'border-purple-brand bg-violet-50 shadow-sm'
          : 'border-gray-200 bg-white hover:border-purple-200 hover:bg-purple-50'
      }`}
    >
      <span className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-black transition-all ${
        selected ? 'bg-purple-brand text-white' : 'bg-gray-100 text-gray-500'
      }`}>
        {LETTERS[index]}
      </span>
      {emoji && <span className="text-xl leading-none">{emoji}</span>}
      <span className={`font-semibold text-sm leading-snug flex-1 ${selected ? 'text-purple-700' : 'text-slate-700'}`}>
        {label}
      </span>
    </button>
  );
}

interface TextInputProps {
  type?: string; placeholder: string; value: string;
  onChange: (v: string) => void; onEnter?: () => void; error?: string;
  autoFocus?: boolean; prefix?: React.ReactNode; inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}

function TextInput({ type = 'text', placeholder, value, onChange, onEnter, error, autoFocus = false, prefix, inputMode }: TextInputProps) {
  return (
    <div className="space-y-1.5">
      <div className={`flex items-center gap-2 border-b-2 py-3 transition-all ${
        error ? 'border-red-400' : 'border-gray-200 focus-within:border-purple-brand'
      }`}>
        {prefix}
        <input
          type={type}
          inputMode={inputMode}
          autoFocus={autoFocus}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onEnter?.()}
          className="flex-1 text-slate-800 font-semibold text-lg focus:outline-none placeholder:text-slate-300 bg-transparent"
        />
      </div>
      {error && <p className="text-red-400 text-sm pt-0.5">{error}</p>}
    </div>
  );
}

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface Answers {
  nome: string; email: string; whatsapp: string; idade: string; cidade: string;
  curso: string; nivel_contato: string; motivacao: string; como_conheceu: string;
}

const EMPTY_ANSWERS: Answers = {
  nome: '', email: '', whatsapp: '', idade: '', cidade: '',
  curso: '', nivel_contato: '', motivacao: '', como_conheceu: '',
};

// ─── Componente principal ─────────────────────────────────────────────────────
const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [screen, setScreen]   = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [lgpd, setLgpd]       = useState(false);
  const [leadId, setLeadId]   = useState<string | null>(null);
  const [submitting, setSub]  = useState(false);
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll para o topo a cada mudança de tela
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [screen]);

  const setAnswer = (field: keyof Answers, value: string) =>
    setAnswers(a => ({ ...a, [field]: value }));

  // ── Autosave progressivo ─────────────────────────────────────────────────
  const autosave = useCallback(async (id: string, campos: Partial<Answers>) => {
    if (id.startsWith('local_')) return;
    try {
      await fetch(`/api/lead/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ campos }),
      });
    } catch { /* noop */ }
  }, []);

  // Cria lead parcial no passo 1 (nome)
  const startLead = async (nome: string): Promise<string | null> => {
    try {
      const res = await fetch('/api/lead/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagina_origem: '/quiz',
          status: 'iniciado',
          campos: { nome },
          ...captureUTMs(),
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setLeadId(data.id);
        try { localStorage.setItem('ol_lead_id', data.id); } catch { /* noop */ }
        return data.id;
      }
    } catch { /* noop */ }
    return null;
  };

  // ── Validação ────────────────────────────────────────────────────────────
  const validate = (step: number): boolean => {
    const errs: Record<string, string> = {};
    if (step === 1  && !answers.nome.trim())                                         errs.nome          = 'Informe seu nome completo';
    if (step === 2  && (!answers.email.includes('@') || !answers.email.includes('.'))) errs.email       = 'E-mail inválido';
    if (step === 3  && !/^\d{10,11}$/.test(answers.whatsapp.replace(/\D/g, '')))      errs.whatsapp    = 'WhatsApp inválido (com DDD)';
    if (step === 4  && !answers.idade.trim())                                         errs.idade        = 'Informe a idade';
    if (step === 5  && !answers.cidade.trim())                                        errs.cidade       = 'Informe sua cidade';
    if (step === 6  && !answers.curso)                                                errs.curso        = 'Selecione o curso desejado';
    if (step === 7  && !answers.nivel_contato)                                        errs.nivel_contato = 'Selecione uma opção';
    if (step === 8  && !answers.motivacao)                                            errs.motivacao    = 'Selecione uma opção';
    if (step === 9  && !answers.como_conheceu)                                        errs.como_conheceu = 'Selecione uma opção';
    if (step === 10 && !lgpd)                                                         errs.lgpd         = 'Aceite os termos para continuar';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ── Avançar ──────────────────────────────────────────────────────────────
  const advance = async () => {
    if (!validate(screen)) return;
    setErrors({});

    if (screen === 10) { await handleSubmit(); return; }

    if (screen === 1) {
      // Cria lead ao capturar o nome
      startLead(answers.nome);
    } else if (screen >= 2) {
      // Autosave de cada resposta nova
      const id = leadId || `local_${Date.now()}`;
      const fieldOrder: (keyof Answers)[] = ['nome', 'email', 'whatsapp', 'idade', 'cidade', 'curso', 'nivel_contato', 'motivacao', 'como_conheceu'];
      const campos: Partial<Answers> = {};
      fieldOrder.slice(0, screen).forEach(f => { campos[f] = answers[f]; });
      autosave(id, campos);
    }

    setScreen(s => s + 1);
  };

  const back = () => {
    setErrors({});
    if (screen === 0) { navigate('/'); return; }
    setScreen(s => Math.max(0, s - 1));
  };

  // ── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    setSub(true);
    try {
      const lid = leadId || `local_${Date.now()}`;
      const persona = derivarPersona(answers.curso, answers.motivacao);
      await fetch(`/api/lead/${lid}/complete`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagina_origem: '/quiz',
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

  // ── Progress ─────────────────────────────────────────────────────────────
  const progress = screen === 0 ? 0 : screen >= 11 ? 100 : (screen / 10) * 100;
  const primeiroNome = answers.nome.split(' ')[0];

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Barra de progresso colorida ──────────────────────────────── */}
      <div className="h-1.5 bg-gray-100 flex-shrink-0">
        <div
          className="h-full bg-gradient-to-r from-purple-deep to-purple-brand transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0 bg-white sticky top-0 z-10">
        <button
          onClick={back}
          className="flex items-center gap-1 text-slate-400 hover:text-purple-brand transition-colors"
          aria-label="Voltar"
        >
          <ChevronLeft size={22} />
          <span className="text-sm font-medium hidden sm:inline">Voltar</span>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🌍</span>
          <span className="font-black text-purple-brand text-base tracking-tight">OpenLife</span>
        </div>

        {/* Counter */}
        {screen >= 1 && screen <= 9 && (
          <span className="text-xs font-bold text-slate-400 tracking-wide">
            {screen} / 9
          </span>
        )}
        {(screen === 0 || screen === 10 || screen === 11) && (
          <span className="w-10" />
        )}
      </header>

      {/* ── Corpo principal ──────────────────────────────────────────── */}
      <div ref={contentRef} className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto px-5 py-8 pb-32 min-h-full">

          {/* ── Tela 0: Boas-vindas ────────────────────────────────────── */}
          {screen === 0 && (
            <div className="text-center space-y-6 py-6">
              <div className="text-7xl">🌍</div>
              <div className="space-y-3">
                <h1 className="text-3xl font-black text-slate-900 leading-tight">
                  Seja bem-vindo(a) à<br />
                  <span className="text-purple-brand">OpenLife English School!</span>
                </h1>
                <p className="text-slate-500 text-base leading-relaxed max-w-xs mx-auto">
                  Você está prestes a dar o primeiro passo rumo à sua nova versão:{' '}
                  <strong className="text-slate-700">Fluente, confiante e pronto(a) para o mundo.</strong> 🌍💬
                </p>
                <p className="text-slate-400 text-sm">
                  💡 Leva só <strong className="text-slate-600">1 minutinho</strong>.
                </p>
              </div>
              <button
                onClick={() => setScreen(1)}
                className="w-full mt-2 bg-purple-brand text-white py-5 rounded-2xl font-black text-xl hover:bg-purple-deep transition-all shadow-lg shadow-purple-brand/25 active:scale-[0.98]"
              >
                Borá! 🚀
              </button>
              <div className="flex items-center justify-center gap-2 pt-1">
                <span className="text-purple-brand text-sm">★★★★★</span>
                <span className="text-sm text-slate-400">+66k alunos formados · OpenLife Brasil</span>
              </div>
            </div>
          )}

          {/* ── Tela 1: Nome ─────────────────────────────────────────── */}
          {screen === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 1 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  Qual o seu nome completo? ✍️
                </h2>
              </div>
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
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 2 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  Qual é o seu melhor e-mail? 📧
                </h2>
              </div>
              <TextInput
                type="email"
                inputMode="email"
                placeholder="seuemail@exemplo.com"
                value={answers.email}
                onChange={v => setAnswer('email', v)}
                onEnter={advance}
                error={errors.email}
                autoFocus
              />
            </div>
          )}

          {/* ── Tela 3: WhatsApp ──────────────────────────────────────── */}
          {screen === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 3 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  E o número do seu WhatsApp? 📱
                </h2>
              </div>
              <TextInput
                type="tel"
                inputMode="tel"
                placeholder="( 00 ) 00000-0000"
                value={answers.whatsapp}
                onChange={v => setAnswer('whatsapp', v)}
                onEnter={advance}
                error={errors.whatsapp}
                autoFocus
                prefix={
                  <div className="flex items-center gap-1.5 pr-3 border-r border-gray-200 flex-shrink-0">
                    <span className="text-xl">🇧🇷</span>
                    <span className="text-slate-400 text-base font-semibold">+55</span>
                  </div>
                }
              />
            </div>
          )}

          {/* ── Tela 4: Idade ─────────────────────────────────────────── */}
          {screen === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 4 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  Qual é a idade do futuro aluno? 🎂
                </h2>
              </div>
              <TextInput
                type="number"
                inputMode="numeric"
                placeholder="Ex: 28"
                value={answers.idade}
                onChange={v => setAnswer('idade', v)}
                onEnter={advance}
                error={errors.idade}
                autoFocus
              />
            </div>
          )}

          {/* ── Tela 5: Cidade ────────────────────────────────────────── */}
          {screen === 5 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 5 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  Em qual cidade você mora? 📍
                </h2>
              </div>
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

          {/* ── Tela 6: Curso ─────────────────────────────────────────── */}
          {screen === 6 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 6 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  Qual curso você está buscando? 🎓
                </h2>
              </div>
              <div className="space-y-3">
                {CURSOS.map((c, i) => (
                  <ChoiceOption
                    key={c.id} id={c.id} label={c.label} emoji={c.emoji} index={i}
                    selected={answers.curso === c.id}
                    onSelect={() => setAnswer('curso', c.id)}
                  />
                ))}
              </div>
              {errors.curso && <p className="text-red-400 text-sm">{errors.curso}</p>}
            </div>
          )}

          {/* ── Tela 7: Nível de contato ──────────────────────────────── */}
          {screen === 7 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 7 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  Já teve contato com o inglês antes? 🎓
                </h2>
              </div>
              <div className="space-y-3">
                {NIVEL_CONTATO.map((n, i) => (
                  <ChoiceOption
                    key={n.id} id={n.id} label={n.label} index={i}
                    selected={answers.nivel_contato === n.id}
                    onSelect={() => setAnswer('nivel_contato', n.id)}
                  />
                ))}
              </div>
              {errors.nivel_contato && <p className="text-red-400 text-sm">{errors.nivel_contato}</p>}
            </div>
          )}

          {/* ── Tela 8: Motivação ─────────────────────────────────────── */}
          {screen === 8 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 8 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  O que mais te motiva a aprender inglês? 💡
                </h2>
              </div>
              <div className="space-y-3">
                {MOTIVACOES.map((m, i) => (
                  <ChoiceOption
                    key={m.id} id={m.id} label={m.label} emoji={m.emoji} index={i}
                    selected={answers.motivacao === m.id}
                    onSelect={() => setAnswer('motivacao', m.id)}
                  />
                ))}
              </div>
              {errors.motivacao && <p className="text-red-400 text-sm">{errors.motivacao}</p>}
            </div>
          )}

          {/* ── Tela 9: Como conheceu ─────────────────────────────────── */}
          {screen === 9 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-bold text-purple-brand uppercase tracking-wider">Pergunta 9 de 9</p>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  Como você conheceu a OpenLife? 📣
                </h2>
              </div>
              <div className="space-y-3">
                {COMO_CONHECEU.map((c, i) => (
                  <ChoiceOption
                    key={c.id} id={c.id} label={c.label} index={i}
                    selected={answers.como_conheceu === c.id}
                    onSelect={() => setAnswer('como_conheceu', c.id)}
                  />
                ))}
              </div>
              {errors.como_conheceu && <p className="text-red-400 text-sm">{errors.como_conheceu}</p>}
            </div>
          )}

          {/* ── Tela 10: LGPD ─────────────────────────────────────────── */}
          {screen === 10 && (
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <div className="text-5xl">✨</div>
                <h2 className="text-2xl font-black text-slate-900">
                  Quase lá, {primeiroNome || 'você'}!
                </h2>
                <p className="text-slate-500 text-base">
                  Confirme sua autorização para nossa equipe entrar em contato.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLgpd(v => !v)}
                className={`w-full flex items-start gap-4 p-5 rounded-2xl cursor-pointer border-2 transition-all text-left ${
                  lgpd ? 'border-purple-brand bg-purple-50' : errors.lgpd ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-slate-50'
                }`}
              >
                <span className={`w-6 h-6 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                  lgpd ? 'bg-purple-brand border-purple-brand' : 'border-gray-300 bg-white'
                }`}>
                  {lgpd && <span className="text-white text-xs font-black leading-none">✓</span>}
                </span>
                <span className="text-sm text-slate-600 leading-relaxed">{LGPD_TEXT}</span>
              </button>
              {errors.lgpd && <p className="text-red-400 text-sm">{errors.lgpd}</p>}
            </div>
          )}

          {/* ── Tela 11: Sucesso ──────────────────────────────────────── */}
          {screen === 11 && (
            <div className="text-center space-y-6 py-4">
              <div className="text-7xl">🎉</div>
              <div className="space-y-3">
                <h2 className="text-3xl font-black text-slate-900 leading-tight">
                  Parabéns, {primeiroNome || 'você'} deu o primeiro passo!
                </h2>
                <p className="text-slate-500 text-base leading-relaxed">
                  Você está mais perto do seu futuro fluente.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 space-y-3 text-left">
                <p className="text-slate-700 text-sm leading-relaxed">
                  🎁 Em breve, nossa equipe vai entrar em contato pelo seu WhatsApp.
                </p>
                <p className="font-black text-purple-brand text-base">
                  🚀 Seu futuro pode ser muito mais do que você imagina!
                </p>
                <p className="text-slate-600 text-sm">
                  📲 Fique de olho no WhatsApp — nossa equipe está pronta para te ajudar. 💜
                </p>
              </div>

              {/* Botão WhatsApp */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Oi%2C%20acabei%20de%20preencher%20o%20quiz%20da%20OpenLife!%20Quero%20saber%20mais%20%F0%9F%9A%80`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#1da856] transition-all shadow-lg shadow-green-500/25 active:scale-[0.98]"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.116 1.515 5.845L.057 23.854a.5.5 0 0 0 .609.61l6.116-1.46A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.012-1.374l-.36-.214-3.727.89.905-3.634-.234-.372A9.818 9.818 0 1 1 12 21.818z"/>
                </svg>
                Falar no WhatsApp
              </a>

              <button
                onClick={() => navigate('/')}
                className="w-full border-2 border-gray-200 text-slate-500 py-4 rounded-2xl font-bold text-base hover:border-purple-brand hover:text-purple-brand transition-all"
              >
                Voltar ao início
              </button>

              <p className="text-xs text-slate-400">
                Dúvidas? Fale com a gente: (53) 99965-6216
              </p>
            </div>
          )}

        </div>
      </div>

      {/* ── Botão fixo inferior (telas 1–10) ─────────────────────────── */}
      {screen >= 1 && screen <= 10 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 z-10">
          <div className="max-w-lg mx-auto">
            <button
              onClick={advance}
              disabled={submitting}
              className="w-full bg-purple-brand text-white py-5 rounded-2xl font-black text-lg hover:bg-purple-deep transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-brand/20 disabled:opacity-70 active:scale-[0.98]"
            >
              {submitting ? (
                <Loader2 size={22} className="animate-spin" />
              ) : screen === 10 ? (
                <>Enviar meus dados <ArrowRight size={20} /></>
              ) : (
                <>Avançar <ArrowRight size={20} /></>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
