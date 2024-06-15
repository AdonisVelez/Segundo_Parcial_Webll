"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuestasController = void 0;
const dtos_1 = require("../../domain/dtos");
class EncuestasController {
    // Dependency Injection
    constructor(encuestaRepository) {
        this.encuestaRepository = encuestaRepository;
        // Obtener todas las encuesta
        this.getEncuestas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const encuestas = yield this.encuestaRepository.getAll();
                return res.status(200).json(encuestas);
            }
            catch (error) {
                console.error('Error in getEncuestas:', error);
                res.status(500).json({ message: 'Error al obtener las encuestas', error: error.message });
            }
        });
        // Obtener una encuestapor su ID
        this.getEncuestaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const encuesta = yield this.encuestaRepository.findById(id);
                if (!encuesta) {
                    return res.status(404).json({ message: `Encuesta con id ${id} no encontrada` });
                }
                return res.json(encuesta);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al obtener la encuesta', error: error.message });
            }
        });
        // Crear una nueva encuesta
        this.createEncuesta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [error, createEncuestaDto] = dtos_1.CreateEncuestaDto.create(req.body);
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const encuesta = yield this.encuestaRepository.create(createEncuestaDto);
                return res.json(encuesta);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al crear la encuesta', error: error.message });
            }
        });
        // Actualizar una encuesta existente
        this.updateEncuesta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const [error, updateEncuestaDto] = dtos_1.UpdateEncuestaDto.create(Object.assign(Object.assign({}, req.body), { id }));
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const encuesta = yield this.encuestaRepository.updateById(updateEncuestaDto);
                return res.json(encuesta);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al actualizar la encuesta', error: error.message });
            }
        });
        // Eliminar una encuesta
        this.deleteEncuesta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const encuesta = yield this.encuestaRepository.deleteById(id);
                return res.json({ message: 'Encuesta eliminada correctamente' });
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al eliminar la encuesta', error: error.message });
            }
        });
    }
}
exports.EncuestasController = EncuestasController;
