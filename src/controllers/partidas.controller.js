import prisma from "../lib/prisma.js";
import { criarPartidaService } from "../services/partidas.service.js";

export async function listarPartidas(req, res) {
  try {

    const partidas = await prisma.partida.findMany({
      include: {
        mandante: true,
        visitante: true
      },
      orderBy: {
        rodada: "asc"
      }
    });


    res.json(partidas);

  } catch (error) {

    res.status(500).json({
      erro: "Erro ao buscar partidas"
    });

  }
}

export async function criarPartida(req, res) {

  try {

    const partida = await criarPartidaService(req.body);

    return res.status(201).json(partida);


  } catch (error) {

    return res.status(400).json({
      erro: error.message
    });

  }

}

export async function atualizarResultado(req, res) {
  const { id } = req.params;

  const {
    golsMandante,
    golsVisitante
  } = req.body;

  try {

    const partidaExistente = await prisma.partida.findUnique({
      where: {
        id: Number(id)
      }
    });


    if (!partidaExistente) {
      return res.status(404).json({
        erro: "Partida não encontrada"
      });
    }


    const partida = await prisma.partida.update({

      where: {
        id: Number(id)
      },

      data: {
        golsMandante,
        golsVisitante,
        realizada: true
      },

      include: {
        mandante: true,
        visitante: true
      }

    });


    res.json(partida);


  } catch (error) {

    res.status(500).json({
      erro: "Erro ao atualizar resultado"
    });

  }
}