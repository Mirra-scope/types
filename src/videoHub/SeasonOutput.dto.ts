
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GetNextSeasonNumberOutput {
  @Field(() => Number)
  number!: number;
}