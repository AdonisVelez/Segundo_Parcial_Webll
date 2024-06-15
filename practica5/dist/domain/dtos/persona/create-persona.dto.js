"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonaDto = void 0;
class CreatePersonaDto {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    static create(props) {
        const { nombre, identificacion } = props;
        if (!nombre)
            return ['Nombre es requerido', undefined];
        if (!identificacion)
            return ['Identificacion es requerida', undefined];
        return [undefined, new CreatePersonaDto(nombre, identificacion)];
    }
}
exports.CreatePersonaDto = CreatePersonaDto;
