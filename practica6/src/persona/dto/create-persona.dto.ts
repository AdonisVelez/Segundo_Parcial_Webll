import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEnum, IsNumber } from 'class-validator';

export class CreatePersonaDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    identificacion: string;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
