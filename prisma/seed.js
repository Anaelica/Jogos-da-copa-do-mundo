import { PrismaClient } from "@prisma/client";
import dadosCopa from "../src/mock/dadosCopa.js";

const prisma = new PrismaClient();

async function limparBanco() {
  await prisma.partida.deleteMany();

  await prisma.selecao.deleteMany();
}

async function inserirSelecoes(grupo) {
  for (const selecao of grupo.selecoes) {
    await prisma.selecao.create({
      data: {
        nome: selecao.nome,
        sigla: selecao.sigla,
        grupo: grupo.letra,
        bandeira: selecao.bandeira,
      },
    });
  }
}

async function inserirPartidas(grupo) {
  for (const partida of grupo.partidas) {
    const mandante = await prisma.selecao.findUnique({
      where: {
        sigla: partida.mandante,
      },
    });

    const visitante = await prisma.selecao.findUnique({
      where: {
        sigla: partida.visitante,
      },
    });

    await prisma.partida.create({
      data: {
        mandanteId: mandante.id,
        visitanteId: visitante.id,

        golsMandante: partida.golsMandante,
        golsVisitante: partida.golsVisitante,

        rodada: partida.rodada,
        realizada: partida.realizada,
      },
    });
  }
}

async function main() {
  console.log("Limpando banco...");

  await limparBanco();

  console.log("Inserindo dados...");

  for (const grupo of dadosCopa.grupos) {
    await inserirSelecoes(grupo);

    await inserirPartidas(grupo);
  }

  console.log("Seed concluído!");
}

main()
  .catch((erro) => {
    console.error(erro);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });