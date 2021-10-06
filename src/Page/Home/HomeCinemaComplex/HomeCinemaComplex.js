import React from "react";
import { Tabs, Collapse, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./HomeCinemaComplex.css";
import moment from "moment";

const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function HomeCinemaComplex(props) {
  const dispatch = useDispatch();
  const { infoCinemaSystem } = useSelector(
    (state) => state.managementCinemaReducer
  );

  return (
    <div
      id="cluster-cinema"
      className="container"
      style={{ paddingBottom: 40 }}
    >
      <div
        style={{
          paddingTop: "120px",
          background: "url(https://tix.vn/app/assets/img/icons/back-news.png)",
          backgroundSize: " 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div style={{ border: "1px solid #f0f0f0", overflow: "hidden" }}>
        <Tabs tabPosition={"left"}>
          {infoCinemaSystem?.map((cumRap) => {
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
                  {cumRap?.lstCumRap?.map((rap) => {
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
                        <Collapse
                          defaultActiveKey={[rap.danhSachPhim[0].maPhim]}
                        >
                          {rap.danhSachPhim.map((phim) => {
                            return (
                              <Panel
                                key={phim.maPhim}
                                showArrow={false}
                                header={
                                  <div className="flex">
                                    <img
                                      style={{
                                        width: 50,
                                        height: 50,
                                        objectFit: "cover",
                                      }}
                                      src={phim.hinhAnh}
                                      alt={phim.hinhAnh}
                                    />
                                    <div className="text-left ml-3 font-bold">
                                      <span
                                        className="text-sm inline px-2 text-white rounded-lg mr-2"
                                        style={{ background: " #fb4226" }}
                                      >
                                        C13
                                      </span>

                                      <span className="text-sm">
                                        -{" "}
                                        {phim.tenPhim.length > 30
                                          ? phim.tenPhim.slice(0, 30) + "..."
                                          : phim.tenPhim}
                                      </span>
                                    </div>
                                  </div>
                                }
                              >
                                <div>
                                  <p className="text-xl font-bold mb-2">
                                    2D Digital
                                  </p>
                                  <div>
                                    {phim.lstLichChieuTheoPhim
                                      .slice(0, 10)
                                      .map((lichChieu) => {
                                        return (
                                          <Button
                                            onClick={() => {
                                              props.history.push(
                                                `/checkout/${lichChieu.maLichChieu}`
                                              );
                                            }}
                                            className="mr-2 mb-2 hover:border-green-800"
                                            style={{
                                              borderColor: "#108f3e",
                                              color: "#108f3e",
                                              borderRadius: "8px",
                                            }}
                                            key={lichChieu.maLichChieu}
                                          >
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("hh:mm")}
                                          </Button>
                                        );
                                      })}
                                  </div>
                                </div>
                              </Panel>
                            );
                          })}
                        </Collapse>
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
