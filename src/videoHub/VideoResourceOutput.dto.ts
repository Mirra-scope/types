
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RetrieveS3ObjectKeyAndUrlOutput {
  @Field(() => String)
  url!: string;

  @Field(() => String)
  key!: string;
}