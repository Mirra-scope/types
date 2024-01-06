/* eslint-disable @typescript-eslint/no-namespace */

import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsObject, IsUUID } from "class-validator";
import { CreateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { CreateFinancialInfoInput } from "./FinancialInfoInput.dto";

@InputType()
export class CreateMovieInput {
  @Field(() => String)
  Title!: string;

  // have default value
  @Field(() => String)
  PlotSummary!: string;

  @Field()
  @Field(() => Number)
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
