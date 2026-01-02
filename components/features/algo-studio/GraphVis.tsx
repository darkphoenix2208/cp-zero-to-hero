
'use client';

import React, { useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { GraphData } from './InputParser';
import { Loader2, RefreshCw, Layers, MousePointer2 } from 'lucide-react';
import { useTheme } from 'next-themes';

const Graph = dynamic<any>(() => import('react-graph-vis'), {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center text-zinc-500 gap-2"><Loader2 className="animate-spin" /> Initializing Physics Engine...</div>
});

interface GraphVisProps {
    data: GraphData; // Our generic { nodes: [], links: [] } format
    height?: number; // Optional fixed height
}

export default function GraphVis({ data, height = 600 }: GraphVisProps) {
    const { theme } = useTheme();
    const networkRef = useRef<any>(null);
    const [physicsEnabled, setPhysicsEnabled] = useState(true);

    // Transform generic data to Vis.js format
    const graphData = useMemo(() => {
        return {
            nodes: data.nodes.map(n => ({
                id: n.id,
                label: n.id, // CS Academy style: ID inside circle
                title: n.label, // Tooltip
                color: {
                    background: '#1e293b', // Slate-800
                    border: '#8b5cf6',     // Violet-500
                    highlight: {
                        background: '#334155',
                        border: '#a78bfa'
                    }
                },
                font: {
                    color: '#ffffff',
                    size: 16,
                    face: 'monospace',
                    align: 'center'
                },
                shape: 'circle',
                borderWidth: 2,
                shadow: true
            })),
            edges: data.links.map(l => ({
                from: typeof l.source === 'object' ? (l.source as any).id : l.source,
                to: typeof l.target === 'object' ? (l.target as any).id : l.target,
                arrows: data.isDirected ? 'to' : undefined,
                color: { color: '#64748b' }, // Slate-500
                width: 2,
                smooth: { type: 'continuous' }
            }))
        };
    }, [data]);

    // Vis.js Options - Static Layout Focus
    const options = {
        autoResize: true,
        height: '100%',
        width: '100%',
        layout: {
            // improvedLayout: true,
            randomSeed: 42, // Deterministic!
            hierarchical: false
        },
        physics: {
            // "Static" Graph Mode:
            // We run a huge number of iterations in the 'stabilization' phase (hidden),
            // then turn off physics completely so it never moves again.
            enabled: true,
            stabilization: {
                enabled: true,
                iterations: 5000, // 5000 ticks of simulation before first render
                updateInterval: 100,
                onlyDynamicEdges: false,
                fit: true // Zoom to fit after stabilization
            },
            barnesHut: {
                gravitationalConstant: -4000,
                centralGravity: 0.1,
                springLength: 120,
                springConstant: 0.04,
                damping: 0.5,
                avoidOverlap: 1
            },
            solver: 'barnesHut'
        },
        nodes: {
            scaling: { min: 16, max: 32 }
        },
        interaction: {
            hover: true,
            zoomView: true,
            dragView: true,
            selectable: true
        }
    };

    const handleResetLayout = () => {
        if (networkRef.current) {
            networkRef.current.fit({ animation: true });
        }
    };
    // Removed togglePhysics since we want it static.

    // Events
    const events = {
        stabilized: function () {
            // 🔒 LOCK IT DOWN
            // Once the initial 5000 iterations are done, we disable physics.
            if (networkRef.current) {
                networkRef.current.setOptions({ physics: { enabled: false } });
            }
        }
    };

    return (
        <div className="relative w-full border border-zinc-800 rounded-xl bg-[#0f172a] overflow-hidden flex flex-col shadow-2xl">
            {/* Graph Container */}
            <div style={{ height: height + 'px' }} className="w-full relative">
                {/* Custom Grid Background via CSS */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <Graph
                    graph={graphData}
                    options={options}
                    events={events}
                    getNetwork={(network: any) => {
                        networkRef.current = network;
                    }}
                />
            </div>

            {/* Control Bar (VisuAlgo style) */}
            <div className="h-12 border-t border-zinc-800 bg-zinc-900/50 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <button title="Pan/Zoom Mode" className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white transition">
                        <MousePointer2 size={16} />
                    </button>
                    <div className="h-4 w-px bg-zinc-700 mx-1" />
                    <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                        Physics: {physicsEnabled ? 'ON' : 'FROZEN'}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleResetLayout}
                        className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-xs font-bold flex items-center gap-2 transition"
                    >
                        <RefreshCw size={14} />
                        Reset Cam
                    </button>
                </div>
            </div>
        </div>
    );
}
