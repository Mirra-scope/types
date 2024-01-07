import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase, MediaCountriesEnum, MediaLanguagiesEnum } from "..";
import { SeriesGenriesEnum, SeriesStatusEnum } from "./AddtionalInfo.enum";

@ObjectType()
export class AdditionalInfo extends EntityBase {
  @Field(() => String)
  originCountry!: MediaCountriesEnum;
  
  @Field(() => String)
  originalLanguage!: MediaLanguagiesEnum;
  
  @Field(() => String)
  genre!: SeriesGenriesEnum;
  
  @Field(() => String)
  status!: SeriesStatusEnum;
}
