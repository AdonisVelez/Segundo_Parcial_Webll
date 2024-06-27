import { Module } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaResolver } from './encuesta.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encuesta } from './entities/encuesta.entity';

@Module({
  providers: [EncuestaResolver, EncuestaService],
  imports: [TypeOrmModule.forFeature([Encuesta])],
  exports: [TypeOrmModule],
})
export class EncuestaModule {}
