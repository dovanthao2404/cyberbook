import * as ManagementFilmType from "./../constants/ManagementFilmConstants";
import { managementCinemaServices } from "./../../Services/ManagementCinemaServices";
import {
  SET_INFO_CINEMA_SYSTEM,
  SET_LIST_CINEMA_SYSTEM,
} from "../constants/ManagementCinemaConstants";

export const getShowtimesByFilmIdAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result =
        await managementCinemaServices.getShowtimesByFilmIdServices(maPhim);
      dispatch({
        type: ManagementFilmType.SET_SHOWTIMES,
        payload: result.data.content,
      });
    } catch (error) {
      return;
    }
  };
};

export const getListCinemaSystemAction = () => {
  return async (dispatch) => {
    try {
      const result =
        await managementCinemaServices.getListCinemaSystemServices();
      dispatch({ type: SET_LIST_CINEMA_SYSTEM, payload: result.data.content });
    } catch (error) {
      return;
    }
  };
};

export const getInfoCinemaSystemByIdAction = (maHeThongRap = "") => {
  return async (dispatch) => {
    try {
      const result =
        await managementCinemaServices.getInfoCinemaSystemByIdServices(
          maHeThongRap
        );
      dispatch({ type: SET_INFO_CINEMA_SYSTEM, payload: result.data.content });
    } catch (error) {
      return;
    }
  };
};
