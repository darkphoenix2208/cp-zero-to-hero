(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31343,e=>{"use strict";let t=(0,e.i(75254).default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);e.s(["Play",()=>t],31343)},88784,e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach(function(t){var r;r=i[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function n(e){return function t(){for(var r=this,i=arguments.length,n=Array(i),s=0;s<i;s++)n[s]=arguments[s];return n.length>=e.length?e.apply(this,n):function(){for(var e=arguments.length,i=Array(e),s=0;s<e;s++)i[s]=arguments[s];return t.apply(r,[].concat(n,i))}}}function s(e){return({}).toString.call(e).includes("Object")}function a(e){return"function"==typeof e}var d,o,l=n(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),c=function(e,t){return s(t)||l("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&l("changeField"),t},u=function(e){a(e)||l("selectorType")},f=function(e){a(e)||s(e)||l("handlerType"),s(e)&&Object.values(e).some(function(e){return!a(e)})&&l("handlersType")},p=function(e){e||l("initialIsRequired"),s(e)||l("initialType"),Object.keys(e).length||l("initialContent")};function h(e,t){return a(t)?t(e.current):t}function m(e,t){return e.current=i(i({},e.current),t),t}function x(e,t,r){return a(t)?t(e.current):Object.keys(r).forEach(function(r){var i;return null==(i=t[r])?void 0:i.call(t,e.current[r])}),r}var g={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},v=(d=function(e,t){throw Error(e[t]||e.default)},function e(){for(var t=this,r=arguments.length,i=Array(r),n=0;n<r;n++)i[n]=arguments[n];return i.length>=d.length?d.apply(this,i):function(){for(var r=arguments.length,n=Array(r),s=0;s<r;s++)n[s]=arguments[s];return e.apply(t,[].concat(i,n))}})(g),b=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},y={type:"cancelation",msg:"operation is manually canceled"};function w(e){var t=!1,r=new Promise(function(r,i){e.then(function(e){return t?i(y):r(e)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var j=function(e){if(Array.isArray(e))return e}(o=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p(e),f(t);var r={current:e},i=n(x)(r,t),s=n(m)(r),a=n(c)(e),d=n(h)(r);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return u(e),e(r.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(i,s,a,d)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,n,s,a,d=[],o=!0,l=!1;try{s=(r=r.call(e)).next,!1;for(;!(o=(i=s.call(r)).done)&&(d.push(i.value),2!==d.length);o=!0);}catch(e){l=!0,n=e}finally{try{if(!o&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw n}}return d}}(o,2)||function(e,r){if(e){if("string"==typeof e)return t(e,2);var i=({}).toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,2):void 0}}(o,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),T=j[0],z=j[1];function S(e){return document.body.appendChild(e)}function N(e){var t,r,i=T(function(e){return{config:e.config,reject:e.reject}}),n=(t="".concat(i.config.paths.vs,"/loader.js"),r=document.createElement("script"),t&&(r.src=t),r);return n.onload=function(){return e()},n.onerror=i.reject,n}function M(){var e=T(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){var r=t.m||t;k(r),e.resolve(r)},function(t){e.reject(t)})}function k(e){T().monaco||z({monaco:e})}var E=new Promise(function(e,t){return z({resolve:e,reject:t})}),O=function(){var e=T(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(z({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),w(E);if(window.monaco&&window.monaco.editor)return k(window.monaco),e.resolve(window.monaco),w(E);b(S,N)(M)}return w(E)},_=e.i(71645),q={display:"flex",position:"relative",textAlign:"initial"},C={width:"100%"},R={display:"none"},A={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},P=function({children:e}){return _.default.createElement("div",{style:A},e)},D=(0,_.memo)(function({width:e,height:t,isEditorReady:r,loading:i,_ref:n,className:s,wrapperProps:a}){return _.default.createElement("section",{style:{...q,width:e,height:t},...a},!r&&_.default.createElement(P,null,i),_.default.createElement("div",{ref:n,style:{...C,...!r&&R},className:s}))}),V=function(e){(0,_.useEffect)(e,[])},L=function(e,t,r=!0){let i=(0,_.useRef)(!0);(0,_.useEffect)(i.current||!r?()=>{i.current=!1}:e,t)};function F(){}function I(e,t,r,i){var n,s,a,d,o,l;return n=e,s=i,n.editor.getModel(U(n,s))||(a=e,d=t,o=r,l=i,a.editor.createModel(d,o,l?U(a,l):void 0))}function U(e,t){return e.Uri.parse(t)}var X=(0,_.memo)(function({original:e,modified:t,language:r,originalLanguage:i,modifiedLanguage:n,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:d=!1,keepCurrentModifiedModel:o=!1,theme:l="light",loading:c="Loading...",options:u={},height:f="100%",width:p="100%",className:h,wrapperProps:m={},beforeMount:x=F,onMount:g=F}){let[v,b]=(0,_.useState)(!1),[y,w]=(0,_.useState)(!0),j=(0,_.useRef)(null),T=(0,_.useRef)(null),z=(0,_.useRef)(null),S=(0,_.useRef)(g),N=(0,_.useRef)(x),M=(0,_.useRef)(!1);V(()=>{let e=O();return e.then(e=>(T.current=e)&&w(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{let t;return j.current?(t=j.current?.getModel(),void(d||t?.original?.dispose(),o||t?.modified?.dispose(),j.current?.dispose())):e.cancel()}}),L(()=>{if(j.current&&T.current){let t=j.current.getOriginalEditor(),n=I(T.current,e||"",i||r||"text",s||"");n!==t.getModel()&&t.setModel(n)}},[s],v),L(()=>{if(j.current&&T.current){let e=j.current.getModifiedEditor(),i=I(T.current,t||"",n||r||"text",a||"");i!==e.getModel()&&e.setModel(i)}},[a],v),L(()=>{let e=j.current.getModifiedEditor();e.getOption(T.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[t],v),L(()=>{j.current?.getModel()?.original.setValue(e||"")},[e],v),L(()=>{let{original:e,modified:t}=j.current.getModel();T.current.editor.setModelLanguage(e,i||r||"text"),T.current.editor.setModelLanguage(t,n||r||"text")},[r,i,n],v),L(()=>{T.current?.editor.setTheme(l)},[l],v),L(()=>{j.current?.updateOptions(u)},[u],v);let k=(0,_.useCallback)(()=>{if(!T.current)return;N.current(T.current);let d=I(T.current,e||"",i||r||"text",s||""),o=I(T.current,t||"",n||r||"text",a||"");j.current?.setModel({original:d,modified:o})},[r,t,n,e,i,s,a]),E=(0,_.useCallback)(()=>{!M.current&&z.current&&(j.current=T.current.editor.createDiffEditor(z.current,{automaticLayout:!0,...u}),k(),T.current?.editor.setTheme(l),b(!0),M.current=!0)},[u,l,k]);return(0,_.useEffect)(()=>{v&&S.current(j.current,T.current)},[v]),(0,_.useEffect)(()=>{y||v||E()},[y,v,E]),_.default.createElement(D,{width:p,height:f,isEditorReady:v,loading:c,_ref:z,className:h,wrapperProps:m})}),Y=function(e){let t=(0,_.useRef)();return(0,_.useEffect)(()=>{t.current=e},[e]),t.current},B=new Map,W=(0,_.memo)(function({defaultValue:e,defaultLanguage:t,defaultPath:r,value:i,language:n,path:s,theme:a="light",line:d,loading:o="Loading...",options:l={},overrideServices:c={},saveViewState:u=!0,keepCurrentModel:f=!1,width:p="100%",height:h="100%",className:m,wrapperProps:x={},beforeMount:g=F,onMount:v=F,onChange:b,onValidate:y=F}){let[w,j]=(0,_.useState)(!1),[T,z]=(0,_.useState)(!0),S=(0,_.useRef)(null),N=(0,_.useRef)(null),M=(0,_.useRef)(null),k=(0,_.useRef)(v),E=(0,_.useRef)(g),q=(0,_.useRef)(),C=(0,_.useRef)(i),R=Y(s),A=(0,_.useRef)(!1),P=(0,_.useRef)(!1);V(()=>{let e=O();return e.then(e=>(S.current=e)&&z(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>N.current?void(q.current?.dispose(),f?u&&B.set(s,N.current.saveViewState()):N.current.getModel()?.dispose(),N.current.dispose()):e.cancel()}),L(()=>{let a=I(S.current,e||i||"",t||n||"",s||r||"");a!==N.current?.getModel()&&(u&&B.set(R,N.current?.saveViewState()),N.current?.setModel(a),u&&N.current?.restoreViewState(B.get(s)))},[s],w),L(()=>{N.current?.updateOptions(l)},[l],w),L(()=>{N.current&&void 0!==i&&(N.current.getOption(S.current.editor.EditorOption.readOnly)?N.current.setValue(i):i!==N.current.getValue()&&(P.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),N.current.pushUndoStop(),P.current=!1))},[i],w),L(()=>{let e=N.current?.getModel();e&&n&&S.current?.editor.setModelLanguage(e,n)},[n],w),L(()=>{void 0!==d&&N.current?.revealLine(d)},[d],w),L(()=>{S.current?.editor.setTheme(a)},[a],w);let U=(0,_.useCallback)(()=>{if(!(!M.current||!S.current)&&!A.current){E.current(S.current);let o=s||r,f=I(S.current,i||e||"",t||n||"",o||"");N.current=S.current?.editor.create(M.current,{model:f,automaticLayout:!0,...l},c),u&&N.current.restoreViewState(B.get(o)),S.current.editor.setTheme(a),void 0!==d&&N.current.revealLine(d),j(!0),A.current=!0}},[e,t,r,i,n,s,l,c,u,a,d]);return(0,_.useEffect)(()=>{w&&k.current(N.current,S.current)},[w]),(0,_.useEffect)(()=>{T||w||U()},[T,w,U]),C.current=i,(0,_.useEffect)(()=>{w&&b&&(q.current?.dispose(),q.current=N.current?.onDidChangeModelContent(e=>{P.current||b(N.current.getValue(),e)}))},[w,b]),(0,_.useEffect)(()=>{if(w){let e=S.current.editor.onDidChangeMarkers(e=>{let t=N.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=S.current.editor.getModelMarkers({resource:t});y?.(e)}});return()=>{e?.dispose()}}return()=>{}},[w,y]),_.default.createElement(D,{width:p,height:h,isEditorReady:w,loading:o,_ref:M,className:m,wrapperProps:x})});e.s(["DiffEditor",()=>X,"default",()=>W],88784)},67240,e=>{"use strict";let t=(0,e.i(75254).default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);e.s(["RotateCcw",()=>t],67240)},43531,e=>{"use strict";let t=(0,e.i(75254).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",()=>t],43531)},56862,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(88784);let n=[{id:"dsu",title:"Disjoint Set Union (DSU)",difficulty:"Medium",variants:{cpp:`class DSU {
    vector<int> parent;
public:
    DSU(int n) {
        parent.resize(n);
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }
    void unite(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX != rootY)
            parent[rootX] = rootY;
    }
};`,python:`class DSU:
    def __init__(self, n):
        self.parent = list(range(n))

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def unite(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        if rootX != rootY:
            self.parent[rootX] = rootY`,java:`class DSU {
    int[] parent;

    public DSU(int n) {
        parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
    }

    public int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }

    public void unite(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX != rootY)
            parent[rootX] = rootY;
    }
}`,javascript:`class DSU {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    unite(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }
}`,rust:`struct DSU {
    parent: Vec<usize>,
}

impl DSU {
    fn new(n: usize) -> Self {
        DSU { parent: (0..n).collect() }
    }

    fn find(&mut self, x: usize) -> usize {
        if self.parent[x] != x {
            self.parent[x] = self.find(self.parent[x]);
        }
        self.parent[x]
    }

    fn unite(&mut self, x: usize, y: usize) {
        let root_x = self.find(x);
        let root_y = self.find(y);
        if root_x != root_y {
            self.parent[root_x] = root_y;
        }
    }
}`}},{id:"fenwick",title:"Fenwick Tree (BIT)",difficulty:"Medium",variants:{cpp:`class FenwickTree {
    vector<int> bit;
    int n;
public:
    FenwickTree(int size) {
        this->n = size;
        bit.assign(n + 1, 0);
    }
    void add(int idx, int delta) {
        for (; idx <= n; idx += idx & -idx)
            bit[idx] += delta;
    }
    int query(int idx) {
        int sum = 0;
        for (; idx > 0; idx -= idx & -idx)
            sum += bit[idx];
        return sum;
    }
};`,python:`class FenwickTree:
    def __init__(self, size):
        self.n = size
        self.bit = [0] * (size + 1)

    def add(self, idx, delta):
        while idx <= self.n:
            self.bit[idx] += delta
            idx += idx & (-idx)

    def query(self, idx):
        s = 0
        while idx > 0:
            s += self.bit[idx]
            idx -= idx & (-idx)
        return s`,java:`class FenwickTree {
    int[] bit;
    int n;

    public FenwickTree(int size) {
        this.n = size;
        this.bit = new int[n + 1];
    }

    public void add(int idx, int delta) {
        while (idx <= n) {
            bit[idx] += delta;
            idx += idx & -idx;
        }
    }

    public int query(int idx) {
        int sum = 0;
        while (idx > 0) {
            sum += bit[idx];
            idx -= idx & -idx;
        }
        return sum;
    }
}`,javascript:`class FenwickTree {
    constructor(size) {
        this.n = size;
        this.bit = new Array(size + 1).fill(0);
    }

    add(idx, delta) {
        while (idx <= this.n) {
            this.bit[idx] += delta;
            idx += idx & -idx;
        }
    }

    query(idx) {
        let sum = 0;
        while (idx > 0) {
            sum += this.bit[idx];
            idx -= idx & -idx;
        }
        return sum;
    }
}`,rust:`struct FenwickTree {
    bit: Vec<i32>,
    n: usize,
}

impl FenwickTree {
    fn new(size: usize) -> Self {
        FenwickTree {
            bit: vec![0; size + 1],
            n: size,
        }
    }

    fn add(&mut self, mut idx: usize, delta: i32) {
        while idx <= self.n {
            self.bit[idx] += delta;
            idx += idx & (!idx + 1); // idx & -idx
        }
    }

    fn query(&self, mut idx: usize) -> i32 {
        let mut sum = 0;
        while idx > 0 {
            sum += self.bit[idx];
            idx -= idx & (!idx + 1);
        }
        sum
    }
}`}},{id:"dijkstra",title:"Dijkstra (Shortest Path)",difficulty:"Medium",variants:{cpp:`vector<int> dijkstra(int start, int n, const vector<vector<pair<int, int>>>& adj) {
    vector<int> dist(n, 1e9);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    dist[start] = 0;
    pq.push({0, start});
    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();
        if (d > dist[u]) continue;
        for (auto& edge : adj[u]) {
            int v = edge.first;
            int w = edge.second;
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,python:`import heapq

def dijkstra(start, n, adj):
    dist = [float('inf')] * n
    pq = [(0, start)]
    dist[start] = 0
    
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        for v, w in adj[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return dist`,java:`public int[] dijkstra(int start, int n, List<List<int[]>> adj) {
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    
    dist[start] = 0;
    pq.offer(new int[]{0, start});
    
    while (!pq.isEmpty()) {
        int[] top = pq.poll();
        int d = top[0], u = top[1];
        if (d > dist[u]) continue;
        
        for (int[] edge : adj.get(u)) {
            int v = edge[0], w = edge[1];
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.offer(new int[]{dist[v], v});
            }
        }
    }
    return dist;
}`,javascript:`function dijkstra(start, n, adj) {
    const dist = Array(n).fill(Infinity);
    // Note: JS needs a PriorityQueue lib or custom impl. 
    // Assuming a valid MinHeap exists for this template.
    const pq = new MinHeap(); 
    
    dist[start] = 0;
    pq.push([0, start]);
    
    while (!pq.isEmpty()) {
        const [d, u] = pq.pop();
        if (d > dist[u]) continue;
        
        for (const [v, w] of adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push([dist[v], v]);
            }
        }
    }
    return dist;
}`,rust:`use std::collections::BinaryHeap;
use std::cmp::Reverse;

fn dijkstra(start: usize, n: usize, adj: &Vec<Vec<(usize, i32)>>) -> Vec<i32> {
    let mut dist = vec![i32::MAX; n];
    let mut pq = BinaryHeap::new();
    
    dist[start] = 0;
    pq.push(Reverse((0, start)));
    
    while let Some(Reverse((d, u))) = pq.pop() {
        if d > dist[u] { continue; }
        
        for &(v, w) in &adj[u] {
            if dist[u] + w < dist[v] {
                dist[v] = dist[u] + w;
                pq.push(Reverse((dist[v], v)));
            }
        }
    }
    dist
}`}},{id:"segment_tree",title:"Segment Tree (Range Sum)",difficulty:"Hard",variants:{cpp:`class SegmentTree {
    vector<int> tree;
    int n;
public:
    SegmentTree(const vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n);
        build(arr, 1, 0, n - 1);
    }
    void build(const vector<int>& arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node, start, mid);
            build(arr, 2 * node + 1, mid + 1, end);
            tree[node] = tree[2 * node] + tree[2 * node + 1];
        }
    }
    void update(int idx, int val, int node, int start, int end) {
        if (start == end) {
            tree[node] = val;
        } else {
            int mid = (start + end) / 2;
            if (start <= idx && idx <= mid)
                update(idx, val, 2 * node, start, mid);
            else
                update(idx, val, 2 * node + 1, mid + 1, end);
            tree[node] = tree[2 * node] + tree[2 * node + 1];
        }
    }
    int query(int l, int r, int node, int start, int end) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        int mid = (start + end) / 2;
        return query(l, r, 2 * node, start, mid) + query(l, r, 2 * node + 1, mid + 1, end);
    }
};`,python:`class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self._build(arr, 1, 0, self.n - 1)

    def _build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            self._build(arr, 2 * node, start, mid)
            self._build(arr, 2 * node + 1, mid + 1, end)
            self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def query(self, l, r, node, start, end):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        return self.query(l, r, 2 * node, start, mid) + \
               self.query(l, r, 2 * node + 1, mid + 1, end)`,java:`class SegmentTree {
    int[] tree;
    int n;

    public SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 1, 0, n - 1);
    }

    private void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node, start, mid);
            build(arr, 2 * node + 1, mid + 1, end);
            tree[node] = tree[2 * node] + tree[2 * node + 1];
        }
    }
    // Query method omitted for brevity, logic similar to others
}`,javascript:`class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n).fill(0);
        this.build(arr, 1, 0, this.n - 1);
    }
    
    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
        } else {
            const mid = Math.floor((start + end) / 2);
            this.build(arr, 2 * node, start, mid);
            this.build(arr, 2 * node + 1, mid + 1, end);
            this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
        }
    }
}`,rust:`struct SegmentTree {
    tree: Vec<i32>,
    n: usize,
}
// Implementation requires more verbose code for Rust ownership
// Placeholder for brevity.`}},{id:"trie",title:"Trie (Prefix Tree)",difficulty:"Medium",variants:{cpp:`struct TrieNode {
    TrieNode* children[26];
    bool isEndOfWord;
    TrieNode() {
        isEndOfWord = false;
        for (int i = 0; i < 26; i++) children[i] = nullptr;
    }
};

