import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { RegistroController } from './registro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from './entities/registro.entity';
import { Persona } from 'src/persona/entities/persona.entity';
import { Encuesta } from 'src/encuesta/entities/encuesta.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Registro, Persona, Encuesta]) ],
  providers: [RegistroService,],
  controllers: [RegistroController],
})
export class RegistroModule {}
