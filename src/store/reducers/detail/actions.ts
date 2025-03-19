import MovieApi from '../../../services/apis/movie';
import {Cast, Keyword, Movie, ResponseList, Review} from '../../../types';
import {createAsyncDispatch} from '../../../utils';
import {
  GET_MOVIE_CAST,
  GET_MOVIE_DETAIL,
  GET_MOVIE_KEYWORD,
  GET_MOVIE_REVIEW,
} from './actionsType';

export const getMovieKeywords = (id: number) =>
  createAsyncDispatch(GET_MOVIE_KEYWORD.ORIGIN)({
    action: () => MovieApi.getMovieKeywords(id),
    handler: (data: {keywords: Keyword[]}) => {
      const {keywords} = data;
      return keywords;
    },
  });

export const getMovieReviews = (id: number) =>
  createAsyncDispatch(GET_MOVIE_REVIEW.ORIGIN)({
    action: () => MovieApi.getMovieReviews(id),
    handler: (data: ResponseList<Review>) => {
      const {results} = data;
      return results;
    },
  });

export const getMovieCasts = (id: number) =>
  createAsyncDispatch(GET_MOVIE_CAST.ORIGIN)({
    action: () => MovieApi.getMovieCasts(id),
    handler: (data: {cast: Cast[]}) => {
      const {cast} = data;
      return cast;
    },
  });

export const getMovieDetail = (id: number) =>
  createAsyncDispatch(GET_MOVIE_DETAIL.ORIGIN)({
    action: () => MovieApi.getMovieDetail(id),
    handler: async (data: Movie) => {
      return data;
    },
  });
