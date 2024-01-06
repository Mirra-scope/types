import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase, MediaCountriesEnum, MediaLanguagiesEnum } from "..";
import { MovieGenriesEnum, MovieStatusEnum } from "./AddtionalInfo.enum";

@ObjectType()
export class AdditionalInfo extends EntityBase {
  @Field()
  originCountry!: MediaCountriesEnum;

  @Field()
  originalLanguage!: MediaLanguagiesEnum;

  @Field()
  genre!: MovieGenriesEnum;

  @Field()
  status!: MovieStatusEnum;
}
