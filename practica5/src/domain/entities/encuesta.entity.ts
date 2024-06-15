

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

      return new EncuestaEntity(id, descripcion, detalle)

    }
  
  }
  
  
  