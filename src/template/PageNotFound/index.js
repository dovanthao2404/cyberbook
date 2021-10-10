import React from "react";

export default function PageNotFound(props) {
  return (
    <div className="text-center">
      <h1 className="text-2xl">404 Đường dẫn của bạn không đúng</h1>
      <button
        style={{
          background: "green",
          padding: "5px 10px",
          borderRadius: "8px",
          color: "#fff",
        }}
        onClick={() => {
          props.history.push("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}
