import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { io as ioClient } from 'socket.io-client';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const SOCKET_URL = process.env.SOCKET_URL || 'http://localhost:3001';

const connection = new IORedis(REDIS_URL, {
    maxRetriesPerRequest: null,
});

const QUEUE_NAME = 'code-execution';

console.log("👷 Judge Worker Starting...");

// Connect to Socket.io server
const socket = ioClient(SOCKET_URL);

socket.on('connect', () => {
    console.log('🔌 Connected to Socket.io server');
});

socket.on('disconnect', () => {
    console.log('❌ Disconnected from Socket.io server');
});

const worker = new Worker(QUEUE_NAME, async (job) => {
    console.log(`Processing Job ${job.id}...`);

    // Simulate Processing Time (Compiler)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock Execution Logic
    const { code, input, userId } = job.data;

    // In a real app, you'd spawn a Docker container here
    const output = `Executed successfully.\nInput: ${input || "None"}\nResult: Hello World from Async Worker!`;

    console.log(`Job ${job.id} Completed.`);

    // 🚀 REAL-TIME PUSH: Emit result to user's room
    if (userId) {
        socket.emit('to_room', {
            room: `user_${userId}`,
            event: 'submission_complete',
            data: {
                jobId: job.id,
                output,
                status: 'completed'
            }
        });
        console.log(`📡 Emitted result to user_${userId}`);
    }

    return output;

}, { connection });

worker.on('completed', job => {
    console.log(`✅ Job ${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
    console.log(`❌ Job ${job?.id} has failed with ${err.message}`);

    // Emit failure to user
    if (job?.data.userId) {
        socket.emit('to_room', {
            room: `user_${job.data.userId}`,
            event: 'submission_complete',
            data: {
                jobId: job.id,
                error: err.message,
                status: 'failed'
            }
        });
    }
});
