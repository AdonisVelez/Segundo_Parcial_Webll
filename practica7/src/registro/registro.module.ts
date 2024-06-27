import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { RegistroResolver } from './registro.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from './entities/registro.entity';
import { Persona } from 'src/persona/entities/persona.entity';
import { Encuesta } from 'src/encuesta/entities/encuesta.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Registro, Persona,Encuesta]) ],
  exports: [ TypeOrmModule ],
  providers: [RegistroResolver, RegistroService],
})
export class RegistroModule {}
