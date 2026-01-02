
'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { GraphData } from './InputParser';
import { ZoomIn, ZoomOut, RotateCcw, Pause, Play, GitMerge, GitCommit, Layout } from 'lucide-react';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

interface GraphCanvasProps {
    data: GraphData;
    width: number;
    height: number;
    initialLayout?: 'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin' | null;
}

export default function GraphCanvas({ data, width, height, initialLayout = null }: GraphCanvasProps) {
    const fgRef = useRef<any>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [dagMode, setDagMode] = useState<any>(initialLayout); // 'td' = Top Down, null = Free
    const [cooldownActive, setCooldownActive] = useState(true);

    // Initial Physics Configuration
    useEffect(() => {
        if (fgRef.current) {
            // center force is default, but we can boost it
            fgRef.current.d3Force('charge').strength(-300); // Strong Repulsion

            // Re-heat simulation when data changes
            fgRef.current.d3ReheatSimulation();

            // Optional: Auto-zoom slightly after stabilization
            if (cooldownActive) {
                setTimeout(() => {
                    fgRef.current?.zoomToFit(800, 50);
                }, 1000);
            }
        }
    }, [data, dagMode, cooldownActive]);

    const handleZoomIn = () => {
        fgRef.current?.zoom(fgRef.current.zoom() * 1.2, 200);
    };

    const handleZoomOut = () => {
        fgRef.current?.zoom(fgRef.current.zoom() / 1.2, 200);
    };

    const handleZoomToFit = () => {
        fgRef.current?.zoomToFit(500, 20);
    };

    const togglePause = () => {
        if (isPaused) {
            fgRef.current?.resumeAnimation();
        } else {
            fgRef.current?.pauseAnimation();
        }
        setIsPaused(!isPaused);
    };

    const toggleDagMode = () => {
        setDagMode((prev: any) => prev === 'td' ? null : 'td');
        // Restart physics to adjust
        fgRef.current?.d3ReheatSimulation();
    };

    return (
        <div className="relative w-full h-full bg-[#0f172a] overflow-hidden group">
            {/* Cyberpunk Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />
            {/* Radial Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, #0f172a 100%)'
                }}
            />

            <ForceGraph2D
                ref={fgRef}
                width={width}
                height={height}
                graphData={data}

                // Physics
                dagMode={dagMode}
                dagLevelDistance={80}
                backgroundColor="transparent"
                d3AlphaDecay={0.05} // Slower decay = cleaner layout before freezing
                d3VelocityDecay={0.3} // Medium friction
                cooldownTicks={100} // Run for 100 frames (~2s) then freeze
                onEngineStop={() => console.log('Physics Frozen')}

                // Interaction
                enableNodeDrag={!isPaused}

                // Rendering
                nodeLabel="label"
                nodeRelSize={8}
                nodeColor={() => '#22c55e'} // Fallback color
                linkColor={() => '#475569'}

                // Custom Canvas Drawing
                nodeCanvasObject={(node: any, ctx, globalScale) => {
                    const label = node.label;
                    const fontSize = 14 / globalScale;
                    const radius = 6;

                    // Outer Glow
                    ctx.shadowColor = '#8b5cf6'; // Violet glow
                    ctx.shadowBlur = 15;

                    // Circle Body
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = '#1e293b'; // Slate-800
                    ctx.fill();

                    // Border
                    ctx.lineWidth = 2 / globalScale;
                    ctx.strokeStyle = '#8b5cf6';
                    ctx.stroke();

                    ctx.shadowBlur = 0; // Reset shadow for text

                    // Label
                    ctx.font = `bold ${fontSize}px "JetBrains Mono", sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '#f8fafc';
                    ctx.fillText(label, node.x, node.y + radius + fontSize);
                }}

                linkCanvasObject={(link: any, ctx, globalScale) => {
                    const start = link.source;
                    const end = link.target;

                    if (typeof start !== 'object' || typeof end !== 'object') return;

                    ctx.beginPath();
                    ctx.moveTo(start.x, start.y);
                    ctx.lineTo(end.x, end.y);

                    ctx.lineWidth = 2 / globalScale;
                    ctx.strokeStyle = '#475569'; // Slate-600

                    // Arrow
                    // Simple manual arrow calculation if needed, or rely on built-in but standard linkCanvas overrides it.
                    // Let's rely on standard link rendering or draw simple line for cyber look.
                    ctx.stroke();
                }}
                linkDirectionalArrowLength={4}
                linkDirectionalArrowRelPos={1}
            />

            {/* Floating Control Dock */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2 p-2 bg-zinc-900/90 backdrop-blur border border-zinc-700 rounded-xl shadow-2xl translate-y-2 opacity-90 hover:opacity-100 hover:translate-y-0 transition-all duration-300">
                <ControlBtn onClick={handleZoomIn} icon={<ZoomIn size={18} />} tooltip="Zoom In" />
                <ControlBtn onClick={handleZoomOut} icon={<ZoomOut size={18} />} tooltip="Zoom Out" />
                <ControlBtn onClick={handleZoomToFit} icon={<RotateCcw size={18} />} tooltip="Reset View" />
                <div className="h-px w-full bg-zinc-800 my-1" />
                <ControlBtn onClick={toggleDagMode} icon={dagMode ? <GitMerge size={18} className="rotate-90 text-blue-400" /> : <Layout size={18} />} tooltip={dagMode ? "Strict Tree Mode" : "Free Mode"} active={!!dagMode} />
                <ControlBtn onClick={togglePause} icon={isPaused ? <Play size={18} className="text-green-400" /> : <Pause size={18} className="text-yellow-400" />} tooltip={isPaused ? "Resume Physics" : "Pause Physics"} />
            </div>
        </div>
    );
}

function ControlBtn({ onClick, icon, tooltip, active }: any) {
    return (
        <button
            onClick={onClick}
            title={tooltip}
            className={`p-2 rounded-lg transition-colors flex items-center justify-center ${active ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'}`}
        >
            {icon}
        </button>
    );
}
