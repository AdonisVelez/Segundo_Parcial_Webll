

export class EncuestaEntity {

    constructor(
      public id: number,
      public descripcion: string,
      public detalle: string,
    ) {}
  
    
  
    public static fromObject( object: {[key: string]: any} ): EncuestaEntity {
      const { id, descripcion, detalle} = object;
      if ( !id ) throw 'Id es requerido';
      if ( !descripcion ) throw 'descripcion es requerido';
      if ( !detalle ) throw 'detalle es requerido';
  
      let newDescripcion;
      if ( descripcion ) {
        newDescripcion = descripcion.toUpperCase();
        if (  newDescripcion !== descripcion  ) {
          throw 'La Descripcion debe estar en mayúscula.'
        }
      }

      let newDetalle;
      if ( detalle ) {
        newDetalle = detalle.toUpperCase();
        if (  newDetalle !== detalle ) {
          throw 'El detalle debe estar en mayúscula.'
        }
      }
      return new EncuestaEntity(id, descripcion, detalle)

    }
  
  }
  
  
  