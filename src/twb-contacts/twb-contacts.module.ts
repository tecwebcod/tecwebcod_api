import { Module } from "@nestjs/common";
import { TwbContactsService } from "./twb-contacts.service";
import { TwbContactsResolver } from "./twb-contacts.resolver";

@Module({
    providers:[TwbContactsResolver,TwbContactsService],
    exports:[]
})
export class TwbContactsModule{}
