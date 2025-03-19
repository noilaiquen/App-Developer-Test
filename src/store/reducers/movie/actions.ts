import MovieApi from '../../../services/apis/movie';
import {Movie, ResponseList} from '../../../types';
import {createAsyncDispatch} from '../../../utils';
import {REFRESH_MOVIES, GET_MOVIES, SEARCH_MOVIES} from './actionsType';

export const refreshMovies = () =>
  createAsyncDispatch(REFRESH_MOVIES.ORIGIN)({
    action: () => MovieApi.getMovies(1),
    handler: (data: ResponseList<Movie>) => {
      const {results} = data;
      return results;
    },
  });
export const getMovies = (page: number = 1) =>
  createAsyncDispatch(GET_MOVIES.ORIGIN)({
    action: () => MovieApi.getMovies(page),
    handler: (data: ResponseList<Movie>) => {
      const {results} = data;
      return results;
    },
  });

export const searchMovies = (keyword: string) =>
  createAsyncDispatch(SEARCH_MOVIES.ORIGIN)({
    action: () => MovieApi.searchMovies(keyword),
    handler: (data: ResponseList<Movie>) => {
      const {results} = data;
      return results;
    },
  });
