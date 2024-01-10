import { Field, ObjectType } from "@nestjs/graphql";
import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum, Movie } from "..";
import { Image } from "./Image.entity";

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
  imageUrl!: string;

  @Field(() => Number)
  uploadDate!: number;
}

@ObjectType()
export class MovieIdOutput {
  @Field(() => String)
  ID!: string;
}
