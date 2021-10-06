import { managementFilmServices } from "../../Services/ManagementFilmServices";
import * as ManagementFilmType from "../constants/ManagementFilmConstants";

export const getListBannerAction = () => {
  return async (dispatch) => {
    dispatch(filmRequestAction());
    try {
      const result = await managementFilmServices.getListBannerServices();
      dispatch({
        type: ManagementFilmType.SET_LIST_BANNER,
        payload: result.data.content,
      });
      dispatch(filmSuccessAction());
    } catch (error) {
      dispatch(filmFailedAction(error));
    }
  };
};

export const getListFilmAction = () => {
  return async (dispatch) => {
    dispatch(filmRequestAction());
    try {
      const result = await managementFilmServices.getListFilmServices();
      dispatch({
        type: ManagementFilmType.SET_LIST_FILM,
        payload: result.data.content,
      });
      dispatch(filmSuccessAction());
    } catch (error) {
      dispatch(filmFailedAction(error));
    }
  };
};

export const filmRequestAction = () => {
  return {
    type: ManagementFilmType.FILM_REQUEST,
  };
};
export const filmSuccessAction = () => {
  return {
    type: ManagementFilmType.FILM_SUCCESS,
  };
};

export const filmFailedAction = (error) => {
  return {
    type: ManagementFilmType.FILM_FAILED,
    payload: error,
  };
};
