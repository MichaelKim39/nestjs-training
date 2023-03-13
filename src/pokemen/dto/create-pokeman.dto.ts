import { ApiProperty } from '@nestjs/swagger';
import { PokeType } from '@prisma/client';

export class CreatePokemanDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: PokeType[];

  @ApiProperty()
  hp: number;

  @ApiProperty()
  speed: number;

  // @ApiProperty()
  // abilities: Ability[];
}
