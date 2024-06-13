import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePersonaDto} from '../../domain/dtos'

export class PersonasController {
    // Dependency Injection
    constructor() { }

    // Obtener todas las personas
    public getAllPersonas = async (req: Request, res: Response) => {
    try {
        const personas = await prisma.persona.findMany({
        where: {
            estado: {
            not: "eliminado"
            }
        }
        });
        res.status(200).json(personas);
    } catch (error: any) {
        res.status(500).json({ message: 'Error al obtener las personas', error: error.message });
    }
    };

    // Obtener una persona por su ID
    public getPersonaById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const persona = await prisma.persona.findUnique({ where: { id: Number(id) } });
        if (!persona || persona.estado === 'eliminado') {
        return res.status(404).json({ message: 'Persona no encontrada' });
        }
        res.status(200).json(persona);
    } catch (error: any) {
        res.status(500).json({ message: 'Error al obtener la persona', error: error.message });
    }
    };

    // Crear una nueva persona
    public createPersona = async (req: Request, res: Response) => {
    const { nombre, identificacion } = req.body;
    try {
        const persona = await prisma.persona.create({
        data: { nombre, identificacion },
        });
        res.status(201).json(persona);
    } catch (error: any) {
        res.status(500).json({ message: 'Error al crear la persona', error: error.message });
    }
    };

    // Actualizar una persona existente
    public updatePersona = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, identificacion } = req.body;
    try {
        const updatedPersona = await prisma.persona.update({
        where: { id: Number(id) },
        data: { nombre, identificacion },
        });
        res.status(200).json(updatedPersona);
    } catch (error: any) {
        res.status(500).json({ message: 'Error al actualizar la persona', error: error.message });
    }
    };

    // Eliminar una persona
    public deletePersona = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedPersona = await prisma.persona.update({
        where: { id: Number(id) },
        data: { estado: 'eliminado' },
        });
        res.status(200).json(deletedPersona);
    } catch (error: any) {
        res.status(500).json({ message: 'Error al eliminar la persona', error: error.message });
    }
    };
}