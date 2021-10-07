import { managementUserServices } from "../../Services/ManagementUserServices";
import { TOKEN, USER_LOGIN } from "../../utils/setting/config";
import {
  SET_ERROR_LOGIN,
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
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
      localStorage.setItem(TOKEN, JSON.stringify(result.data.content[TOKEN]));
    } catch (error) {
      dispatch({ type: SET_ERROR_LOGIN, payload: error });
      dispatch({ type: SET_USER_LOGIN, payload: {} });
    }
  };
};

export const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};
