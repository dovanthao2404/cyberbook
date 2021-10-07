import { TOKEN, USER_LOGIN } from "../../utils/setting/config";
import {
  SET_ERROR_LOGIN,
  SET_USER_LOGIN,
  SIGN_OUT,
} from "../constants/ManagementUserConstants";

const initialState = {
  userLogin: {},
  errorLogin: null,
};

const managementUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      state.userLogin = payload;
      return { ...state };
    case SET_ERROR_LOGIN:
      state.errorLogin = payload;
      return { ...state };

    case SIGN_OUT:
      state.errorLogin = null;
      state.userLogin = {};
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      return { ...state };

    default:
      return state;
  }
};

export { managementUserReducer };
