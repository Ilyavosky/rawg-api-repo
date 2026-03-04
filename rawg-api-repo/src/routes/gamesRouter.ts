import { Router } from "express";
import { listGames, getGame, listGenres } from "../controllers/gamesController";

const router = Router();

router.get("/games", listGames);
router.get("/games/:slug", getGame);
router.get("/genres", listGenres);

export default router;