
import { Field, InputType } from "@nestjs/graphql";
import { IsEnum, IsMimeType, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { ImageMimeType } from "./types";
import { ImageVariantEnum } from "./Image.enum";

@InputType()
export class CreateImageInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  Base64!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsMimeType()
  Mime!: ImageMimeType;

  @Field(() => String)
  @IsNotEmpty()
  @IsEnum(ImageVariantEnum)
  Variant!: ImageVariantEnum;
}

@InputType()
export class UpdateImageInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  Url!: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEnum(ImageVariantEnum)
  Variant!: ImageVariantEnum;
}

@InputType()
export class ChangeThumbnailImageInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  Base64!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsMimeType()
  Mime!: ImageMimeType;
}

@InputType()
export class GetImageBySeriesIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeriesId!: string;
}
