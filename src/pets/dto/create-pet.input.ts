import {Field, InputType, Int} from "@nestjs/graphql";
import {IsAlpha, IsInt, IsPositive, Min} from "class-validator";
import {Column} from "typeorm";

@InputType()
export class CreatePetInput {
    @IsAlpha()
    @Field()
    name: string

    @Field()
    breed: string

    @IsPositive()
    @IsInt()
    @Min(1900)
    @Field(type => Int)
    fullYear: number

    @IsPositive()
    @IsInt()
    @Field(type => Int)
    price: number

    @Field({nullable: true})
    type?: string

    @Field(type => Int)
    ownerId: number
}