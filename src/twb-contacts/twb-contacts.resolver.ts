import { prisma } from "src/common/prismaClient";
import { TwbContactsService } from "./twb-contacts.service";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";

@Resolver(()=> prisma.contacts)
export class TwbContactsResolver{
    constructor(private readonly service:TwbContactsService){}
   
    @Query(()=> prisma.contacts,{name:'twbContacts',nullable:true})
    twbContacts(@Args() args: Prisma.ContactsFindManyArgs){
      return this.service.twbContact(args)
    }

}