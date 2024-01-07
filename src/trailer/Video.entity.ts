import { ObjectType, Field } from "@nestjs/graphql";
import { EntityBase } from "..";
import { VideoQualityEnum } from "../common/enum";

@ObjectType()
export class Video extends EntityBase {
  @Field(() => String)
  userId!: string;

  @Field(() => String)
  quality!: VideoQualityEnum;

  @Field(() => Number)
  width!: number;

  @Field(() => Number)
  height!: number;

  // in mbs
  @Field(() => Number)
  sizeInKb!: number;

  // in mbs
  @Field(() => String)
  mime!: string;

  // in milliseconds
  @Field(() => Number)
  runTime!: number;

  // in milliseconds
  @Field(() => Boolean)
  isUsed!: boolean;
}
