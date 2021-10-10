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

export const addFilmAction = (fromData) => {
  return async (dispatch) => {
    try {
      const result = await managementFilmServices.addFilmServices(fromData);
      if (result.status === 200) {
        dispatch(addSuccessAction(true));
      }
    } catch (error) {}
  };
};

export const deleteFilmAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await managementFilmServices.deleteFilmServices(maPhim);
      if (result.status === 200) {
        console.log(result);
        dispatch(getListFilmAction());
      }
    } catch (error) {}
  };
};

export const updateFilmAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await managementFilmServices.updateFilmServices(maPhim);
      if (result.status === 200) {
        dispatch(updateSuccessAction(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInfoFilmAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await managementFilmServices.getInfoFilmServices(maPhim);
      if (result.status === 200) {
        dispatch({
          type: ManagementFilmType.SET_INFO_FILM,
          payload: result.data.content,
        });
      }
    } catch (error) {}
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

export const addSuccessAction = (value) => {
  return {
    type: ManagementFilmType.SET_ADD_FILM_SUCCESS,
    payload: value,
  };
};
export const updateSuccessAction = (value) => {
  return {
    type: ManagementFilmType.SET_UPDATE_FILM_SUCCESS,
    payload: value,
  };
};
