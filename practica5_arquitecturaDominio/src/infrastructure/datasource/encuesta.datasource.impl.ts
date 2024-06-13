import { prisma } from '../../data/postgres';
import { CreateEncuestaDto, EncuestaDatasource , EncuestaEntity, UpdateEncuestaDto } from '../../domain';



export class PersonaDatasourceImpl implements EncuestaDatasource {

  async create( createPersonaDto: CreateEncuestaDto ): Promise<EncuestaEntity> {
    const encuesta = await prisma.encuesta.create({
      data: createPersonaDto!
    });

    return EncuestaEntity.fromObject( encuesta );
  }

  async getAll(): Promise<EncuestaEntity[]> {
    const encuesta = await prisma.persona.findMany();
    return encuesta.map( persona => EncuestaEntity.fromObject(encuesta) );
  }

  async findById( id: number ): Promise<EncuestaEntity> {
    const encuesta = await prisma.encuesta.findFirst({
      where: { id }
    });

    if ( !encuesta ) throw `Persona with id ${ id } not found`;
    return EncuestaEntity.fromObject( encuesta);
  }
  

  async updateById( updateEncuestaDto: UpdateEncuestaDto ): Promise<EncuestaEntity> {
    await this.findById( updateEncuestaDto.id );
    
    const updatedEncuesta = await prisma.persona.update({
      where: { id: updateEncuestaDto.id },
      data: updateEncuestaDto!.values
    });

    return EncuestaEntity.fromObject(updatedEncuesta);
  }

  async deleteById( id: number ): Promise<EncuestaEntity> {
    await this.findById( id );
    const deleted = await prisma.encuesta.delete({
      where: { id }
    });

    return EncuestaEntity.fromObject( deleted );
  }

}