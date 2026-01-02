import { GoogleGenerativeAI } from "@google/generative-ai";

// DEPRECATED: Migrated to Groq. Keeping this safe to prevent crash if imported.
if (!process.env.GEMINI_API_KEY) {
    console.warn("GEMINI_API_KEY missing - Gemini lib is in dummy mode.");
}

// Dummy export to satisfy imports until fully removed
export const gemini = process.env.GEMINI_API_KEY
    ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    : { getGenerativeModel: () => ({ generateContent: async () => ({ response: { text: () => "{}" } }) }) } as any;

// End of file
