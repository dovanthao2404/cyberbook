import React, { useState } from "react";
import { Modal, Form, Input } from "antd";

export default function SignUp(props) {
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
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item label="Tên đăng nhập">
            <Input name="taiKhoan" />
            <span className="text-red-500">Tài khoản phải từ 6-24 kí tự</span>
          </Form.Item>

          <Form.Item label="Mật khẩu">
            <Input.Password name="matKhau" />
            <span className="text-red-500">Mật khẩu từ 8 đến 32 ký tự</span>
          </Form.Item>
          <Form.Item label="Click Here">
            <button
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
