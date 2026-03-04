import { fetchGames, fetchGameBySlug, fetchGenres } from "../repositories/rawgRepository";
import { GamesQueryParams } from "../types";

export const getGames = async (query: GamesQueryParams) => {
  return await fetchGames(query);
};

export const getGameBySlug = async (slug: string) => {
  return await fetchGameBySlug(slug);
};

export const getGenres = async () => {
  return await fetchGenres();
};