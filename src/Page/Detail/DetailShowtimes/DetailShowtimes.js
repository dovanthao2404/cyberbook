import React, { Fragment, useState } from "react";
import { Button, Collapse, Tabs } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./DetailShowtimes.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { USER_LOGIN } from "../../../utils/setting/config";
import { openModalSignInAction } from "../../../redux/actions/ModalActions";

const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function DetailShowtimes(props) {
  const [state, setState] = useState({
    showtimesTab: true,
    infomartionTab: false,
    commentTab: false,
  });
  const { showtimes } = useSelector((state) => state.managementFilmReducer);

  const dispatch = useDispatch();
  const renderContentTab = () => {
    if (state.showtimesTab) {
      return (
        <Tabs tabPosition={"left"} style={{ background: "#fff" }}>
          {showtimes.heThongRapChieu?.map((cumRap) => {
            return (
              <TabPane
                tab={
                  <img
                    style={{ width: 50 }}
                    src={cumRap.logo}
                    alt={cumRap.logo}
                  />
                }
                key={cumRap.maHeThongRap}
              >
                <Tabs tabPosition={"left"}>
                  {cumRap?.cumRapChieu?.map((rap) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex">
                            <img
                              style={{ width: 50 }}
                              src={rap.hinhAnh}
                              alt={rap.hinhAnh}
                            />
                            <div className="text-left ml-3">
                              <p className="text-lg">
                                {rap.tenCumRap.length > 30
                                  ? rap.tenCumRap.slice(0, 30) + "..."
                                  : rap.tenCumRap}
                              </p>
                              <p>
                                {rap.diaChi.length > 30
                                  ? rap.diaChi.slice(0, 30) + "..."
                                  : rap.diaChi}
                              </p>
                            </div>
                          </div>
                        }
                        key={rap.maCumRap}
                      >
                        <div className="p-5">
                          <div
                            style={{
                              display: "flex ",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={showtimes.hinhAnh}
                              alt=""
                              style={{
                                width: 50,
                                height: 50,
                                objectFit: "cover",
                              }}
                            />
                            <p className="text-xl font-medium ml-3">
                              {showtimes.tenPhim}
                            </p>
                          </div>
                          <p className="text-xl font-bold mb-2">2D Digital</p>
                          {rap.lichChieuPhim.map((lichChieu) => {
                            return (
                              <Fragment key={lichChieu.maLichChieu}>
                                <Button
                                  onClick={() => {
                                    const userLogin =
                                      localStorage.getItem(USER_LOGIN);
                                    if (userLogin) {
                                      props.history.push(
                                        `/checkout/${lichChieu.maLichChieu}`
                                      );
                                    } else {
                                      dispatch(openModalSignInAction());
                                    }
                                  }}
                                  className="mr-2 mb-2 hover:border-green-800"
                                  style={{
                                    borderColor: "#108f3e",
                                    color: "#108f3e",
                                    borderRadius: "8px",
                                  }}
                                  key={lichChieu.maLichChieu}
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "DD/MM/YYYY - hh:mm"
                                  )}
                                </Button>
                              </Fragment>
                            );
                          })}
                        </div>
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      );
    }
    if (state.infomartionTab) {
      return (
        <div>
          <div className="flex w-full">
            <div style={{ width: "50%" }}>
              <div style={{ display: "flex", marginBottom: "8px" }}>
                <div style={{ width: "40%" }}>Tên phim</div>
                <span>{showtimes.tenPhim}</span>
              </div>
              <div style={{ display: "flex", marginBottom: "8px" }}>
                <div style={{ width: "40%" }}>Ngày công chiếu</div>
                <span>{10 / 2 / 2021}</span>
              </div>
            </div>

            <div style={{ width: "50%" }}>
              <div style={{ marginBottom: "8px" }}>Nội dung</div>
              <p>{showtimes.moTa}</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <iframe
              width="560"
              height="315"
              src={showtimes.trailer}
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      );
    }
    return (
      <div style={{ width: "50%", margin: "auto" }}>
        <div
          className="flex p-4 rounded-lg justify-between mb-4"
          style={{ background: "#fff" }}
        >
          <div className="flex">
            <img
              style={{ width: 30, height: 30, borderRadius: "50%" }}
              src="https://picsum.photos/30/30"
              alt=""
            />
            <input
              type="text"
              placeholder="Bạn nghĩ gì về phim này?"
              className="text-black ml-3 "
              style={{ outline: "none" }}
            />
          </div>
          <span className="text-black cursor-pointer hover:text-blue-500">
            <SendOutlined />
          </span>
        </div>
        <div>
          <div
            className=" p-4 rounded-lg justify-between my-4 text-black"
            style={{ background: "#fff" }}
          >
            <div className="flex items-center">
              <img
                style={{ width: 30, height: 30, borderRadius: "50%" }}
                src="https://picsum.photos/30/30"
                alt=""
              />
              <div className="ml-3">
                <p className="tex-sm">Đỗ Văn Thảo</p>
                <p className="text-xs" style={{ color: "#9b9b9b" }}>
                  18 giờ trước
                </p>
              </div>
            </div>
            <div style={{ paddingTop: "10px " }}>
              <p>phim hay</p>
            </div>
          </div>{" "}
          <div
            className=" p-4 rounded-lg justify-between my-4 text-black"
            style={{ background: "#fff" }}
          >
            <div className="flex items-center">
              <img
                style={{ width: 30, height: 30, borderRadius: "50%" }}
                src="https://picsum.photos/30/30"
                alt=""
              />
              <div className="ml-3">
                <p className="tex-sm">Đỗ Văn Thảo</p>
                <p className="text-xs" style={{ color: "#9b9b9b" }}>
                  18 giờ trước
                </p>
              </div>
            </div>
            <div style={{ paddingTop: "10px " }}>
              <p>phim hay</p>
            </div>
          </div>{" "}
          <div
            className=" p-4 rounded-lg justify-between my-4 text-black"
            style={{ background: "#fff" }}
          >
            <div className="flex items-center">
              <img
                style={{ width: 30, height: 30, borderRadius: "50%" }}
                src="https://picsum.photos/30/30"
                alt=""
              />
              <div className="ml-3">
                <p className="tex-sm">Đỗ Văn Thảo</p>
                <p className="text-xs" style={{ color: "#9b9b9b" }}>
                  18 giờ trước
                </p>
              </div>
            </div>
            <div style={{ paddingTop: "10px " }}>
              <p>phim hay</p>
            </div>
          </div>{" "}
        </div>
        <div className="text-center">
          <Button className="bg-yellow-600 hover:bg-yellow-700 border-none text-white hover:text-white">
            Xem thêm
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div
      id="detailShowtime"
      style={{ background: "rgb(10, 32, 41)", paddingBottom: "40px" }}
    >
      <div className="mx-auto text-white text-center mb-5">
        <ul className="flex items-end justify-center">
          <li>
            <span
              className={`${
                state.showtimesTab ? "active" : ""
              } homeMovie-title `}
              onClick={() => {
                setState({
                  infomartionTab: false,
                  showtimesTab: true,
                  commentTab: false,
                });
              }}
            >
              Lịch chiếu
            </span>
          </li>
          <li>
            <span
              className={`${
                state.infomartionTab ? "active" : ""
              } homeMovie-title `}
              onClick={() => {
                setState({
                  showtimesTab: false,
                  infomartionTab: true,
                  commentTab: false,
                });
              }}
            >
              Thông tin
            </span>
          </li>
          <li>
            <span
              className={`${state.commentTab ? "active" : ""} homeMovie-title `}
              onClick={() => {
                setState({
                  showtimesTab: false,
                  infomartionTab: false,
                  commentTab: true,
                });
              }}
            >
              Đánh giá
            </span>
          </li>
        </ul>
      </div>
      <div className="container text-white">{renderContentTab()}</div>
    </div>
  );
}
