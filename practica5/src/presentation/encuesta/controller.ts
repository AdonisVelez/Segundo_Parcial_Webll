import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateEncuestaDto, UpdateEncuestaDto} from '../../domain/dtos';
import { EncuestaRepository } from '../../domain/repositories/encuesta.repository';


export class EncuestasController {

    // Dependency Injection
    constructor(private readonly encuestaRepository: EncuestaRepository) { }


    // Obtener todas las encuesta
    public getEncuestas = async (req: Request, res: Response) => {
        try{
        const encuestas = await this.encuestaRepository.getAll();
        return res.status(200).json(encuestas);
        } catch (error: any) {
            console.error('Error in getEncuestas:', error);
            res.status(500).json({ message: 'Error al obtener las encuestas', error: error.message });
        }
    };

    // Obtener una encuestapor su ID
    public getEncuestaById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const encuesta = await this.encuestaRepository.findById(id);
            if (!encuesta) {
                return res.status(404).json({ message: `Encuesta con id ${id} no encontrada` });
            }
            return res.json(encuesta);
        } catch (error: any) {
            return res.status(500).json({ message: 'Error al obtener la encuesta', error: error.message });
        }
    };


    // Crear una nueva encuesta
    public createEncuesta = async (req: Request, res: Response) => {
        try {
            const [error, createEncuestaDto] = CreateEncuestaDto.create(req.body);
            if (error) {
                return res.status(400).json({ message: error });
            }
            const encuesta = await this.encuestaRepository.create(createEncuestaDto!);
            return res.json(encuesta);
        } catch (error: any) {
            return res.status(400).json({ message: 'Error al crear la encuesta', error: error.message });
        }
    };

    // Actualizar una encuesta existente
    public updateEncuesta = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const [error, updateEncuestaDto] = UpdateEncuestaDto.create({ ...req.body, id });
            if (error) {
                return res.status(400).json({ message: error });
            }
            const encuesta = await this.encuestaRepository.updateById(updateEncuestaDto!);
            return res.json(encuesta);
        } catch (error: any) {
            return res.status(400).json({ message: 'Error al actualizar la encuesta', error: error.message });
        }
    };

    // Eliminar una encuesta
    public deleteEncuesta = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const encuesta = await this.encuestaRepository.deleteById(id);
            return res.json({ message: 'Encuesta eliminada correctamente' });
        } catch (error: any) {
            return res.status(400).json({ message: 'Error al eliminar la encuesta', error: error.message });
        }
    };
}