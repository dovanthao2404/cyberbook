import React, { useState } from "react";

import { CloseCircleOutlined } from "@ant-design/icons";

const ModalVideoYoutube = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999999",
        boxShadow: "",
      }}
      className={`${props.isOpen ? "block" : "hidden"}`}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <div className="absolute -right-3 -top-5">
          <CloseCircleOutlined
            className="text-4xl text-white cursor-pointer"
            onClick={() => {
              props.setOpen(false);
            }}
          />
        </div>
      </div>
      {props.isOpen ? (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed?v=LFoEV2xyHrw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        ""
      )}
    </div>
  );
};
export default ModalVideoYoutube;
