import { z } from "zod";

export const resultadoSchema = z.object({
  golsMandante: z.coerce.number().int().min(0),
  golsVisitante: z.coerce.number().int().min(0)
});