export interface GraphData {
    nodes: { id: string; label: string }[];
    links: { source: string; target: string; weight?: number; label?: string }[];
    isDirected: boolean;
    isWeighted: boolean;
}

export function parseGraphInput(text: string): GraphData {
    const lines = text.trim().split('\n').filter(l => l.trim().length > 0);
    const nodesMap = new Map<string, { id: string; label: string }>();
    const links: any[] = [];
    let isWeighted = false;
    let isZeroIndexed = false;

    if (lines.length === 0) return { nodes: [], links: [], isDirected: false, isWeighted: false };

    // Heuristic 1: Detect N and M (First Line)
    // Often format is:
    // 5 6 (N nodes, M edges)
    // u v
    // ...
    // But sometimes it's just edges. We'll trust the edges more.

    // Process all lines to find edges
    lines.forEach((line) => {
        const parts = line.trim().split(/\s+/).map(Number);
        if (parts.some(isNaN)) return; // Skip non-numeric lines

        if (parts.length >= 2) {
            // Heuristic: If first line has 2 numbers and they are small/reasonable, it might be N M
            // But if it's "1 2", it could be an edge.
            // We typically ignore the first line if it looks like N M metadata and doesn't match the rest of the edge patterns?
            // Actually, for visualization, simpler is better: treat everything as edges unless specifically N M only line.
            // Let's iterate.

            // Heuristic 2: Detect Weighted (3 numbers: u v w)
            if (parts.length === 3) {
                isWeighted = true;
                const [u, v, w] = parts;
                links.push({ source: String(u), target: String(v), weight: w, label: String(w) });
                nodesMap.set(String(u), { id: String(u), label: String(u) });
                nodesMap.set(String(v), { id: String(v), label: String(v) });
                if (u === 0 || v === 0) isZeroIndexed = true;
            } else if (parts.length === 2) {
                const [u, v] = parts;
                // Check if this line is overwhelmingly likely to be N M (e.g. line 0)
                // If it's the very first line and we haven't processed edges yet... logic below.
                links.push({ source: String(u), target: String(v) });
                nodesMap.set(String(u), { id: String(u), label: String(u) });
                nodesMap.set(String(v), { id: String(v), label: String(v) });
                if (u === 0 || v === 0) isZeroIndexed = true;
            }
        }
    });

    // Heuristic Cleanup: If the first line was "N M" but we treated it as an edge "N->M", 
    // we often see that N and M might be larger than any identifying nodes, or simply disconnected components.
    // Ideally, if line 0 is "5 5" and we have 5 other edges, we might drop line 0.
    // For now, let's keep it simple: Just render everything. Users can delete the first line if it looks weird.

    return {
        nodes: Array.from(nodesMap.values()),
        links,
        isDirected: false, // Default to undirected for now, UI can toggle
        isWeighted
    };
}
