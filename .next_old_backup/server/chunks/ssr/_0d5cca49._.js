module.exports=[25015,a=>{"use strict";let b=(0,a.i(60137).default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);a.s(["Play",()=>b],25015)},8549,a=>{"use strict";let b=(0,a.i(60137).default)("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);a.s(["Pause",()=>b],8549)},53182,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(25015),e=a.i(8549);let f=(0,a.i(60137).default)("bug",[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]),g=`// Generator: Coins [1, 3, 4] vs Target N
function generate() {
    // Generate a random target between 1 and 20
    const target = Math.floor(Math.random() * 20) + 1;
    return target.toString();
}`,h=`// Greedy Solution (Fails for [1, 3, 4])
function solve(input) {
    let n = parseInt(input);
    const coins = [4, 3, 1]; // Sorted descending
    let count = 0;
    
    for(let c of coins) {
        while(n >= c) {
            n -= c;
            count++;
        }
    }
    return count.toString();
}`,i=`// Brute Force (Recursive/DP) - Correct
function solve(input) {
    const n = parseInt(input);
    const coins = [1, 3, 4];
    
    // Simple recursion for small N
    function minCoins(amount) {
        if(amount === 0) return 0;
        if(amount < 0) return Infinity;
        
        let res = Infinity;
        for(let c of coins) {
            res = Math.min(res, minCoins(amount - c) + 1);
        }
        return res;
    }
    
    const ans = minCoins(n);
    return ans.toString();
}`;function j(){let[a,j]=(0,c.useState)(g),[k,l]=(0,c.useState)(h),[m,n]=(0,c.useState)(i),[o,p]=(0,c.useState)("IDLE"),[q,r]=(0,c.useState)([]),[s,t]=(0,c.useState)(null),[u,v]=(0,c.useState)(0),w=(0,c.useRef)(!1),x=a=>{r(b=>[a,...b].slice(0,50))},y=async()=>{p("RUNNING"),r([]),t(null),v(0),w.current=!1;try{let b=(a,b)=>Function(a+`
return ${b};`)(),c=b(a,"generate"),d=b(k,"solve"),e=b(m,"solve"),f=0;for(;!w.current;){f++,v(f);let a=c(),b=String(d(a)).trim(),g=String(e(a)).trim();if(b!==g){p("FOUND_MISMATCH"),t({input:a,userOut:b,bruteOut:g}),x(`❌ Mismatch found on test #${f}`);return}f%100==0&&(x(`✅ Passed ${f} tests...`),await new Promise(a=>setTimeout(a,0)))}"FOUND_MISMATCH"!==o&&p("IDLE")}catch(a){p("ERROR"),x(`🔥 Script Error: ${a.message}`)}};return(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between bg-zinc-900/50 p-4 rounded-xl border border-zinc-800",children:[(0,b.jsxs)("div",{className:"flex items-center gap-4",children:[(0,b.jsxs)("div",{className:"text-sm text-zinc-400",children:["Status: ",(0,b.jsx)("span",{className:`font-bold ${"RUNNING"===o?"text-green-400":"FOUND_MISMATCH"===o?"text-red-500":"text-zinc-200"}`,children:o})]}),u>0&&(0,b.jsxs)("div",{className:"text-sm text-zinc-500",children:["Iterations: ",u]})]}),(0,b.jsx)("div",{className:"flex gap-2",children:"RUNNING"===o?(0,b.jsxs)("button",{onClick:()=>{w.current=!0,p("IDLE"),x("⏹️ Stopped by user.")},className:"bg-red-500/10 text-red-500 hover:bg-red-500/20 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition border border-red-500/50",children:[(0,b.jsx)(e.Pause,{size:16})," Stop"]}):(0,b.jsxs)("button",{onClick:y,className:"bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition shadow-lg shadow-green-900/20",children:[(0,b.jsx)(d.Play,{size:16})," Run Stress Test"]})})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]",children:[(0,b.jsxs)("div",{className:"flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",children:[(0,b.jsxs)("div",{className:"bg-zinc-950 p-2 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800 flex justify-between items-center",children:[(0,b.jsx)("span",{children:"Generator (JS)"}),(0,b.jsx)("span",{className:"text-xs text-zinc-600",children:"Fn: generate() return string"})]}),(0,b.jsx)("textarea",{value:a,onChange:a=>j(a.target.value),className:"flex-1 bg-zinc-900 p-4 font-mono text-sm text-green-300 resize-none focus:outline-none"})]}),(0,b.jsxs)("div",{className:"flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",children:[(0,b.jsxs)("div",{className:"bg-zinc-950 p-2 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800 flex justify-between items-center",children:[(0,b.jsx)("span",{children:"Optimized Sol  (JS)"}),(0,b.jsx)("span",{className:"text-xs text-zinc-600",children:"Fn: solve(input)"})]}),(0,b.jsx)("textarea",{value:k,onChange:a=>l(a.target.value),className:"flex-1 bg-zinc-900 p-4 font-mono text-sm text-yellow-300 resize-none focus:outline-none"})]}),(0,b.jsxs)("div",{className:"flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",children:[(0,b.jsxs)("div",{className:"bg-zinc-950 p-2 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800 flex justify-between items-center",children:[(0,b.jsx)("span",{children:"Brute Force (JS)"}),(0,b.jsx)("span",{className:"text-xs text-zinc-600",children:"Ref implementation"})]}),(0,b.jsx)("textarea",{value:m,onChange:a=>n(a.target.value),className:"flex-1 bg-zinc-900 p-4 font-mono text-sm text-blue-300 resize-none focus:outline-none"})]})]}),s&&(0,b.jsxs)("div",{className:"bg-red-900/10 border border-red-500/50 p-6 rounded-xl animate-in fade-in slide-in-from-top-4",children:[(0,b.jsxs)("h3",{className:"text-red-400 font-bold text-lg mb-4 flex items-center gap-2",children:[(0,b.jsx)(f,{})," Counter-Example Found!"]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-xs font-bold text-red-500/70 uppercase block mb-1",children:"Input"}),(0,b.jsx)("pre",{className:"bg-zinc-950 p-3 rounded-lg text-sm font-mono border border-red-900/30 overflow-x-auto text-zinc-300",children:s.input})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-xs font-bold text-red-500/70 uppercase block mb-1",children:"Checking Output"}),(0,b.jsx)("pre",{className:"bg-zinc-950 p-3 rounded-lg text-sm font-mono border border-red-900/30 text-yellow-400",children:s.userOut})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-xs font-bold text-green-500/70 uppercase block mb-1",children:"Expected Output"}),(0,b.jsx)("pre",{className:"bg-zinc-950 p-3 rounded-lg text-sm font-mono border border-green-900/30 text-green-400",children:s.bruteOut})]})]})]})]})}a.s(["StressTester",()=>j],53182)}];

//# sourceMappingURL=_0d5cca49._.js.map