import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Encuesta } from './entities/encuesta.entity';
import { CreateEncuestaInput } from './dto/create-encuesta.input';
import { UpdateEncuestaInput } from './dto/update-encuesta.input';

@Injectable()
export class EncuestaService {
  constructor(
    @InjectRepository(Encuesta)
    private readonly encuestaRepository: Repository<Encuesta>,
  ) {}

  async create(createEncuestaDto: CreateEncuestaInput): Promise<Encuesta> {
    const encuesta = this.encuestaRepository.create(createEncuestaDto);
    return this.encuestaRepository.save(encuesta);
  }

  async findAll(estado: string): Promise<Encuesta[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.encuestaRepository.find({ where: whereCondition });
  }

  async findOne(id: number): Promise<Encuesta> {
    return this.encuestaRepository.findOneBy({ id: id });
  }

  async update(id: number, updateCocineroDto: UpdateEncuestaInput): Promise<Encuesta> {
    await this.encuestaRepository.update(id, updateCocineroDto);
    return this.encuestaRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<Encuesta> {
    await this.encuestaRepository.update(id, { estado: 'eliminado' });
    return this.encuestaRepository.findOneBy({ id: id });
  }
}