// Root module for application

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PokemenModule } from './pokemen/pokemen.module';

@Module({
  imports: [PrismaModule, PokemenModule],
  controllers: [AppController, PokemonController],
  providers: [AppService],
})
export class AppModule {}
