/*
  Warnings:

  - You are about to drop the column `autorIdNa` on the `nacionalidadModel` table. All the data in the column will be lost.
  - Added the required column `AutorId` to the `nacionalidadModel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "nacionalidadModel" DROP CONSTRAINT "nacionalidadModel_autorIdNa_fkey";

-- AlterTable
ALTER TABLE "nacionalidadModel" DROP COLUMN "autorIdNa",
ADD COLUMN     "AutorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "nacionalidadModel" ADD CONSTRAINT "nacionalidadModel_AutorId_fkey" FOREIGN KEY ("AutorId") REFERENCES "autorModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
