"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuestaEntity = void 0;
class EncuestaEntity {
    constructor(id, descripcion, detalle) {
        this.id = id;
        this.descripcion = descripcion;
        this.detalle = detalle;
    }
    static fromObject(object) {
        const { id, descripcion, detalle } = object;
        if (!id)
            throw 'Id es requerido';
        if (!descripcion)
            throw 'descripcion es requerido';
        return new EncuestaEntity(id, descripcion, detalle);
    }
}
exports.EncuestaEntity = EncuestaEntity;
