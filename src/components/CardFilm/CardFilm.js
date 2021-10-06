import React, { useState } from "react";
import { Card } from "antd";
import "./CardFilm.css";
import { NavLink } from "react-router-dom";
export default function CardFilm(props) {
  const { film } = props;

  return (
    <div>
      <div className="w-full relative h-full" style={{ padding: "0 5px" }}>
        <div
          style={{ padding: "5px", borderRadius: "20px" }}
          className="rounded-xl card-film relative h-full"
        >
          <Card
            hoverable
            style={{
              width: "100%",
              background: "white",
              border: "none !important",
              overflow: "hidden",
              position: "relative",
            }}
            cover={
              <div className="relative">
                <NavLink to={`/detail/${film.maPhim}`}>
                  <div className="relative ">
                    <img
                      style={{
                        borderRadius: "4px",
                        width: 215,
                        height: 318,
                        objectFit: "cover",
                      }}
                      alt="example"
                      src={`${film.hinhAnh}`}
                    />
                    <div
                      className="absolute overlay"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                </NavLink>
                <img
                  className="absolute playVideoYoutube"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 40,
                    zIndex: 5,
                    cursor: "pointer",
                  }}
                  onClick={() => props.setOpen(true, film.trailer)}
                  src="https://tix.vn/app/assets/img/icons/play-video.png"
                  alt="anh video"
                />
              </div>
            }
          >
            <div style={{ height: 60, width: "100%", marginTop: 10 }}>
              <div className="info-film" style={{ height: "100%" }}>
                <div className="font-bold">
                  <span
                    className="font-bold"
                    style={{
                      display: "inline-block",
                      padding: "0 5px",
                      background: "#00ac4d",
                      color: "#fff",
                      textAlign: "center",
                      marginRight: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    P
                  </span>
                  {film.tenPhim}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#4a4a4a",
                    marginBottom: "15px",
                    marginTop: "8px",
                  }}
                ></p>
              </div>
              <div style={{ height: 60 }}>
                <div className="btn-buyticket">
                  <NavLink
                    style={{
                      background: "#fb4226",
                      display: "inline-block",
                    }}
                    className="w-full text-center py-2 text-white rounded-md hover:text-white "
                    to={`/detail/${film.maPhim}`}
                  >
                    MUA VÉ
                  </NavLink>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
