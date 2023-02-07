import { InputType, Int, Field } from '@nestjs/graphql';
import {IsDecimal, IsMobilePhone} from "class-validator";

@InputType()
export class CreateOwnerInput {
  @Field()
  name: string

  @Field()
  city: string

  // @IsMobilePhone()
  @IsDecimal()
  @Field()
  phone: string
}
