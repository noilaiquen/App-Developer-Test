import { isArray, isBoolean, isEmpty, isNaN, isNil, isNumber, isObject, isString } from "lodash";
import { Dispatch } from "redux";

export enum AsyncActionPhases {
  ORIGIN = "ORIGIN",
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

export const createAsyncActions = (action: string): { [key in AsyncActionPhases]: string } => {
  return {
    [AsyncActionPhases.ORIGIN]: action,
    [AsyncActionPhases.REQUEST]: `${action}_${AsyncActionPhases.REQUEST}`,
    [AsyncActionPhases.SUCCESS]: `${action}_${AsyncActionPhases.SUCCESS}`,
    [AsyncActionPhases.FAILURE]: `${action}_${AsyncActionPhases.FAILURE}`,
  };
};

type AsyncDispatchOption = {
  globalLoading?: boolean;
  params?: any;
  action?: (params: any) => any;
  handler?: (data: any, dispatch: Dispatch, getState: any) => any;
  errorHanlder?: (error: any) => any;
};

export const createAsyncDispatch =
  (actionType = "COMMON_ACTION") =>
  (options: AsyncDispatchOption) =>
  (dispatch: Dispatch, getState: () => any) => {
    const {
      globalLoading = false,
      params = {},
      action = async () => {},
      handler = async (data: any, dispatch: Dispatch, getState: any) => data,
      errorHanlder = (error: any) => console.log(error),
    } = options;

    dispatch({
      type: `${actionType}_REQUEST`,
      globalLoading: globalLoading,
      payload: params,
    });

    return new Promise(async (resolve, reject) => {
      try {
        const response = (await action({ ...mapParamsForActions(params) })) ?? undefined;

        const dataHandler = await handler(response, dispatch, getState);

        dispatch({
          type: `${actionType}_SUCCESS`,
          payload: dataHandler ?? {},
        });

        resolve(dataHandler ?? {});
      } catch (error) {
        dispatch({
          type: `${actionType}_FAILURE`,
          error: error,
        });
        errorHanlder(error);
        reject(error);
      }
    });
  };

function mapParamsForActions(params: any): any[] {
  if (isArray(params)) {
    return params;
  } else if (isObject(params) || isNumber(params) || isString(params) || isBoolean(params)) {
    return [params];
  } else if (isEmpty(params) || isNaN(params) || isNil(params)) {
    return [];
  } else {
    return [];
  }
}
