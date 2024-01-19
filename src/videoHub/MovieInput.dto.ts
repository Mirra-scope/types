import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID } from "class-validator";
import { CreateAdditionalInfoInput, UpdateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { CreateFinancialInfoInput, UpdateFinancialInfoInput, UpdateImageInput } from ".";

@InputType()
export class CreateMovieInput {
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

  @Field(() => CreateAdditionalInfoInput)
  @IsObject()
  @IsNotEmpty()
  AdditionalInfo!: CreateAdditionalInfoInput;

  @Field(() => CreateFinancialInfoInput)
  @IsObject()
  @IsNotEmpty()
  FinancialInfo!: CreateFinancialInfoInput;
}

@InputType()
export class GetManagerMovieForTableInput {
  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  Page!: number;

  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  PageSize!: number;
}

@InputType()
export class DeleteMovieByIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  MovieId!: string;
}

@InputType()
export class DeleteMultipleMovieByIdzParams {
  @Field(() => [String])
  @IsNotEmpty()
  @IsArray()
  @IsUUID("all", { each: true })
  MovieIdz!: string[];
}

@InputType()
export class MovieIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  MovieId!: string;
}

@InputType()
export class UpdateMovieInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  Title!: string;

  // have default value
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  PlotSummary!: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  ReleaseDate!: number;

  @Field(() => UpdateAdditionalInfoInput, { nullable: true })
  @IsObject()
  @IsOptional()
  AdditionalInfo!: UpdateAdditionalInfoInput;

  @Field(() => UpdateImageInput, { nullable: true })
  @IsObject()
  @IsOptional()
  Image!: UpdateImageInput;

  @Field(() => UpdateFinancialInfoInput, { nullable: true })
  @IsObject()
  @IsOptional()
  FinancialInfo!: UpdateFinancialInfoInput;
}
