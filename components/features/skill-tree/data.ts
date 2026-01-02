import { LucideIcon, Calculator, Cpu, Network, Binary, GitGraph, Code, Search, SortAsc, Braces, Layers, Box, Hash, Share2, TrendingUp, Zap } from 'lucide-react';

export interface SkillNodeData {
    id: string;
    label: string;
    description: string;
    xpRequired: number; // XP needed to master this specific node (e.g., 100)
    prerequisites: string[]; // IDs of parent nodes
    iconName: string; // We'll map string to Icon component
    tier: number; // For manual fallback or coloring
}

export const SKILL_TREE_DATA: SkillNodeData[] = [
    // Tier 1 (Roots)
    {
        id: 'complexity',
        label: 'Time Complexity',
        description: 'Big O Notation, Loops, and Limits',
        xpRequired: 100,
        prerequisites: [],
        iconName: 'Cpu',
        tier: 1
    },
    {
        id: 'math',
        label: 'Basic Math',
        description: 'GCD, Modular Arithmetic, Primes',
        xpRequired: 100,
        prerequisites: [],
        iconName: 'Calculator',
        tier: 1
    },
    {
        id: 'arrays',
        label: 'Arrays & Strings',
        description: 'Sliding Window, Prefix Sums',
        xpRequired: 100,
        prerequisites: [],
        iconName: 'Braces',
        tier: 1
    },

    // Tier 2
    {
        id: 'number-theory',
        label: 'Number Theory',
        description: 'Sieve, Euler Totient, Mod Inverse',
        xpRequired: 100,
        prerequisites: ['math'],
        iconName: 'Hash',
        tier: 2
    },
    {
        id: 'binary-search',
        label: 'Binary Search',
        description: 'Search on Answer, monotonic functions',
        xpRequired: 100,
        prerequisites: ['complexity', 'arrays'],
        iconName: 'Search',
        tier: 2
    },
    {
        id: 'two-pointers',
        label: 'Two Pointers',
        description: 'Efficient array traversal',
        xpRequired: 100,
        prerequisites: ['arrays'],
        iconName: 'Code',
        tier: 2
    },
    {
        id: 'greedy',
        label: 'Sorting & Greedy',
        description: 'Intervals, custom comparators',
        xpRequired: 100,
        prerequisites: ['arrays', 'complexity'],
        iconName: 'SortAsc',
        tier: 2
    },
    {
        id: 'recursion',
        label: 'Recursion',
        description: 'Recursive thinking, backtracking',
        xpRequired: 100,
        prerequisites: ['complexity'],
        iconName: 'Layers',
        tier: 2
    },

    // Tier 3
    {
        id: 'dp',
        label: 'Dynamic Programming',
        description: 'Memoization, Tabulation, Knapsack',
        xpRequired: 100,
        prerequisites: ['recursion'],
        iconName: 'Box',
        tier: 3
    },
    {
        id: 'graphs',
        label: 'Graph Theory',
        description: 'BFS, DFS, Adjacency Lists',
        xpRequired: 100,
        prerequisites: ['recursion', 'arrays'],
        iconName: 'Share2',
        tier: 3
    },
    {
        id: 'trees',
        label: 'Trees',
        description: 'Traversals, Diameter, LCA',
        xpRequired: 100,
        prerequisites: ['graphs'],
        iconName: 'GitGraph',
        tier: 3
    },

    // Tier 4
    {
        id: 'segtree',
        label: 'Segment Trees',
        description: 'Range Queries, Updates',
        xpRequired: 100,
        prerequisites: ['trees', 'binary-search'],
        iconName: 'Binary',
        tier: 4
    },
    {
        id: 'flow',
        label: 'Network Flow',
        description: 'Max Flow, Min Cut',
        xpRequired: 100,
        prerequisites: ['graphs'],
        iconName: 'Network',
        tier: 4
    }
];

export const getIcon = (name: string) => {
    switch (name) {
        case 'Cpu': return Cpu;
        case 'Calculator': return Calculator;
        case 'Braces': return Braces;
        case 'Hash': return Hash;
        case 'Search': return Search;
        case 'Code': return Code;
        case 'SortAsc': return SortAsc;
        case 'Layers': return Layers;
        case 'Box': return Box;
        case 'Share2': return Share2;
        case 'GitGraph': return GitGraph;
        case 'Binary': return Binary;
        case 'Network': return Network;
        default: return Zap;
    }
}
