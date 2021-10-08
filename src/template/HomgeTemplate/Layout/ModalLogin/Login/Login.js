import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../../../redux/actions/ManagementUserActions";
import { SET_ERROR_LOGIN } from "../../../../../redux/constants/ManagementUserConstants";
import {
  openModalSignInAction,
  openModalSignUpAction,
  closeModalSignInAction,
} from "../../../../../redux/actions/ModalActions";

export default function Login(props) {
  const dispatch = useDispatch();
  const { errorLogin } = useSelector((state) => state.managementUserReducer);

  const { isOpenSignIn, isOpenSignUp } = useSelector(
    (state) => state.modalReducer
  );

  const [info, setInfo] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const [error, setError] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    resetError();
    setError({
      ...error,
      [name]: "",
    });
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const resetError = () => {
    dispatch({ type: SET_ERROR_LOGIN, payload: null });
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;

    if (name === "taiKhoan") {
      if (value === "") {
        setError({
          ...error,
          [name]: "Vui lòng nhập vào tài khoản",
        });
      } else if (value.length < 6 || value.length > 24) {
        setError({
          ...error,
          [name]: "Vui lòng nhập từ 6 đến 24 ký tự",
        });
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        setError({
          ...error,
          [name]: "Tài khoản gồm chữ và số",
        });
      } else {
        setError({
          ...error,
          [name]: "",
        });
      }
    } else {
      if (value === "") {
        setError({
          ...error,
          [name]: "Vui lòng nhập vào mật khẩu",
        });
      } else if (value.length < 8 || value.length > 32) {
        setError({
          ...error,
          [name]: "Vui lòng nhập từ 8 đến 32 ký tự",
        });
      } else {
        setError({
          ...error,
          [name]: "",
        });
      }
    }
  };
  const checkValid = () => {
    let isValid = false;
    if (info.taiKhoan && info.matKhau && !error.taiKhoan && !error.matKhau) {
      isValid = true;
    } else {
      if (info.taiKhoan === "" && info.matKhau === "") {
        setError({
          taiKhoan: "Vui lòng nhập vào tài khoản",
          matKhau: "Vui lòng nhập vào mật khẩu",
        });
      } else if (info.matKhau === "") {
        setError({
          ...error,
          matKhau: "Vui lòng nhập vào mật khẩu",
        });
      } else if (info.taiKhoan === "") {
        setError({
          ...error,
          taiKhoan: "Vui lòng nhập vào tài khoản",
        });
      }
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    const result = checkValid();
    if (result === true) {
      dispatch(signInAction(info));
    }
  };
  return (
    <>
      <Modal
        title={
          <>
            <span
              className="text-blue-400 mr-3 cursor-pointer"
              onClick={() => {
                dispatch(openModalSignInAction());
              }}
            >
              Đăng nhập
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                dispatch(openModalSignUpAction());
              }}
            >
              Đăng ký
            </span>
          </>
        }
        visible={isOpenSignIn}
        onCancel={() => {
          dispatch(closeModalSignInAction());
          setInfo({
            taiKhoan: "",
            matKhau: "",
          });
          setError({
            taiKhoan: "",
            matKhau: "",
          });
          resetError();
        }}
      >
        <p className="text-red-500 text-center mb-3">
          {errorLogin ? errorLogin.response.data.content : ""}
        </p>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleSubmit}
        >
          <Form.Item label="Tên đăng nhập">
            <Input
              name="taiKhoan"
              onChange={handleChange}
              onBlur={handleOnBlur}
              value={info.taiKhoan}
            />

            <span className="text-red-500">{error.taiKhoan}</span>
          </Form.Item>

          <Form.Item label="Mật khẩu">
            <Input.Password
              name="matKhau"
              onChange={handleChange}
              onBlur={handleOnBlur}
              value={info.matKhau}
            />
            <span className="text-red-500">{error.matKhau}</span>
          </Form.Item>
          <Form.Item label="Click Here">
            <button
              onSubmit={handleSubmit}
              type="submit"
              className="py-2 px-4 bg-yellow-700 hover:bg-yellow-800 text-white rounded-lg"
            >
              Đăng Nhập
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
