import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getListTicketRoomAction } from "../../redux/actions/ManagementTicketActions";
import { signOutAction } from "../../redux/actions/ManagementUserActions";
import { USER_LOGIN } from "../../utils/setting/config";
import style from "./Checkout.module.css";
import "./Seats.css";

export default function Checkout(props) {
  const dispatch = useDispatch();
  const { listTicketRoom } = useSelector(
    (state) => state.managementTicketReducer
  );
  useEffect(() => {
    dispatch(getListTicketRoomAction(props.match.params.id));
  }, []);
  const userLoginLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
  const renderListSeat = () => {
    return listTicketRoom?.danhSachGhe?.map((ghe, index) => {
      const classVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      const classOwn = ghe.taiKhoanNguoiDat ? "gheDaDuocDat" : "";
      return (
        <Fragment key={ghe.maGhe}>
          <span
            key={ghe.maGhe}
            className={`inline-block mb-1 ghe ${classVip} ${classOwn}`}
          >
            {ghe.tenGhe}
          </span>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <>
      <section
        className="bg-fixed"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "75%",
          height: 64,
          boxShadow: "0 1px 20px 0 #000",
        }}
      >
        <div
          className="relative flex bg-white justify-between items-center "
          style={{ height: "64px", padding: "0 40px", zIndex: 100 }}
        >
          <NavLink to="/">
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt=""
            />
          </NavLink>
          <div className="font-bold text-yellow-800">
            CHỌN GHẾ VÀ THANH TOÁN
          </div>
          <div
            className={`infor-hover relative flex items-center cursor-pointer ${style["infor-hover"]}`}
          >
            <img
              className="rounded-full"
              src="https://picsum.photos/30/30"
              alt={userLoginLocal.taiKhoan}
            />
            <span className="ml-2">{userLoginLocal.hoTen}</span>
            <button
              onClick={() => {
                props.history.replace("/");
                dispatch(signOutAction());
              }}
              className={style["btn-logout"]}
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            minWidth: "256px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              marginTop: "64px",
              width: "75%",
              padding: 50,
            }}
          >
            <div className="">
              <img
                className="mx-auto"
                src="https://tix.vn/app/assets/img/icons/screen.png"
                alt=""
              />
              <div className="mt-5 mb-10">
                <div className="text-center ">
                  {/* <span className="inline-block mb-1 ghe gheVip">1</span> */}
                  {renderListSeat()}
                </div>
              </div>
              <div className="flex justify-center px-36">
                <div className="w-full text-center">
                  <button style={{ margin: "auto" }} className="ghe "></button>
                  <p className="text-xs">Ghế </p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe gheVip"
                  ></button>
                  <p className="text-xs">Ghế VIP</p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe gheDangChon"
                  ></button>
                  <p className="text-xs">Ghế Đang Chọn</p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe gheNguoiKhacDangChon"
                  ></button>
                  <p className="text-xs">Ghế Người Khác Đang Chọn</p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe gheDaDuocDat"
                  ></button>
                  <p className="text-xs">Ghế Người Khác Đã Đặt</p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe gheBanDat"
                  ></button>
                  <p className="text-xs">Ghế Bạn Đặt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "25%" }}>
          <div
            style={{
              width: "25%",
              height: "100vh",
              position: "fixed",
              right: 0,
              top: 0,
              boxShadow: "1px 0 20px 0 #000",
              background: "white",
              zIndex: 98,
            }}
          >
            <div style={{ height: "100vh", overflow: "auto" }}>
              <div
                style={{
                  padding: "0 10px 100px",
                  overflow: "auto",
                }}
              >
                <div
                  className=" text-4xl py-5 "
                  style={{
                    borderBottom: "1px dashed #ccc",
                  }}
                >
                  <h2
                    className="font-bold text-center"
                    style={{ color: "#44c020" }}
                  >
                    0 đ
                  </h2>
                </div>
                <div
                  className="py-4"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p className="text-xl  font-bold">Ten phim</p>
                </div>
                <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p>Ngày chiếu giờ chiếu</p>
                  <p className="font-bold">14/12/2003</p>
                </div>
                <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p>Cụm rạp</p>
                  <p className="font-bold">Lotte gò vấp</p>
                </div>
                <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p>Rạp</p>
                  <p className="font-bold">Rạp 1</p>
                </div>
                <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p className="text-red-400" style={{ width: "75%" }}>
                    Vui vòng chọn ghế Vui vòng chọn ghế Vui vòng chọn ghế Vui
                    vòng chọn ghế Vui vòng chọn ghế Vui vòng chọn ghế
                  </p>
                  <p
                    style={{ color: "#44c020", width: "25%", textAlign: "end" }}
                    className="font-bold hover:bg-green-600"
                  >
                    0 đ
                  </p>
                </div>
                {/* <div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>sadfsadf</td>
                        <td>sadfsadf</td>
                      </tr>
                      <tr>
                        <td>sadfsadf</td>
                        <td>sadfsadf</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
                {/* <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <h3>Hình thức thanh toán</h3>
                </div> */}
              </div>
              <div
                className={`text-center text-white absolute bottom-0 right-0 py-4 cursor-pointer ${style["salary"]} ${style["disabled"]}`}
                unselectable="on"
                onMouseDown={() => false}
              >
                {" "}
                THANH TOÁN
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
