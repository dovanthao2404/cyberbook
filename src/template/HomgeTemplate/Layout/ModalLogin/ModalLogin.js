import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalSignInAction,
  openModalSignUpAction,
} from "../../../../redux/actions/ModalActions";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export default function ModalLogin() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="mx-3 hover:text-blue-400 "
        onClick={() => dispatch(openModalSignInAction())}
      >
        Đăng Nhập
      </button>
      <button
        className="mx-3 hover:text-blue-400 "
        onClick={() => dispatch(openModalSignUpAction())}
      >
        Đăng Ký
      </button>
      <Login />
      <SignUp />
    </div>
  );
}
