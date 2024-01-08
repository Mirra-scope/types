import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "../common/EntityBase";

@ObjectType()
export class Trailer extends EntityBase {
  @Field(() => String)
  title!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => Number)
  userId!: number;

  @Field(() => Number)
  contextId!: number;
}
