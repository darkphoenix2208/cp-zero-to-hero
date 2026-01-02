export interface TopicResource {
    title: string;
    url: string;
}

export interface Problem {
    name: string;
    id: string; // CF Problem ID e.g. "4A"
    rating: number;
}

export interface TopicContent {
    title: string;
    videoGuide: string; // YouTube embed URL or Watch Link
    resources: TopicResource[];
    cheatSheet: string; // Code Snippet
    problemSet: Problem[];
}

export const TOPIC_DATA: Record<string, TopicContent> = {
    'complexity': {
        title: "Time Complexity",
        videoGuide: "https://www.youtube.com/watch?v=9TlHvipP5yA", // Errichto: Time Complexity
        resources: [
            { title: "CP-Algorithms: Complexity", url: "https://cp-algorithms.com/" },
            { title: "Big O Cheatsheet", url: "https://www.bigocheatsheet.com/" }
        ],
        cheatSheet: `// Common Complexities
// N = 10^8  -> O(N) or O(N log N) usually TLE
// N = 10^5  -> O(N) or O(N log N) is OK
// N = 1000  -> O(N^2) is OK
// N = 20    -> O(2^N) is OK

// Python: 1 sec ~ 10^7 operations
// C++: 1 sec ~ 10^8 operations`,
        problemSet: [
            { name: "Way Too Long Words", id: "71A", rating: 800 },
            { name: "Helpful Maths", id: "339A", rating: 800 },
            { name: "Beautiful Matrix", id: "263A", rating: 800 },
            { name: "Bit++", id: "282A", rating: 800 },
            { name: "Petya and Strings", id: "112A", rating: 800 },
            { name: "Team", id: "231A", rating: 800 }
        ]
    },
    'math': {
        title: "Basic Math",
        videoGuide: "https://www.youtube.com/watch?v=1p3L7n9_h-Q", // Luv: Number Theory
        resources: [
            { title: "CP-Algorithms: Modular Arithmetic", url: "https://cp-algorithms.com/algebra/module-inverse.html" }
        ],
        cheatSheet: `// Modular Exponentiation (a^b % m)
long long binpow(long long a, long long b, long long m) {
    a %= m;
    long long res = 1;
    while (b > 0) {
        if (b & 1) res = res * a % m;
        a = a * a % m;
        b >>= 1;
    }
    return res;
}

// GCD
int gcd(int a, int b) {
    return b ? gcd(b, a % b) : a;
}`,
        problemSet: [
            { name: "Watermelon", id: "4A", rating: 800 },
            { name: "Elephant", id: "617A", rating: 800 },
            { name: "Design Tutorial: Learn from Math", id: "472A", rating: 900 },
            { name: "Restoring Three Numbers", id: "1154A", rating: 800 },
            { name: "Divisibility Problem", id: "1328A", rating: 800 },
            { name: "Minimal Square", id: "1360A", rating: 800 }
        ]
    },
    'arrays': {
        title: "Arrays & Strings",
        videoGuide: "https://www.youtube.com/watch?v=P8Xa2BitN3I", // Prefix Sums
        resources: [
            { title: "GFG: Array Data Structure", url: "https://www.geeksforgeeks.org/array-data-structure/" }
        ],
        cheatSheet: `// Prefix Sums 1D
vector<int> p(n + 1, 0);
for(int i = 0; i < n; i++) {
    p[i+1] = p[i] + a[i];
}
// Sum [l, r] (0-indexed) = p[r+1] - p[l]

// 2D Prefix Sums
// pref[i][j] = val + pref[i-1][j] + pref[i][j-1] - pref[i-1][j-1]`,
        problemSet: [
            { name: "Petya and Strings", id: "112A", rating: 800 },
            { name: "Word Capitalization", id: "281A", rating: 800 },
            { name: "Boy or Girl", id: "236A", rating: 800 },
            { name: "Kuriyama Mirai's Stones", id: "433B", rating: 1200 },
            { name: "Karen and Coffee", id: "816B", rating: 1600 },
            { name: "Prefix Sum Primes", id: "1166B", rating: 1300 },
            { name: "Little Girl and Maximum Sum", id: "276C", rating: 1500 }
        ]
    },
    'number-theory': {
        title: "Number Theory",
        videoGuide: "https://www.youtube.com/watch?v=L8grWxBlIZ4", // Striver Sieve
        resources: [
            { title: "CP-Algorithms: Sieve", url: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html" }
        ],
        cheatSheet: `// Sieve of Eratosthenes
const int MAXN = 1000005;
vector<bool> is_prime(MAXN, true);
void sieve() {
    is_prime[0] = is_prime[1] = false;
    for (int i = 2; i * i < MAXN; i++) {
        if (is_prime[i]) {
            for (int j = i * i; j < MAXN; j += i)
                is_prime[j] = false;
        }
    }
}`,
        problemSet: [
            { name: "T-primes", id: "230B", rating: 1300 },
            { name: "Sherlock and his girlfriend", id: "776B", rating: 1500 },
            { name: "Bachgold Problem", id: "749A", rating: 800 },
            { name: "Almost All Divisors", id: "1199B", rating: 1200 },
            { name: "Composite Coloring", id: "1332B", rating: 1300 },
            { name: "Orac and Models", id: "1350B", rating: 1600 }
        ]
    },
    'binary-search': {
        title: "Binary Search",
        videoGuide: "https://www.youtube.com/watch?v=GU7DpgHINFc", // Errichto Binary Search
        resources: [
            { title: "TopCoder: Binary Search", url: "https://www.topcoder.com/thrive/articles/Binary%20Search" }
        ],
        cheatSheet: `// Standard Binary Search
int l = 0, r = n - 1;
while (l <= r) {
    int mid = l + (r - l) / 2;
    if (check(mid)) {
        // ... find match
    } else if (arr[mid] < target) {
        l = mid + 1;
    } else {
        r = mid - 1;
    }
}

// Binary Search on Answer
long long l = 0, r = 1e18; // monotonic range
long long ans = -1;
while (l <= r) {
    long long mid = l + (r - l) / 2;
    if (isValid(mid)) {
        ans = mid;
        r = mid - 1; // try smaller
    } else {
        l = mid + 1;
    }
}`,
        problemSet: [
            { name: "Interesting drink", id: "706B", rating: 1100 },
            { name: "Vanya and Lanterns", id: "492B", rating: 1200 },
            { name: "Worms", id: "474B", rating: 1200 },
            { name: "K-th Not Divisible by n", id: "1352C", rating: 1200 },
            { name: "Magic Powder - 1", id: "670D1", rating: 1300 },
            { name: "Hamburgers", id: "371C", rating: 1600 }
        ]
    },
    'two-pointers': {
        title: "Two Pointers",
        videoGuide: "https://www.youtube.com/watch?v=On03HWe2tZM", // Luv Two Pointers
        resources: [
            { title: "CF Edu: Two Pointers", url: "https://codeforces.com/edu/course/2/lesson/9" }
        ],
        cheatSheet: `// Two Pointers Sum
int l = 0, r = n - 1;
while(l < r) {
   if(a[l] + a[r] == target) return true;
   if(a[l] + a[r] < target) l++;
   else r--;
}`,
        problemSet: [
            { name: "Books", id: "279B", rating: 1400 },
            { name: "Sereja and Dima", id: "381A", rating: 800 },
            { name: "Favorite Sequence", id: "1462A", rating: 800 },
            { name: "Three Parts of the Array", id: "1006C", rating: 1200 },
            { name: "They Are Everywhere", id: "701C", rating: 1500 },
            { name: "Cellular Network", id: "702C", rating: 1500 }
        ]
    },
    'greedy': {
        title: "Sorting & Greedy",
        videoGuide: "https://www.youtube.com/watch?v=H7tshfF-7Hk", // Errichto Greedy
        resources: [
            { title: "CP-Algorithms: Algebra", url: "https://cp-algorithms.com/" }
        ],
        cheatSheet: `// Custom Comparator (Lambda)
sort(v.begin(), v.end(), [](const Item& a, const Item& b) {
    return a.value * b.weight > b.value * a.weight;
});

// Priority Queue (Max Heap)
priority_queue<int> pq; 
// Min Heap
priority_queue<int, vector<int>, greater<int>> min_pq;`,
        problemSet: [
            { name: "Twins", id: "160A", rating: 900 },
            { name: "Chat Room", id: "58A", rating: 1000 },
            { name: "Dragons", id: "230A", rating: 1000 },
            { name: "Puzzles", id: "337A", rating: 900 },
            { name: "Similar Pairs", id: "1360C", rating: 1000 },
            { name: "Construct the String", id: "1335B", rating: 1000 }
        ]
    },
    'recursion': {
        title: "Recursion & Backtracking",
        videoGuide: "https://www.youtube.com/watch?v=T_S-3w49yL0", // Recursion explanation
        resources: [],
        cheatSheet: `// Backtracking Template
void backtrack(State current) {
    if (isSolution(current)) {
        process(current);
        return;
    }
    for (auto next : getCandidates(current)) {
        makeMove(next);
        backtrack(next);
        undoMove(next); // Backtrack
    }
}`,
        problemSet: [
            { name: "Queen", id: "1143C", rating: 1500 },
            { name: "Recursive Queries", id: "855B", rating: 1600 }, // Actually DP-ish but requires recursive thinking
            { name: "Apple Division", id: "CSES-1623", rating: 1100 },
            { name: "Creating Strings", id: "CSES-1622", rating: 1200 },
            { name: "Grid Paths", id: "CSES-1625", rating: 1600 }
        ]
    },
    'dp': {
        title: "Dynamic Programming",
        videoGuide: "https://www.youtube.com/watch?v=OQ5jsbhAv_M", // DP introduction
        resources: [
            { title: "DP Patterns", url: "https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns" }
        ],
        cheatSheet: `// 1D DP (Fibonacci)
vector<int> dp(n+1);
dp[0] = 0; dp[1] = 1;
for(int i=2; i<=n; i++) dp[i] = dp[i-1] + dp[i-2];

// Knapsack 0/1
for (int i = 0; i < n; i++) {
    for (int w = W; w >= weight[i]; w--) {
        dp[w] = max(dp[w], dp[w - weight[i]] + value[i]);
    }
}`,
        problemSet: [
            { name: "Hit the Lottery", id: "996A", rating: 800 },
            { name: "Cut Ribbon", id: "189A", rating: 1300 },
            { name: "Boredom", id: "455A", rating: 1500 },
            { name: "K-Tree", id: "431C", rating: 1600 },
            { name: "Tetrahedron", id: "166E", rating: 1500 },
            { name: "Filling Shapes", id: "1182A", rating: 1100 }
        ]
    },
    'graphs': {
        title: "Graph Theory",
        videoGuide: "https://www.youtube.com/watch?v=pcKY4hjDrxk", // BFS/DFS
        resources: [
            { title: "CP-Algorithms: Graphs", url: "https://cp-algorithms.com/graph/breadth-first-search.html" }
        ],
        cheatSheet: `// BFS
queue<int> q;
q.push(start);
visited[start] = true;
while(!q.empty()) {
    int u = q.front(); q.pop();
    for(int v : adj[u]) {
        if(!visited[v]) {
            visited[v] = true;
            q.push(v);
        }
    }
}

// DFS
void dfs(int u) {
    visited[u] = true;
    for(int v : adj[u]) {
        if(!visited[v]) dfs(v);
    }
}`,
        problemSet: [
            { name: "News Distribution", id: "1167C", rating: 1400 },
            { name: "Kefa and Park", id: "580C", rating: 1500 },
            { name: "Two Buttons", id: "520B", rating: 1400 },
            { name: "Party", id: "115A", rating: 900 },
            { name: "Metro", id: "1055A", rating: 1000 },
            { name: "Rumor", id: "893C", rating: 1300 },
            { name: "Badge", id: "1020B", rating: 1200 }
        ]
    },
    'trees': {
        title: "Trees",
        videoGuide: "https://www.youtube.com/watch?v=1-l_UOFi1Xw", // Tree Traversals
        resources: [],
        cheatSheet: `// Tree Diameter (2 DFS)
// 1. DFS from arbitrary node to find furthest node X
// 2. DFS from X to find furthest node Y
// Dist(X, Y) is diameter.

// LCA (Binary Lifting)
// up[u][i] is 2^i-th ancestor of u
void dfs(int u, int p) {
    up[u][0] = p;
    for(int i=1; i<LOG; i++) 
        up[u][i] = up[up[u][i-1]][i-1];
    // ... dfs children
}`,
        problemSet: [
            { name: "Christmas Spruce", id: "913B", rating: 1200 },
            { name: "Queen", id: "1143C", rating: 1600 },
            { name: "Tree Diameter", id: "CSES-1131", rating: 1400 },
            { name: "Subordinates", id: "CSES-1674", rating: 1300 },
            { name: "Distance in Tree", id: "161D", rating: 1600 },
            { name: "Linova and Kingdom", id: "1336A", rating: 1700 }
        ]
    },
    'segtree': {
        title: "Segment Trees",
        videoGuide: "https://www.youtube.com/watch?v=-dUiRtJ8ot0", // SegTree visual
        resources: [
            { title: "CP-Algorithms: Segment Tree", url: "https://cp-algorithms.com/data_structures/segment_tree.html" }
        ],
        cheatSheet: `// Build
void build(int v, int tl, int tr) {
    if (tl == tr) t[v] = a[tl];
    else {
        int tm = (tl + tr) / 2;
        build(v*2, tl, tm);
        build(v*2+1, tm+1, tr);
        t[v] = t[v*2] + t[v*2+1];
    }
}
// Sum Query
int sum(int v, int tl, int tr, int l, int r) {
    if (l > r) return 0;
    if (l == tl && r == tr) return t[v];
    int tm = (tl + tr) / 2;
    return sum(v*2, tl, tm, l, min(r, tm)) +
           sum(v*2+1, tm+1, tr, max(l, tm+1), r);
}`,
        problemSet: [
            { name: "Xenia and Bit Operations", id: "339D", rating: 1700 },
            { name: "Enemy is weak", id: "61E", rating: 1900 },
            { name: "Dynamic Range Sum Queries", id: "CSES-1648", rating: 1600 },
            { name: "Range Update Queries", id: "CSES-1651", rating: 1600 },
            { name: "Pashmak and Parmida's problem", id: "459D", rating: 1800 },
            { name: "Ant colony", id: "474F", rating: 2100 }
        ]
    },
    'flow': {
        title: "Network Flow",
        videoGuide: "https://www.youtube.com/watch?v=M6cm8UeeziI", // Max Flow
        resources: [],
        cheatSheet: `// Edmonds-Karp with BFS (simplified)
while (bfs()) {
    int path_flow = INF;
    for (v=t; v!=s; v=parent[v]) {
         u = parent[v];
         path_flow = min(path_flow, residual[u][v]);
    }
    for (v=t; v!=s; v=parent[v]) {
         u = parent[v];
         residual[u][v] -= path_flow;
         residual[v][u] += path_flow;
    }
    max_flow += path_flow;
}`,
        problemSet: [
            { name: "Download Speed", id: "CSES-1694", rating: 2200 },
            { name: "Police Chase", id: "CSES-1695", rating: 2200 },
            { name: "School Dance", id: "CSES-1696", rating: 2200 },
            { name: "Distinct Routes", id: "CSES-1711", rating: 2300 }
        ]
    }
};
