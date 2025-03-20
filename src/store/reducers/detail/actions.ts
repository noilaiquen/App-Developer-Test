import MovieApi from '../../../services/apis/movie';
import {Credits, Movie, ReleaseDate} from '../../../types';
import {createAsyncDispatch} from '../../../utils';
import {
  GET_MOVIE_CREDITS,
  GET_MOVIE_DETAIL,
  GET_MOVIE_RELEASE_DATE,
} from './actionsType';

export const getMovieCredits = (id: number) =>
  createAsyncDispatch(GET_MOVIE_CREDITS.ORIGIN)({
    action: () => MovieApi.getMovieCredits(id),
    handler: (data: Credits) => {
      let director = null;
      let writer = null;
      if (data?.crew) {
        director = data.crew.find(c => c.job === 'Director');
        writer = data.crew.find(c => c.job === 'Writer');
      }

      return {
        cast: data?.cast ?? [],
        director,
        writer,
      };
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
