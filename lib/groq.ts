import Groq from "groq-sdk";

// Initialize Groq client
// It will automatically look for GROQ_API_KEY in process.env
// But we can also pass it explicitly if needed, though env is best practice.
export const groq = new Groq({
    // Prevent crash if key is missing during build/init.
    // The API call will fail later if invalid, which we handle gracefully.
    apiKey: process.env.GROQ_API_KEY || "dummy_key_to_prevent_crash"
});
