import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreatePersonaInput {

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombre: string;


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  identificacion: string;


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  estado: string;
}
