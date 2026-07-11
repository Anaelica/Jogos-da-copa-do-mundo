import { Router } from "express";
import { validate } from "../midwallers/validate.js";
import { criarPartidaSchema } from "../schemas/partida.schema.js";
import { resultadoSchema } from "../schemas/resultado.schema.js";

import {
  listarPartidas,
  criarPartida,
  atualizarResultado
} from "../controllers/partidas.controller.js";


const router = Router();

/**
 * @swagger
 * /partidas:
 *   get:
 *     summary: Lista todas as partidas
 *     tags:
 *       - Partidas
 *     responses:
 *       200:
 *         description: Lista de partidas
 */
router.get("/", listarPartidas);

/**
 * @swagger
 * /partidas:
 *   post:
 *     summary: Cria uma nova partida
 *     tags:
 *       - Partidas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mandanteId:
 *                 type: integer
 *               visitanteId:
 *                 type: integer
 *               rodada:
 *                 type: integer
 *               fase:
 *                 type: string
 *     responses:
 *       201:
 *         description: Partida criada
 */
router.post(
  "/",
  validate(criarPartidaSchema),
  criarPartida
);

/**
 * @swagger
 * /partidas/{id}:
 *   put:
 *     summary: Atualiza o resultado de uma partida
 *     tags:
 *       - Partidas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               golsMandante:
 *                 type: integer
 *               golsVisitante:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Resultado atualizado
 */
router.put(
  "/:id",
  validate(resultadoSchema),
  atualizarResultado
);  

export default router;