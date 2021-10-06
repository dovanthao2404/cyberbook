import { Provider } from "react-redux";
import {
  SET_INFO_CINEMA_SYSTEM,
  SET_LIST_CINEMA_SYSTEM,
} from "../constants/ManagementCinemaConstants";

const initialState = {
  listCinemaSystem: [],
  infoCinemaSystem: [],
};

const managementCinemaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIST_CINEMA_SYSTEM:
      state.listCinemaSystem = payload;
      return { ...state };
    case SET_INFO_CINEMA_SYSTEM:
      state.infoCinemaSystem = payload;
      return { ...state };
    default:
      return state;
  }
};

export { managementCinemaReducer };
