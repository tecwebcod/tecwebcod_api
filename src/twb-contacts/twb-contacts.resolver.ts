import { prisma } from "src/common/prismaClient";
import { TwbContactsService } from "./twb-contacts.service";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Prisma, PrismaClient } from "@prisma/client";
const service = new TwbContactsService()

@Resolver(()=> Prisma.ContactsScalarFieldEnum)
export class TwbContactsResolver{

    @Query(()=> [],{name:'twbContacts',nullable:true})
    twbContacts(@Args() args: Prisma.ContactsFindManyArgs){
      return service.twbContact(args)
    }

}