import prisma from "../lib/prisma.js";


export async function listarSelecoesService() {

  return await prisma.selecao.findMany({
    orderBy: {
      nome: "asc"
    }
  });

}



export async function buscarSelecaoService(id) {

  return await prisma.selecao.findUnique({
    where: {
      id: Number(id)
    }
  });

}