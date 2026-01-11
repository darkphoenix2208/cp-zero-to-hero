import { Queue, QueueEvents } from 'bullmq';
import IORedis from 'ioredis';

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

// Connection Config
export const connection = new IORedis(REDIS_URL, {
    maxRetriesPerRequest: null, // Required by BullMQ
});

// The Queue Name
export const QUEUE_NAME = 'code-execution';

// Shared Queue Instance (Producer side)
// Using global to prevent multiple connections in Next.js dev mode hot-reloading
declare global {
    var codeQueue: Queue | undefined;
}

let codeQueueClient: Queue;

if (!global.codeQueue) {
    global.codeQueue = new Queue(QUEUE_NAME, { connection: connection as any });
}
codeQueueClient = global.codeQueue;

export const codeQueue = codeQueueClient;
