import axios from "axios";
import { GamesQueryParams } from "../types";

const rawgClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: process.env.RAWG_API_KEY },
});

export const fetchGames = async (query: GamesQueryParams) => {
  const { data } = await rawgClient.get("/games", { params: query });
  return data;
};

export const fetchGameBySlug = async (slug: string) => {
  const { data } = await rawgClient.get(`/games/${slug}`);
  return data;
};

export const fetchGenres = async () => {
  const { data } = await rawgClient.get("/genres");
  return data;
};