"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroEntity = void 0;
class RegistroEntity {
    constructor(id, ubicacion, fecha, hora) {
        this.id = id;
        this.ubicacion = ubicacion;
        this.fecha = fecha;
        this.hora = hora;
        this.fecha = fecha || new Date();
        this.hora = hora || new Date();
    }
    static fromObject(object) {
        const { id, ubicacion } = object;
        if (!id)
            throw 'Id es requerido';
        if (!ubicacion)
            throw 'Ubicacion es requerido';
        return new RegistroEntity(id, ubicacion);
    }
}
exports.RegistroEntity = RegistroEntity;
