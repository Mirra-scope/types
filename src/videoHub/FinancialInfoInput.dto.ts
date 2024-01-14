import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

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

@InputType()
export class UpdateFinancialInfoInput {
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
