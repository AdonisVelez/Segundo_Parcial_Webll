import { IsString, IsInt, IsNotEmpty, IsArray, MinLength, IsEnum, IsOptional, IsNumber } from 'class-validator';

export class CreateEncuestaDto {

  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  detalles: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
