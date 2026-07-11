import { z } from "zod";


export const criarPartidaSchema = z.object({
  mandanteId: z.number().int().positive(),
  visitanteId: z.number().int().positive(),
  rodada: z.number().int().positive(),
  fase: z.string().optional()
});