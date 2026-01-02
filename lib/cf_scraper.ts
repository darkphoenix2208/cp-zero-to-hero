
export type TestCase = {
    input: string;
    output: string;
};

export async function getProblemSamples(problemIdOrUrl: string): Promise<TestCase[]> {
    try {
        let url = problemIdOrUrl;

        // Normalize Input: "1500A" -> "https://codeforces.com/contest/1500/problem/A"
        if (!url.startsWith('http')) {
            const match = url.match(/(\d+)([A-Z]\d?)/i);
            if (match) {
                url = `https://codeforces.com/contest/${match[1]}/problem/${match[2].toUpperCase()}`;
            } else {
                return []; // Invalid format for ID
            }
        }

        const res = await fetch(url, {
            headers: {
                // CF blocks requests without user-agent sometimes
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });

        if (!res.ok) return [];

        const html = await res.text();
        const cases: TestCase[] = [];

        // Regex Strategies
        // Standard CF format: <div class="input">...<pre>CONTENT</pre>...</div>

        // Match all INPUT sections
        const inputRegex = /<div class="input">[\s\S]*?<pre>([\s\S]*?)<\/pre>/g;
        // Match all OUTPUT sections
        const outputRegex = /<div class="output">[\s\S]*?<pre>([\s\S]*?)<\/pre>/g;

        const inputs: string[] = [];
        const outputs: string[] = [];

        let match;
        while ((match = inputRegex.exec(html)) !== null) {
            // Replace <br> with newlines and strip other tags if any
            let content = match[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();
            inputs.push(content);
        }

        while ((match = outputRegex.exec(html)) !== null) {
            let content = match[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();
            outputs.push(content);
        }

        // Zip them
        const count = Math.min(inputs.length, outputs.length);
        for (let i = 0; i < count; i++) {
            cases.push({
                input: inputs[i],
                output: outputs[i]
            });
        }

        return cases;

    } catch (e) {
        console.error("CF Scraper Error:", e);
        return [];
    }
}
