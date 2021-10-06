import React, { useState } from "react";

import { CloseCircleOutlined } from "@ant-design/icons";

const ModalVideoYoutube = () => {
  const [isOpen, setOpen] = useState(false);

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
      className={`${isOpen ? "block" : "hidden"}`}
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
              setOpen(false);
            }}
          />
        </div>
      </div>
      <iframe
        width={560 * 1.5}
        height={315 * 1.5}
        src="https://www.youtube.com/embed/zEWSSod0zTY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default ModalVideoYoutube;
