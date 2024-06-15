"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEncuestaDto = void 0;
class CreateEncuestaDto {
    constructor(descripcion, detalles) {
        this.descripcion = descripcion;
        this.detalles = detalles;
    }
    static create(props) {
        const { descripcion, detalles } = props;
        if (!descripcion)
            return ['descripcion es requerido', undefined];
        if (!detalles)
            return ['detalle es requerido', undefined];
        return [undefined, new CreateEncuestaDto(descripcion, detalles)];
    }
}
exports.CreateEncuestaDto = CreateEncuestaDto;
