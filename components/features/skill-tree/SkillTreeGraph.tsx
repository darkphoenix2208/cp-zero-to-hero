'use client';

import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    Controls,
    Background,
    ReactFlowProvider,
    Node,
    Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from 'dagre';
import { SkillNode } from './SkillNode';
import { GALAXY_SECTORS, PlanetNode } from '@/lib/galaxy';
import { PlanetBriefingModal } from './PlanetBriefingModal';
import { getUserSkills, seedSkills } from '@/app/actions';
import { Loader2 } from 'lucide-react';

const nodeTypes = {
    skill: SkillNode,
};

// Dagre Layouting Logic
const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    const nodeWidth = 220;
    const nodeHeight = 100;

    dagreGraph.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 100 });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = Position.Top;
        node.sourcePosition = Position.Bottom;

        // Shift slightly to center
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };
    });

    return { nodes, edges };
};

export default function SkillTreeGraph() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPlanet, setSelectedPlanet] = useState<PlanetNode | null>(null);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge({ ...params, type: 'smoothstep', animated: true }, eds)),
        [setEdges]
    );

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        // Find the full PlanetNode data
        const planet = GALAXY_SECTORS.find(p => p.id === node.id);
        if (planet) {
            setSelectedPlanet(planet);
        }
    }, []);

    useEffect(() => {
        const init = async () => {
            const handle = localStorage.getItem('cp-handle');
            // ...
            // Mock User Progress for Demo:
            // Let's assume user unlocked basics but not advanced
            // In real app, we fetch from DB. For now, we trust the 'prerequisites' logic mainly.

            // Build Nodes
            const initialNodes: Node[] = GALAXY_SECTORS.map((planet) => {
                // Simple logic: Unlocked if Sector 1, or if specific prereqs met (mocked)
                const unlocked = planet.sector === 1 || planet.id === 'binary-search-star';
                const mastered = planet.id === 'stl-ships'; // Mock mastery

                return {
                    id: planet.id,
                    type: 'skill',
                    data: {
                        label: planet.title,
                        iconName: 'code', // Fallback icon
                        xp: mastered ? 100 : (unlocked ? 30 : 0),
                        xpRequired: 100,
                        unlocked: unlocked,
                        mastered: mastered
                    },
                    position: { x: 0, y: 0 }
                };
            });

            // Build Edges from Prerequisites
            const initialEdges: Edge[] = [];
            GALAXY_SECTORS.forEach(planet => {
                planet.prerequisites.forEach(parentId => {
                    const isUnlocked = initialNodes.find(n => n.id === planet.id)?.data.unlocked;
                    initialEdges.push({
                        id: `${parentId}-${planet.id}`,
                        source: parentId,
                        target: planet.id,
                        type: 'smoothstep',
                        animated: true,
                        style: { stroke: isUnlocked ? '#3b82f6' : '#3f3f46', strokeWidth: 2 }
                    });
                });
            });

            const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            setLoading(false);
        };
        init();
    }, []);

    // ... loading check ...

    return (
        <div className="h-[65vh] md:h-[800px] w-full border border-zinc-800 rounded-xl bg-zinc-950 overflow-hidden relative shadow-2xl">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                fitView
                minZoom={0.2}
                maxZoom={2}
                attributionPosition="bottom-right"
            >
                <Background color="#18181b" gap={25} size={1} />
                <Controls className="bg-zinc-800 border-zinc-700 text-white" />
            </ReactFlow>

            <PlanetBriefingModal
                isOpen={!!selectedPlanet}
                onClose={() => setSelectedPlanet(null)}
                planet={selectedPlanet}
            />

            {/* Overlay UI ... */}

            {/* Overlay UI */}
            <div className="absolute top-4 left-4 pointer-events-none z-10 hidden md:block">
                <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4 rounded-xl shadow-lg">
                    <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                        Tech Tree <span className="text-blue-500 text-xs px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20">BETA</span>
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1 max-w-[200px]">
                        Complete prerequisites to unlock advanced algorithms. Click unlocked nodes to practice.
                    </p>

                    <div className="flex gap-4 mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-zinc-700"></div> Locked</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Unlocked</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Mastered</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Wrapper for Provider if needed (ReactFlow requires it if using useReactFlow hooks, but we aren't heavily using them yet)
export function SkillTreeWrapper() {
    return (
        <ReactFlowProvider>
            <SkillTreeGraph />
        </ReactFlowProvider>
    );
}
