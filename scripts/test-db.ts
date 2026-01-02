import { prisma } from "../lib/db";

async function main() {
    console.log("Testing DB Connection...");
    try {
        const count = await prisma.user.count();
        console.log(`Connection Successful. User count: ${count}`);

        // Try creating a test user (rollback after?)
        // Actually, just reading is enough to verify connection and schema basics.
        // Let's try to query a non-existent user to check query execution.
        const user = await prisma.user.findFirst();
        console.log("Found first user:", user ? "Yes" : "No");

        // Check if Account table exists/works
        const accounts = await prisma.account.count();
        console.log(`Account count: ${accounts}`);

    } catch (e) {
        console.error("DB Connection Failed:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