class Trie {
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }
    
    void insert(string word) {
        TrieNode* curr = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!curr->children[idx])
                curr->children[idx] = new TrieNode();
            curr = curr->children[idx];
        }
        curr->isEndOfWord = true;
    }
    
    bool search(string word) {
        TrieNode* curr = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!curr->children[idx]) return false;
            curr = curr->children[idx];
        }
        return curr->isEndOfWord;
    }
};`,python:`class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end`,java:`class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord = false;
}

class Trie {
    TrieNode root;
    public Trie() { root = new TrieNode(); }

    public void insert(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (curr.children[idx] == null)
                curr.children[idx] = new TrieNode();
            curr = curr.children[idx];
        }
        curr.isEndOfWord = true;
    }
}`,javascript:`class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        curr.isEndOfWord = true;
    }
}`,rust:`#[derive(Default)]
struct TrieNode {
    children: std::collections::HashMap<char, TrieNode>,
    is_end: bool,
}

struct Trie {
    root: TrieNode,
}

impl Trie {
    fn new() -> Self {
        Trie { root: TrieNode::default() }
    }

    fn insert(&mut self, word: String) {
        let mut curr = &mut self.root;
        for c in word.chars() {
            curr = curr.children.entry(c).or_default();
        }
        curr.is_end = true;
    }
}`}},{id:"binary_search",title:"Binary Search (Standard)",difficulty:"Easy",variants:{cpp:`int binarySearch(const vector<int>& arr, int target) {
    int l = 0, r = arr.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
}`,python:`def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = (l + r) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return -1`,java:`public int binarySearch(int[] arr, int target) {
    int l = 0, r = arr.length - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
}`,javascript:`function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}`,rust:`fn binary_search(arr: &[i32], target: i32) -> i32 {
    let mut l = 0;
    let mut r = arr.len() as i32 - 1;
    while l <= r {
        let mid = l + (r - l) / 2;
        if arr[mid as usize] == target {
            return mid;
        } else if arr[mid as usize] < target {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    -1
}`}},{id:"dfs_graph",title:"DFS (Graph)",difficulty:"Easy",variants:{cpp:`void dfs(int u, vector<bool>& visited, const vector<vector<int>>& adj) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) {
            dfs(v, visited, adj);
        }
    }
}`,python:`def dfs(u, visited, adj):
    visited[u] = True
    for v in adj[u]:
        if not visited[v]:
            dfs(v, visited, adj)`,java:`public void dfs(int u, boolean[] visited, List<List<Integer>> adj) {
    visited[u] = true;
    for (int v : adj.get(u)) {
        if (!visited[v]) {
            dfs(v, visited, adj);
        }
    }
}`,javascript:`function dfs(u, visited, adj) {
    visited[u] = true;
    for (const v of adj[u]) {
        if (!visited[v]) {
            dfs(v, visited, adj);
        }
    }
}`,rust:`fn dfs(u: usize, visited: &mut Vec<bool>, adj: &Vec<Vec<usize>>) {
    visited[u] = true;
    for &v in &adj[u] {
        if !visited[v] {
            dfs(v, visited, adj);
        }
    }
}`}}];var s=e.i(31343),a=e.i(67240),d=e.i(43531);let o=(0,e.i(75254).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var l=e.i(83086),c=e.i(37727),u=e.i(46932),f=e.i(88653);function p(){let[e,p]=(0,r.useState)(n[0]),[h,m]=(0,r.useState)("cpp"),[x,g]=(0,r.useState)(""),[v,b]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),[j,T]=(0,r.useState)(null),[z,S]=(0,r.useState)(!1),[N,M]=(0,r.useState)(null),[k,E]=(0,r.useState)(null),O=(0,r.useRef)(null),_=()=>{g(""),b(!1),w(!1),T(null),M(null),E(null),O.current&&O.current.setValue("")},q=async()=>{if(x){S(!0);try{let t=await fetch("/api/dojo/verify-template",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:x,language:h,algorithm:e.title})}),r=await t.json();T(r),r.isCorrect}catch(e){console.error(e)}finally{S(!1)}}};return(0,t.jsxs)("div",{className:"w-full max-w-6xl mx-auto p-6 bg-zinc-950 min-h-screen text-white font-sans",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between mb-8 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent italic tracking-tighter",children:["TEMPLATE RECALL ",(0,t.jsx)("span",{className:"text-xl not-italic",children:"🧠"})]}),(0,t.jsx)("p",{className:"text-zinc-500 text-sm mt-1",children:"Test your memory. Write standard templates from scratch."})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-4 justify-center",children:[(0,t.jsx)("div",{className:"bg-zinc-900 border border-zinc-800 rounded-lg p-1 flex items-center",children:["cpp","python","java","javascript","rust"].map(e=>(0,t.jsx)("button",{onClick:()=>{m(e),_()},className:`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition ${h===e?"bg-zinc-800 text-white shadow-sm":"text-zinc-500 hover:text-zinc-300"}`,disabled:v,children:"cpp"===e?"C++":"javascript"===e?"JS":e},e))}),(0,t.jsx)("select",{value:e.id,onChange:e=>{let t=n.find(t=>t.id===e.target.value);t&&(p(t),_())},className:"bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none",children:n.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.title," (",e.difficulty,")"]},e.id))}),v||y?(0,t.jsxs)("button",{onClick:_,className:"bg-zinc-800 hover:bg-zinc-700 text-zinc-400 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition",children:[(0,t.jsx)(a.RotateCcw,{size:18})," RESTART"]}):(0,t.jsxs)("button",{onClick:()=>{_(),b(!0),M(Date.now()),setTimeout(()=>{O.current&&O.current.focus()},100)},className:"bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(13,148,136,0.4)] transition hover:scale-105",children:[(0,t.jsx)(s.Play,{size:18,fill:"currentColor"})," START RECALL"]}),v&&(0,t.jsxs)("button",{onClick:()=>{if(!N)return;b(!1),w(!0);let t=Date.now(),r=e.variants[h].trim(),i=x.trim(),n=r.split("\n"),s=i.split("\n"),a=0;s.forEach((e,t)=>{t<n.length&&e.trim()===n[t].trim()&&a++});let d=Math.round(a/Math.max(n.length,1)*100);E({wpm:Math.round(i.length/5/((t-N)/6e4)),accuracy:d})},className:"bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 animate-pulse",children:[(0,t.jsx)(d.Check,{size:18})," DIFF CHECK"]})]})]}),(0,t.jsx)(f.AnimatePresence,{children:y&&k&&(0,t.jsxs)(u.motion.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-8 space-y-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center",children:[(0,t.jsx)("span",{className:"text-zinc-500 text-sm uppercase tracking-widest",children:"Speed"}),(0,t.jsx)("span",{className:"text-4xl font-mono font-bold text-white",children:k.wpm}),(0,t.jsx)("span",{className:"text-zinc-600 text-xs",children:"WPM"})]}),(0,t.jsxs)("div",{className:"bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center",children:[(0,t.jsx)("span",{className:"text-zinc-500 text-sm uppercase tracking-widest",children:"Line Match"}),(0,t.jsxs)("span",{className:`text-4xl font-mono font-bold ${100===k.accuracy?"text-green-500":"text-orange-400"}`,children:[k.accuracy,"%"]}),(0,t.jsx)("span",{className:"text-zinc-600 text-xs",children:"Accuracy (Strict)"})]})]}),(0,t.jsxs)("div",{className:"bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"p-3 bg-indigo-500/10 rounded-lg text-indigo-400",children:(0,t.jsx)(l.Sparkles,{size:24})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-bold text-white",children:"Sensei Verification"}),(0,t.jsx)("p",{className:"text-xs text-zinc-500",children:"wrote in a different style? Ask AI if it's correct."})]})]}),!j&&(0,t.jsx)("button",{onClick:q,disabled:z,className:"px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition disabled:opacity-50 flex items-center gap-2",children:z?"Verifying...":"Ask Sensei"})]}),j&&(0,t.jsx)("div",{className:`p-4 rounded-xl border ${j.isCorrect?"bg-green-500/10 border-green-500/20":"bg-red-500/10 border-red-500/20"}`,children:(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[j.isCorrect?(0,t.jsx)(d.Check,{className:"text-green-400 mt-1"}):(0,t.jsx)(c.X,{className:"text-red-400 mt-1"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:`font-bold ${j.isCorrect?"text-green-400":"text-red-400"}`,children:j.isCorrect?"Implementation Correct!":"Logic Issues Found"}),(0,t.jsx)("p",{className:"text-sm text-zinc-300 mt-1",children:j.feedback})]})]})})]})}),(0,t.jsxs)("div",{className:"border border-zinc-800 rounded-xl overflow-hidden shadow-2xl h-[60vh] min-h-[400px] bg-[#1e1e1e] relative",children:[!y&&(0,t.jsxs)("div",{className:"h-full flex flex-col",children:[(0,t.jsxs)("div",{className:"bg-zinc-900/90 backdrop-blur px-4 py-2 text-xs font-bold text-teal-400 uppercase tracking-widest z-10 border-b border-zinc-800 flex justify-between items-center",children:[(0,t.jsxs)("span",{children:["Your Memory (","cpp"===h?"C++":h,")"]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-zinc-500",children:v?"Typing...":"Ready"}),v&&(0,t.jsx)("div",{className:"w-2 h-2 rounded-full bg-teal-500 animate-pulse"})]})]}),v||x?(0,t.jsx)(i.default,{height:"100%",language:h,value:x,theme:"vs-dark",onChange:e=>g(e||""),onMount:(e,t)=>{O.current=e},options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",lineNumbers:"on",autoClosingBrackets:"always",padding:{top:20}}}):(0,t.jsxs)("div",{className:"flex-1 flex flex-col items-center justify-center text-zinc-600 gap-4",children:[(0,t.jsx)(o,{size:48,className:"opacity-20"}),(0,t.jsx)("p",{children:"Press Start to Recall the Code"})]})]}),y&&(0,t.jsxs)("div",{className:"h-full flex flex-col",children:[(0,t.jsxs)("div",{className:"bg-zinc-900 px-4 py-2 border-b border-zinc-800 grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-zinc-500",children:[(0,t.jsxs)("div",{children:["Standard Template (",h,")"]}),(0,t.jsx)("div",{children:"Your Recall"})]}),(0,t.jsx)(i.DiffEditor,{height:"100%",original:e.variants[h],modified:x,language:h,theme:"vs-dark",options:{originalEditable:!1,readOnly:!0,renderSideBySide:!0,minimap:{enabled:!1},fontSize:13}})]})]}),(0,t.jsx)("div",{className:"mt-8 text-zinc-500 text-xs text-center",children:y?"Study the diff. Red highlights show where you deviated from the standard template.":`Type the ${h} template exactly as you remember it. Don't peek!`})]})}e.s(["default",()=>p],56862)}]);