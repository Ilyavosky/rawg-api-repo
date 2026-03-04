import { Request, Response } from "express";
import { getGames, getGameBySlug, getGenres } from "../services/gamesService";
import { GamesQueryParams } from "../types";

export const listGames = async (req: Request, res: Response) => {
  try {
    const query: GamesQueryParams = {
      page: req.query.page ? Number(req.query.page) : undefined,
      page_size: req.query.page_size ? Number(req.query.page_size) : undefined,
      search: req.query.search as string | undefined,
      search_precise: req.query.search_precise === "true",
      search_exact: req.query.search_exact === "true",
      parent_platforms: req.query.parent_platforms as string | undefined,
      platforms: req.query.platforms as string | undefined,
      stores: req.query.stores as string | undefined,
      developers: req.query.developers as string | undefined,
      publishers: req.query.publishers as string | undefined,
      genres: req.query.genres as string | undefined,
      tags: req.query.tags as string | undefined,
      creators: req.query.creators as string | undefined,
      dates: req.query.dates as string | undefined,
      updated: req.query.updated as string | undefined,
      platforms_count: req.query.platforms_count ? Number(req.query.platforms_count) : undefined,
      metacritic: req.query.metacritic as string | undefined,
      exclude_collection: req.query.exclude_collection ? Number(req.query.exclude_collection) : undefined,
      exclude_additions: req.query.exclude_additions === "true",
      exclude_parents: req.query.exclude_parents === "true",
      exclude_game_series: req.query.exclude_game_series === "true",
      exclude_stores: req.query.exclude_stores as string | undefined,
      ordering: req.query.ordering as string | undefined,
    };
    const data = await getGames(query);
    res.json(data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.detail || "Error al obtener juegos",
    });
  }
};

export const getGame = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const data = await getGameBySlug(slug);
    res.json(data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.detail || "Juego no encontrado",
    });
  }
};

export const listGenres = async (req: Request, res: Response) => {
  try {
    const data = await getGenres();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener géneros",
    });
  }
};