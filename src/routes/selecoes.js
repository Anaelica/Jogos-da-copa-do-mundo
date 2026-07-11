import { Router } from "express";

import {
  listarSelecoes,
  buscarSelecao
} from "../controllers/selecoes.controller.js";


const router = Router();


/**
 * @swagger
 * /selecoes:
 *   get:
 *     summary: Lista todas as seleções
 *     tags:
 *       - Seleções
 *     responses:
 *       200:
 *         description: Lista de seleções cadastradas
 */
router.get("/", listarSelecoes);



/**
 * @swagger
 * /selecoes/{id}:
 *   get:
 *     summary: Busca uma seleção pelo ID
 *     tags:
 *       - Seleções
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seleção encontrada
 *       404:
 *         description: Seleção não encontrada
 */
router.get("/:id", buscarSelecao);


export default router;