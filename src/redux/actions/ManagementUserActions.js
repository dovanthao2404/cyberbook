import { managementUserServices } from "../../Services/ManagementUserServices";

import {
  SET_ERROR_LOGIN,
  SET_ERROR_SIGN_UP,
  SET_USER_LOGIN,
  SIGN_OUT,
} from "../constants/ManagementUserConstants";

export const signInAction = (info) => {
  return async (dispatch) => {
    try {
      const result = await managementUserServices.signInServices(info);
      dispatch({ type: SET_USER_LOGIN, payload: result.data.content });
      dispatch({ type: SET_ERROR_LOGIN, payload: null });

      // luu thong tin nguoi dung len localStorage
    } catch (error) {
      dispatch({ type: SET_ERROR_LOGIN, payload: error });
      dispatch({ type: SET_USER_LOGIN, payload: {} });
    }
  };
};

export const signUpaction = (info) => {
  return async (dispatch) => {
    try {
      const result = await managementUserServices.signUpServices(info);

      if (result.status === 200) {
        await dispatch(signInAction(result.data.content));
        window.location.reload();
      }
    } catch (error) {
      dispatch({ type: SET_ERROR_SIGN_UP, payload: error });
    }
  };
};

export const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};
