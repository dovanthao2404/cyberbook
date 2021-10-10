import React from "react";

export default function HandleSuccess(content, functionTurnOff) {
  return () => {
    return (
      <div
        // style={{ padding: "20px 40px", boxShadow: "0 0 20px #000" }}
        style={{
          width: "100vw",
          height: "100vh",
          // background: ,
          zIndex: "100",
          position: "fixed",
          top: 0,
          lefth: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "#ffff",
            padding: "40px 60px",
            boxShadow: "0 0 20px 0 #000",
            borderRadius: "14px",
          }}
        >
          {" "}
          <div>
            <p>{content}</p>
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                functionTurnOff();
              }}
              className="px-6 py-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };
}
