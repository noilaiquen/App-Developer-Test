import {Movie} from '../../../types';

export const getMoviesSelector = (state: any): Movie[] => state.movie.movies;
