import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonaService } from './persona.service';
import { Persona } from './entities/persona.entity';
import { CreatePersonaInput } from './dto/create-persona.input';
import { UpdatePersonaInput } from './dto/update-persona.input';

@Resolver(() => Persona)
export class PersonaResolver {
  constructor(private readonly personaService: PersonaService) {}

  @Mutation(() => Persona)
  createPersona(@Args('createPersonaInput') createPersonaInput: CreatePersonaInput) {
    return this.personaService.create(createPersonaInput);
  }

  @Query(() => [Persona], { name: 'personas' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado?: string) {
    return this.personaService.findAll(estado);
  }

  @Query(() => Persona, { name: 'persona' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.personaService.findOne(id);
  }

  @Mutation(() => Persona)
  updatePersona(@Args('updatePersonaInput') updatePersonaInput: UpdatePersonaInput) {
    return this.personaService.update(updatePersonaInput.id, updatePersonaInput);
  }

  @Mutation(() => Persona)
  removePersona(@Args('id', { type: () => Int }) id: number) {
    return this.personaService.remove(id);
  }
}
