import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../../../redux/actions/ManagementUserActions";

export default function SignUp(props) {
  const dispatch = useDispatch();
  const { errorLogin } = useSelector((state) => state.managementUserReducer);
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
    setError({
      ...error,
      [name]: "",
    });
    setInfo({
      ...info,
      [name]: value,
    });
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
              onClick={props.setVisibleModalSignIn}
            >
              Đăng nhập
            </span>
            <span
              className="cursor-pointer"
              onClick={props.setVisibleModalSignUp}
            >
              Đăng ký
            </span>
          </>
        }
        visible={props.visibleModalSignIn}
        onCancel={props.handleCancel}
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
            />

            <span className="text-red-500">{error.taiKhoan}</span>
          </Form.Item>

          <Form.Item label="Mật khẩu">
            <Input.Password
              name="matKhau"
              onChange={handleChange}
              onBlur={handleOnBlur}
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
