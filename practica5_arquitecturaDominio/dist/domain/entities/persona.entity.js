"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaEntity = void 0;
class PersonaEntity {
    constructor(id, nombre, identificacion) {
        this.id = id;
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    static fromObject(object) {
        const { id, nombre, identificacion } = object;
        if (!id)
            throw 'Id es requerido';
        if (!nombre)
            throw 'nombre es requerido';
        if (!identificacion)
            throw 'identificacion es requerido';
        let newNombre;
        if (nombre) {
            newNombre = nombre.toUpperCase();
            if (newNombre !== nombre) {
                throw 'El nombre debe estar en mayúscula.';
            }
        }
        let newIdentificacion;
        if (identificacion) {
            newIdentificacion = identificacion.trim();
            if (!/^\d{10}$/.test(newIdentificacion)) {
                throw ['Se requiere 10 números para identificacion'];
            }
        }
        return new PersonaEntity(id, nombre, identificacion);
    }
}
exports.PersonaEntity = PersonaEntity;
