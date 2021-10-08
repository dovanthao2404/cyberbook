import { TOKEN, USER_LOGIN } from "../../utils/setting/config";
import {
  SET_ERROR_LOGIN,
  SET_ERROR_SIGN_UP,
  SET_USER_LOGIN,
  SIGN_OUT,
} from "../constants/ManagementUserConstants";

const initialState = {
  userLogin: {},
  errorLogin: null,
  errorSignUp: null,
};

const managementUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      state.userLogin = payload;

      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      localStorage.setItem(TOKEN, JSON.stringify(payload[TOKEN]));
      return { ...state };
    case SET_ERROR_SIGN_UP:
      state.errorSignUp = payload;
      return { ...state };

    case SIGN_OUT:
      state.errorLogin = null;
      state.userLogin = {};
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      window.location.reload();
      return { ...state };

    default:
      return state;
  }
};

export { managementUserReducer };
