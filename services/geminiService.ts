import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Raisul Rumon's portfolio website. 
Raisul is a Creative Designer & Developer based in Dhaka, Bangladesh.
He has 6+ years of experience in UI/UX design and Frontend Development (React, Vue).
He has completed 128+ projects and has 42+ happy clients.
He specializes in creating engaging, user-friendly digital experiences.
He uses tools like Photoshop, Illustrator, Figma, and codes with React, TypeScript, and Tailwind.

Your goal is to answer visitor questions about Raisul professionally and briefly.
If asked about contact info, direct them to the contact section or email raisulrumon.co@gmail.com.
Keep answers under 3 sentences when possible.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (!aiClient && process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, but the AI features are currently unavailable (Missing API Key).";
  }
  
  initializeGenAI();

  if (!aiClient) return "Failed to initialize AI.";

  try {
    const model = aiClient.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I'm not sure how to answer that right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered a temporary error. Please try again later.";
  }
};