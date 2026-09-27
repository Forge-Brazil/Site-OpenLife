import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ─── Trigger global ───────────────────────────────────────────────────────────
// Qualquer botão do site chama openSmartForm() → redireciona para /quiz
interface SmartFormOptions { product?: string; source?: string; }
export const openSmartForm = (_opts: SmartFormOptions = {}) => {
  window.location.href = '/quiz';
};

// ─── Componente: ouve evento global e navega para /quiz ───────────────────────
const SmartForm: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => navigate('/quiz');
    window.addEventListener('openSmartForm', handler);
    return () => window.removeEventListener('openSmartForm', handler);
  }, [navigate]);

  return null;
};

export default SmartForm;
