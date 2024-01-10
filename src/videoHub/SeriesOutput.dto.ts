import { Field, ObjectType } from "@nestjs/graphql";
import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum, Series } from "..";
import { Image } from "./Image.entity";

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
  imageUrl!: string;

  @Field(() => Number)
  uploadDate!: number;
}

@ObjectType()
export class GetManagerSeriesWithImageOutput implements Series {
  @Field(() => String)
  imageUrl!: string;

  @Field(() => String)
  ID!: string;

  @Field(() => Number)
  createdAt!: number;

  @Field(() => Number)
  updatedAt!: number;

  @Field(() => Number)
  deletedAt!: number;

  @Field(() => String)
  title!: string;

  // have default value
  @Field(() => String)
  plotSummary!: string;

  @Field(() => Number)
  releaseDate!: number;

  // have default value
  @Field(() => Number)
  priceInDollar!: number;

  // have default value
  @Field(() => Boolean)
  isFree!: boolean;

  @Field(() => String)
  userId!: string;
}
