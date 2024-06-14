import { Request, Response } from 'express';
import { CreatePersonaDto, UpdatePersonaDto } from '../../domain/dtos';
import { PersonaRepository } from '../../domain/repositories/persona.repository';

export class PersonasController {
    constructor(private readonly personaRepository: PersonaRepository) {}

    //Obtener todas las personas//
    public getPersonas = async (req: Request, res: Response) => {
        try {
            const personas = await this.personaRepository.getAll();
            return res.status(200).json(personas);
        } catch (error: any) {
            return res.status(500).json({ message: 'Error al obtener las personas', error: error.message });
        }
    };

    // Obtener una persona por su ID//
    public getPersonaById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const persona = await this.personaRepository.findById(id);
            if (!persona) {
                return res.status(404).json({ message: `Persona con id ${id} no encontrada` });
            }
            return res.json(persona);
        } catch (error: any) {
            return res.status(500).json({ message: 'Error al obtener la persona', error: error.message });
        }
    };

    //Crear una nueva persona//
    public createPersona = async (req: Request, res: Response) => {
        try {
            const [error, createPersonaDto] = CreatePersonaDto.create(req.body);
            if (error) {
                return res.status(400).json({ message: error });
            }
            const persona = await this.personaRepository.create(createPersonaDto!);
            return res.json(persona);
        } catch (error: any) {
            return res.status(400).json({ message: 'Error al crear la persona', error: error.message });
        }
    };

    // Actualizar una persona existente//
    public updatePersona = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const [error, updatePersonaDto] = UpdatePersonaDto.create({ ...req.body, id });
            if (error) {
                return res.status(400).json({ message: error });
            }
            const persona = await this.personaRepository.updateById(updatePersonaDto!);
            return res.json(persona);
        } catch (error: any) {
            return res.status(400).json({ message: 'Error al actualizar la persona', error: error.message });
        }
    };

    //Eliminar una persona//
    public deletePersona = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const persona = await this.personaRepository.deleteById(id);
            return res.json({ message: 'Persona eliminada correctamente' });
        } catch (error: any) {
            return res.status(400).json({ message: 'Error al eliminar la persona', error: error.message });
        }
    };
}
