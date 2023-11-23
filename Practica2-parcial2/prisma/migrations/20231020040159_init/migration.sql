/*
  Warnings:

  - The primary key for the `traduccionIdiomaModel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idtraduccion` on the `traduccionIdiomaModel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "traduccionIdiomaModel" DROP CONSTRAINT "traduccionIdiomaModel_pkey",
DROP COLUMN "idtraduccion",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "traduccionIdiomaModel_pkey" PRIMARY KEY ("id");
