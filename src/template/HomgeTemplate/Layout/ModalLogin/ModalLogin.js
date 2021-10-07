import React, { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export default function ModalLogin() {
  const [visibleModalSignIn, setVisibleModalSignIn] = useState(false);
  const [visibleModalSignUp, setVisibleModalSignUp] = useState(false);
  const showModalSignIn = () => {
    setVisibleModalSignIn(true);
    setVisibleModalSignUp(false);
  };
  const showModalSinUp = () => {
    setVisibleModalSignIn(false);
    setVisibleModalSignUp(true);
  };
  const handleCancelProps = () => {
    setVisibleModalSignIn(false);
    setVisibleModalSignUp(false);
  };
  return (
    <div>
      <button className="mx-3 hover:text-blue-400 " onClick={showModalSignIn}>
        Đăng Nhập
      </button>
      <button className="mx-3 hover:text-blue-400 " onClick={showModalSinUp}>
        Đăng Ký
      </button>
      <Login
        visibleModalSignIn={visibleModalSignIn}
        setVisibleModalSignIn={showModalSignIn}
        setVisibleModalSignUp={showModalSinUp}
        handleCancel={handleCancelProps}
      />
      <SignUp
        visibleModalSignUp={visibleModalSignUp}
        setVisibleModalSignIn={showModalSignIn}
        setVisibleModalSignUp={showModalSinUp}
        handleCancel={handleCancelProps}
      />
    </div>
  );
}
