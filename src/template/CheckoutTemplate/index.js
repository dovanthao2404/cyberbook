import React from "react";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from "../../utils/setting/config";

export default function CheckoutTemplate({ Component, ...props }) {
  const user = localStorage.getItem(USER_LOGIN);

  if (!user) {
    alert("Vui lòng đăng nhập");
    return <Redirect back />;
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
