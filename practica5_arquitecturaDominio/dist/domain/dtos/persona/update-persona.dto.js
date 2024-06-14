"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonaDto = void 0;
class UpdatePersonaDto {
    constructor(id, nombre, identificacion) {
        this.id = id;
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    get values() {
        const returnObj = {};
        if (this.nombre) {
            returnObj.nombre = this.nombre;
        }
        if (this.identificacion) {
            returnObj.identificacion = this.identificacion;
        }
        return returnObj;
    }
    static create(props) {
        const { id, nombre, identificacion } = props;
        let newNombre = nombre;
        let newIdentificacion = identificacion;
        if (!id || isNaN(Number(id))) {
            return ['id debe ser un número válido'];
        }
        if (nombre) {
            newNombre = nombre.trim().toUpperCase();
            if (newNombre !== nombre) {
                return ['Se requieren mayúsculas para nombre'];
            }
        }
        if (identificacion) {
            newIdentificacion = identificacion.trim();
            if (newIdentificacion !== identificacion) {
                return ['Se requieren un valor correcto para identificacion'];
            }
        }
        return [undefined, new UpdatePersonaDto(id, nombre, identificacion)];
    }
}
exports.UpdatePersonaDto = UpdatePersonaDto;
