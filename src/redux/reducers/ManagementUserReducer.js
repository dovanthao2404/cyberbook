import { TOKEN, USER_LOGIN } from "../../utils/setting/config";
import {
  SET_ERROR_LOGIN,
  SET_ERROR_SIGN_UP,
  SET_STATUS_UPDATE_USER,
  SET_USER_LOGIN,
  SET_USER_LOGIN_DETAIL,
  SIGN_OUT,
} from "../constants/ManagementUserConstants";

const userLoginLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
const userLogin = userLoginLocal ? userLoginLocal : {};

const initialState = {
  userLogin,
  errorLogin: null,
  errorSignUp: null,
  userLoginDetail: {},
  isLoading: false,
  updateSuccess: false,
};

const managementUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      state.userLogin = payload;

      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      localStorage.setItem(TOKEN, payload[TOKEN]);

      return { ...state };
    case SET_ERROR_SIGN_UP:
      state.errorSignUp = payload;
      return { ...state };
    case SET_USER_LOGIN_DETAIL:
      state.userLoginDetail = payload;
      return { ...state };
    case SET_ERROR_LOGIN:
      state.errorLogin = payload;
      return { ...state };
    case SIGN_OUT:
      state.errorLogin = null;
      state.userLogin = {};
      state.userLoginDetail = {};
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      window.location.reload();
      return { ...state };
    case SET_STATUS_UPDATE_USER:
      state.updateSuccess = payload;
      return { ...state };
    default:
      return state;
  }
};

export { managementUserReducer };
