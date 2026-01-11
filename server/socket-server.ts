import { createServer } from 'http';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.SOCKET_PORT || 3001;

// Create HTTP server
const httpServer = createServer();

// Initialize Socket.io
const io = new Server(httpServer, {
    cors: {
        origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

console.log(`🔌 Socket.io Server Starting on port ${PORT}...`);

// Connection event handler
io.on('connection', (socket) => {
    console.log(`✅ Client connected: ${socket.id}`);

    // Join user to their personal room
    socket.on('join_user_room', (userId: string) => {
        const roomName = `user_${userId}`;
        socket.join(roomName);
        console.log(`👤 User ${userId} joined room: ${roomName}`);
        socket.emit('room_joined', { room: roomName });
    });

    // Handle room emissions from worker
    socket.on('to_room', ({ room, event, data }) => {
        console.log(`📡 Broadcasting to room ${room}: ${event}`);
        io.to(room).emit(event, data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`❌ Client disconnected: ${socket.id}`);
    });
});

// Export io instance for worker access
export { io };

// Start server
httpServer.listen(PORT, () => {
    console.log(`🚀 Socket.io server running on http://localhost:${PORT}`);
});
