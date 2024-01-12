
import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID } from "class-validator";

@InputType()
export class CreateVideoResourceInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SignedUrlKeyId!: string;
}

@InputType()
export class GetVideoResourceByMediaIdInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  MediaId!: string;
}
