import { Module } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaController } from './encuesta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encuesta } from './entities/encuesta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Encuesta])  ],
  providers: [EncuestaService],
  controllers: [EncuestaController],
  exports: [TypeOrmModule]
})
export class EncuestaModule {}
