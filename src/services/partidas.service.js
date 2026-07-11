import prisma from "../lib/prisma.js";


export async function criarPartidaService({
  mandanteId,
  visitanteId,
  rodada,
  fase
}) {

  if (mandanteId === visitanteId) {
    throw new Error(
      "Uma seleção não pode jogar contra ela mesma"
    );
  }


  const selecoes = await prisma.selecao.findMany({
    where: {
      id: {
        in: [mandanteId, visitanteId]
      }
    }
  });


  if (selecoes.length !== 2) {
    throw new Error(
      "Uma ou ambas as seleções não foram encontradas"
    );
  }


  return await prisma.partida.create({
    data: {
      mandanteId,
      visitanteId,
      rodada,
      fase
    },
    include: {
      mandante: true,
      visitante: true
    }
  });

}