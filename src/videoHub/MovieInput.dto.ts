import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsObject, IsString, IsUUID } from "class-validator";
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
}
