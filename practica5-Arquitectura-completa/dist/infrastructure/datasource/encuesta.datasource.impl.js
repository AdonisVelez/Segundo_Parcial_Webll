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
exports.EncuestaDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class EncuestaDatasourceImpl {
    create(createEncuestaDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const encuesta = yield postgres_1.prisma.encuesta.create({
                data: createEncuestaDto
            });
            return domain_1.EncuestaEntity.fromObject(encuesta);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const encuestas = yield postgres_1.prisma.encuesta.findMany();
            return encuestas.map(encuesta => domain_1.EncuestaEntity.fromObject(encuesta));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encuesta = yield postgres_1.prisma.encuesta.findFirst({
                where: { id }
            });
            if (!encuesta) {
                throw new Error(`Encuesta with id ${id} not found`);
            }
            return domain_1.EncuestaEntity.fromObject(encuesta);
        });
    }
    updateById(updateEncuestaDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateEncuestaDto.id);
            const updatedEncuesta = yield postgres_1.prisma.encuesta.update({
                where: { id: updateEncuestaDto.id },
                data: updateEncuestaDto.values
            });
            return domain_1.EncuestaEntity.fromObject(updatedEncuesta);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.encuesta.delete({
                where: { id }
            });
            return domain_1.EncuestaEntity.fromObject(deleted);
        });
    }
}
exports.EncuestaDatasourceImpl = EncuestaDatasourceImpl;
