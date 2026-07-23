export interface AliceMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AliceResponse {
  reply: string;
  leadRegistered?: boolean;
}

// chatWithAlice fala com a Alice (consultora de IA) através do servidor —
// a chave do Gemini e a lógica de cadastro de lead nunca ficam no navegador.
export async function chatWithAlice(messages: AliceMessage[], leadRegistered: boolean): Promise<AliceResponse> {
  try {
    const response = await fetch('/api/alice/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, leadRegistered }),
    });

    if (!response.ok) {
      return { reply: 'Estou com um pouco de instabilidade agora, mas você pode nos chamar no WhatsApp!' };
    }

    return await response.json();
  } catch (error) {
    console.error('Alice chat error:', error);
    return { reply: 'Erro de conexão. Tente novamente em instantes ou nos chame no WhatsApp!' };
  }
}
