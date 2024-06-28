import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { CreatePersonaInput } from './dto/create-persona.input';
import { UpdatePersonaInput } from './dto/update-persona.input';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async create(createPersonaInput: CreatePersonaInput): Promise<Persona> {
    const persona = this.personaRepository.create(createPersonaInput);
    return this.personaRepository.save(persona);
  }

  async findAll(estado: string): Promise<Persona[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.personaRepository.find({ where: whereCondition });
  }

  async findOne(id: number): Promise<Persona> {
    return this.personaRepository.findOneBy({ id: id });
  }

  async update(id: number, updatePersonaInput: UpdatePersonaInput): Promise<Persona> {
    await this.personaRepository.update(id, updatePersonaInput);
    return this.personaRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<Persona> {
    await this.personaRepository.update(id, { estado: 'eliminado' });
    return this.personaRepository.findOneBy({ id: id });
  }
}