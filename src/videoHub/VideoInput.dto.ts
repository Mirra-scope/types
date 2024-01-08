
import { InputType, Field } from "@nestjs/graphql";
import { IsEnum, IsMimeType, IsNotEmpty, IsNumber, IsOptional, Max, Min } from "class-validator";
import { VideoMineType } from "./types";
import { MirraScopeMediaEnum } from "../common/enum";

@InputType()
export class GetUploadVideoSignedUrlInput {
  // for Detect Video or a short
  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  Width!: number;

  // for Detect Video or a short
  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  Height!: number;

  // in second
  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  RunTime!: number;

  // In Kbs
  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  @Max(6291456)
  @Min(500)
  SizeInKb!: number;

  // Extension
  @Field(() => String)
  @IsNotEmpty()
  @IsMimeType()
  Mime!: VideoMineType;

  @Field(() => String)
  @IsNotEmpty()
  @IsEnum(MirraScopeMediaEnum)
  MediaType!: MirraScopeMediaEnum;
}
