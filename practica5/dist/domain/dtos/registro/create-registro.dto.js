"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegistroDto = void 0;
class CreateRegistroDto {
    constructor(ubicacion, personaId, encuestaId, fecha = new Date(), hora = new Date()) {
        this.ubicacion = ubicacion;
        this.personaId = personaId;
        this.encuestaId = encuestaId;
        this.fecha = fecha;
        this.hora = hora;
    }
    static create(props) {
        const { ubicacion, personaId, encuestaId } = props;
        if (!ubicacion)
            return ['Ubicacion es requerido', undefined];
        if (!personaId)
            return ['id_persona  es requerido', undefined];
        if (!encuestaId)
            return ['id_encuesta es requerido', undefined];
        return [undefined, new CreateRegistroDto(ubicacion, personaId, encuestaId)];
    }
}
exports.CreateRegistroDto = CreateRegistroDto;
