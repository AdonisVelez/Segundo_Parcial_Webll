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
exports.PersonaDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class PersonaDatasourceImpl {
    create(createPersonaDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const persona = yield postgres_1.prisma.persona.create({
                data: createPersonaDto
            });
            return domain_1.PersonaEntity.fromObject(persona);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const persona = yield postgres_1.prisma.persona.findMany();
            return persona.map(persona => domain_1.PersonaEntity.fromObject(persona));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const persona = yield postgres_1.prisma.persona.findFirst({
                where: { id }
            });
            if (!persona)
                throw `Persona with id ${id} not found`;
            return domain_1.PersonaEntity.fromObject(persona);
        });
    }
    updateById(updatePersonaDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updatePersonaDto.id);
            const updatedPersona = yield postgres_1.prisma.persona.update({
                where: { id: updatePersonaDto.id },
                data: updatePersonaDto.values
            });
            return domain_1.PersonaEntity.fromObject(updatedPersona);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.persona.delete({
                where: { id }
            });
            return domain_1.PersonaEntity.fromObject(deleted);
        });
    }
}
exports.PersonaDatasourceImpl = PersonaDatasourceImpl;
