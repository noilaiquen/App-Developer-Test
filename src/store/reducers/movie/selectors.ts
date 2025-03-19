import {Movie} from '../../../types';

export const getMoviesSelector = (state: any): Movie[] => state.movie.movies;
export const getNextPageSelector = (state: any): number =>
  state.movie.nextPage ?? 1;
