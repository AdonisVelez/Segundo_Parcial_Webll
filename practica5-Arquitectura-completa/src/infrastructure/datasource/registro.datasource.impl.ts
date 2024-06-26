import { prisma } from '../../data/postgres';
import { CreateRegistroDto, RegistroDatasource , RegistroEntity, UpdateRegistroDto } from '../../domain';



export class RegistroDatasourceImpl implements RegistroDatasource {

  async create( createRegistroDto: CreateRegistroDto ): Promise<RegistroEntity> {
    const registro = await prisma.registro.create({
      data: createRegistroDto!
    });

    return RegistroEntity.fromObject( registro );
  }

  async getAll(): Promise<RegistroEntity[]> {
    const registro = await prisma.registro.findMany();
    return registro.map( registro => RegistroEntity.fromObject(registro) );
  }

  async findById( id: number ): Promise<RegistroEntity> {
    const registro = await prisma.encuesta.findFirst({
      where: { id }
    });

    if ( !registro ) throw `Registro with id ${ id } not found`;
    return RegistroEntity.fromObject( registro);
  }
  

  async updateById( updateRegistroDto: UpdateRegistroDto ): Promise<RegistroEntity> {
    await this.findById( updateRegistroDto.id );
    
    const updatedRegistro = await prisma.persona.update({
      where: { id: updateRegistroDto.id },
      data: updateRegistroDto!.values
    });

    return RegistroEntity.fromObject(updatedRegistro);
  }

  async deleteById( id: number ): Promise<RegistroEntity> {
    await this.findById( id );
    const deleted = await prisma.encuesta.delete({
      where: { id }
    });

    return RegistroEntity.fromObject( deleted );
  }

}