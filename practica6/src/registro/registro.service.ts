import { Injectable } from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';
import { Registro } from './entities/registro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Encuesta } from 'src/encuesta/entities/encuesta.entity';
import { Persona } from 'src/persona/entities/persona.entity';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private readonly registroRepository: Repository<Registro>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    @InjectRepository(Encuesta)
    private readonly encuestaRepository: Repository<Encuesta>,
  ) {}

  async create(createRegistroDto: CreateRegistroDto): Promise<any> {
    const persona = await this.personaRepository.findOneBy({ id: createRegistroDto.personaid });
    const encuesta = await this.encuestaRepository.findOneBy({ id: createRegistroDto.encuestaid });

    if (!persona || !encuesta) {
      throw new Error('Persona o encuesta no encontrada');
    }

    const registro = this.registroRepository.create({
      ...createRegistroDto,
      persona: persona,
      encuesta: encuesta,
    });

    const savedPreparacion = await this.registroRepository.save(registro);
    return this.toResponseDto(savedPreparacion);
  }
  
  async findAll(): Promise<any[]> {
    const registro = await this.registroRepository.find({ relations: ['persona', 'encuesta'] });
    return registro.map(registro => this.toResponseDto(registro));
  }

  async findOne(id: number): Promise<any> {
    const registro = await this.registroRepository.findOne({
      where: { id: id },
      relations: ['persona', 'encuesta'],
    });
    if (!registro) {
      throw new Error('Registro no encontrado');
    }
    return this.toResponseDto(registro);
  }

  async update(id: number, updateRegistroDto: UpdateRegistroDto): Promise<any> {
    const registro = await this.registroRepository.findOneBy({ id: id });

    if (!registro) {
      throw new Error('Registro no encontrado');
    }

    const persona = await this.personaRepository.findOneBy({ id: updateRegistroDto.personaid });
    const encuesta = await this.encuestaRepository.findOneBy({ id: updateRegistroDto.encuestaid});

    if (!persona || !encuesta) {
      throw new Error('Persona o encuesta no encontrada');
    }

    const updatedRegistro = {
      ...registro,
      ...updateRegistroDto,
      persona: persona,
      encuesta: encuesta,
    };

    await this.registroRepository.save(updatedRegistro);
    return this.toResponseDto(updatedRegistro);
  }

  async remove(id: number): Promise<any> {
    await this.registroRepository.update(id, { estado: 'eliminado' });
    const registro = await this.registroRepository.findOne({
      where: { id: id },
      relations: ['persona', 'encuesta'],
    });
    return this.toResponseDto(registro);
  }

  private toResponseDto(registro: Registro): any {
    return {
      id: registro.id,
      fecha: registro.fecha,
      hora: registro.hora,
      ubicacion: registro.ubicacion,
      personaid: registro.persona ? registro.persona.id : null,
      encuestaid: registro.encuesta ? registro.encuesta.id : null,
      estado: registro.estado,

    };
  }
  
}