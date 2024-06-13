import { CreateEncuestaDto, UpdateEncuestaDto } from '../dtos';
import { EncuestaEntity} from '../entities/encuesta.entity';



export abstract class EncuestaRepository {

  abstract create( createTodoDto: CreateEncuestaDto ): Promise<EncuestaEntity>;
  abstract getAll(): Promise<EncuestaEntity[]>;
  abstract findById( id: number ): Promise<EncuestaEntity>;
  abstract updateById( updateTodoDto: UpdateEncuestaDto ): Promise<EncuestaEntity>;
  abstract deleteById( id: number ): Promise<EncuestaEntity>;
}
