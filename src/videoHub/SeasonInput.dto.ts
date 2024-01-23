
import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsObject, IsString, IsUUID } from "class-validator";

@InputType()
export class CreateSeasonInput {
  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  Number!: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeriesId!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  ImageId!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  Title!: string;

  // have default value
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  PlotSummary!: string;

  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  ReleaseDate!: number;
}

@InputType()
export class ChangeSeasonSeriesInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeasonId!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeriesId!: string;
}

@InputType()
export class GetNextSeasonNumberParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeriesId!: string;
}
