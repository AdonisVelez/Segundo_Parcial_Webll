"use strict";
// src/presentation/registros/controller.ts
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
exports.RegistrosController = void 0;
const dtos_1 = require("../../domain/dtos");
class RegistrosController {
    // Dependency Injection
    constructor(registroRepository) {
        this.registroRepository = registroRepository;
        // Obtener todos los Registros
        this.getRegistro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const registros = yield this.registroRepository.getAll();
                return res.status(200).json(registros);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al obtener los registros', error: error.message });
            }
        });
        // Obtener un Registro por su ID
        this.getRegistroById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const registro = yield this.registroRepository.findById(id);
                return res.json(registro);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al obtener el registro', error: error.message });
            }
        });
        // Crear un nuevo Registro
        this.createRegistro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createRegistroDto] = dtos_1.CreateRegistroDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                const registro = yield this.registroRepository.create(createRegistroDto);
                return res.json(registro);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al crear el registro', error: error.message });
            }
        });
        // Actualizar un Registro existente
        this.updateRegistro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateRegistroDto] = dtos_1.UpdateRegistroDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            try {
                const updatedRegistro = yield this.registroRepository.updateById(updateRegistroDto);
                return res.json(updatedRegistro);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al actualizar el registro', error: error.message });
            }
        });
        // Eliminar un Registro
        this.deleteRegistro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const deletedRegistro = yield this.registroRepository.deleteById(id);
                return res.json(deletedRegistro);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al eliminar el registro', error: error.message });
            }
        });
    }
}
exports.RegistrosController = RegistrosController;
