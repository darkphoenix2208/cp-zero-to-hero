'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { GraphData } from './InputParser';
import { useTheme } from 'next-themes';
import { Loader2 } from 'lucide-react';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full text-zinc-500"><Loader2 className="animate-spin mr-2" /> Loading Engine...</div>
});

interface GraphCanvasProps {
    data: GraphData;
    width?: number;
    height?: number;
}

export default function GraphCanvas({ data, width, height }: GraphCanvasProps) {
    const { theme } = useTheme();
    const isDark = true;
    const fgRef = useRef<any>(null);

    // Zoom to fit on data change
    useEffect(() => {
        if (fgRef.current) {
            // Apply forces
            fgRef.current.d3Force('charge').strength(-200); // Repel
            fgRef.current.d3Force('link').distance(70);

            // Critical: Ensure center force is active to stop drift!
            // ForceGraph2D adds a center force by default? Let's treat it explicitly.
            // If we find it drifts, we can add a positioning force.

            fgRef.current.d3ReheatSimulation();

            // Quick auto-zoom
            setTimeout(() => {
                if (fgRef.current) {
                    fgRef.current.zoomToFit(400, 40);
                }
            }, 600);
        }
    }, [data, width, height]);

    return (
        <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950 relative h-full w-full">
            <div className="absolute top-4 left-4 z-10 bg-zinc-900/80 backdrop-blur p-2 rounded-lg border border-zinc-800 text-xs text-zinc-400">
                Nodes: <span className="text-white font-bold">{data.nodes.length}</span> •
                Edges: <span className="text-white font-bold">{data.links.length}</span>
            </div>

            <ForceGraph2D
                ref={fgRef}
                graphData={data}
                width={width}
                height={height}

                // Visuals
                nodeLabel="label"
                nodeColor={() => '#a78bfa'}
                nodeRelSize={6}

                // Custom Node Rendering
                nodeCanvasObject={(node: any, ctx, globalScale) => {
                    const label = node.label;
                    const fontSize = 12 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;

                    ctx.fillStyle = '#18181b';
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
                    ctx.fillStyle = '#8b5cf6';
                    ctx.fill();

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = 'white';
                    ctx.font = `bold 4px Sans-Serif`;
                    ctx.fillText(node.label, node.x, node.y);
                }}

                // Links
                linkColor={() => '#3f3f46'}
                linkWidth={data.isWeighted ? 2 : 1}
                linkLabel="label"
                linkDirectionalArrowLength={3.5}
                linkDirectionalArrowRelPos={1}
                linkCurvature={0.2}

                // Physics Engine Props
                backgroundColor={'#09090b'}
                d3VelocityDecay={0.6} // High friction
                d3AlphaDecay={0.2}    // Ultra-Fast cooling (freezes in ~1 sec)
                cooldownTicks={15}    // Stop simulation after 15 frames (Static)
                onEngineStop={() => fgRef.current?.zoomToFit(400, 20)}
            />
        </div>
    );
}
