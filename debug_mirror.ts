
async function main() {
    const url = "https://mirror.codeforces.com/contest/1385/problem/C";
    console.log("Testing Mirror:", url);

    try {
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });

        console.log("Status:", res.status);
        if (res.ok) {
            const html = await res.text();
            const inputIdx = html.indexOf('class="input"');
            console.log("Input found?", inputIdx !== -1);
            if (inputIdx !== -1) {
                console.log(html.slice(inputIdx, inputIdx + 200));
            }
        } else {
            console.log("Text:", await res.text().catch(() => "No text"));
        }
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}

main();
