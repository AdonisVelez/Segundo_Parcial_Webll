// src/presentation/registros/controller.ts

import { Request, Response } from 'express';
import { CreateRegistroDto, UpdateRegistroDto } from '../../domain/dtos';
import { RegistroRepository } from '../../domain/repositories/registro.repository';

export class RegistrosController {

    // Dependency Injection
    constructor(
        private readonly registroRepository: RegistroRepository,
    ) { }

    // Obtener todos los Registros
    public getRegistro = async (req: Request, res: Response) => {
        try {
            const registros = await this.registroRepository.getAll();
            return res.status(200).json(registros);
        } catch (error: any) {
            return res.status(500).json({ message: 'Error al obtener los registros', error: error.message });
        }
    };

    // Obtener un Registro por su ID
    public getRegistroById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const registro = await this.registroRepository.findById(id);
            return res.json(registro);
        } catch (error: any) {
            return res.status(500).json({ message: 'Error al obtener el registro', error: error.message });
        }
    };

    // Crear un nuevo Registro
    public createRegistro = async (req: Request, res: Response) => {
        const [error, createRegistroDto] = CreateRegistroDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const registro = await this.registroRepository.create(createRegistroDto!);
            return res.json(registro);
        } catch (error: any) {
            return res.status(500).json({ message: 'Error al crear el registro', error: error.message });
        }
    };

    // Actualizar un Registro existente
    public updateRegistro = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateRegistroDto] = UpdateRegistroDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        try {
            const updatedRegistro = await this.registroRepository.updateById(updateRegistroDto!);
            return res.json(updatedRegistro);
        } catch (error: any) {
            return res.status(500).json({ message: 'Error al actualizar el registro', error: error.message });
        }
    };

    // Eliminar un Registro
    public deleteRegistro = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const deletedRegistro = await this.registroRepository.deleteById(id);
            return res.json(deletedRegistro);
        } catch (error: any) {
            return res.status(500).json({ message: 'Error al eliminar el registro', error: error.message });
        }
    };
}
