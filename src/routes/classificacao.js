import { Router } from "express";

import {
  classificacaoGrupo
} from "../controllers/classificacao.controller.js";


const router = Router();


router.get("/:grupo", classificacaoGrupo);


export default router;