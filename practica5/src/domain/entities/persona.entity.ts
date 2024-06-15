

export class PersonaEntity {

    constructor(
      public id: number,
      public nombre: string,
      public identificacion: number,
    ) {}
  
    
  
    public static fromObject( object: {[key: string]: any} ): PersonaEntity {
      const { id, nombre, identificacion} = object;
      if ( !id ) throw 'Id es requerido';
      if ( !nombre ) throw 'nombre es requerido';
      if ( !identificacion ) throw 'identificacion es requerido';
  
      let newNombre;
      if ( nombre ) {
        newNombre = nombre.toUpperCase();
        if (  newNombre !== nombre  ) {
          throw 'El nombre debe estar en mayúscula.'
        }
      }

      let newIdentificacion;
        if ( identificacion ) {
            newIdentificacion = identificacion.trim();
            if (!/^\d{10}$/.test(newIdentificacion)) {
                throw ['Se requiere 10 números para identificacion'];
            }
        }
      return new PersonaEntity(id, nombre, identificacion)

    }
  
  }
  
  
  