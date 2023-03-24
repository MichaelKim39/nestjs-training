import { Injectable } from '@nestjs/common';
import { CreatePokemanDto } from './dto/create-pokeman.dto';
import { UpdatePokemanDto } from './dto/update-pokeman.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PokeType } from '@prisma/client';

@Injectable()
export class PokemenService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operations
  create(createPokemanDto: CreatePokemanDto) {
    const { abilityIds, ...pokemanData } = createPokemanDto;
    const abilitiesToConnect = abilityIds.map((abilityId) => ({
      id: abilityId,
    }));

    return this.prisma.pokeman.create({
      data: {
        abilities: {
          connect: abilitiesToConnect,
        },
        ...pokemanData,
      },
    });
  }

  findAll() {
    return this.prisma.pokeman.findMany();
  }

  findByType(pokeType: PokeType) {
    return this.prisma.pokeman.findMany({
      where: {
        type: { has: pokeType },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.pokeman.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updatePokemanDto: UpdatePokemanDto) {
    return this.prisma.pokeman.update({
      where: { id },
      data: updatePokemanDto,
    });
  }

  remove(id: number) {
    return this.prisma.pokeman.delete({ where: { id } });
  }
}
