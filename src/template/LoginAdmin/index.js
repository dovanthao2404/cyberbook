import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signInAdminAction } from "../../redux/actions/ManagementUserActions";

export default function LoginAdmin(props) {
  const dispatch = useDispatch();

  const [info, setInfo] = useState({ taiKhoan: "", matKhau: "" });

  const { errorLogin } = useSelector((sate) => sate.managementUserReducer);

  const handleSubmit = () => {
    console.log("a");
    dispatch(signInAdminAction(info, props.history));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onSubmitCapture={handleSubmit}
      >
        <p className="text-red-500">
          {errorLogin ? errorLogin?.response?.data?.content : ""}
        </p>
        <Form.Item label="Tài khoản">
          <Input name="taiKhoan" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Mật khẩu">
          <Input.Password name="matKhau" onChange={handleChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onSubmit={handleSubmit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
