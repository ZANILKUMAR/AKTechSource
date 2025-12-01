import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client safely handling potentially undefined process
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env?.API_KEY) || '';
  } catch (e) {
    return '';
  }
};

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for AKTechSource, a software development agency.
Your goal is to answer visitor questions based ONLY on the following company information.
Keep answers concise, professional, and helpful.

COMPANY INFO:
Name: AKTechSource
Mission: To build technology that simplifies life, accelerates business growth, and delivers real value.
Location: India.
Expertise: Mobile Apps (Android/iOS), Web Apps, Desktop/Windows Apps, API Development, UI/UX Design, Cloud & Hosting.
Tech Stack: C#, ASP.NET Core, Flutter, Angular, SQL Server, Azure, JavaScript.
Featured Product: Pakida (Multi-tool game utility app).
Contact Email: aktechsource@gmail.com
Why Choose Us: Clean code, Fast delivery, Affordable pricing, Custom solutions, Post-delivery support.

If a user asks to hire us or start a project, encourage them to email aktechsource@gmail.com.
If a user asks about something unrelated to software development or the company, politely steer them back to AKTechSource services.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error("API Key not found");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};