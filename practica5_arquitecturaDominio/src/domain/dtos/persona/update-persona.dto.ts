
export class UpdatePersonaDto {

    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly identificacion?: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.nombre ){
        returnObj.nombre = this.nombre;
      }
      if ( this.identificacion ){
        returnObj.identificacion = this.identificacion;
      }
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatePersonaDto?]  {
  
      const { id, nombre, identificacion } = props;
      let newNombre = nombre;
      let newIdentificacion = identificacion;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id debe ser un número válido'];
      }
  
      if ( nombre ) {
        newNombre = nombre.trim().toUpperCase();
        if ( newNombre !== nombre ) {
          return ['Se requieren mayúsculas para nombre'];
        }
      }

      if (identificacion) {
        newIdentificacion = identificacion.trim();
        if (!/^\d{10}$/.test(newIdentificacion)) {
          return ['Se requiere 10 números para identificacion'];
        }
      }  
  
      return [undefined, new UpdatePersonaDto(id, nombre, identificacion)];
    }
  
  
  }