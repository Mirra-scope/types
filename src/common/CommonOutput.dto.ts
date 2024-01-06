/* eslint-disable @typescript-eslint/no-namespace */

import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SuccessOutput {
  @Field(() => Boolean)
  isSuccess!: boolean;
}
