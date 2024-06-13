import { CreatePersonaDto, UpdatePersonaDto } from '../dtos';
import { PersonaEntity } from '../entities/persona.entity';



export abstract class PersonaDatasource {

  abstract create( createTodoDto: CreatePersonaDto ): Promise<PersonaEntity>;
  abstract getAll(): Promise<PersonaEntity[]>;
  abstract findById( id: number ): Promise<PersonaEntity>;
  abstract updateById( updateTodoDto: UpdatePersonaDto ): Promise<PersonaEntity>;
  abstract deleteById( id: number ): Promise<PersonaEntity>;
}
