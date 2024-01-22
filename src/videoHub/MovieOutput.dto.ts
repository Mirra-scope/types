import { Field, ObjectType } from "@nestjs/graphql";
import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum, Movie } from "..";

@ObjectType()
export class GetManagerMovieForTableOutput {
  @Field(() => [GetManagerTableMovieListOutput])
  movieList!: GetManagerTableMovieListOutput[];

  @Field(() => Number)
  totalRecords!: number;
}

@ObjectType()
export class GetManagerTableMovieListOutput {
  @Field(() => String)
  ID!: string;

  @Field(() => String)
  status!: MediaStatusEnum;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => String)
  thumbnailUrl!: string;

  @Field(() => Number)
  likeCount!: number;

  @Field(() => Number)
  avarageRating!: number;

  @Field(() => Number)
  uploadDate!: number;
}

@ObjectType()
export class MovieIdOutput {
  @Field(() => String)
  ID!: string;
}

@ObjectType()
export class GetMovieDataForUpdateFormOutput {
  @Field(() => String)
  title!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => String)
  genre!: MediaGenriesEnum;

  @Field(() => String)
  status!: MediaStatusEnum;

  @Field(() => String)
  originCountry!: MediaCountriesEnum;

  @Field(() => String)
  originalLanguage!: MediaLanguagiesEnum;

  @Field(() => String)
  thumbnailUrl!: string;

  @Field(() => String)
  videoResourceId!: string;
}

@ObjectType()
export class GetMovieDetailsByIdOutput {
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
  thumbnailUrl!: string;

  @Field(() => Number)
  uploadDate!: number;

  @Field(() => Boolean)
  isFree!: boolean;
}
