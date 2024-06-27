import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty} from 'class-validator';

@InputType()
export class CreateEncuestaInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcion: string;


  @Field(() => String)
  @IsString()
  detalles: string;


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  estado: string;
}
