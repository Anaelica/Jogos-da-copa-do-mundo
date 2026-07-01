import { PrismaClient } from "@prisma/client";
import dadosCopa from "../src/mock/dadosCopa.js";

const prisma = new PrismaClient();

async function limparBanco() {
  // TODO: deletar todos os registros de Partida e depois de Selecao
  // Dica: qual tabela tem chave estrangeira? Ela precisa ser deletada primeiro.
}

async function inserirSelecoes(grupo) {
  // TODO: percorrer grupo.selecoes e criar cada seleção no banco
  // Campos necessários: nome, sigla, grupo (letra), bandeira
}

async function inserirPartidas(grupo) {
  // TODO: percorrer grupo.partidas e criar cada partida no banco
  // Atenção: o mock tem siglas (ex: "BRA"), mas o banco precisa de IDs numéricos
  // Dica: use findUnique para buscar o ID de cada seleção pelo campo sigla
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
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });