import { CreateEncuestaDto, UpdateEncuestaDto } from '../dtos';
import { EncuestaEntity} from '../entities/encuesta.entity';



export abstract class EncuestaRepository {

  abstract create( createEncuestaDto: CreateEncuestaDto ): Promise<EncuestaEntity>;
  abstract getAll(): Promise<EncuestaEntity[]>;
  abstract findById( id: number ): Promise<EncuestaEntity>;
  abstract updateById( updateEncuestaDto: UpdateEncuestaDto ): Promise<EncuestaEntity>;
  abstract deleteById( id: number ): Promise<EncuestaEntity>;
}
