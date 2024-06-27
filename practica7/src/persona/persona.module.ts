import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaResolver } from './persona.resolver';
import { Persona } from './entities/persona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PersonaResolver, PersonaService],
  imports: [ TypeOrmModule.forFeature([Persona]) ],
  exports: [ TypeOrmModule ],
})
export class PersonaModule {}
