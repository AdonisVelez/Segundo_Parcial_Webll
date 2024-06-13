export class CreateRegistroDto {

    private constructor(
      public readonly ubicacion: string,
      public readonly personaId: number,
      public readonly encuestaId: number,
      public readonly fecha: Date = new Date(),
      public readonly hora: Date = new Date()
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateRegistroDto?]  {
  
      const { ubicacion, personaId, encuestaId } = props;
  
      if ( !ubicacion ) return ['Nombre es requerido', undefined];
      if ( !personaId ) return ['id_persona  es requerido', undefined];
      if ( !encuestaId ) return ['id_encuesta es requerido', undefined];
  
      return [undefined, new CreateRegistroDto(ubicacion, personaId, encuestaId)];
  }
}