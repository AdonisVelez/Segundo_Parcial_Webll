import { prisma } from '../../data/postgres';
import { CreateEncuestaDto, EncuestaDatasource, EncuestaEntity, UpdateEncuestaDto } from '../../domain';

export class EncuestaDatasourceImpl implements EncuestaDatasource {

  async create(createEncuestaDto: CreateEncuestaDto): Promise<EncuestaEntity> {
    const encuesta = await prisma.encuesta.create({
      data: createEncuestaDto!
    });

    return EncuestaEntity.fromObject(encuesta);
  }

  async getAll(): Promise<EncuestaEntity[]> {
    const encuestas = await prisma.encuesta.findMany();
    return encuestas.map(encuesta => EncuestaEntity.fromObject(encuesta));
  }

  async findById(id: number): Promise<EncuestaEntity> {
    const encuesta = await prisma.encuesta.findFirst({
      where: { id }
    });

    if (!encuesta) {
      throw new Error(`Encuesta with id ${id} not found`);
    }

    return EncuestaEntity.fromObject(encuesta);
  }

  async updateById(updateEncuestaDto: UpdateEncuestaDto): Promise<EncuestaEntity> {
    await this.findById(updateEncuestaDto.id);

    const updatedEncuesta = await prisma.encuesta.update({
      where: { id: updateEncuestaDto.id },
      data: updateEncuestaDto.values
    });

    return EncuestaEntity.fromObject(updatedEncuesta);
  }

  async deleteById(id: number): Promise<EncuestaEntity> {
    await this.findById(id);

    const deleted = await prisma.encuesta.delete({
      where: { id }
    });

    return EncuestaEntity.fromObject(deleted);
  }

}
