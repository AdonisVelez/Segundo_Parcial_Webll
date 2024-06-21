import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const persona = this.personaRepository.create(createPersonaDto);
    return this.personaRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    return this.personaRepository.findOneBy({ id: id });
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    await this.personaRepository.update(id, updatePersonaDto);
    return this.personaRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<Persona> {
    await this.personaRepository.update(id, { estado: 'eliminado' });
    return this.personaRepository.findOneBy({ id: id });
  }
}