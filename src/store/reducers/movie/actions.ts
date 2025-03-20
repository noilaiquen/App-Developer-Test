import MovieApi from "../../../services/apis/movie";
import { Movie, ResponseList } from "../../../types";
import { createAsyncDispatch } from "../../../utils";
import { CHANGE_FILTER, GET_MOVIES, REFRESH_MOVIES, SEARCH_MOVIES } from "./actionsType";

export const changeFilter = (key: string, value: any) => {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_FILTER,
      payload: {
        [key]: value,
      },
    });
  };
};

export const getMovies = (isRefresh: boolean) => {
  return async (dispatch: any, getState: any) => {
    const { movie } = getState();
    const { nextPage, filter } = movie;
    const actionType = isRefresh ? REFRESH_MOVIES.ORIGIN : GET_MOVIES.ORIGIN;

    dispatch(
      createAsyncDispatch(actionType)({
        action: () => MovieApi.getMovies(isRefresh ? 1 : nextPage, filter),
        handler: (data: ResponseList<Movie>) => {
          const { results } = data;
          return results;
        },
      }),
    );
  };
};

export const searchMovies = (keyword: string) =>
  createAsyncDispatch(SEARCH_MOVIES.ORIGIN)({
    action: () => MovieApi.searchMovies(keyword),
    handler: (data: ResponseList<Movie>) => {
      const { results } = data;
      return results;
    },
  });
