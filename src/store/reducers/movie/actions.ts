import MovieApi from '../../../services/apis/movie';
import {Movie, ResponseList} from '../../../types';
import {createAsyncDispatch} from '../../../utils';
import {GET_MOVIES, SEARCH_MOVIES} from './actionsType';

export const getMovies = () =>
  createAsyncDispatch(GET_MOVIES.ORIGIN)({
    action: MovieApi.getMovies,
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
