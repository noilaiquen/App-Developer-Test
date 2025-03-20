import { Movie } from "../../../types";

export const getWatchlistSelector = (state: any): Record<number, Movie> => state.watchlist.movies;
