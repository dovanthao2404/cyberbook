import React from "react";
import { Rate } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import moment from "moment";
import { NavHashLink } from "react-router-hash-link";

export default function DetailMainTop() {
  const { showtimes } = useSelector((state) => state.managementFilmReducer);
  console.log(showtimes);
  return (
    <div style={{ marginTop: 64, position: "relative" }}>
      <div>
        <img
          className="w-full  object-cover"
          style={{ maxHeight: "100vh" }}
          src={showtimes.hinhAnh}
          alt={showtimes.hinhAnh}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to top,  rgb(10, 32, 41) 30%, rgba(0,0,0,0.6) 100%)",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div
          className="container "
          style={{ paddingTop: 100, paddingBottom: 100 }}
        >
          <div className="flex justify-between">
            <div className="flex" style={{ width: "60%" }}>
              <img
                style={{
                  width: 215,
                  height: 318,
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                src={showtimes.hinhAnh}
                alt={showtimes.hinhAnh}
              />
              <div className="flex items-center ml-4">
                <div className="text-white font-bold">
                  <p>
                    {moment(showtimes.ngayKhoiChieu).format("DD - MM - YYYY")}
                  </p>
                  <div className="text-2xl my-2 ">
                    <span
                      style={{
                        padding: "1px 10px ",
                        background: "#00ac4d",
                        borderRadius: "8px",
                        display: "inline-block",
                        lineHeight: "1",
                      }}
                    >
                      P
                    </span>{" "}
                    <span>{showtimes.tenPhim}</span>
                  </div>

                  <NavHashLink
                    to={`/detail/${showtimes.maPhim}#detailShowtime`}
                    className="py-2 px-6 my-3 inline-block bg-yellow-600 hover:bg-yellow-700 text-white rounded-sm"
                  >
                    Mua vé
                  </NavHashLink>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <div style={{ width: "160px", height: "160px" }}>
                <CircularProgressbar
                  value={5 * 10}
                  text={5 / 2}
                  styles={{
                    text: {
                      fontSize: "40px",
                      fill: "#fff",
                    },
                    path: {
                      strokeWidth: "4",
                      stroke: "#7ed321",
                    },
                    trail: {
                      strokeWidth: "4",
                    },
                  }}
                />
                <Rate
                  style={{ color: "rgba(180, 83, 9)" }}
                  disabled
                  allowHalf
                  defaultValue={2.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
