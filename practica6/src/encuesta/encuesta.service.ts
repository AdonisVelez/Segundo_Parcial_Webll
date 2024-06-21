import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Encuesta } from './entities/encuesta.entity';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';

@Injectable()
export class EncuestaService {
  constructor(
    @InjectRepository(Encuesta)
    private readonly encuestaRepository: Repository<Encuesta>,
  ) {}

  async create(createEncuestaDto: CreateEncuestaDto): Promise<Encuesta> {
    const encuesta = this.encuestaRepository.create(createEncuestaDto);
    return this.encuestaRepository.save(encuesta);
  }

  async findAll(): Promise<Encuesta[]> {
    return this.encuestaRepository.find();
  }

  async findOne(id: number): Promise<Encuesta> {
    return this.encuestaRepository.findOneBy({ id: id });
  }

  async update(id: number, updateCocineroDto: UpdateEncuestaDto): Promise<Encuesta> {
    await this.encuestaRepository.update(id, updateCocineroDto);
    return this.encuestaRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<Encuesta> {
    await this.encuestaRepository.update(id, { estado: 'eliminado' });
    return this.encuestaRepository.findOneBy({ id: id });
  }
}