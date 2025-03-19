import {AnyAction} from 'redux';
import {MovieDetail} from '../../../types';
import {
  GET_MOVIE_CAST,
  GET_MOVIE_DETAIL,
  GET_MOVIE_KEYWORD,
  GET_MOVIE_REVIEW,
} from './actionsType';

type InitState = {
  loading: boolean;
  movie: MovieDetail | {};
};

const initState: InitState = {
  loading: true,
  movie: {},
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIE_DETAIL.SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    case GET_MOVIE_DETAIL.FAILURE:
      return {
        ...state,
        loading: false,
        movie: {},
      };
    case GET_MOVIE_KEYWORD.SUCCESS:
      return {
        ...state,
        movie: {
          ...state.movie,
          keywords: action.payload,
        },
      };
    case GET_MOVIE_REVIEW.SUCCESS:
      return {
        ...state,
        movie: {
          ...state.movie,
          reviews: action.payload,
        },
      };
    case GET_MOVIE_CAST.SUCCESS:
      return {
        ...state,
        movie: {
          ...state.movie,
          cast: action.payload,
        },
      };
    default:
      return state;
  }
};
