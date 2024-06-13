
export class UpdateEncuestaDto {

    private constructor(
      public readonly id: number,
      public readonly descripcion?: string,
      public readonly detalle?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.descripcion ){
        returnObj.descripcion = this.descripcion;
      }
      if ( this.detalle ){
        returnObj.detalle = this.detalle;
      }
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateEncuestaDto?]  {
  
      const { id, descripcion, detalle } = props;
      let newdescripcion = descripcion;
      let newdetalle = detalle;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id debe ser un número válido'];
      }
  
      if ( descripcion ) {
        newdescripcion = descripcion.trim().toUpperCase();
        if ( newdescripcion !== descripcion ) {
          return ['Se requieren mayúsculas para descripcion'];
        }
      }

      if ( descripcion ) {
        newdetalle = detalle.trim().toUpperCase();
        if ( newdetalle !== detalle ) {
          return ['Se requieren mayúsculas para detalle'];
        }
      }
  
      return [undefined, new UpdateEncuestaDto(id, descripcion, detalle)];
    }
  
  
  }