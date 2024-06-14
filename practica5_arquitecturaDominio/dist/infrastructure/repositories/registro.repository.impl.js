"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroRepositoryImpl = void 0;
class RegistroRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createEncuestaDto) {
        return this.datasource.create(createEncuestaDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateRegistroDto) {
        return this.datasource.updateById(updateRegistroDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.RegistroRepositoryImpl = RegistroRepositoryImpl;
