import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { Field, InputType } from "@nestjs/graphql";
import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum } from "./AddtionalInfo.enum";

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
  @IsEnum(MediaGenriesEnum)
  Genre!: MediaGenriesEnum;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEnum(MediaStatusEnum)
  Status!: MediaStatusEnum;
}

@InputType()
export class UpdateAdditionalInfoInput extends CreateAdditionalInfoInput {}

@InputType()
export class GetAdditionalInfoByMediaIdParams {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  MediaId!: string;
}
