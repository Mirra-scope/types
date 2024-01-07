import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";

@ObjectType()
export class Season extends EntityBase {
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
