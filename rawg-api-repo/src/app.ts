import "dotenv/config";
import express from "express";
import cors from "cors";
import gamesRouter from "./routes/gamesRouter";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));
app.use(express.json());
app.use("/api", gamesRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Todo bien, todo correcto y yo que me alegto. Gateway corriendo en http://localhost:${PORT}`);
});