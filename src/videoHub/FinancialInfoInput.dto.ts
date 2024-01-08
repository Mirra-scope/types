import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class CreateFinancialInfoInput {
  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  NetProfit!: number;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  Budget!: number;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  Revenue!: number;
}