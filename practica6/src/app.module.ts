import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { EncuestaModule } from './encuesta/encuesta.module';
import { RegistroModule } from './registro/registro.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    autoLoadEntities: true,
    synchronize: false,
  }),
    PersonaModule,
    EncuestaModule,
    RegistroModule,],

    exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
