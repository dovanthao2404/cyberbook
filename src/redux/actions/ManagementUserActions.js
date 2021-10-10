import { managementUserServices } from "../../Services/ManagementUserServices";
import { USER_LOGIN } from "../../utils/setting/config";

import {
  SET_ERROR_LOGIN,
  SET_ERROR_SIGN_UP,
  SET_STATUS_UPDATE_USER,
  SET_USER_LOGIN,
  SET_USER_LOGIN_DETAIL,
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

export const signInAdminAction = (info, history) => {
  return async (dispatch) => {
    try {
      const result = await managementUserServices.signInServices(info);
      if (result.data.content.maLoaiNguoiDung === "QuanTri") {
        dispatch({ type: SET_USER_LOGIN, payload: result.data.content });
        dispatch({ type: SET_ERROR_LOGIN, payload: null });
        history.push("/admin");
      } else {
        const error = {
          response: { data: { content: "Tài khoản hoặc mật khẩu không đúng" } },
        };
        dispatch({ type: SET_ERROR_LOGIN, payload: error });
      }

      // luu thong tin nguoi dung len localStorage
    } catch (error) {
      dispatch({ type: SET_ERROR_LOGIN, payload: error });
      dispatch({ type: SET_USER_LOGIN, payload: {} });
    }
  };
};

export const signUpaction = (info) => {
  console.log(info);
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

export const getInfoUserLoginDetailAction = (history) => {
  return async (dispatch, getState) => {
    const { userLogin } = getState().managementUserReducer;

    if (Object.keys(userLogin).length === 0) history.push("/");

    try {
      const result =
        await managementUserServices.getInfoUserLoginDetailServices(
          userLogin.taiKhoan
        );
      console.log(result);
      dispatch({ type: SET_USER_LOGIN_DETAIL, payload: result.data.content });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateInfoUserAction = (infoUser) => {
  return async (dispatch) => {
    try {
      const result = await managementUserServices.updateInfoUserServices(
        infoUser
      );
      if (result.status === 200) {
        dispatch(signInAction(infoUser));
        dispatch(updateStatusSuccessAction(true));
        dispatch({ type: SET_ERROR_LOGIN, payload: null });
      }
    } catch (error) {
      dispatch(updateStatusSuccessAction(false));
      dispatch({ type: SET_ERROR_LOGIN, payload: error });
    }
  };
};

export const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};

export const updateStatusSuccessAction = (payload) => {
  return { type: SET_STATUS_UPDATE_USER, payload };
};
