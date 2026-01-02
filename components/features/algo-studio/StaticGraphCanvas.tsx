'use client';

import { useMemo } from 'react';
import { GraphData } from './InputParser';
import { motion } from 'framer-motion';

interface StaticGraphCanvasProps {
    data: GraphData;
    width: number;
    height: number;
    layoutType?: 'circle' | 'tree';
}

export default function StaticGraphCanvas({ data, width, height, layoutType = 'circle' }: StaticGraphCanvasProps) {
    const { nodes, links } = data;
    const padding = 50;
    const safeWidth = width - padding * 2;
    const safeHeight = height - padding * 2;
    const centerX = width / 2;
    const centerY = height / 2;

    // --- Layout Logic ---
    const nodePositions = useMemo(() => {
        const pos: Record<string, { x: number, y: number }> = {};

        if (layoutType === 'circle') {
            const radius = Math.min(safeWidth, safeHeight) / 2 * 0.8;
            const angleStep = (2 * Math.PI) / nodes.length;

            nodes.forEach((node, i) => {
                pos[node.id] = {
                    x: centerX + radius * Math.cos(i * angleStep - Math.PI / 2),
                    y: centerY + radius * Math.sin(i * angleStep - Math.PI / 2)
                };
            });
        }
        else if (layoutType === 'tree') {
            // Simple Level-Based Tree Layout (BFS)
            const levels: Record<string, number> = {};
            const adj: Record<string, string[]> = {};

            // Build adj
            links.forEach(l => {
                const s = typeof l.source === 'object' ? (l.source as any).id : l.source;
                const t = typeof l.target === 'object' ? (l.target as any).id : l.target;
                if (!adj[s]) adj[s] = [];
                adj[s].push(t);
            });

            // BFS for levels
            const textNodes = nodes.filter(n => !nodes.some(parent =>
                links.some(l => {
                    const t = typeof l.target === 'object' ? (l.target as any).id : l.target;
                    return t === n.id;
                })
            )); // Heuristic: Find root (node with no incoming edges? Or just pick 0?)

            // Fallback root: 0
            const rootId = textNodes.length > 0 ? textNodes[0].id : nodes[0]?.id;

            if (rootId) {
                const queue = [{ id: rootId, lvl: 0 }];
                const visited = new Set([rootId]);
                levels[rootId] = 0;

                while (queue.length > 0) {
                    const { id, lvl } = queue.shift()!;
                    const neighbors = adj[id] || [];
                    neighbors.forEach(nId => {
                        if (!visited.has(nId)) {
                            visited.add(nId);
                            levels[nId] = lvl + 1;
                            queue.push({ id: nId, lvl: lvl + 1 });
                        }
                    });
                }
            } else {
                // Fallback if disconnected
                nodes.forEach(n => levels[n.id] = 0);
            }

            // Assign X positions based on level buckets
            const levelBuckets: Record<number, string[]> = {};
            let maxLevel = 0;
            Object.entries(levels).forEach(([id, lvl]) => {
                if (!levelBuckets[lvl]) levelBuckets[lvl] = [];
                levelBuckets[lvl].push(id);
                maxLevel = Math.max(maxLevel, lvl);
            });

            const levelHeight = safeHeight / (maxLevel + 1);

            nodes.forEach(n => {
                const lvl = levels[n.id] || 0;
                const bucket = levelBuckets[lvl];
                const indexInBucket = bucket.indexOf(n.id);
                const bucketWidth = safeWidth; // spread across full width
                const xStep = bucketWidth / (bucket.length + 1);

                pos[n.id] = {
                    x: padding + xStep * (indexInBucket + 1),
                    y: padding + lvl * levelHeight + 50 // offset
                };
            });
        }

        return pos;
    }, [nodes, links, width, height, layoutType, centerX, centerY, safeHeight, safeWidth]);


    return (
        <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800 relative overflow-hidden">
            <svg width={width} height={height} className="block">
                {/* Define Arrowhead */}
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#52525b" />
                    </marker>
                </defs>

                {/* Links */}
                {links.map((link, i) => {
                    // Handle both object ref (after force graph) and string ID (raw input)
                    const sId = typeof link.source === 'object' ? (link.source as any).id : link.source;
                    const tId = typeof link.target === 'object' ? (link.target as any).id : link.target;

                    const start = nodePositions[sId];
                    const end = nodePositions[tId];

                    if (!start || !end) return null;

                    return (
                        <motion.line
                            key={`link-${i}`}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="#52525b"
                            strokeWidth="2"
                            markerEnd="url(#arrowhead)"
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => {
                    const pos = nodePositions[node.id];
                    if (!pos) return null;

                    return (
                        <motion.g
                            key={`node-${node.id}`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <circle
                                cx={pos.x}
                                cy={pos.y}
                                r="20"
                                fill="#27272a" // Zinc-800
                                stroke="#8b5cf6" // Violet-500
                                strokeWidth="2"
                                className="cursor-pointer hover:stroke-white transition-colors"
                            />
                            <text
                                x={pos.x}
                                y={pos.y}
                                dy=".35em"
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                                fontWeight="bold"
                                className="pointer-events-none select-none"
                            >
                                {node.label}
                            </text>
                        </motion.g>
                    );
                })}
            </svg>

            {/* Legend/Info Overlay */}
            <div className="absolute top-4 left-4 pointer-events-none">
                <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-400">
                    {layoutType === 'circle' ? 'Generic Graph (Circle)' : 'Hierarchical Tree'}
                </div>
            </div>
        </div>
    );
}
