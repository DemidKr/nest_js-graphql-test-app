import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Owner} from "../owners/entities/owner.entity";

@Entity()
@ObjectType()
export class Pet {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number

    @Column()
    @Field()
    name: string

    @Column()
    @Field()
    breed: string

    @Column()
    @Field(type => Int)
    fullYear: number

    @Column()
    @Field(type => Int)
    price: number

    @Column({nullable:true})
    @Field({nullable: true})
    type?: string

    @Column()
    @Field(type => Int)
    ownerId: number


    @ManyToOne(() => Owner, owner => owner.pets)
    owner: Owner
}