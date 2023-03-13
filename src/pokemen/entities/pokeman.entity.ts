import { Pokemon, PokeType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PokemanEntity implements Pokemon {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: PokeType[];

  @ApiProperty()
  hp: number;

  @ApiProperty()
  speed: number;
}
