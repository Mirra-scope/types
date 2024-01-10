
import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsObject, IsString, IsUUID } from "class-validator";

@InputType()
export class CreateEpisodeInput {
  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  Number!: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeasonId!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  VideoId!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SignedUrlKeyId!: string;

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
export class ChangeEpisodeSeasonInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeasonId!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  EpisodeId!: string;
}

@InputType()
export class GetNextEpisodeNumberParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeasonId!: string;
}
