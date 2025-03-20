import {AnyAction} from 'redux';
import {MovieDetail} from '../../../types';
import {
  GET_MOVIE_CREDITS,
  GET_MOVIE_DETAIL,
  GET_MOVIE_RELEASE_DATE,
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
    case GET_MOVIE_CREDITS.SUCCESS:
      const {cast, director, writer} = action.payload;
      return {
        ...state,
        movie: {
          ...state.movie,
          cast,
          director,
          writer,
        },
      };
    case GET_MOVIE_RELEASE_DATE.SUCCESS:
      return {
        ...state,
        movie: {
          ...state.movie,
          certification: action.payload,
        },
      };
    default:
      return state;
  }
};
