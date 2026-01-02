export interface PlanetNode {
    id: string; // e.g., "stl-ships"
    title: string;
    description: string;
    sector: 1 | 2 | 3 | 4 | 5; // Updated to include new sectors
    position: { x: number, y: number }; // For the graph visualizer

    scout_mission: {
        video_url: string; // YouTube Embed URL
        article_url: string; // CP-A / Codeforces / USACO
        cheat_sheet_snippet: string; // Code block
    };

    colonize_mission: {
        easy_problems: string[];
        medium_problems: string[];
    };

    ascension_mission: {
        boss_problem_id: string; // e.g. "1352C"
        time_limit_minutes: number;
    };
    prerequisites: string[]; // List of Node IDs that must be unlocked/solved
}

// ... (Top of file remains)
export const GALAXY_SECTORS: PlanetNode[] = [
    // --- SECTOR 1: THE FOUNDATIONS (800-1000) ---
    {
        id: "stl-ships",
        title: "C++ STL Ships",
        description: "Master the standard containers: Vector, Set, Map.",
        sector: 1,
        position: { x: 0, y: 0 },
        prerequisites: [],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/RRVYpIET_RU", // Striver STL Complete
            article_url: "https://cp-algorithms.com/data_structures/stack_queue_modification.html",
            cheat_sheet_snippet: `// Common STL Operations
vector<int> v = {1, 2, 3};
v.push_back(4);
sort(v.begin(), v.end());

set<int> s;
s.insert(10);
if(s.count(10)) cout << "Found";

map<string, int> m;
m["apple"] = 5;`
        },
        colonize_mission: {
            easy_problems: ["231A", "71A", "4A"],
            medium_problems: ["158B", "118A", "282A"]
        },
        ascension_mission: {
            boss_problem_id: "4C",
            time_limit_minutes: 30
        }
    },
    {
        id: "complexity-void",
        title: "Time Complexity Void",
        description: "Understand Big-O and the limits of 10^8 operations.",
        sector: 1,
        position: { x: 0, y: 0 },
        prerequisites: [],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/FPu9Uld7W-E", // Striver Time Complexity
            article_url: "https://codeforces.com/blog/entry/75730",
            cheat_sheet_snippet: `// N <= 10^5  -> O(N log N) or O(N)
// N <= 1000  -> O(N^2)
// N <= 20    -> O(2^N)
// 1 sec ~= 10^8 ops`
        },
        colonize_mission: {
            easy_problems: ["1030A", "977A", "617A"],
            medium_problems: ["486A", "160A", "1328A"]
        },
        ascension_mission: {
            boss_problem_id: "230B",
            time_limit_minutes: 45
        }
    },
    {
        id: "basic-math-nebula",
        title: "Basic Math Nebula",
        description: "GCD, LCM, Sieve of Eratosthenes, and Modulo.",
        sector: 1,
        position: { x: 0, y: 0 },
        prerequisites: [],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/1xNbjMdbjug", // Striver Sieve/Primes
            article_url: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html",
            cheat_sheet_snippet: `// GCD
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
// LCM
int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}`
        },
        colonize_mission: {
            easy_problems: ["1335A", "1352A", "1294A"],
            medium_problems: ["1343B", "230B", "1367B"]
        },
        ascension_mission: {
            boss_problem_id: "1337B",
            time_limit_minutes: 40
        }
    },

    // --- SECTOR 2: THE ALGORITHMIC BELT (1100-1400) ---
    {
        id: "binary-search-star",
        title: "Binary Search Star",
        description: "Monotonic functions and 'TTTTFFFF' search space.",
        sector: 2,
        position: { x: 0, y: 0 },
        prerequisites: ["complexity-void", "stl-ships"],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/QNGL_t_o_JA", // Striver BS Idea
            article_url: "https://cp-algorithms.com/num_methods/binary_search.html",
            cheat_sheet_snippet: `// Binary Search template
int l = 0, r = n - 1;
while (l <= r) {
    int mid = l + (r - l) / 2;
    if (check(mid)) {
        ans = mid;
        l = mid + 1; // Try bigger?
    } else {
        r = mid - 1;
    }
}`
        },
        colonize_mission: {
            easy_problems: ["706B", "492B", "1324C"],
            medium_problems: ["1201C", "1373C", "978C"]
        },
        ascension_mission: {
            boss_problem_id: "1366A",
            time_limit_minutes: 60
        }
    },
    {
        id: "two-pointers-suns",
        title: "Two Pointers Twin Suns",
        description: "Traversing arrays with L and R indices efficiently.",
        sector: 2,
        position: { x: 0, y: 0 },
        prerequisites: ["complexity-void", "stl-ships"],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/9kdHxplyl5I", // Striver Two Pointers/Sliding Window
            article_url: "https://usaco.guide/silver/two-pointers?lang=cpp",
            cheat_sheet_snippet: `// Two Pointers
int l = 0, r = 0, current_sum = 0;
while (r < n) {
    current_sum += a[r];
    while (current_sum > target) {
        current_sum -= a[l];
        l++;
    }
    ans = max(ans, r - l + 1);
    r++;
}`
        },
        colonize_mission: {
            easy_problems: ["381A", "279B", "6C"],
            medium_problems: ["1360C", "1006C", "1324D"]
        },
        ascension_mission: {
            boss_problem_id: "1351C",
            time_limit_minutes: 50
        }
    },
    {
        id: "prefix-sum-asteroids",
        title: "Prefix Sum Asteroids",
        description: "Precompute sums to answer range queries in O(1).",
        sector: 2,
        position: { x: 0, y: 0 },
        prerequisites: ["basic-math-nebula", "stl-ships"],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/PhGuPhgsHam", // Errichto Prefix Sums (Highly Rated)
            article_url: "https://usaco.guide/silver/prefix-sums?lang=cpp",
            cheat_sheet_snippet: `// Prefix Sum Build
vector<long long> p(n + 1, 0);
for(int i = 0; i < n; i++) p[i+1] = p[i] + a[i];

// Query L to R (0-based)
long long sum = p[R+1] - p[L];`
        },
        colonize_mission: {
            easy_problems: ["313B", "363B", "466C"],
            medium_problems: ["433B", "1363B", "1285B"]
        },
        ascension_mission: {
            boss_problem_id: "1328C",
            time_limit_minutes: 55
        }
    },

    // --- SECTOR 3: THE GRAPH GALAXY (1400-1600) ---
    {
        id: "dfs-bfs-nebula",
        title: "DFS/BFS Deep Space",
        description: "Traverse the graph cosmos. Connected Components and Cycles.",
        sector: 3,
        position: { x: 0, y: 0 },
        prerequisites: ["stl-ships", "complexity-void"], // Recursion
        scout_mission: {
            video_url: "https://www.youtube.com/embed/pcQI0JkGB_c", // Striver BFS
            article_url: "https://cp-algorithms.com/graph/breadth-first-search.html",
            cheat_sheet_snippet: `// DFS
void dfs(int u) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) dfs(v);
    }
}
// BFS
queue<int> q; q.push(start); visited[start]=true;
while(!q.empty()){
    int u = q.front(); q.pop();
    for(int v : adj[u]) ...
}`
        },
        colonize_mission: {
            easy_problems: ["520B", "580C", "115A"],
            medium_problems: ["1328D", "707B", "1365D"]
        },
        ascension_mission: {
            boss_problem_id: "1334C",
            time_limit_minutes: 60
        }
    },
    {
        id: "dijkstra-wormhole",
        title: "Dijkstra's Wormhole",
        description: "Shortest paths in non-negative weighted graphs.",
        sector: 3,
        position: { x: 0, y: 0 },
        prerequisites: ["dfs-bfs-nebula", "stl-ships"],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/EFg3u_E6eHU", // Striver Dijkstra
            article_url: "https://cp-algorithms.com/graph/dijkstra.html",
            cheat_sheet_snippet: `// Dijkstra
priority_queue<pair<int,int>, ...> pq;
dist[start] = 0; pq.push({0, start});
while(!pq.empty()){
    int d = pq.top().first; int u = pq.top().second; pq.pop();
    if (d > dist[u]) continue;
    for (auto edge : adj[u]) {
        if (dist[u] + edge.w < dist[v]) {
            dist[v] = dist[u] + edge.w;
            pq.push({dist[v], v});
        }
    }
}`
        },
        colonize_mission: {
            easy_problems: ["20C", "1433G", "59E"],
            medium_problems: ["1325C", "1076D", "1201B"] // 1201B is greedy but good
        },
        ascension_mission: {
            boss_problem_id: "20C",
            time_limit_minutes: 60
        }
    },

    // --- SECTOR 4: THE DYNAMIC DIMENSION (1500-1800) ---
    {
        id: "dp-memoization-void",
        title: "DP: The Memoization Void",
        description: "Trading space for time. Overlapping subproblems.",
        sector: 4,
        position: { x: 0, y: 0 },
        prerequisites: ["dfs-bfs-nebula", "complexity-void"],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/TyqY-JzL90k", // Striver DP Intro
            article_url: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html",
            cheat_sheet_snippet: `// Memoization
int solve(int n) {
    if (n < 0) return 0;
    if (n == 0) return 1;
    if (memo[n] != -1) return memo[n];
    return memo[n] = solve(n-1) + solve(n-3);
}`
        },
        colonize_mission: {
            easy_problems: ["996A", "189A", "706C"],
            medium_problems: ["474D", "1195C", "1359B"]
        },
        ascension_mission: {
            boss_problem_id: "455A",
            time_limit_minutes: 60
        }
    },
    {
        id: "knapsack-singularity",
        title: "Knapsack Singularity",
        description: "Pick or leave. 0/1 Knapsack and variants.",
        sector: 4,
        position: { x: 0, y: 0 },
        prerequisites: ["dp-memoization-void"],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/GqOmJHQZivw", // Striver 0/1 Knapsack
            article_url: "https://atcoder.jp/contests/dp/tasks",
            cheat_sheet_snippet: `// 0/1 Knapsack
for(int i = 0; i < n; i++) {
    for(int w = W; w >= weight[i]; w--) {
        dp[w] = max(dp[w], dp[w - weight[i]] + value[i]);
    }
}`
        },
        colonize_mission: {
            easy_problems: ["Knapsack-AtCoder-DP-D", "Knapsack-AtCoder-DP-E"],
            medium_problems: ["1388C", "1042B", "1354D"]
        },
        ascension_mission: {
            boss_problem_id: "163A",
            time_limit_minutes: 70
        }
    },

    // --- SECTOR 5: THE TREE TITANS (1700-1900) ---
    {
        id: "segment-tree-station",
        title: "Segment Tree Station",
        description: "O(log N) range queries and updates.",
        sector: 5,
        position: { x: 0, y: 0 },
        prerequisites: ["binary-search-star", "dfs-bfs-nebula"],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/rwXLiK6Rc7E", // Striver Segment Tree Live
            article_url: "https://cp-algorithms.com/data_structures/segment_tree.html",
            cheat_sheet_snippet: `// Build SegTree
void build(int node, int start, int end) {
    if(start == end) { tree[node] = a[start]; return; }
    int mid = (start + end)/2;
    build(2*node, start, mid);
    build(2*node+1, mid+1, end);
    tree[node] = tree[2*node] + tree[2*node+1];
}`
        },
        colonize_mission: {
            easy_problems: ["339D", "380C", "474F"],
            medium_problems: ["52C", "1234D", "1208E"]
        },
        ascension_mission: {
            boss_problem_id: "339D",
            time_limit_minutes: 60
        }
    }
];

// Helper to get Sector color
export const getSectorColor = (sector: number) => {
    switch (sector) {
        case 1: return "from-blue-500 to-cyan-400"; // Foundations
        case 2: return "from-emerald-500 to-lime-400"; // Algorithmic
        case 3: return "from-yellow-500 to-orange-400"; // Graph Galaxy
        case 4: return "from-purple-500 to-pink-400"; // DP Dimension
        case 5: return "from-red-500 to-rose-400"; // Tree Titans
        default: return "from-zinc-500 to-zinc-400";
    }
};
