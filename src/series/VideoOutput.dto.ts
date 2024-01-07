import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UploadVideoSignedUrlOutput {
  @Field(() => String)
  signedUrl!: string;

  @Field(() => String)
  videoId!: string;

  @Field(() => String)
  signedUrlKeyId!: string;
}
