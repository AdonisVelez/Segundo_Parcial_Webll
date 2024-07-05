import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { RegistroGateway } from './registro.gateway';

@Module({
  providers: [RegistroGateway, RegistroService],
})
export class RegistroModule {}
