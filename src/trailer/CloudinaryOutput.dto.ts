import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ImageUrlOutput {
  @Field(() => String)
  imageUrl!: string;
}
