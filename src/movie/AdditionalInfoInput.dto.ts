
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { Field, InputType, PartialType } from "@nestjs/graphql";
import { MovieGenriesEnum, MovieStatusEnum } from "./AddtionalInfo.enum";
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
  @IsEnum(MovieGenriesEnum)
  Genre!: MovieGenriesEnum;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEnum(MovieStatusEnum)
  Status!: MovieStatusEnum;
}

@InputType()
export class UpdateAdditionalInfoInput extends CreateAdditionalInfoInput {}

@InputType()
export class GetAdditionalInfoByMovieIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  Id!: string;
}
