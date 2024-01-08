
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RetrieveS3ObjectKeyAndUrlOutput {
  @Field(() => String)
  ObjectUrl!: string;

  @Field(() => String)
  ObjectKey!: string;
}