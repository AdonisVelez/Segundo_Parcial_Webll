import { IsString, IsInt, IsNotEmpty, IsDate, IsOptional, IsBoolean, IsEnum, IsNumber } from 'class-validator';

export class CreateRegistroDto {
    @IsString()
    @IsOptional()
    id?: number;

    @IsString()
    fecha: Date;

    @IsString()
    hora: Date;

    @IsString()
    @IsOptional()
    ubicacion: string;


    @IsNumber()
    @IsNotEmpty()
    personaid: number;


    @IsNumber()
    @IsNotEmpty()
    encuestaid: number;


    @IsString()
    @IsNotEmpty()
    estado: string;

}
