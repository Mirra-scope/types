import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID, IsOptional, IsEnum, IsString, IsNumber } from "class-validator";
import { TrailerMediaEnum } from "./Trailer.enum";

@InputType()
export class CreateTrailerInput {
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

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  PlotSummary!: string;

  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  ReleaseDate!: number;

  @Field(() => String)
  @IsOptional()
  @IsEnum(TrailerMediaEnum)
  MediaType!: TrailerMediaEnum;

  @Field(() => String)
  @IsOptional()
  @IsUUID()
  MediaId!: string;
}

@InputType()
export class ChangeTrailerMediaInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  TrailerId!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEnum(TrailerMediaEnum)
  MediaType!: TrailerMediaEnum;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  MediaId!: string;
}
