export type Language = 'cpp' | 'python' | 'java' | 'javascript' | 'rust';

export interface Template {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Grandmaster';
    variants: Record<Language, string>;
}

export const RACER_TEMPLATES: Template[] = [
    {
        id: 'dsu',
        title: 'Disjoint Set Union (DSU)',
        difficulty: 'Medium',
        variants: {
            cpp: `class DSU {
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
};`,
            python: `class DSU:
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
            self.parent[rootX] = rootY`,
            java: `class DSU {
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
}`,
            javascript: `class DSU {
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
}`,
            rust: `struct DSU {
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
}`
        }
    },
    {
        id: 'fenwick',
        title: 'Fenwick Tree (BIT)',
        difficulty: 'Medium',
        variants: {
            cpp: `class FenwickTree {
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
};`,
            python: `class FenwickTree:
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
        return s`,
            java: `class FenwickTree {
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
}`,
            javascript: `class FenwickTree {
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
}`,
            rust: `struct FenwickTree {
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
}`
        }
    },
    {
        id: 'dijkstra',
        title: 'Dijkstra (Shortest Path)',
        difficulty: 'Medium',
        variants: {
            cpp: `vector<int> dijkstra(int start, int n, const vector<vector<pair<int, int>>>& adj) {
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
}`,
            python: `import heapq

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
    return dist`,
            java: `public int[] dijkstra(int start, int n, List<List<int[]>> adj) {
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
}`,
            javascript: `function dijkstra(start, n, adj) {
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
}`,
            rust: `use std::collections::BinaryHeap;
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
}`
        }
    },
    {
        id: 'segment_tree',
        title: 'Segment Tree (Range Sum)',
        difficulty: 'Hard',
        variants: {
            cpp: `class SegmentTree {
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
};`,
            python: `class SegmentTree:
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
               self.query(l, r, 2 * node + 1, mid + 1, end)`,
            java: `class SegmentTree {
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
}`,
            javascript: `class SegmentTree {
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
}`,
            rust: `struct SegmentTree {
    tree: Vec<i32>,
    n: usize,
}
// Implementation requires more verbose code for Rust ownership
// Placeholder for brevity.`
        }
    },
    {
        id: 'trie',
        title: 'Trie (Prefix Tree)',
        difficulty: 'Medium',
        variants: {
            cpp: `struct TrieNode {
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
};`,
            python: `class TrieNode:
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
        return node.is_end`,
            java: `class TrieNode {
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
}`,
            javascript: `class TrieNode {
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
}`,
            rust: `#[derive(Default)]
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
}`
        }
    },
    {
        id: 'binary_search',
        title: 'Binary Search (Standard)',
        difficulty: 'Easy',
        variants: {
            cpp: `int binarySearch(const vector<int>& arr, int target) {
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
}`,
            python: `def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = (l + r) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return -1`,
            java: `public int binarySearch(int[] arr, int target) {
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
}`,
            javascript: `function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}`,
            rust: `fn binary_search(arr: &[i32], target: i32) -> i32 {
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
}`
        }
    },
    {
        id: 'dfs_graph',
        title: 'DFS (Graph)',
        difficulty: 'Easy',
        variants: {
            cpp: `void dfs(int u, vector<bool>& visited, const vector<vector<int>>& adj) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) {
            dfs(v, visited, adj);
        }
    }
}`,
            python: `def dfs(u, visited, adj):
    visited[u] = True
    for v in adj[u]:
        if not visited[v]:
            dfs(v, visited, adj)`,
            java: `public void dfs(int u, boolean[] visited, List<List<Integer>> adj) {
    visited[u] = true;
    for (int v : adj.get(u)) {
        if (!visited[v]) {
            dfs(v, visited, adj);
        }
    }
}`,
            javascript: `function dfs(u, visited, adj) {
    visited[u] = true;
    for (const v of adj[u]) {
        if (!visited[v]) {
            dfs(v, visited, adj);
        }
    }
}`,
            rust: `fn dfs(u: usize, visited: &mut Vec<bool>, adj: &Vec<Vec<usize>>) {
    visited[u] = true;
    for &v in &adj[u] {
        if !visited[v] {
            dfs(v, visited, adj);
        }
    }
}`
        }
    }
];
