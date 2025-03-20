import { Movie, MovieFilter } from "../../../types";

export const getMoviesSelector = (state: any): Movie[] => state.movie.movies;
export const getNextPageSelector = (state: any): number => state.movie.nextPage ?? 1;
export const getFilterSelector = (state: any): MovieFilter => state.movie.filter;
export const getLoadingSelector = (state: any): boolean => state.movie.loading ?? false;
export const getRefreshingSelector = (state: any): boolean => state.movie.refreshing ?? false;
