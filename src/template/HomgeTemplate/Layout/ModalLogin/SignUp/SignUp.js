import React from "react";
import { Modal } from "antd";
import "./SignUp.css";
import { useSelector } from "react-redux";
import { Field, Formik, Form } from "formik";
import { GROUP_ID } from "../../../../../utils/setting/config";
import * as Yup from "yup";
import { signUpaction } from "../../../../../redux/actions/ManagementUserActions";
import { useDispatch } from "react-redux";
import {
  closeModalSignUpAction,
  openModalSignInAction,
  openModalSignUpAction,
} from "../../../../../redux/actions/ModalActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const { errorSignUp } = useSelector((state) => state.managementUserReducer);

  const { isOpenSignUp } = useSelector((state) => state.modalReducer);

  const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string()
      .min(6, "Tài khoản từ 6 đến 24 ký tự")
      .max(24, "Tài khoản từ 6 đến 24 ký tự")
      .required("Tài khoản không được để trống!")
      .matches(/^[a-zA-Z0-9]+$/, "Tài khoản không hợp lệ"),
    matKhau: Yup.string()
      .min(8, "Mật khẩu từ 8 đến 32 ký tự")
      .max(32, "Mật khẩu từ 8 đến 32 ký tự")
      .required("Mật khẩu không được để trống!"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
    soDt: Yup.string()
      .required("Số điện thoại không được để trống")
      .matches(
        /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/,
        "Số điện thoại không hợp lệ"
      ),
    hoTen: Yup.string()
      .required("Họ và Tên không được để trống")
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/,
        "Họ và Tên không hợp lệ"
      ),
    reMatKhau: Yup.string().required("Vui lòng nhập lại mật khẩu"),
  });

  const validateRePass = (value, password) => {
    let error;
    if (!value) {
      error = "Vui lòng nhập lại mật khẩu";
    } else if (value !== password) {
      error = "Mật khẩu không khớp";
    }
    return error;
  };

  return (
    <>
      <Modal
        title={
          <>
            <span
              className="cursor-pointer mr-3"
              onClick={() => {
                dispatch(openModalSignInAction());
              }}
            >
              Đăng nhập
            </span>
            <span
              className=" text-blue-400 cursor-pointer"
              onClick={openModalSignUpAction()}
            >
              Đăng ký
            </span>
          </>
        }
        visible={isOpenSignUp}
        onCancel={() => {
          dispatch(closeModalSignUpAction());
        }}
      >
        <Formik
          initialValues={{
            taiKhoan: "",
            hoTen: "",
            soDt: "",
            email: "",
            matKhau: "",
            maNhom: GROUP_ID,
            reMatKhau: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            dispatch(signUpaction(values));
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <p className="text-red-500 text-center mb-3">
                {errorSignUp ? errorSignUp.response.data.content : ""}
              </p>
              <div>
                <h1>Tài khoản</h1>
                <div>
                  <Field
                    className=" w-full mb-2 p-2"
                    style={{ border: "1px solid #d9d9d9", outline: "none" }}
                    name="taiKhoan"
                  />
                  {errors.taiKhoan && touched.taiKhoan ? (
                    <div className="text-red-500">{errors.taiKhoan}</div>
                  ) : null}
                </div>
              </div>

              <div>
                <h1>Họ và Tên</h1>
                <div>
                  <Field
                    className=" w-full mb-2 p-2"
                    style={{ border: "1px solid #d9d9d9", outline: "none" }}
                    name="hoTen"
                  />
                  {errors.hoTen && touched.hoTen ? (
                    <div className="text-red-500">{errors.hoTen}</div>
                  ) : null}
                </div>
              </div>

              <div>
                <h1>Số điện thoại</h1>
                <div>
                  <Field
                    className=" w-full mb-2 p-2"
                    style={{ border: "1px solid #d9d9d9", outline: "none" }}
                    name="soDt"
                  />
                  {errors.soDt && touched.soDt ? (
                    <div className="text-red-500">{errors.soDt}</div>
                  ) : null}
                </div>
              </div>

              <div>
                <h1>Email</h1>
                <div>
                  <Field
                    className=" w-full mb-2 p-2"
                    style={{ border: "1px solid #d9d9d9", outline: "none" }}
                    name="email"
                    type="text"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <h1>Mật khẩu</h1>
                <div>
                  <Field
                    className=" w-full mb-2 p-2"
                    style={{ border: "1px solid #d9d9d9", outline: "none" }}
                    name="matKhau"
                    type="password"
                  />
                  {errors.matKhau && touched.matKhau ? (
                    <div className="text-red-500">{errors.matKhau}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <h1>Nhập lại mật khẩu</h1>
                <div>
                  <Field
                    className=" w-full mb-2 p-2"
                    style={{ border: "1px solid #d9d9d9", outline: "none" }}
                    type="password"
                    name="reMatKhau"
                    validate={(value) => {
                      return validateRePass(value, values.matKhau);
                    }}
                  />
                  {errors.reMatKhau && touched.reMatKhau ? (
                    <div className="text-red-500">{errors.reMatKhau}</div>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="px-4 py-2 text-white rounded-lg bg-yellow-700 hover:bg-yellow-800"
              >
                Đăng Ký
              </button>
              {/* <button type="submit">Submit</button> */}
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default SignUp;
