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
  imageUrl!: string;

  @Field(() => Number)
  likeCount!: number;

  @Field(() => Number)
  ratings!: number;

  @Field(() => Number)
  uploadDate!: number;
}

@ObjectType()
export class MovieIdOutput {
  @Field(() => String)
  ID!: string;
}
