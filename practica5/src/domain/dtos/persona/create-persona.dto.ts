export class CreatePersonaDto {

    private constructor(
      public readonly nombre: string,
      public readonly identificacion: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreatePersonaDto?]  {
  
      const { nombre, identificacion } = props;
  
      if ( !nombre ) return ['Nombre es requerido', undefined];
      if ( !identificacion ) return ['Identificacion es requerida', undefined];
  
  
      return [undefined, new CreatePersonaDto(nombre, identificacion)];
  }
}