/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID } from "class-validator";

@InputType()
export class CreateVideoResourceInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  SignedUrlKeyId!: string;
}
