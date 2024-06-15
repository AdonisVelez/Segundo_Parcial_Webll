"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEncuestaDto = void 0;
class UpdateEncuestaDto {
    constructor(id, descripcion, detalle) {
        this.id = id;
        this.descripcion = descripcion;
        this.detalle = detalle;
    }
    get values() {
        const returnObj = {};
        if (this.descripcion) {
            returnObj.descripcion = this.descripcion;
        }
        if (this.detalle) {
            returnObj.detalle = this.detalle;
        }
        return returnObj;
    }
    static create(props) {
        const { id, descripcion, detalle } = props;
        let newdescripcion = descripcion;
        let newdetalle = detalle;
        if (!id || isNaN(Number(id))) {
            return ['id debe ser un número válido'];
        }
        if (descripcion) {
            newdescripcion = descripcion.trim().toUpperCase();
            if (newdescripcion !== descripcion) {
                return ['Se requieren mayúsculas para descripcion'];
            }
        }
        if (descripcion) {
            newdetalle = detalle.trim().toUpperCase();
            if (newdetalle !== detalle) {
                return ['Se requieren mayúsculas para detalle'];
            }
        }
        return [undefined, new UpdateEncuestaDto(id, descripcion, detalle)];
    }
}
exports.UpdateEncuestaDto = UpdateEncuestaDto;
