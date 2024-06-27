import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateRegistroInput {

  @Field(() => Date)
  @IsString()
    fecha: Date;

  @Field(() => Date)
  @IsString()
  hora: Date;

  @Field(() => String)
  @IsString()
  @IsOptional()
  ubicacion: string;


  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  personaid: number;


  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  encuestaid: number;


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  estado: string;
}
