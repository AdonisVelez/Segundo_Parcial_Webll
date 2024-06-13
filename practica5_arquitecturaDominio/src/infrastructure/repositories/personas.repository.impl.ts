import { CreatePersonaDto,
    PersonaDatasource,
    PersonaEntity,
    PersonaRepository,
    UpdatePersonaDto } from '../../domain';


export class PersonaRepositoryImpl implements PersonaRepository {

constructor(
private readonly datasource: PersonaDatasource,
) { }


create( createPersonaDto: CreatePersonaDto ): Promise<PersonaEntity> {
return this.datasource.create( createPersonaDto );
}

getAll(): Promise<PersonaEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<PersonaEntity> {
return this.datasource.findById( id );
}

updateById( updatePersonaDto: UpdatePersonaDto ): Promise<PersonaEntity> {
return this.datasource.updateById( updatePersonaDto );
}

deleteById( id: number ): Promise<PersonaEntity> {
return this.datasource.deleteById( id );
}

}

