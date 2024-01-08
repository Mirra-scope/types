import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase, MediaCountriesEnum, MediaLanguagiesEnum } from "..";
import { MediaGenriesEnum, MediaStatusEnum } from "./AddtionalInfo.enum";

@ObjectType()
export class AdditionalInfo extends EntityBase {
  @Field(() => String)
  originCountry!: MediaCountriesEnum;
  
  @Field(() => String)
  originalLanguage!: MediaLanguagiesEnum;
  
  @Field(() => String)
  genre!: MediaGenriesEnum;
  
  @Field(() => String)
  status!: MediaStatusEnum;
}
