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
exports.PersonasController = void 0;
const dtos_1 = require("../../domain/dtos");
class PersonasController {
    constructor(personaRepository) {
        this.personaRepository = personaRepository;
        //Obtener todas las personas//
        this.getPersonas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const personas = yield this.personaRepository.getAll();
                return res.status(200).json(personas);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al obtener las personas', error: error.message });
            }
        });
        // Obtener una persona por su ID//
        this.getPersonaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const persona = yield this.personaRepository.findById(id);
                if (!persona) {
                    return res.status(404).json({ message: `Persona con id ${id} no encontrada` });
                }
                return res.json(persona);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al obtener la persona', error: error.message });
            }
        });
        //Crear una nueva persona//
        this.createPersona = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [error, createPersonaDto] = dtos_1.CreatePersonaDto.create(req.body);
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const persona = yield this.personaRepository.create(createPersonaDto);
                return res.json(persona);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al crear la persona', error: error.message });
            }
        });
        // Actualizar una persona existente//
        this.updatePersona = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const [error, updatePersonaDto] = dtos_1.UpdatePersonaDto.create(Object.assign(Object.assign({}, req.body), { id }));
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const persona = yield this.personaRepository.updateById(updatePersonaDto);
                return res.json(persona);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al actualizar la persona', error: error.message });
            }
        });
        //Eliminar una persona//
        this.deletePersona = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const persona = yield this.personaRepository.deleteById(id);
                return res.json({ message: 'Persona eliminada correctamente' });
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al eliminar la persona', error: error.message });
            }
        });
    }
}
exports.PersonasController = PersonasController;
