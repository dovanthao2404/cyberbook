import React, { useEffect } from "react";
import { Tabs } from "antd";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { GROUP_ID } from "../../utils/setting/config";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfoUserLoginDetailAction,
  updateInfoUserAction,
  updateStatusSuccessAction,
} from "../../redux/actions/ManagementUserActions";
import Loading from "../../components/Loading/Loading";
import History from "./History/History";

import "./Profile.css";
import HandleSuccess from "../../components/HandleSuccess/HandleSuccess";

const { TabPane } = Tabs;

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoUserLoginDetailAction());
  }, []);
  const { errorLogin, userLoginDetail, updateSuccess } = useSelector(
    (state) => state.managementUserReducer
  );

  console.log(userLoginDetail);
  const SignupSchema = Yup.object().shape({
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
  const handleUpdateSuccess = () => {
    dispatch(updateStatusSuccessAction(false));
  };
  if (Object.keys(userLoginDetail).length > 0) {
    // return <div style={{ height: 1000 }}>hihi</div>;
    return (
      <div id="profile" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="container ">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Thông tin tài khoản" key="1">
              <Formik
                initialValues={{
                  taiKhoan: userLoginDetail?.taiKhoan,
                  hoTen: userLoginDetail?.hoTen,
                  soDt: userLoginDetail?.soDT,
                  email: userLoginDetail?.email,
                  matKhau: userLoginDetail?.matKhau,
                  maNhom: userLoginDetail?.maNhom,
                  reMatKhau: userLoginDetail?.matKhau,
                  maLoaiNguoiDung:
                    userLoginDetail?.loaiNguoiDung.maLoaiNguoiDung,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  dispatch(updateInfoUserAction(values));
                }}
              >
                {({ errors, touched, values }) => (
                  <Form style={{ width: "50%", margin: "auto" }}>
                    <p className="text-red-500 text-center mb-3 ">
                      {errorLogin ? errorLogin.response.data.content : ""}
                    </p>
                    <div>
                      <h1>Tài khoản</h1>
                      <div>
                        <Field
                          className=" w-full mb-1 p-1"
                          style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                          }}
                          name="taiKhoan"
                          value={values.taiKhoan}
                          disabled={true}
                        />
                      </div>
                    </div>

                    <div>
                      <h1>Họ và Tên</h1>
                      <div>
                        <Field
                          className=" w-full mb-1 p-1"
                          style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                          }}
                          name="hoTen"
                          value={values.hoTen}
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
                          className=" w-full mb-1 p-1"
                          style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                          }}
                          value={values.soDt}
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
                          className=" w-full mb-1 p-1"
                          style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                          }}
                          name="email"
                          type="text"
                          value={values.email}
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
                          className=" w-full mb-1 p-1"
                          style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                          }}
                          name="matKhau"
                          type="password"
                          value={values.matKhau}
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
                          className=" w-full mb-1 p-1"
                          style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                          }}
                          value={values.reMatKhau}
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
                      Thay Đổi
                    </button>
                    {/* <button type="submit">Submit</button> */}
                  </Form>
                )}
              </Formik>
            </TabPane>
            <TabPane tab="Lịch Sử đặt vé" key="2">
              <History thongTinDatVe={userLoginDetail.thongTinDatVe} />
            </TabPane>
          </Tabs>
        </div>
        <div className={`${updateSuccess ? "block" : "hidden"}`}>
          {HandleSuccess("Thay đổi thành công", handleUpdateSuccess)()}
        </div>
      </div>
    );
  }
  return <Loading />;
}
