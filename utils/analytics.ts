// Dispara eventos de conversão para Meta Pixel, GA4 e GTM dataLayer.
// Chamado pelo Quiz no momento em que o lead é concluído (tela 10).

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

interface LeadEventData {
  curso: string;
  persona: string;
  cidade?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export function trackLeadCompleto(data: LeadEventData): void {
  if (typeof window === 'undefined') return;

  // ── Meta Pixel ───────────────────────────────────────────────────
  try {
    window.fbq?.('track', 'Lead', {
      content_name: data.curso,
      content_category: data.persona,
    });
  } catch { /* noop */ }

  // ── GA4 via gtag ─────────────────────────────────────────────────
  try {
    window.gtag?.('event', 'generate_lead', {
      event_category: 'quiz',
      curso: data.curso,
      persona: data.persona,
      cidade: data.cidade,
      utm_source: data.utm_source,
      utm_medium: data.utm_medium,
      utm_campaign: data.utm_campaign,
    });
  } catch { /* noop */ }

  // ── GTM dataLayer ────────────────────────────────────────────────
  try {
    window.dataLayer?.push({
      event: 'lead_completo',
      lead_curso: data.curso,
      lead_persona: data.persona,
      lead_cidade: data.cidade,
      utm_source: data.utm_source,
      utm_medium: data.utm_medium,
      utm_campaign: data.utm_campaign,
    });
  } catch { /* noop */ }
}

export function trackQuizStep(step: number, field: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer?.push({ event: 'quiz_step', quiz_step: step, quiz_field: field });
  } catch { /* noop */ }
}
