export type MovieFilter = {
  type?: 'now_playing' | 'upcoming' | 'popular';
  order?: 'original_title.asc' | 'vote_average.desc' | 'release_date.desc';
  keyword?: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  keywords?: Keyword[];
  reviews?: Review[];
  cast?: Cast[];
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  iso_639_1: string;
  name: string;
};

export type Keyword = {
  id: number;
  name: string;
};

export type Review = {
  id: string;
  author_details: Author;
  content: string;
  created_at: string;
};

export type Author = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};

export type Cast = {
  id: number;
  name: string;
  popularity: number;
  profile_path: string;
};
