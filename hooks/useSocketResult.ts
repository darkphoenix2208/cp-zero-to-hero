'use client';

import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketResult {
    jobId: string;
    output?: string;
    error?: string;
    status: 'completed' | 'failed';
}

export function useSocketResult(userId: string | undefined) {
    const [result, setResult] = useState<SocketResult | null>(null);
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        if (!userId) return;

        const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001';

        // Initialize socket connection
        const socket = io(SOCKET_URL, {
            transports: ['websocket', 'polling']
        });

        socketRef.current = socket;

        socket.on('connect', () => {
            console.log('🔌 Connected to Socket.io server');

            // Join user's room
            socket.emit('join_user_room', userId);
        });

        socket.on('room_joined', (data) => {
            console.log(`✅ Joined room: ${data.room}`);
        });

        // Listen for submission results
        socket.on('submission_complete', (data: SocketResult) => {
            console.log('📡 Received submission result:', data);
            setResult(data);
        });

        socket.on('disconnect', () => {
            console.log('❌ Disconnected from Socket.io server');
        });

        socket.on('connect_error', (error) => {
            console.error('Socket connection error:', error);
        });

        // Cleanup on unmount
        return () => {
            console.log('🧹 Cleaning up socket connection');
            socket.disconnect();
        };
    }, [userId]);

    const clearResult = () => setResult(null);

    return { result, clearResult };
}
