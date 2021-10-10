import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from "../../utils/setting/config";

export default function CheckoutTemplate({ Component, ...props }) {
  const { userLogin } = useSelector((state) => state.managementUserReducer);

  if (Object.keys(userLogin).length === 0) {
    alert("Vui lòng đăng nhập");
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <>
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
}
