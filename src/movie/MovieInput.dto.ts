/* eslint-disable @typescript-eslint/no-namespace */

import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsObject, IsString, IsUUID } from "class-validator";
import { CreateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { CreateFinancialInfoInput } from "./FinancialInfoInput.dto";

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
  @IsString()
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
  MovieFinanacialInfo!: CreateFinancialInfoInput;
}
