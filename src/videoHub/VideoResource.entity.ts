import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";

@ObjectType()
export class VideoResource extends EntityBase {
  @Field(() => String)
  key!: string;

  @Field(() => String)
  url!: string;
}
