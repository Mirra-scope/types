
import { Field, ObjectType } from "@nestjs/graphql";
import { MediaCountriesEnum, MediaLanguagiesEnum, MovieGenriesEnum, MovieStatusEnum } from "..";

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
  genre!: MovieGenriesEnum;

  @Field(() => String)
  status!: MovieStatusEnum;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  @Field(() => String)
  imageUrl!: string;

  @Field(() => Number)
  createdAt!: number;

  @Field(() => Number, { nullable: true })
  updatedAt!: number;
}
