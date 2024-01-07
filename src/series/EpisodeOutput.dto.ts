import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GetNextEpisodeNumberOutput {
  @Field(() => Number)
  number!: number;
}

@ObjectType()
export class EpisodeIdOutput {
  @Field(() => String)
  ID!: string;
}
