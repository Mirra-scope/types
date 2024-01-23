import { Field, ObjectType } from "@nestjs/graphql";
import { Season } from "./Season.entity";

@ObjectType()
export class GetNextSeasonNumberOutput {
  @Field(() => Number)
  number!: number;
}

@ObjectType()
export class GetSeasonBySeriesIdOutput {
  @Field(() => String)
  ID!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => String)
  title!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => Number)
  number!: number;

  @Field(() => String)
  backdropImageUrl!: string;
}
