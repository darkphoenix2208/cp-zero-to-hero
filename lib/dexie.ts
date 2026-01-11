import Dexie, { Table } from 'dexie';

export interface LocalProblem {
    id?: number;
    problem_link: string;
    verdict: 'OK' | 'WRONG_ANSWER' | 'TIME_LIMIT' | 'COMPILATION_ERROR' | 'RUNTIME_ERROR';
    difficulty?: number;
    date: Date;
}

export class CPTrackerDB extends Dexie {
    problems!: Table<LocalProblem>;

    constructor() {
        super('CPTrackerDB');
        this.version(1).stores({
            problems: '++id, problem_link, verdict, date, difficulty'
        });
    }
}

export const db = new CPTrackerDB();
