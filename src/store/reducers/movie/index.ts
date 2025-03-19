import {AnyAction} from 'redux';
import {Movie} from '../../../types';
import {GET_MOVIES, REFRESH_MOVIES, SEARCH_MOVIES} from './actionsType';

type InitState = {
  loading: boolean;
  movies: Movie[];
  nextPage: number;
};

const initState: InitState = {
  loading: false,
  movies: [],
  nextPage: 1,
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    case REFRESH_MOVIES.REQUEST:
      return {
        ...state,
        loading: true,
        nextPage: 1,
      };
    case GET_MOVIES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES.SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.payload],
        nextPage: state.nextPage + 1,
      };
    case REFRESH_MOVIES.SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        nextPage: state.nextPage + 1,
      };
    case REFRESH_MOVIES.FAILURE:
    case GET_MOVIES.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SEARCH_MOVIES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_MOVIES.SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case SEARCH_MOVIES.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
