import { Field, ObjectType } from "@nestjs/graphql";
import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum } from "..";

@ObjectType()
export class GetManagerSeriesForTableOutput {
  @Field(() => [GetManagerTableOutputSeriesList])
  seriesList!: GetManagerTableOutputSeriesList[];

  @Field(() => Number)
  totalRecords!: number;
}

@ObjectType()
export class GetManagerTableOutputSeriesList {
  @Field(() => String)
  ID!: string;

  @Field(() => String)
  originCountry!: MediaCountriesEnum;

  @Field(() => String)
  originalLanguage!: MediaLanguagiesEnum;

  @Field(() => String)
  genre!: MediaGenriesEnum;

  @Field(() => String)
  status!: MediaStatusEnum;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => String)
  backdropImageUrl!: string;

  @Field(() => Number)
  uploadDate!: number;
}

@ObjectType()
export class GetManagerSeriesWithImageOutput {
  @Field(() => String)
  backdropImageUrl!: string;

  @Field(() => String)
  ID!: string;

  @Field(() => String)
  title!: string;

  // have default value
  @Field(() => String)
  plotSummary!: string;
}

@ObjectType()
export class GetSeriesDetailsByIdOutput {
  @Field(() => String)
  ID!: string;

  @Field(() => String)
  originCountry!: MediaCountriesEnum;

  @Field(() => String)
  originalLanguage!: MediaLanguagiesEnum;

  @Field(() => String)
  genre!: MediaGenriesEnum;

  @Field(() => String)
  status!: MediaStatusEnum;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => String)
  backdropImageUrl!: string;

  @Field(() => Number)
  uploadDate!: number;

  @Field(() => Boolean)
  isFree!: boolean;
}

@ObjectType()
export class GetSeriesDataForUpdateFormOutput {
  @Field(() => String)
  title!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => String)
  originCountry!: MediaCountriesEnum;

  @Field(() => String)
  originalLanguage!: MediaLanguagiesEnum;

  @Field(() => String)
  genre!: MediaGenriesEnum;

  @Field(() => String)
  status!: MediaStatusEnum;

  @Field(() => String)
  backdropImageUrl!: string;
}
