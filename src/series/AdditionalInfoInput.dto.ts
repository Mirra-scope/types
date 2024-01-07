import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { SeriesGenriesEnum, SeriesStatusEnum } from "./AddtionalInfo.enum";
import { MediaCountriesEnum, MediaLanguagiesEnum } from "../common/enum";

@InputType()
export class CreateAdditionalInfoInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEnum(MediaCountriesEnum)
  OriginCountry!: MediaCountriesEnum;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEnum(MediaLanguagiesEnum)
  OriginalLanguage!: MediaLanguagiesEnum;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEnum(SeriesGenriesEnum)
  Genre!: SeriesGenriesEnum;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEnum(SeriesStatusEnum)
  Status!: SeriesStatusEnum;
}

@InputType()
export class UpdateAdditionalInfoInput extends CreateAdditionalInfoInput {}

@InputType()
export class GetAdditionalInfoBySeriesIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SeriesId!: string;
}
