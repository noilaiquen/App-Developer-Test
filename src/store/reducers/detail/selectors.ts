import { Cast, Keyword, MovieDetail, Review } from "../../../types";

export const getDetailSelector = (state: any): MovieDetail => state.detail.movie;
export const getMovieKeywordsSelector = (state: any): Keyword[] =>
  state.detail.movie?.keywords ?? [];
export const getMovieReviewsSelector = (state: any): Review[] => state.detail.movie?.reviews ?? [];
export const getMovieCastsSelector = (state: any): Cast[] => state.detail.movie?.cast ?? [];
export const getMovieOverviewsSelector = (state: any): string => state.detail.movie?.overview ?? "";
