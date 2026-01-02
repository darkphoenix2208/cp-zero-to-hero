import { GraphData } from './InputParser';

// Dedicated helper to generate recursion trees
// MVP: Only Fibonacci
export function generateFibonacciTree(n: number): GraphData {
    const nodes: any[] = [];
    const links: any[] = [];

    let idCounter = 0;

    function recurse(val: number, parentId?: string) {
        const id = String(idCounter++);
        const label = `Fib(${val})`;

        // Add Node
        // Color heuristic: Base cases (0, 1) are green. 
        // Duplicate calculations could be red (Need a map to track visited states?)

        nodes.push({ id, label, val });

        if (parentId) {
            links.push({ source: parentId, target: id });
        }

        if (val <= 1) return;

        recurse(val - 1, id);
        recurse(val - 2, id);
    }

    recurse(n, undefined);

    return {
        nodes,
        links,
        isDirected: true,
        isWeighted: false
    };
}
