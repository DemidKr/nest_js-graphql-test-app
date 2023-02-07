import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Pet} from "../../pets/pet.entity";
import {isEmail} from "class-validator";

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  city: string

  @Column()
  @Field()
  phone: string

  @OneToMany(() => Pet, pet => pet.owner)
  @Field(type => [Pet], {nullable: true})
  pets?: Pet[]
}
