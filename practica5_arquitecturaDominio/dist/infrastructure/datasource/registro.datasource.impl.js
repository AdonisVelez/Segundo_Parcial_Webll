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
exports.RegistroDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class RegistroDatasourceImpl {
    create(createRegistroDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const registro = yield postgres_1.prisma.registro.create({
                data: createRegistroDto
            });
            return domain_1.RegistroEntity.fromObject(registro);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const registro = yield postgres_1.prisma.registro.findMany();
            return registro.map(registro => domain_1.RegistroEntity.fromObject(registro));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const registro = yield postgres_1.prisma.encuesta.findFirst({
                where: { id }
            });
            if (!registro)
                throw `Registro with id ${id} not found`;
            return domain_1.RegistroEntity.fromObject(registro);
        });
    }
    updateById(updateRegistroDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateRegistroDto.id);
            const updatedRegistro = yield postgres_1.prisma.persona.update({
                where: { id: updateRegistroDto.id },
                data: updateRegistroDto.values
            });
            return domain_1.RegistroEntity.fromObject(updatedRegistro);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.encuesta.delete({
                where: { id }
            });
            return domain_1.RegistroEntity.fromObject(deleted);
        });
    }
}
exports.RegistroDatasourceImpl = RegistroDatasourceImpl;
