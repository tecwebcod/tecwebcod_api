import { Prisma, PrismaClient } from "@prisma/client";
export declare class TwbContactsService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    twbContact(args: Prisma.ContactsFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        name: string;
        email: string;
        phone: string;
        projectType: string;
        message: string;
        created_at: Date;
    }[]>;
}
