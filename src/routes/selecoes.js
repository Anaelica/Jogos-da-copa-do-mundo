import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET /selecoes
// Retorna todas as seleções ordenadas por grupo e nome
router.get("/", async (req, res) => {
  // TODO: buscar todas as seleções com orderBy grupo asc, nome asc
});

// GET /selecoes/grupo/:letra
// Retorna as seleções de um grupo específico
router.get("/grupo/:letra", async (req, res) => {
  // TODO: buscar seleções filtrando pelo grupo (req.params.letra)
  // Dica: use toUpperCase() para garantir que "a" e "A" funcionem igual
  // Se o grupo não existir, retorne status 404
});

// GET /selecoes/classificacao/:grupo
// Calcula e retorna a tabela de classificação do grupo
// DESAFIO: toda a lógica de pontuação fica aqui — o frontend só exibe
router.get("/classificacao/:grupo", async (req, res) => {
  // Passo 1: buscar as seleções do grupo
  // Passo 2: buscar as partidas realizadas que envolvem essas seleções
  // Passo 3: para cada seleção, calcular:
  //   - jogos disputados
  //   - vitórias (3 pontos), empates (1 ponto), derrotas (0 pontos)
  //   - gols pró, gols contra, saldo de gols
  // Passo 4: ordenar por pontos → saldo de gols → gols pró
  // Passo 5: retornar { grupo, tabela }
  //
  // Dica: uma seleção pode ser mandante OU visitante numa partida.
  // Como você descobre quantos gols ela fez em cada caso?
});

export default router;