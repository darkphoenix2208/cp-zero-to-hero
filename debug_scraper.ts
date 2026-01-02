
async function main() {
    const url = "https://codeforces.com/contest/1385/problem/C";
    const res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
    });

    const html = await res.text();
    console.log("Status:", res.status);
    console.log("Length:", html.length);
    console.log("--- START HTML SNAPSHOT ---");
    console.log(html.slice(0, 2000)); // Print head

    // Print Input Section specifically if found
    const inputIdx = html.indexOf('class="input"');
    if (inputIdx !== -1) {
        console.log("--- INPUT SECTION ---");
        console.log(html.slice(inputIdx, inputIdx + 500));
    } else {
        console.log("--- NO INPUT CLASS FOUND ---");
    }
}

main();
