export class CreateEncuestaDto {

    private constructor(
      public readonly descripcion: string,
      public readonly detalles: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateEncuestaDto?]  {
  
      const { descripcion, detalles } = props;
  
      if ( !descripcion ) return ['descripcion es requerido', undefined];
      if ( !detalles ) return ['detalle es requerido', undefined];
  
      return [undefined, new CreateEncuestaDto(descripcion, detalles)];
  }
}