"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRegistroDto = void 0;
class UpdateRegistroDto {
    constructor(id, ubicacion, personaId, encuestaId, fecha, hora) {
        this.id = id;
        this.ubicacion = ubicacion;
        this.personaId = personaId;
        this.encuestaId = encuestaId;
        this.fecha = fecha;
        this.hora = hora;
        this.fecha = fecha !== null && fecha !== void 0 ? fecha : new Date();
        this.hora = hora !== null && hora !== void 0 ? hora : new Date();
    }
    get values() {
        const returnObj = {};
        if (this.ubicacion) {
            returnObj.ubicacion = this.ubicacion;
        }
        return returnObj;
    }
    static create(props) {
        const { id, ubicacion, personaId, encuestaId } = props;
        let newUbicacion = ubicacion;
        let newPersonaId = personaId;
        let newEncuestaId = encuestaId;
        if (!id || isNaN(Number(id))) {
            return ['id debe ser un número válido'];
        }
        if (ubicacion) {
            newUbicacion = ubicacion.trim().toUpperCase();
            if (newUbicacion !== ubicacion) {
                return ['Se requieren una Ubicacion valida'];
            }
        }
        if (!newPersonaId || isNaN(Number(personaId))) {
            return ['id debe ser un número válido'];
        }
        if (!newEncuestaId || isNaN(Number(encuestaId))) {
            return ['id debe ser un número válido'];
        }
        return [undefined, new UpdateRegistroDto(id, ubicacion, personaId, encuestaId)];
    }
}
exports.UpdateRegistroDto = UpdateRegistroDto;
