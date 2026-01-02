const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const all = await prisma.reviewQueue.findMany();
    console.log("Total Items:", all.length);
    console.log(JSON.stringify(all, null, 2));
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
