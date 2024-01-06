/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthTokenOutput {
  @Field(() => String)
  token!: string;
}

@ObjectType()
export class DecodeJwtTokenOutput {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  ID!: string;
}
