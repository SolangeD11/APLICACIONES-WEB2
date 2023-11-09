-- CreateTable
CREATE TABLE "negocioModel" (
    "id" SERIAL NOT NULL,
    "correoNegocio" TEXT NOT NULL,
    "nombreNegocio" TEXT NOT NULL,
    "direccionNegocio" TEXT NOT NULL,
    "telefonoNegocio" INTEGER NOT NULL,
    "totalLibros" INTEGER NOT NULL,

    CONSTRAINT "negocioModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encargadoModel" (
    "id" SERIAL NOT NULL,
    "correoEncargado" TEXT NOT NULL,
    "nombreEncargado" TEXT NOT NULL,
    "telefonoEncargado" INTEGER NOT NULL,

    CONSTRAINT "encargadoModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventarioModel" (
    "id" SERIAL NOT NULL,
    "numeroCopias" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "precioVenta" INTEGER NOT NULL,
    "precioAlquiler" INTEGER NOT NULL,
    "encargadoId" INTEGER NOT NULL,
    "negocioId" INTEGER NOT NULL,

    CONSTRAINT "inventarioModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libroModel" (
    "id" SERIAL NOT NULL,
    "ISBN" INTEGER NOT NULL,
    "nombreLibro" TEXT NOT NULL,
    "anopublicacion" INTEGER NOT NULL,
    "edicionLibro" TEXT NOT NULL,
    "clasificacionLibro" TEXT NOT NULL,

    CONSTRAINT "libroModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "editorialModel" (
    "id" SERIAL NOT NULL,
    "nombreEditorial" TEXT NOT NULL,
    "correoEditorial" TEXT NOT NULL,
    "direccionEditorial" TEXT NOT NULL,
    "telefonoEditorial" INTEGER NOT NULL,
    "libroId" INTEGER NOT NULL,

    CONSTRAINT "editorialModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoriaModel" (
    "id" SERIAL NOT NULL,
    "nombreCategoria" TEXT NOT NULL,
    "CategoriaPrincipal" TEXT,
    "librosId" INTEGER NOT NULL,

    CONSTRAINT "categoriaModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "autorModel" (
    "id" SERIAL NOT NULL,
    "cedulautor" TEXT NOT NULL,
    "nombreautor" TEXT NOT NULL,
    "correoautor" TEXT NOT NULL,

    CONSTRAINT "autorModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generoModel" (
    "id" SERIAL NOT NULL,
    "generoliterario" TEXT NOT NULL,
    "AutorId" INTEGER NOT NULL,

    CONSTRAINT "generoModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nacionalidadModel" (
    "id" SERIAL NOT NULL,
    "nombrepais" TEXT NOT NULL,
    "nombreciudad" TEXT NOT NULL,
    "AutorIdNa" INTEGER NOT NULL,

    CONSTRAINT "nacionalidadModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "origenIdiomaModel" (
    "id" SERIAL NOT NULL,
    "nombrepais" TEXT NOT NULL,
    "idiomaoficial" TEXT NOT NULL,

    CONSTRAINT "origenIdiomaModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idiomaModel" (
    "id" SERIAL NOT NULL,
    "nombreidioma" TEXT NOT NULL,
    "origenId" INTEGER NOT NULL,

    CONSTRAINT "idiomaModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traduccionIdiomaModel" (
    "idtraduccion" SERIAL NOT NULL,
    "numerotraduccion" INTEGER NOT NULL,
    "nombretraduccion" TEXT NOT NULL,
    "ididioma" INTEGER NOT NULL,

    CONSTRAINT "traduccionIdiomaModel_pkey" PRIMARY KEY ("idtraduccion")
);

-- CreateIndex
CREATE UNIQUE INDEX "negocioModel_correoNegocio_key" ON "negocioModel"("correoNegocio");

-- CreateIndex
CREATE UNIQUE INDEX "encargadoModel_correoEncargado_key" ON "encargadoModel"("correoEncargado");

-- CreateIndex
CREATE UNIQUE INDEX "libroModel_ISBN_key" ON "libroModel"("ISBN");

-- CreateIndex
CREATE UNIQUE INDEX "autorModel_cedulautor_key" ON "autorModel"("cedulautor");

-- AddForeignKey
ALTER TABLE "inventarioModel" ADD CONSTRAINT "inventarioModel_encargadoId_fkey" FOREIGN KEY ("encargadoId") REFERENCES "encargadoModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventarioModel" ADD CONSTRAINT "inventarioModel_negocioId_fkey" FOREIGN KEY ("negocioId") REFERENCES "negocioModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "editorialModel" ADD CONSTRAINT "editorialModel_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "libroModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoriaModel" ADD CONSTRAINT "categoriaModel_librosId_fkey" FOREIGN KEY ("librosId") REFERENCES "libroModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generoModel" ADD CONSTRAINT "generoModel_AutorId_fkey" FOREIGN KEY ("AutorId") REFERENCES "autorModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nacionalidadModel" ADD CONSTRAINT "nacionalidadModel_AutorIdNa_fkey" FOREIGN KEY ("AutorIdNa") REFERENCES "autorModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idiomaModel" ADD CONSTRAINT "idiomaModel_origenId_fkey" FOREIGN KEY ("origenId") REFERENCES "origenIdiomaModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traduccionIdiomaModel" ADD CONSTRAINT "traduccionIdiomaModel_ididioma_fkey" FOREIGN KEY ("ididioma") REFERENCES "idiomaModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
