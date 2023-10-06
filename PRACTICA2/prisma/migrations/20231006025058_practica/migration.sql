-- CreateTable
CREATE TABLE "OrigenIdiomaModel" (
    "id" SERIAL NOT NULL,
    "nombrepais" TEXT NOT NULL,
    "idiomaoficial" TEXT NOT NULL,

    CONSTRAINT "OrigenIdiomaModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdiomaModel" (
    "id" SERIAL NOT NULL,
    "nombreidioma" TEXT NOT NULL,
    "origenId" INTEGER NOT NULL,

    CONSTRAINT "IdiomaModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TraduccionIdiomaModel" (
    "idtraduccion" SERIAL NOT NULL,
    "numerotraduccion" INTEGER NOT NULL,
    "nombretraduccion" TEXT NOT NULL,
    "ididioma" INTEGER NOT NULL,

    CONSTRAINT "TraduccionIdiomaModel_pkey" PRIMARY KEY ("idtraduccion")
);

-- AddForeignKey
ALTER TABLE "IdiomaModel" ADD CONSTRAINT "IdiomaModel_origenId_fkey" FOREIGN KEY ("origenId") REFERENCES "OrigenIdiomaModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraduccionIdiomaModel" ADD CONSTRAINT "TraduccionIdiomaModel_ididioma_fkey" FOREIGN KEY ("ididioma") REFERENCES "IdiomaModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
