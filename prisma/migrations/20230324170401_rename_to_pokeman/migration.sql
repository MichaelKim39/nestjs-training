/*
  Warnings:

  - You are about to drop the `Pokemon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pokemon";

-- CreateTable
CREATE TABLE "Ability" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "pokemanId" INTEGER,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokeman" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PokeType"[],
    "hp" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Pokeman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokeman_name_key" ON "Pokeman"("name");

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_pokemanId_fkey" FOREIGN KEY ("pokemanId") REFERENCES "Pokeman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
