
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDLKTllV1xdbXxO29nJLzFTBWBf6CP-51c";

async function test() {
    console.log("Testing Gemini API Key...");
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Hello, are you working?");
        const response = await result.response;
        const text = response.text();
        console.log("Success! Response:", text);

        console.log("Testing Embeddings...");
        const embedModel = genAI.getGenerativeModel({ model: "embedding-001" });
        const embedResult = await embedModel.embedContent("Test embedding");
        console.log("Embedding Success! Vector length:", embedResult.embedding.values.length);

    } catch (error: any) {
        console.error("Gemini API Error:", error.message);
        process.exit(1);
    }
}

test();
