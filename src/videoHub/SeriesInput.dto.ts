
import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID } from "class-validator";
import { CreateAdditionalInfoInput, UpdateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { UpdateImageInput } from "./ImageInput.dto";

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
  @Field(() => String)
  @IsOptional()
  @IsString()
  Title!: string;

  // have default value
  @Field(() => String)
  @IsOptional()
  @IsString()
  PlotSummary!: string;

  @Field(() => Number)
  @IsOptional()
  @IsNumber()
  ReleaseDate!: number;

  @Field(() => UpdateAdditionalInfoInput)
  @IsObject()
  @IsOptional()
  AdditionalInfo!: UpdateAdditionalInfoInput;

  @Field(() => UpdateImageInput)
  @IsObject()
  @IsOptional()
  Image!: UpdateImageInput;
}

@InputType()
export class SeriesIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeriesId!: string;
}
