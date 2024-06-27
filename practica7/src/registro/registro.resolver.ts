import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RegistroService } from './registro.service';
import { Registro } from './entities/registro.entity';
import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';

@Resolver(() => Registro)
export class RegistroResolver {
  constructor(private readonly registroService: RegistroService) {}

  @Mutation(() => Registro)
  createRegistro(@Args('createRegistroInput') createRegistroInput: CreateRegistroInput) {
    return this.registroService.create(createRegistroInput);
  }

  @Query(() => [Registro], { name: 'registro' })
  findAll() {
    return this.registroService.findAll();
  }

  @Query(() => Registro, { name: 'registro' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.registroService.findOne(id);
  }

  @Mutation(() => Registro)
  updateRegistro(@Args('updateRegistroInput') updateRegistroInput: UpdateRegistroInput) {
    return this.registroService.update(updateRegistroInput.id, updateRegistroInput);
  }

  @Mutation(() => Registro)
  removeRegistro(@Args('id', { type: () => Int }) id: number) {
    return this.registroService.remove(id);
  }
}
