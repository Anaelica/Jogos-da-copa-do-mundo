import express from "express";
import cors from "cors";
import selecoesRouter from "./routes/selecoes.js";
import partidasRouter from "./routes/partidas.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/selecoes", selecoesRouter);
app.use("/partidas", partidasRouter);

app.get("/", (req, res) => {
  res.json({ status: "ok", mensagem: "Central de Resultados API" });
});

app.listen(3333, () => console.log("Servidor em http://localhost:3333"));