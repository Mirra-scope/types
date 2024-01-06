import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";

@ObjectType()
export class Movie extends EntityBase {
  @Field()
  title!: string;

  @Field()
  plotSummary!: string;

  @Field()
  releaseDate!: number;

  @Field()
  priceInDollar!: number;

  @Field()
  isFree!: boolean;

  @Field()
  userId!: string;
}
