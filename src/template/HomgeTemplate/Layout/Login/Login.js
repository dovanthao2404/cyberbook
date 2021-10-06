import React, { useState } from "react";
import { Modal, Form, Input } from "antd";

const Login = () => {
  const [visibleModalSignIn, setVisibleModalSignIn] = useState(false);
  const [visibleModalSignUp, setVisibleModalSignUp] = useState(false);

  const showModal = () => {
    setVisibleModalSignIn(true);
    setVisibleModalSignUp(false);
  };

  const handleOkSignIn = () => {
    setVisibleModalSignIn(false);
    setVisibleModalSignUp(false);
  };

  const handleCancel = () => {
    setVisibleModalSignIn(false);
    setVisibleModalSignUp(false);
  };

  // function callback(key) {
  //   console.log(key);
  // }

  const showModalSinUp = () => {
    setVisibleModalSignIn(false);
    setVisibleModalSignUp(true);
  };

  const handleOkSignUp = () => {
    setVisibleModalSignIn(false);
    setVisibleModalSignUp(false);
  };

  return (
    <>
      <button className="mx-3 hover:text-blue-400 " onClick={showModal}>
        Đăng Nhập
      </button>
      <button className="mx-3 hover:text-blue-400 " onClick={showModal}>
        Đăng Ký
      </button>
      <Modal
        title={
          <>
            <span
              className="text-blue-400 mr-3 cursor-pointer"
              onClick={showModal}
            >
              Đăng nhập
            </span>
            <span className="cursor-pointer" onClick={showModalSinUp}>
              Đăng ký
            </span>
          </>
        }
        visible={visibleModalSignIn}
        onOk={handleOkSignIn}
        onCancel={handleCancel}
        okText="Đăng nhập"
        cancelText="Hủy"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item label="Tên đăng nhập" name="taiKhoan">
            <Input />
          </Form.Item>

          <Form.Item label="Mật khẩu" name="matKhau">
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title={
          <>
            <span className="cursor-pointer mr-3" onClick={showModal}>
              Đăng nhập
            </span>
            <span
              className=" text-blue-400 cursor-pointer"
              onClick={showModalSinUp}
            >
              Đăng ký
            </span>
          </>
        }
        visible={visibleModalSignUp}
        onOk={handleOkSignUp}
        onCancel={handleCancel}
        okText="Đăng ký"
        cancelText="Hủy"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item label="Họ và Tên">
            <Input name="hoTen" />
          </Form.Item>

          <Form.Item label="Số điện thoại">
            <Input name="soDt" />
          </Form.Item>

          <Form.Item label="Email">
            <Input name="email" />
          </Form.Item>

          <Form.Item label="Tên đăng nhập">
            <Input name="taiKhoan" />
          </Form.Item>

          <Form.Item label="Mật khẩu">
            <Input.Password name="matKhau" />
          </Form.Item>

          <Form.Item label="Nhập lại mật khẩu">
            <Input.Password name="rePassword" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Login;
