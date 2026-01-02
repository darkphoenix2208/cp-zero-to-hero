import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";

const MODEL = "llama-3.3-70b-versatile";

export async function POST(req: NextRequest) {
    try {
        const { query } = await req.json();

        const prompt = `
        You are an expert Competitive Programmer. The user is searching for tutorials on: "${query}".
        Return a JSON object with a list of 5-8 HIGH QUALITY resources.

        CRITICAL: DO NOT GUESS DIRECT URLS. THEY OFTEN 404.
        Instead, construct Google Search URLs for specific reputable sites.

        INSTRUCTIONS:
        1. **CP-Algorithms**: URL should be "https://www.google.com/search?q=site:cp-algorithms.com+${query}"
        2. **Codeforces**: URL should be "https://www.google.com/search?q=site:codeforces.com+${query}+tutorial"
        3. **USACO Guide**: URL should be "https://www.google.com/search?q=site:usaco.guide+${query}"
        4. **GeeksForGeeks/Other**: "https://www.google.com/search?q=${query}+tutorial"

        Your job is to identify the BEST SITE for the specific topic (e.g. CP-Algorithms is best for Graphs, USACO for DP) and generate the search link for THAT site.

        JSON Format:
        {
            "results": [
                { 
                    "title": "Topic Name (Source)", 
                    "url": "https://www.google.com/search?q=...", 
                    "author": "Source Name", 
                    "snippet": "Brief summary of why this source is good." 
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
