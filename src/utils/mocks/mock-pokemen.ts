import { Pokeman, PokeType } from '@prisma/client';

export const MOCK_POKEMEN: Pokeman[] = [
  {
    id: 1,
    name: 'pikachu',
    type: [PokeType.ELECTRIC],
    hp: 100,
    speed: 50,
    level: 1,
  },
  {
    id: 2,
    name: 'blastoise',
    type: [PokeType.WATER],
    hp: 50,
    speed: 20,
    level: 1,
  },
  {
    id: 3,
    name: 'geodude',
    type: [PokeType.NORMAL],
    hp: 300,
    speed: 300,
    level: 1,
  },
];
