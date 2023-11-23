/*
  Warnings:

  - You are about to drop the column `AutorIdNa` on the `nacionalidadModel` table. All the data in the column will be lost.
  - Added the required column `autorIdNa` to the `nacionalidadModel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "nacionalidadModel" DROP CONSTRAINT "nacionalidadModel_AutorIdNa_fkey";

-- AlterTable
ALTER TABLE "nacionalidadModel" DROP COLUMN "AutorIdNa",
ADD COLUMN     "autorIdNa" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "nacionalidadModel" ADD CONSTRAINT "nacionalidadModel_autorIdNa_fkey" FOREIGN KEY ("autorIdNa") REFERENCES "autorModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
