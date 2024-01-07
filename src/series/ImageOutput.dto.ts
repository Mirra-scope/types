
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ImageIdOutput {
  @Field(() => String)
  ID!: string;
}
