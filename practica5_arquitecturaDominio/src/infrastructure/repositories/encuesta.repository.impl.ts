import { CreateEncuestaDto,
    EncuestaDatasource,
    EncuestaEntity,
    EncuestaRepository,
    UpdateEncuestaDto } from '../../domain';


export class EncuestaRepositoryImpl implements EncuestaRepository {

constructor(
private readonly datasource: EncuestaDatasource,
) { }


create( createEncuestaDto: CreateEncuestaDto ): Promise<EncuestaEntity> {
return this.datasource.create( createEncuestaDto );
}

getAll(): Promise<EncuestaEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<EncuestaEntity> {
return this.datasource.findById( id );
}

updateById( updateEncuestaDto: UpdateEncuestaDto ): Promise<EncuestaEntity> {
return this.datasource.updateById( updateEncuestaDto );
}

deleteById( id: number ): Promise<EncuestaEntity> {
return this.datasource.deleteById( id );
}

}

