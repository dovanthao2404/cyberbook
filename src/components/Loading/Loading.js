import React from "react";
import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div
      className="fixed"
      style={{
        zIndex: 99999999999999999,
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        className={style["img-loading"]}
        style={{ width: 100, height: "auto" }}
        src="https://tix.vn/app/assets/img/icons/fade-loading/11.png"
        alt="https://tix.vn/app/assets/img/icons/fade-loading/11.png"
      />
    </div>
  );
}
