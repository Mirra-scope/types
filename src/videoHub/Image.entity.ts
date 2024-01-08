import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '..';
import { ImageVariantEnum } from './Image.enum';

@ObjectType()
export class Image extends EntityBase {
  @Field()
  variant!: ImageVariantEnum;

  @Field()
  url!: string;
}
