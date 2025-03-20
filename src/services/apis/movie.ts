import {API_KEY} from '../../constants';
import {
  Cast,
  Keyword,
  Movie,
  MovieDetail,
  MovieFilter,
  ResponseList,
  Review,
} from '../../types';
import {Fetch} from '../../utils';

const movieUrls = {
  search: `/search/movie`,
  now_playing: `/movie/now_playing`,
  upcoming: `/movie/upcoming`,
  popular: `/movie/popular`,
};
export default class MovieApi {
  static getMovies(
    page: number,
    filter?: MovieFilter,
  ): Promise<ResponseList<Movie>> {
    const {type, order, keyword} = filter || {};
    if (keyword) {
      return Fetch.get(
        `${movieUrls.search}?language=en-US&page=${page}&query=${keyword}&sort_by=${order}&api_key=${API_KEY}`,
      );
    }
    return Fetch.get(
      `${
        movieUrls?.[type ?? 'now_playing']
      }?language=en-US&page=${page}&query=${keyword}&sort_by=${order}&api_key=${API_KEY}`,
    );
  }

  static searchMovies(query: string): Promise<ResponseList<Movie>> {
    return Fetch.get(
      `/search/movie?include_adult=true&language=en-US&page=1&api_key=${API_KEY}&query=${query}`,
    );
  }

  static getMovieDetail(id: number): Promise<MovieDetail> {
    return Fetch.get(`/movie/${id}?language=en-US&api_key=${API_KEY}`);
  }

  static getMovieKeywords(id: number): Promise<{keywords: Keyword[]}> {
    return Fetch.get(`/movie/${id}/keywords?api_key=${API_KEY}`);
  }

  static getMovieReviews(id: number): Promise<ResponseList<Review>> {
    return Fetch.get(
      `/movie/${id}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
    );
  }

  static getMovieCasts(id: number): Promise<{keywords: Cast[]}> {
    return Fetch.get(`/movie/${id}/credits?language=en-US&api_key=${API_KEY}`);
  }
}
