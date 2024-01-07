import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";

@ObjectType()
export class Series extends EntityBase {
  @Field(() => String)
  title!: string;

  // have default value
  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  // have default value
  @Field(() => Number)
  priceInDollar!: number;

  // have default value
  @Field(() => Boolean)
  isFree!: boolean;

  @Field(() => String)
  userId!: string;
}
