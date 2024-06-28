import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EncuestaService } from './encuesta.service';
import { Encuesta } from './entities/encuesta.entity';
import { CreateEncuestaInput } from './dto/create-encuesta.input';
import { UpdateEncuestaInput } from './dto/update-encuesta.input';

@Resolver(() => Encuesta)
export class EncuestaResolver {
  constructor(private readonly encuestaService: EncuestaService) {}

  @Mutation(() => Encuesta)
  createEncuesta(@Args('createEncuestaInput') createEncuestaInput: CreateEncuestaInput) {
    return this.encuestaService.create(createEncuestaInput);
  }

  @Query(() => [Encuesta], { name: 'encuestas' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado?: string) {
    return this.encuestaService.findAll(estado);
  }

  @Query(() => Encuesta, { name: 'encuesta' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.encuestaService.findOne(id);
  }

  @Mutation(() => Encuesta)
  updateEncuesta(@Args('updateEncuestaInput') updateEncuestaInput: UpdateEncuestaInput) {
    return this.encuestaService.update(updateEncuestaInput.id, updateEncuestaInput);
  }

  @Mutation(() => Encuesta)
  removeEncuesta(@Args('id', { type: () => Int }) id: number) {
    return this.encuestaService.remove(id);
  }
}
