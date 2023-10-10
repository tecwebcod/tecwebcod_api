import { TwbContactsService } from "./twb-contacts.service";
import { Prisma } from "@prisma/client";
export declare class TwbContactsResolver {
    private readonly service;
    constructor(service: TwbContactsService);
    twbContacts(args: Prisma.ContactsFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        name: string;
        email: string;
        phone: string;
        projectType: string;
        message: string;
        created_at: Date;
    }[]>;
}
