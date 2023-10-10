import { Injectable } from "@nestjs/common";
import { Args } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { prisma } from "src/common/prismaClient";

@Injectable()
export class TwbContactsService{
    twbContact(@Args() args:Prisma.ContactsFindManyArgs){
      return prisma.contacts.findMany(args)                                                                                                                                                                                                                                                     
    }                                                                                                                                           
}