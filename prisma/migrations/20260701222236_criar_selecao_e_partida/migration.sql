-- CreateTable
CREATE TABLE "Selecao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "grupo" TEXT NOT NULL,
    "bandeira" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Selecao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partida" (
    "id" SERIAL NOT NULL,
    "mandanteId" INTEGER NOT NULL,
    "visitanteId" INTEGER NOT NULL,
    "golsMandante" INTEGER NOT NULL DEFAULT 0,
    "golsVisitante" INTEGER NOT NULL DEFAULT 0,
    "fase" TEXT NOT NULL DEFAULT 'Fase de Grupos',
    "rodada" INTEGER NOT NULL,
    "realizada" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Selecao_sigla_key" ON "Selecao"("sigla");

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_mandanteId_fkey" FOREIGN KEY ("mandanteId") REFERENCES "Selecao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_visitanteId_fkey" FOREIGN KEY ("visitanteId") REFERENCES "Selecao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
