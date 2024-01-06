import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";

@ObjectType()
export class VideoResource extends EntityBase {
  @Field(() => String)
  s3ObjectKey!: string;

  @Field(() => String)
  s3ObjectUrl!: string;
}
