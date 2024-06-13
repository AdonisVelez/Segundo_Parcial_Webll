
export class UpdateRegistroDto {

    private constructor(
      public readonly id: number,
      public readonly ubicacion: string,
      public readonly personaId: number,
      public readonly encuestaId: number,
      public readonly fecha?: Date, 
      public readonly hora?: Date,
    ){
      this.fecha = fecha ?? new Date();
      this.hora = hora ?? new Date();
    }
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.ubicacion ){
        returnObj.ubicacion = this.ubicacion;
      }
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateRegistroDto?]  {
  
      const { id, ubicacion, personaId, encuestaId } = props;
      let newUbicacion = ubicacion;
      let newPersonaId = personaId;
      let newEncuestaId = encuestaId;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id debe ser un número válido'];
      }
  
      if ( ubicacion ) {
        newUbicacion = ubicacion.trim().toUpperCase();
        if ( newUbicacion !== ubicacion ) {
          return ['Se requieren una Ubicacion valida'];
        }
      }
      if ( !newPersonaId || isNaN( Number(personaId)) ) {
        return ['id debe ser un número válido'];
      }

      if ( !newEncuestaId || isNaN( Number(encuestaId)) ) {
        return ['id debe ser un número válido'];
      }
 
  
      return [undefined, new UpdateRegistroDto(id, ubicacion,personaId, encuestaId)];
    }
  
  
  }