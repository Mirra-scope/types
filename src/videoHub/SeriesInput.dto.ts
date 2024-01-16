import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID } from "class-validator";
import { CreateAdditionalInfoInput, UpdateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { UpdateImageInput } from "./ImageInput.dto";
import { UpdateFinancialInfoInput } from ".";

@InputType()
export class CreateSeriesInput {
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

  @Field(() => CreateAdditionalInfoInput)
  @IsObject()
  @IsNotEmpty()
  AdditionalInfo!: CreateAdditionalInfoInput;
}

@InputType()
export class GetManagerSeriesForTableInput {
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
export class DeleteSeriesByIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeriesId!: string;
}

@InputType()
export class DeleteMultipleSeriesByIdzParams {
  @Field(() => [String])
  @IsNotEmpty()
  @IsArray()
  @IsUUID("all", { each: true })
  SeriesIdz!: string[];
}

@InputType()
export class UpdateSeriesInput {
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

@InputType()
export class SeriesIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeriesId!: string;
}
