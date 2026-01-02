'use client';

import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    Handle,
    Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import { seedSkills, getUserSkills } from '@/app/actions';
import { Loader2, Lock, Unlock, Trophy } from 'lucide-react';

// Custom Node Component to show RPG status
const SkillNode = ({ data }: any) => {
    const isLocked = !data.unlocked;
    const isMastered = data.mastery >= 100;

    let borderColor = 'border-zinc-700';
    let bgColor = 'bg-zinc-900';
    let textColor = 'text-zinc-500';
    let Icon = Lock;

    if (!isLocked) {
        borderColor = 'border-blue-600';
        bgColor = 'bg-blue-900/20';
        textColor = 'text-blue-100';
        Icon = Unlock;
    }

    if (isMastered) {
        borderColor = 'border-yellow-500';
        bgColor = 'bg-yellow-900/20';
        textColor = 'text-yellow-100 shadow-[0_0_15px_rgba(234,179,8,0.5)]';
        Icon = Trophy;
    }

    return (
        <div className={`px-4 py-2 rounded-xl border-2 ${borderColor} ${bgColor} min-w-[150px] shadow-lg transition-all hover:scale-105`}>
            <Handle type="target" position={Position.Top} className="!bg-zinc-500" />
            <div className="flex items-center gap-2">
                <Icon size={16} className={isMastered ? 'text-yellow-500' : isLocked ? 'text-zinc-600' : 'text-blue-400'} />
                <div>
                    <div className={`text-sm font-bold ${textColor}`}>{data.label}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{isLocked ? 'Locked' : isMastered ? 'Mastered' : 'Unlocked'}</div>
                </div>
            </div>
            {/* Mastery Bar */}
            {!isLocked && (
                <div className="w-full bg-zinc-800 h-1.5 mt-2 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${isMastered ? 'bg-yellow-500' : 'bg-blue-500'}`}
                        style={{ width: `${Math.min(data.mastery, 100)}%` }}
                    />
                </div>
            )}
            <Handle type="source" position={Position.Bottom} className="!bg-zinc-500" />
        </div>
    );
};

const nodeTypes = { skill: SkillNode };

export default function SkillTree() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [loading, setLoading] = useState(true);

    // Initial Load & Seeding
    useEffect(() => {
        const init = async () => {
            const handle = localStorage.getItem('cp-handle');
            if (handle) {
                // First ensure DB is seeded (idempotent)
                await seedSkills();

                // Then fetch status
                const skills = await getUserSkills(handle);
                layoutGraph(skills);
            }
            setLoading(false);
        };
        init();
    }, []);

    const layoutGraph = (skills: any[]) => {
        // Simple Layered Layout
        const layers: any[][] = [[], [], [], [], []]; // Tiers 0-4

        skills.forEach(s => {
            if (layers[s.tier]) layers[s.tier].push(s);
        });

        const newNodes: any[] = [];
        const newEdges: any[] = [];

        // Position Nodes
        layers.forEach((layer, tierIndex) => {
            const width = window.innerWidth > 1000 ? 800 : window.innerWidth;
            const gap = width / (layer.length + 1);

            layer.forEach((skill, index) => {
                const x = (index + 1) * gap - 75; // Center shift
                const y = tierIndex * 150;

                newNodes.push({
                    id: skill.slug,
                    type: 'skill',
                    position: { x, y },
                    data: {
                        label: skill.name,
                        unlocked: skill.unlocked,
                        mastery: skill.mastery
                    }
                });

                // Create Edges from this node's prerequisites to this node
                // (Prerequisites are parents in the tree)
                skill.prerequisites.forEach((p: any) => {
                    // access nested prerequisite object if populated, otherwise assume we need to match IDs
                    // Wait, getUserSkills returns flat list but Prisma include returns objects.
                    // The client code just needs the slug of the parent. 
                    // Let's assume userSkills mapping kept the necessary info or we re-map.
                    // Actually, primitives.
                    // We need the SLUG of the prerequisite skill.
                    const parentSkill = skills.find(s => s.id === p.prerequisiteId);
                    if (parentSkill && parentSkill.slug !== skill.slug) {
                        const edgeId = `${parentSkill.slug}-${skill.slug}`;
                        if (!newEdges.find(e => e.id === edgeId)) {
                            newEdges.push({
                                id: edgeId,
                                source: parentSkill.slug,
                                target: skill.slug,
                                type: 'smoothstep',
                                animated: true,
                                style: { stroke: skill.unlocked ? '#3b82f6' : '#3f3f46' }
                            });
                        }
                    }
                });
            });
        });

        setNodes(newNodes);
        setEdges(newEdges);
    };

    if (loading) return <div className="flex h-96 items-center justify-center"><Loader2 className="animate-spin text-pink-500" /></div>;

    return (
        <div className="h-[70vh] w-full border border-zinc-800 rounded-xl bg-zinc-950 overflow-hidden relative group">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.5 }}
                minZoom={0.5}
                maxZoom={1.5}
            >
                <Background color="#27272a" gap={20} />
                <Controls className="bg-zinc-800 border-zinc-700 text-white" />
                <MiniMap style={{ background: '#18181b' }} nodeColor={n => n.data.unlocked ? '#3b82f6' : '#3f3f46'} />
            </ReactFlow>
            <div className="absolute top-4 left-4 pointer-events-none">
                <h3 className="text-xl font-bold text-zinc-100">Skill Tree</h3>
                <p className="text-xs text-zinc-500">Unlock nodes by solving problems with specific tags.</p>
            </div>
        </div>
    );
}
