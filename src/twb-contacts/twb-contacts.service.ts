import {Injectable} from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class TwbContactsService{
    constructor(private readonly prisma:PrismaClient ){}

    twbContact(args:Prisma.ContactsFindManyArgs){
      return this.prisma.contacts.findMany(args)                                                                                                                                                                                                                                                     
    }                                                                                                                                           
}