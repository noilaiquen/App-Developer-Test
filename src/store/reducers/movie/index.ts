import {AnyAction} from 'redux';
import {Movie} from '../../../types';
import {GET_MOVIES, SEARCH_MOVIES} from './actionsType';

type InitState = {
  loading: boolean;
  movies: Movie[];
};

const initState: InitState = {
  loading: false,
  movies: [],
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    case GET_MOVIES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES.SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
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
