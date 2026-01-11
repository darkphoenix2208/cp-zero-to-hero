# WebSocket Real-Time Code Execution System

## Architecture Overview

The system consists of three components that work together:

1. **Socket.io Server** (`server/socket-server.ts`) - Standalone server on port 3001
2. **BullMQ Worker** (`workers/judge.ts`) - Processes jobs and emits results via Socket.io
3. **React Frontend** (`hooks/useSocketResult.ts`, `hooks/useRunCode.ts`) - Listens for real-time updates

## How It Works

### Flow Diagram
```
User clicks "Run" 
  ↓
API enqueues job + returns jobId
  ↓
User joins room "user_123" via Socket.io
  ↓
Worker processes job in background
  ↓
Worker emits "submission_complete" to "user_123" room
  ↓
Frontend receives event instantly (no polling!)
  ↓
UI updates with result
```

## Setup Instructions

### 1. Environment Variables

Add to your `.env` file:
```bash
SOCKET_PORT=3001
SOCKET_URL=http://localhost:3001
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
REDIS_URL=redis://127.0.0.1:6379
```

### 2. Running the System

You need **3 terminal windows**:

**Terminal 1 - Next.js App:**
```bash
npm run dev
```

**Terminal 2 - Socket.io Server:**
```bash
npx tsx server/socket-server.ts
```

**Terminal 3 - Worker:**
```bash
npx tsx workers/judge.ts
```

### 3. Frontend Usage

```tsx
'use client';

import { useRunCode } from '@/hooks/useRunCode';
import { useSession } from 'next-auth/react';

export function CodeEditor() {
    const { data: session } = useSession();
    const { runCode, result } = useRunCode(session?.user?.id);

    const handleRun = () => {
        runCode(code, 'cpp', input);
    };

    return (
        <div>
            <button onClick={handleRun}>Run Code</button>
            {result.status === 'running' && <p>Processing...</p>}
            {result.status === 'completed' && <pre>{result.output}</pre>}
            {result.status === 'failed' && <p>Error: {result.error}</p>}
        </div>
    );
}
```

## Why WebSockets > Polling?

| Feature | Polling | WebSockets |
|---------|---------|------------|
| **Latency** | 1-2 seconds | Instant (<50ms) |
| **Network Load** | High (1 req/sec) | Low (1 connection) |
| **Server Load** | Scales linearly | Constant |
| **Battery Usage** | High | Low |

## Room-Based Architecture

Each user gets a personal room: `user_${userId}`

- **Isolation**: Results only go to the user who submitted
- **Scalability**: Socket.io handles millions of rooms efficiently
- **Security**: No cross-user data leakage

## Production Considerations

### For Deployment:

1. **Socket.io Server**: Deploy as a separate service (e.g., on Render/Railway)
2. **CORS**: Update allowed origins in `socket-server.ts`
3. **Load Balancing**: Use Redis adapter for Socket.io clustering
4. **Reconnection**: The frontend automatically handles reconnects

### Scaling Beyond 10k Users:

```typescript
// In socket-server.ts, add Redis adapter:
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

const pubClient = createClient({ url: REDIS_URL });
const subClient = pubClient.duplicate();

await Promise.all([pubClient.connect(), subClient.connect()]);

io.adapter(createAdapter(pubClient, subClient));
```

This allows horizontal scaling with multiple Socket.io instances.
