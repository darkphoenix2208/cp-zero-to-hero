module.exports=[70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},73704,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),o=e.i(61916),s=e.i(74677),i=e.i(69741),l=e.i(16795),u=e.i(87718),c=e.i(95169),p=e.i(47587),d=e.i(66012),h=e.i(70101),x=e.i(26937),g=e.i(10372),m=e.i(93695);e.i(52474);var f=e.i(220),R=e.i(89171),E=e.i(25034);let y="llama-3.3-70b-versatile",v=`
You are a skeptical, strict Senior Google Engineer interviewing a candidate.
Analyze the following code snippet.
1. If the code is simple boilerplate or very short (< 5 lines), return { "trigger": false }.
2. If you see a Loop (for/while), Recursion, or Map/Set data structure:
   - STOP the candidate. Set "trigger": true.
   - Generate a short, tough question about Time Complexity, Edge Cases, or Memory.
   - Example: 'Wait, why use a Map here? Isn't a Vector faster for small N?'
   - KEEP IT SHORT (under 2 sentences). DO NOT be polite. Be direct.
3. If no complex logic found, return "trigger": false.

Return strictly JSON: { "trigger": boolean, "question": string, "context": string }
`,C=`
You are a skeptical Senior Google Engineer. The candidate claims they are DONE and has submitted this solution.
DO NOT accept it blindly. You MUST ask a follow-up question to verify their understanding.

Your Goal: Probe their intuition, Time Complexity, or ask if this is truly optimal.
- "Is this the optimal approach? What is the Time Complexity?"
- "Can you explain the intuition behind this specific loop?"
- "Did you consider the constraint N=10^5? Will this TLE?"

Return strictly JSON: { "trigger": true, "question": string, "context": "submission" }
`,w=`
You are a skeptical interviewer. The candidate has answered your question.
Evaluate if their answer is technically correct.
Question: {{QUESTION}}
Candidate Code Context: {{CODE}}
Candidate Answer: {{ANSWER}}

If correct, be briefly approving but cool.
If incorrect, explain why briefly.

Return strictly JSON: { "correct": boolean, "feedback": string }
`;async function S(e){try{let t=await e.json(),{type:r,code:a,question:n,answer:o,force:s}=t,i=`
You are an Online Judge (OJ) System.
Execute the user's code MENTALLY against the provided Test Cases.

Input:
Code: {{CODE}}
Test Cases: {{TESTCASES}}

Task:
1. Trace the code logic carefully.
2. Check if it produces the Correct Output for EACH test case.
3. Check for Infinite Loops or obvious Logic Errors.

Return strictly JSON:
{
    "trigger": true,
    "question": "Verdict: [ACCEPTED / WRONG ANSWER / TLE] (Summary of what failed)",
    "context": "submission_verdict"
}
If All Passed: "Verdict: ACCEPTED. Your logic is sound. What is the complexity?"
If Failed: "Verdict: WRONG ANSWER on Case 2. Input: [X], Expected: [Y], Your Code Produced: [Z]."
`;if("interrupt"===r){let e=s?C:v;s&&t.testCases&&t.testCases.length>0&&(e=i.replace("{{CODE}}",a).replace("{{TESTCASES}}",JSON.stringify(t.testCases)));let r=await E.groq.chat.completions.create({messages:[{role:"system",content:e},{role:"user",content:`CODE SNIPPET:
${a}`}],model:y,temperature:.7,max_tokens:250,response_format:{type:"json_object"}}),n=r.choices[0]?.message?.content||"{}";console.log("GROQ RAW RESP:",n);try{let e=JSON.parse(n);return R.NextResponse.json(e)}catch(e){return console.error("JSON PARSE ERROR",n),R.NextResponse.json({trigger:!0,question:"I see you used a complex structure. Can you explain the Time Complexity of your approach?",context:"json_parse_fallback"})}}if("validate"===r){let e=w.replace("{{QUESTION}}",n).replace("{{CODE}}",a?.slice(0,500)||"").replace("{{ANSWER}}",o),t=await E.groq.chat.completions.create({messages:[{role:"system",content:e}],model:y,temperature:.7,max_tokens:250,response_format:{type:"json_object"}}),r=t.choices[0]?.message?.content||"{}";try{return R.NextResponse.json(JSON.parse(r))}catch(e){return R.NextResponse.json({correct:!0,feedback:"Keep going."})}}return R.NextResponse.json({error:"Invalid type"},{status:400})}catch(t){console.error("Groq API Error:",t);let e=t.message||String(t);return R.NextResponse.json({trigger:!0,question:`(System Error: ${e}) Let's skip the pleasantries. What is the Space Complexity?`,context:"system_error"})}}e.s(["POST",()=>S],46746);var T=e.i(46746);let N=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/interview/interrupt/route",pathname:"/api/interview/interrupt",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/interview/interrupt/route.ts",nextConfigOutput:"",userland:T}),{workAsyncStorage:b,workUnitAsyncStorage:O,serverHooks:A}=N;function P(){return(0,a.patchFetch)({workAsyncStorage:b,workUnitAsyncStorage:O})}async function k(e,t,a){N.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let R="/api/interview/interrupt/route";R=R.replace(/\/index$/,"")||"/";let E=await N.prepare(e,t,{srcPage:R,multiZoneDraftMode:!1});if(!E)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:y,params:v,nextConfig:C,parsedUrl:w,isDraftMode:S,prerenderManifest:T,routerServerContext:b,isOnDemandRevalidate:O,revalidateOnlyGenerated:A,resolvedPathname:P,clientReferenceManifest:k,serverActionsManifest:I}=E,_=(0,i.normalizeAppPath)(R),q=!!(T.dynamicRoutes[_]||T.routes[P]),j=async()=>((null==b?void 0:b.render404)?await b.render404(e,t,w,!1):t.end("This page could not be found"),null);if(q&&!S){let e=!!T.routes[P],t=T.dynamicRoutes[_];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await j();throw new m.NoFallbackError}}let D=null;!q||N.isDev||S||(D="/index"===(D=P)?"/":D);let H=!0===N.isDev||!q,U=q&&!H;I&&k&&(0,s.setManifestsSingleton)({page:R,clientReferenceManifest:k,serverActionsManifest:I});let M=e.method||"GET",W=(0,o.getTracer)(),L=W.getActiveScopeSpan(),G={params:v,prerenderManifest:T,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:H,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,n)=>N.onRequestError(e,t,a,n,b)},sharedContext:{buildId:y}},$=new l.NodeNextRequest(e),J=new l.NodeNextResponse(t),K=u.NextRequestAdapter.fromNodeNextRequest($,(0,u.signalFromNodeResponse)(t));try{let s=async e=>N.handle(K,G).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=W.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${M} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${M} ${R}`)}),i=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var o,l;let u=async({previousCacheEntry:r})=>{try{if(!i&&O&&A&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await s(n);e.fetchMetrics=G.renderOpts.fetchMetrics;let l=G.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let u=G.renderOpts.collectedTags;if(!q)return await (0,d.sendResponse)($,J,o,G.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(o.headers);u&&(t[g.NEXT_CACHE_TAGS_HEADER]=u),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==G.renderOpts.collectedRevalidate&&!(G.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&G.renderOpts.collectedRevalidate,a=void 0===G.renderOpts.collectedExpire||G.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:G.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await N.onRequestError(e,t,{routerKind:"App Router",routePath:R,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:O})},!1,b),t}},c=await N.handleResponse({req:e,nextConfig:C,cacheKey:D,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:O,revalidateOnlyGenerated:A,responseGenerator:u,waitUntil:a.waitUntil,isMinimalMode:i});if(!q)return null;if((null==c||null==(o=c.value)?void 0:o.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",O?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),S&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,h.fromNodeOutgoingHttpHeaders)(c.value.headers);return i&&q||m.delete(g.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,x.getCacheControlHeader)(c.cacheControl)),await (0,d.sendResponse)($,J,new Response(c.value.body,{headers:m,status:c.value.status||200})),null};L?await l(L):await W.withPropagatedContext(e.headers,()=>W.trace(c.BaseServerSpan.handleRequest,{spanName:`${M} ${R}`,kind:o.SpanKind.SERVER,attributes:{"http.method":M,"http.target":e.url}},l))}catch(t){if(t instanceof m.NoFallbackError||await N.onRequestError(e,t,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:O})},!1,b),q)throw t;return await (0,d.sendResponse)($,J,new Response(null,{status:500})),null}}e.s(["handler",()=>k,"patchFetch",()=>P,"routeModule",()=>N,"serverHooks",()=>A,"workAsyncStorage",()=>b,"workUnitAsyncStorage",()=>O],73704)},19124,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__826cbbc8._.js"].map(t=>e.l(t))).then(()=>t(18870)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__702a0aa6._.js.map