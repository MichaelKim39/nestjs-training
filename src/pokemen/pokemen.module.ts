import { Module } from '@nestjs/common';
import { PokemenService } from './pokemen.service';
import { PokemenController } from './pokemen.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PokemenController],
  providers: [PokemenService],
  imports: [PrismaModule],
})
export class PokemenModule {}
