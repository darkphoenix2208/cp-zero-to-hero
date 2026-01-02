
async function check() {
    try {
        const res = await fetch('https://codeforces.com/api/user.status?handle=tourist');
        const data = await res.json();
        console.log("Count:", data.result.length);
    } catch (e) {
        console.error(e);
    }
}
check();
