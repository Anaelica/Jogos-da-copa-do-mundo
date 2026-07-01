import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET /partidas
// Retorna todas as partidas incluindo dados das seleções
router.get("/", async (req, res) => {
  // TODO: buscar todas as partidas com include de mandante e visitante
  // Ordenar por rodada crescente
});

// GET /partidas/rodada/:numero
// Retorna as partidas de uma rodada específica
router.get("/rodada/:numero", async (req, res) => {
  // TODO: buscar partidas filtrando por rodada (req.params.numero)
  // Dica: converta o parâmetro para número inteiro com parseInt()
  // Se não for um número válido, retorne status 400
});

// PATCH /partidas/:id/resultado
// Atualiza o placar de uma partida
router.patch("/:id/resultado", async (req, res) => {
  // TODO: receber golsMandante e golsVisitante do req.body
  // Atualizar a partida no banco e marcar realizada: true
  // Se a partida não existir, o Prisma lança erro com code "P2025" — trate isso
});

export default router;