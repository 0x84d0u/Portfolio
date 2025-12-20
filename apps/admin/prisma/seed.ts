import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
});


export async function main() {
    await prisma.profile.create({
        data: {
            firstName: "Naoufal",
            lastName: "Badou",
            availability: true
        }
    })

}

main();