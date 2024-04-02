import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
    await prisma.$connect();
    console.log("Prisma connected!");
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });