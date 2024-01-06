import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "../common/EntityBase";
import { UserAccountStatusEnum } from "./Authentication.enum";

@ObjectType()
export class User extends EntityBase {
  @Field(() => String)
  email!: string;
  
  @Field(() => String)
  password!: string;
  
  @Field(() => String)
  accountStatus!: UserAccountStatusEnum;
  
  @Field(() => Boolean)
  isManager!: boolean;

  @Field()
  lastSignIn!: number;
}
