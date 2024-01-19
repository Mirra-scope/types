import { Field, InputType, extend } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

@InputType()
export class CreateFinancialInfoInput {
  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  NetProfit!: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  Budget!: number;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  Revenue!: number;
}

@InputType()
export class UpdateFinancialInfoInput extends CreateFinancialInfoInput {}
