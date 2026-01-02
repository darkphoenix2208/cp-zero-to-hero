'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { format } from 'date-fns';

interface RivalryGraphProps {
    data: any[];
    handles: string[]; // List of handles to plot (keys in data)
}

export function RivalryGraph({ data, handles }: RivalryGraphProps) {
    // Colors for lines
    const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

    if (!data || data.length === 0) {
        return <div className="h-full flex items-center justify-center text-zinc-600 text-xs">No rating history available available.</div>;
    }

    return (
        <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis
                        dataKey="time"
                        domain={['auto', 'auto']}
                        type="number"
                        tickFormatter={(unix) => format(new Date(unix * 1000), 'MMM yy')}
                        stroke="#666"
                        fontSize={10}
                        tickCount={6}
                    />
                    <YAxis
                        domain={['auto', 'auto']}
                        stroke="#666"
                        fontSize={10}
                        width={30}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                        itemStyle={{ fontSize: '12px' }}
                        labelFormatter={(unix) => format(new Date(unix * 1000), 'MMM d, yyyy')}
                    />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />

                    {handles.map((handle, i) => (
                        <Line
                            key={handle}
                            connectNulls
                            type="monotone"
                            dataKey={handle}
                            stroke={colors[i % colors.length]}
                            strokeWidth={2}
                            dot={{ r: 2 }}
                            activeDot={{ r: 5 }}
                            animationDuration={1500}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
