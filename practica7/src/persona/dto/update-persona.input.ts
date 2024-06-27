import { CreatePersonaInput } from './create-persona.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePersonaInput extends PartialType(CreatePersonaInput) {
  @Field(() => Int)
  id: number;
}
