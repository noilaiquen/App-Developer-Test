import {Movie, MovieFilter} from '../../../types';

export const getMoviesSelector = (state: any): Movie[] => state.movie.movies;
export const getNextPageSelector = (state: any): number =>
  state.movie.nextPage ?? 1;
export const getFilterSelector = (state: any): MovieFilter =>
  state.movie.filter;
