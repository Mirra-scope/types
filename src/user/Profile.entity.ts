import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";
import { GenderEnum } from "./Profile.enum";

@ObjectType()
export class ProfileInfo extends EntityBase {
  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String)
  contactNumber!: string;

  @Field(() => Number)
  dateOfBirth!: number;

  @Field(() => String)
  gender!: GenderEnum;

  @Field(() => String)
  address!: string;

  @Field(() => String)
  userId!: string;
}
