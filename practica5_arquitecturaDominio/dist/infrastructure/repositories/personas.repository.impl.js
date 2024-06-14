"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaRepositoryImpl = void 0;
class PersonaRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createPersonaDto) {
        return this.datasource.create(createPersonaDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updatePersonaDto) {
        return this.datasource.updateById(updatePersonaDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.PersonaRepositoryImpl = PersonaRepositoryImpl;
