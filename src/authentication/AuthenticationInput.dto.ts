/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class UserRegisterInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  Email!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  Password!: string;
}

@InputType()
export class UserSignInInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  Email!: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  Password!: string;
}

@InputType()
export class PromoteUserToManagerInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  UserId!: string;
}

@InputType()
export class DecodeJwtTokenInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  Token!: string;
}

@InputType()
export class CheckUserExistByEmailInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  Email!: string;
}
