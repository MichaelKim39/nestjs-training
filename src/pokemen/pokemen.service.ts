import { Injectable } from '@nestjs/common';
import { CreatePokemanDto } from './dto/create-pokeman.dto';
import { UpdatePokemanDto } from './dto/update-pokeman.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PokemenService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operations
  create(createPokemanDto: CreatePokemanDto) {
    return this.prisma.pokemon.create({ data: createPokemanDto });
  }

  findAll() {
    return this.prisma.pokemon.findMany();
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updatePokemanDto: UpdatePokemanDto) {
    return this.prisma.pokemon.update({
      where: { id },
      data: updatePokemanDto,
    });
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({ where: { id } });
  }
}
