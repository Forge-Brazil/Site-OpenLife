
import { GoogleGenAI } from "@google/genai";

// chatWithGemini provides a conversational interface with the OpenLife support model.
export async function chatWithGemini(userMessage: string) {
  // Always initialize with a configuration object containing the API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    Você é o assistente virtual da OpenLife English School. 
    Seu objetivo é ajudar alunos em potencial a entender nossa escola.
    
    Informações chave:
    - Metodologia: ESL (English as a Second Language), focada em falar sem tradução mental.
    - Promessa: Fluência em apenas 18 meses.
    - Cursos: Kids (6-9), Teens (10-12), Journey (13+), Keep the Fluency (Manutenção).
    - História: 21 anos no mercado, mais de 66.000 alunos.
    - Call to Action: Sempre sugira agendar uma aula experimental grátis ou fazer o teste de nível no site.
    
    Responda de forma amigável, entusiasmada e profissional em Português.
  `;

  try {
    // Call generateContent directly on the model instance as per guidelines.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Access the .text property directly from the GenerateContentResponse object.
    return response.text || "Desculpe, tive um problema ao processar sua resposta. Tente novamente!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estou com um pouco de instabilidade agora, mas você pode nos chamar no WhatsApp!";
  }
}
