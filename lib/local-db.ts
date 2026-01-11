import Dexie, { type EntityTable } from 'dexie';

interface ProblemRecord {
    id: number; // Auto-incremented by Dexie
    problem_link: string;
    verdict: string;
    difficulty: number;
    date: number; // Timestamp
}

const db = new Dexie('CPTrackerDB') as Dexie & {
    problems: EntityTable<ProblemRecord, 'id'>;
};

// Schema Definition
db.version(1).stores({
    problems: '++id, problem_link, verdict, date, difficulty' // Primary key and indexed props
});

export type { ProblemRecord };
export { db };
