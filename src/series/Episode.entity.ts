import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";

@ObjectType()
export class Episode extends EntityBase {
  @Field(() => String)
  title!: string;

  // have default value
  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => Number)
  number!: number;
}
