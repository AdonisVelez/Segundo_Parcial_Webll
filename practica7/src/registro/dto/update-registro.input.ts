import { CreateRegistroInput } from './create-registro.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRegistroInput extends PartialType(CreateRegistroInput) {
  @Field(() => Int)
  id: number;
}
