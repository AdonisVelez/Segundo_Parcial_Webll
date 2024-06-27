import { CreateEncuestaInput } from './create-encuesta.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateEncuestaInput extends PartialType(CreateEncuestaInput) {
  @Field(() => ID)
  id: number;
}
