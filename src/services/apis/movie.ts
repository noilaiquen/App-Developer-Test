import {API_KEY} from '../../constants';
import {
  Cast,
  Keyword,
  Movie,
  MovieDetail,
  ResponseList,
  Review,
} from '../../types';
import {Fetch} from '../../utils';

export default class MovieApi {
  static getMovies(page: number): Promise<ResponseList<Movie>> {
    return Fetch.get(
      `/movie/popular?language=en-US&page=${page}&api_key=${API_KEY}`,
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
