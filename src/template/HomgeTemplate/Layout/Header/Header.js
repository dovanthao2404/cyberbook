import React from "react";
import { NavLink } from "react-router-dom";
import ModalLogin from "../ModalLogin/ModalLogin";

export default function Header(props) {
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
            <a
              href="#showtimes"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600"
            >
              Lịch chiếu
            </a>
          </li>
          <li className="flex">
            <a
              href="#cluster-cinema"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Cụm rạp
            </a>
          </li>
          <li className="flex">
            <a
              href="#news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Tin Tức
            </a>
          </li>
          <li className="flex">
            <a
              href="#app"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Ứng dụng
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <ModalLogin />
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
