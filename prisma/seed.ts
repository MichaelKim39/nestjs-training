// prisma/seed.ts

import { PokeType, PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy pokemen
  const pokemon1 = await prisma.pokemon.upsert({
    where: { name: 'Pikachu' },
    update: {},
    create: {
      name: 'Pikachu',
      type: [PokeType.ELECTRIC],
      hp: 100,
      speed: 80,
    },
  });

  const pokemon2 = await prisma.pokemon.upsert({
    where: { name: 'Bulbasaur' },
    update: {},
    create: {
      name: 'Bulbasaur',
      type: [PokeType.GRASS],
      hp: 200,
      speed: 50,
    },
  });

  console.log({ pokemon1, pokemon2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
