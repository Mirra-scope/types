import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";

@ObjectType()
export class Movie extends EntityBase {
  @Field(() => String)
  title!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => Number)
  priceInDollar!: number;

  @Field(() => Boolean)
  isFree!: boolean;

  @Field(() => String)
  userId!: string;
}
