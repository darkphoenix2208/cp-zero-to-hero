export interface Template {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    code: string;
}

export const RACER_TEMPLATES: Template[] = [
    {
        id: 'dsu',
        title: 'Disjoint Set Union (DSU)',
        difficulty: 'Medium',
        code: `class DSU {
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
};`
    },
    {
        id: 'fenwick',
        title: 'Fenwick Tree (BIT)',
        difficulty: 'Medium',
        code: `class FenwickTree {
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
};`
    },
    {
        id: 'binary_search',
        title: 'Binary Search (Standard)',
        difficulty: 'Easy',
        code: `int binarySearch(const vector<int>& arr, int target) {
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
}`
    },
    {
        id: 'dfs_graph',
        title: 'DFS (Graph)',
        difficulty: 'Easy',
        code: `void dfs(int u, vector<bool>& visited, const vector<vector<int>>& adj) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) {
            dfs(v, visited, adj);
        }
    }
}`
    },
    {
        id: 'bfs_graph',
        title: 'BFS (Graph)',
        difficulty: 'Easy',
        code: `void bfs(int start, int n, const vector<vector<int>>& adj) {
    vector<bool> visited(n, false);
    queue<int> q;
    visited[start] = true;
    q.push(start);
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`
    }
];
