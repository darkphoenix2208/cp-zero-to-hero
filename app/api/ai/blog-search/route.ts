import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";

const MODEL = "llama-3.3-70b-versatile";

export async function POST(req: NextRequest) {
    try {
        const { query } = await req.json();

        const prompt = `
        You are an expert Competitive Programmer and "Blog Hunter".
        The user is searching for the BEST tutorials/resources on: "${query}".

        Your goal is to find "Hidden Gems" and high-quality resources that are better than generic SEO spam.
        Prioritize these specifically:
        1. **CP-Algorithms** (The gold standard for algorithms)
        2. **Codeforces Blogs** (High rated community posts ONLY)
        3. **USACO Guide** (Structured learning paths)
        4. **E-Maxx** (Original Russian translation if applicable)
        5. **Topcoder Tutorials** (Classic deep dives)
        6. **AtCoder Projects** (Library implementations)
        7. **CSES Handbook** (Book references)

        Return a JSON object with 10-12 HIGH QUALITY resources. A mix of Articles, Videos (only if exceptional), and Problem Sets.
        
        CRITICAL: DO NOT GUESS DIRECT URLS if you aren't sure. Construct "site:..." Google Search URLs to be safe.
        
        JSON Format:
        {
            "results": [
                { 
                    "title": "Resource Title", 
                    "url": "https://www.google.com/search?q=...", 
                    "author": "Source/Author", 
                    "snippet": "Why is this a hidden gem? (e.g. 'Best visual explanation', ' Deep mathematical proof')",
                    "type": "Article" | "Video" | "Course" | "Problem Set"
                }
            ]
        }
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: prompt }
            ],
            model: MODEL,
            temperature: 0.5,
            response_format: { type: "json_object" }
        });

        const text = completion.choices[0]?.message?.content || "{}";
        const data = JSON.parse(text);

        return NextResponse.json(data);

    } catch (error) {
        console.error("Groq Blog Search Error:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
