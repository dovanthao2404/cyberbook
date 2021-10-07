import React from "react";
import { Modal, Form, Input } from "antd";
import "./SignUp.css";
const Login = (props) => {
  return (
    <>
      <Modal
        title={
          <>
            <span
              className="cursor-pointer mr-3"
              onClick={props.setVisibleModalSignIn}
            >
              Đăng nhập
            </span>
            <span
              className=" text-blue-400 cursor-pointer"
              onClick={props.setVisibleModalSignUp}
            >
              Đăng ký
            </span>
          </>
        }
        visible={props.visibleModalSignUp}
        onCancel={props.handleCancel}
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
          <Form.Item label="Click Here">
            <button
              type="submit"
              className="py-2 px-4 bg-yellow-700 hover:bg-yellow-800 text-white rounded-lg"
            >
              Đăng Ký
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Login;
