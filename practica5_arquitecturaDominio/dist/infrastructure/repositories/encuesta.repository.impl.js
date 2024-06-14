"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuestaRepositoryImpl = void 0;
class EncuestaRepositoryImpl {
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
    updateById(updateEncuestaDto) {
        return this.datasource.updateById(updateEncuestaDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.EncuestaRepositoryImpl = EncuestaRepositoryImpl;
