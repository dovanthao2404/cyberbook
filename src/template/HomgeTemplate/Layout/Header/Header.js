import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { signOutAction } from "../../../../redux/actions/ManagementUserActions";
import { USER_LOGIN } from "../../../../utils/setting/config";
import ModalLogin from "../ModalLogin/ModalLogin";

export default function Header(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.managementUserReducer);

  const handleSingOut = () => {
    dispatch(signOutAction());
  };
  const handleRanderLogin = () => {
    const userLoginLocal = JSON.parse(localStorage.getItem(USER_LOGIN));

    let userLoginCurrent = {};
    if (userLoginLocal && Object.keys(userLoginLocal).length > 0) {
      userLoginCurrent = userLoginLocal;
    }
    if (Object.keys(userLogin).length > 0) {
      userLoginCurrent = userLogin;
    }

    if (Object.keys(userLoginCurrent).length > 0) {
      return (
        <div className="flex items-center">
          <NavLink to={`/profile/${userLoginCurrent.taiKhoan}`}>
            <div className="flex mr-2 items-center">
              <img
                style={{ borderRadius: "50%", marginRight: 8 }}
                src="https://picsum.photos/30/30"
                alt={userLoginCurrent?.name}
              />
              <p className="text-md"> {userLoginCurrent.hoTen}</p>
            </div>
          </NavLink>
          <NavLink to="/" className="ml-2" onClick={handleSingOut}>
            <div>Đăng xuất</div>
          </NavLink>
        </div>
      );
    }

    return <ModalLogin />;
  };
  return (
    <header
      className="bg-white text-coolGray-800 "
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "99999",
        background: "rgba(255,255,255,0.9)",
        top: 0,
      }}
    >
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-2xl font-bold "
        >
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            alt="https://tix.vn/app/assets/img/icons/web-logo.png"
            style={{ width: 50 }}
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <HashLink
              to="/#showtimes"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600"
            >
              Lịch chiếu
            </HashLink>
          </li>
          <li className="flex">
            <HashLink
              to="/#cluster-cinema"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Cụm rạp
            </HashLink>
          </li>
          <li className="flex">
            <HashLink
              to="/#news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Tin Tức
            </HashLink>
          </li>
          <li className="flex">
            <HashLink
              to="/#app"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Ứng dụng
            </HashLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {handleRanderLogin()}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
