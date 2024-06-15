import { prisma } from '../../data/postgres';
import { CreatePersonaDto, PersonaDatasource , PersonaEntity, UpdatePersonaDto } from '../../domain';



export class PersonaDatasourceImpl implements PersonaDatasource {

  async create( createPersonaDto: CreatePersonaDto ): Promise<PersonaEntity> {
    const persona = await prisma.persona.create({
      data: createPersonaDto!
    });

    return PersonaEntity.fromObject( persona );
  }

  async getAll(): Promise<PersonaEntity[]> {
    const persona = await prisma.persona.findMany();
    return persona.map( persona => PersonaEntity.fromObject(persona) );
  }

  async findById( id: number ): Promise<PersonaEntity> {
    const persona = await prisma.persona.findFirst({
      where: { id }
    });

    if ( !persona ) throw `Persona with id ${ id } not found`;
    return PersonaEntity.fromObject( persona);
  }
  

  async updateById( updatePersonaDto: UpdatePersonaDto ): Promise<PersonaEntity> {
    await this.findById( updatePersonaDto.id );
    
    const updatedPersona = await prisma.persona.update({
      where: { id: updatePersonaDto.id },
      data: updatePersonaDto!.values
    });

    return PersonaEntity.fromObject(updatedPersona);
  }

  async deleteById( id: number ): Promise<PersonaEntity> {
    await this.findById( id );
    const deleted = await prisma.persona.delete({
      where: { id }
    });

    return PersonaEntity.fromObject( deleted );
  }

}