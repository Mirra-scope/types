import { ObjectType, Field } from "@nestjs/graphql";
import { ActivityActionEnum, ActivityStatusEnum } from "./UserActivity.enum";
import { EntityBase } from "..";

@ObjectType()
export class UserActivity extends EntityBase {
  @Field(() => String)
  action!: ActivityActionEnum;

  @Field(() => String)
  status!: ActivityStatusEnum;

  @Field(() => String)
  contentId!: string;

  @Field(() => String)
  userId!: string;
}
