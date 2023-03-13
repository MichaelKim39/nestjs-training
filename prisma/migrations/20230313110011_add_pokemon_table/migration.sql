-- CreateEnum
CREATE TYPE "PokeType" AS ENUM ('BUG', 'DRAGON', 'ELECTRIC', 'FIRE', 'FLYING', 'GRASS', 'ICE', 'NORMAL', 'POISON', 'PSYCHIC', 'WATER');

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PokeType"[],
    "hp" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");
