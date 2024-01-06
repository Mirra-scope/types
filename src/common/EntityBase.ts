import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class EntityBase {
  @Field(() => String)
  ID!: string;

  @Field(() => Number)
  createdAt!: number;

  @Field(() => Number)
  updatedAt!: number;

  @Field(() => Number)
  deletedAt!: number;
}
