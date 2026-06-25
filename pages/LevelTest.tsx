import React, { useState } from 'react';
import { LEVEL_QUESTIONS } from '../constants';
import { ArrowRight, CheckCircle, Award, Brain, Target, Star } from 'lucide-react';

const LevelTest: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'lead' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });

  const handleAnswer = (optionIdx: number) => {
    const newAnswers = [...answers, optionIdx];
    setAnswers(newAnswers);

    if (currentQuestion < LEVEL_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('lead');
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('result');
  };

  const calculateResult = () => {
    const correctCount = answers.filter((ans, idx) => ans === LEVEL_QUESTIONS[idx].correctAnswer).length;
    const score = (correctCount / LEVEL_QUESTIONS.length) * 100;
    
    if (score < 40) return { level: 'Beginner (Iniciante)', desc: 'Você está no começo de uma jornada incrível. O curso OpenLife Journey é perfeito para você!' };
    if (score < 80) return { level: 'Intermediate (Intermediário)', desc: 'Você já tem uma base sólida! Vamos focar na fluência e na confiança para falar.' };
    return { level: 'Advanced (Avançado)', desc: 'Parabéns! Seu inglês é excelente. Nosso curso Keep the Fluency vai levar você ao próximo nível.' };
  };

  const result = calculateResult();

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {step === 'intro' && (
          <div className="p-12 text-center space-y-8">
            <div className="w-20 h-20 bg-orange-100 text-orange-brand rounded-2xl flex items-center justify-center mx-auto">
              <Brain size={40} />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-black text-slate-900">Descubra seu Nível de Inglês</h1>
              <p className="text-slate-500">Responda a 3 perguntas rápidas e receba uma recomendação personalizada em menos de 2 minutos.</p>
            </div>
            <button 
              onClick={() => setStep('quiz')}
              className="w-full bg-purple-brand text-white py-5 rounded-2xl font-bold text-xl hover:bg-purple-700 transition-all flex items-center justify-center group"
            >
              Começar Teste
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {step === 'quiz' && (
          <div className="p-12 space-y-10">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>Pergunta {currentQuestion + 1} de {LEVEL_QUESTIONS.length}</span>
                <span>{Math.round(((currentQuestion + 1) / LEVEL_QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-brand transition-all duration-300" 
                  style={{ width: `${((currentQuestion + 1) / LEVEL_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                {LEVEL_QUESTIONS[currentQuestion].question}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {LEVEL_QUESTIONS[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className="w-full text-left p-5 rounded-xl border-2 border-gray-100 hover:border-purple-brand hover:bg-purple-50 transition-all text-slate-700 font-medium flex items-center justify-between group"
                  >
                    {option}
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-purple-brand transition-colors"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 'lead' && (
          <div className="p-12 space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-black text-slate-900">Quase lá!</h2>
              <p className="text-slate-500">Onde devemos enviar o seu resultado detalhado?</p>
            </div>
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-purple-brand outline-none transition-all"
                  placeholder="Seu nome"
                  value={leadData.name}
                  onChange={e => setLeadData({...leadData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">E-mail</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-purple-brand outline-none transition-all"
                  placeholder="exemplo@email.com"
                  value={leadData.email}
                  onChange={e => setLeadData({...leadData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-purple-brand outline-none transition-all"
                  placeholder="(00) 00000-0000"
                  value={leadData.phone}
                  onChange={e => setLeadData({...leadData, phone: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-brand text-white py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-brand/20"
              >
                Ver Meu Resultado
              </button>
            </form>
          </div>
        )}

        {step === 'result' && (
          <div className="p-12 text-center space-y-8 animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <Award size={48} />
            </div>
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Seu Nível Estimado é:</p>
              <h2 className="text-4xl font-black text-slate-900">{result.level}</h2>
              <p className="text-slate-600 leading-relaxed text-lg max-w-sm mx-auto">
                {result.desc}
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 space-y-4 text-left">
              <h4 className="font-bold text-purple-brand flex items-center">
                <Star size={18} className="mr-2 fill-current" />
                Próximo Passo Recomendado
              </h4>
              <p className="text-sm text-slate-700">
                Ganhe uma <strong>Aula Experimental Grátis</strong> com um de nossos professores para validar seu nível e conhecer a metodologia ESL na prática.
              </p>
            </div>

            <div className="flex flex-col space-y-4 pt-4">
              <button className="w-full bg-orange-brand text-white py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-brand/20">
                Agendar Aula Grátis
              </button>
              <button onClick={() => window.location.href = '/'} className="text-slate-500 font-bold hover:text-slate-700">
                Voltar para a Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LevelTest;