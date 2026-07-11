import express from "express";
import cors from "cors";
import classificacaoRouter from "./routes/classificacao.js";
import selecoesRouter from "./routes/selecoes.js";
import partidasRouter from "./routes/partidas.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use("/selecoes", selecoesRouter);
app.use("/partidas", partidasRouter);
app.use("/classificacao", classificacaoRouter);

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    mensagem: "Central de Resultados API"
  });
});

export default app;