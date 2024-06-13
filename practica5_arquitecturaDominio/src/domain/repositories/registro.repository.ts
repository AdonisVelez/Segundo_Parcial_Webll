import { CreateRegistroDto, UpdateRegistroDto } from '../dtos';
import { RegistroEntity} from '../entities/registro.entity';



export abstract class RegistroRepository {

  abstract create( createTodoDto: CreateRegistroDto ): Promise<RegistroEntity>;
  abstract getAll(): Promise<RegistroEntity[]>;
  abstract findById( id: number ): Promise<RegistroEntity>;
  abstract updateById( updateTodoDto: UpdateRegistroDto ): Promise<RegistroEntity>;
  abstract deleteById( id: number ): Promise<RegistroEntity>;
}
