import _ from "lodash";
import moment from "moment";
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addSeatSelectedAction,
  getListTicketRoomAction,
} from "../../redux/actions/ManagementTicketActions";
import { signOutAction } from "../../redux/actions/ManagementUserActions";
import { USER_LOGIN } from "../../utils/setting/config";
import style from "./Checkout.module.css";
import "./Seats.css";

export default function Checkout(props) {
  const dispatch = useDispatch();
  const { listTicketRoom, listSeatCurrentlySelected } = useSelector(
    (state) => state.managementTicketReducer
  );

  useEffect(() => {
    dispatch(getListTicketRoomAction(props.match.params.id));
  }, []);

  const userLoginLocal = JSON.parse(localStorage.getItem(USER_LOGIN));

  const renderListSeat = () => {
    return listTicketRoom?.danhSachGhe?.map((ghe, index) => {
      const classVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      const classOtherBooking = ghe.taiKhoanNguoiDat ? "gheDaDuocDat" : "";

      const classYouBooking =
        ghe.taiKhoanNguoiDat === userLoginLocal.taiKhaon ? "gheBanDat" : "";
      const classOtherSelecting = "";

      const indexSelecting = listSeatCurrentlySelected?.findIndex(
        (seatCurren) => seatCurren.maGhe === ghe.maGhe
      );
      const classSelecting = indexSelecting !== -1 ? "gheDangChon" : "";

      return (
        <Fragment key={ghe.maGhe}>
          <div
            unselectable="on"
            onMouseDown={() => false}
            key={ghe.maGhe}
            className={`inline-block ghe ${classVip} ${classOtherBooking} ${classSelecting} ${classYouBooking}`}
            onClick={() => {
              if (
                !classOtherBooking &&
                !classYouBooking &&
                !classOtherSelecting
              ) {
                dispatch(addSeatSelectedAction(ghe));
              }
            }}
          >
            {ghe.tenGhe}
          </div>

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
                  <button
                    style={{ margin: "auto" }}
                    className="ghe ghe-guide "
                  ></button>
                  <p className="text-xs">Ghế thường </p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe ghe-guide gheVip"
                  ></button>
                  <p className="text-xs">Ghế VIP</p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe ghe-guide gheDangChon"
                  ></button>
                  <p className="text-xs">Ghế Đang Chọn</p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe ghe-guide gheNguoiKhacDangChon"
                  ></button>
                  <p className="text-xs">Ghế Người Khác Đang Chọn</p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe ghe-guide gheDaDuocDat"
                  ></button>
                  <p className="text-xs">Ghế Người Khác Đã Đặt</p>
                </div>
                <div className="w-full text-center">
                  <button
                    style={{ margin: "auto" }}
                    className="ghe ghe-guide gheBanDat"
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
                    {listSeatCurrentlySelected.reduce((totalMoney, seat) => {
                      return totalMoney + seat.giaVe;
                    }, 0)}{" "}
                    đ
                  </h2>
                </div>
                <div
                  className="py-4"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p className="text-xl  font-bold">
                    {listTicketRoom?.thongTinPhim?.tenPhim}
                  </p>
                </div>
                <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p>Ngày chiếu giờ chiếu</p>
                  <p className="font-bold">
                    {moment(listTicketRoom?.thongTinPhim?.ngayChieu).format(
                      "DD/MM/YYYY "
                    ) +
                      " - " +
                      listTicketRoom?.thongTinPhim?.gioChieu}
                  </p>
                </div>
                <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p>Cụm rạp</p>
                  <p className="font-bold">
                    {listTicketRoom?.thongTinPhim?.tenCumRap}
                  </p>
                </div>
                <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p>Rạp</p>
                  <p className="font-bold">
                    {" "}
                    {listTicketRoom?.thongTinPhim?.tenRap}
                  </p>
                </div>
                <div
                  className="py-4 flex justify-between"
                  style={{ borderBottom: "1px dashed #ccc" }}
                >
                  <p className="text-red-400" style={{ width: "75%" }}>
                    {listSeatCurrentlySelected.length
                      ? _.orderBy(listSeatCurrentlySelected, "maGhe").reduce(
                          (seatTotal, seat) => {
                            return seatTotal + seat.tenGhe + ", ";
                          },
                          "Ghế "
                        )
                      : "Vui lòng chọn ghế"}
                  </p>
                  <p
                    style={{ color: "#44c020", width: "25%", textAlign: "end" }}
                    className="font-bold hover:bg-green-600"
                  >
                    {listSeatCurrentlySelected.reduce((totalMoney, seat) => {
                      return totalMoney + seat.giaVe;
                    }, 0)}{" "}
                    đ
                  </p>
                </div>
              </div>
              <div
                className={`text-center text-white absolute bottom-0 right-0 py-4 cursor-pointer ${
                  style["salary"]
                } ${
                  listSeatCurrentlySelected.length > 0 ? "" : style["disabled"]
                }`}
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
