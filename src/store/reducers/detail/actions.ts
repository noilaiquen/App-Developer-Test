import MovieApi from '../../../services/apis/movie';
import {
  Cast,
  Keyword,
  Movie,
  ReleaseDate,
  ResponseList,
  Review,
} from '../../../types';
import {createAsyncDispatch} from '../../../utils';
import {
  GET_MOVIE_CAST,
  GET_MOVIE_DETAIL,
  GET_MOVIE_KEYWORD,
  GET_MOVIE_RELEASE_DATE,
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

export const getMovieReleaseDate = (id: number) =>
  createAsyncDispatch(GET_MOVIE_RELEASE_DATE.ORIGIN)({
    action: () => MovieApi.getMovieReleaseDate(id),
    handler: (data: ReleaseDate) => {
      const singaporeRelease = data.results?.find(r => r.iso_3166_1 === 'SG');
      if (singaporeRelease) {
        const certification =
          singaporeRelease.release_dates?.[0]?.certification;
        return certification;
      }
      return null;
    },
  });

export const getMovieDetail = (id: number) =>
  createAsyncDispatch(GET_MOVIE_DETAIL.ORIGIN)({
    action: () => MovieApi.getMovieDetail(id),
    handler: async (data: Movie) => {
      return data;
    },
  });
