

export class RegistroEntity {

    constructor(
      public id: number,
      public ubicacion: string,
      public fecha?: Date,
      public hora?: Date,
    ) {
      this.fecha = fecha || new Date();
      this.hora = hora || new Date();
    }
  
    
  
    public static fromObject( object: {[key: string]: any} ): RegistroEntity {
      const { id, ubicacion} = object;
      if ( !id ) throw 'Id es requerido';
      if ( !ubicacion ) throw 'Ubicacion es requerido';


      return new RegistroEntity(id, ubicacion)

    }
  
  }
  
  
  