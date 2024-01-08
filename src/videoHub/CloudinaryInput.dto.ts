
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CloudinaryUploadInput {
  @Field(() => String)
  Base64!: string;
}
