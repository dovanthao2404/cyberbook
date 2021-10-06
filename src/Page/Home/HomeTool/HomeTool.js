import React, { useState, useEffect } from "react";
import moment from "moment";

import { Select } from "antd";
import style from "./HomeTool.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getShowtimesByFilmIdAction } from "../../../redux/actions/ManagementCinemaActions";

const { Option, OptGroup } = Select;

export default function HomeTool(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    danhSachCumRap: [],
    rapChieu: {},
    lichChieuPhim: [],
    gioChieu: [],
    maLichChieu: "",
    isDone: false,
  });
  const { listFilmNowShowing, showtimes } = useSelector(
    (state) => state.managementFilmReducer
  );

  useEffect(() => {
    if (Object.keys(showtimes).length > 0) {
      const { heThongRapChieu } = showtimes;
      if (heThongRapChieu?.length > 0) {
        const rapTemp = [];
        heThongRapChieu.forEach((heThong) => {
          heThong.cumRapChieu.forEach((rap) => {
            rapTemp.push(rap);
          });
        });
        setState({
          danhSachCumRap: rapTemp,
          rapChieu: {},
          lichChieuPhim: [],
          gioChieu: [],
          maLichChieu: "",
          isDone: false,
        });
      }
    }
  }, [showtimes]);

  useEffect(() => {
    const { danhSachCumRap } = state;

    if (danhSachCumRap.length > 0) {
      setState({
        ...state,
        lichChieuPhim: state.rapChieu.lichChieuPhim,
        gioChieu: [],
        maLichChieu: "",
        isDone: false,
      });
    }
  }, [state.rapChieu]);

  const handleFilmChange = async (value) => {
    await dispatch(getShowtimesByFilmIdAction(value));
  };
  const handleCinemaChange = (value) => {
    const rapChieu = JSON.parse(value);
    setState({
      ...state,
      rapChieu: rapChieu,
      lichChieuPhim: [],
      gioChieu: [],
      maLichChieu: "",
      isDone: false,
    });
  };
  const handleDayChange = (value) => {
    const lich = JSON.parse(value);
    const maLichChieu = lich.maLichChieu;
    const gioChieu = moment(lich.ngayChieuGioChieu).format("hh:mm:ss");
    const gioChieuArr = [gioChieu];
    setState({
      ...state,
      maLichChieu,
      gioChieu: gioChieuArr,
      isDone: true,
    });
  };
  const handleTimeChange = () => {
    setState({
      ...state,
      isDone: true,
    });
  };

  const renderFilmName = () => {
    return listFilmNowShowing?.map((film, index) => {
      return <Option key={film.maPhim}>{film.tenPhim}</Option>;
    });
  };
  const renderNameCinema = () => {
    if (state.danhSachCumRap.length > 0) {
      return state.danhSachCumRap?.map((rapChieu, index) => {
        return (
          <Option key={JSON.stringify(rapChieu)}>{rapChieu.tenCumRap}</Option>
        );
      });
    }
    return <OptGroup label="Vui lòng chọn phim"></OptGroup>;
  };
  const renderDayShow = () => {
    const { lichChieuPhim } = state;
    if (lichChieuPhim?.length > 0) {
      return lichChieuPhim.map((lich) => {
        return (
          <Option key={JSON.stringify(lich)}>
            {moment(lich.ngayChieuGioChieu).format("DD/MM/YYYY")}
          </Option>
        );
      });
    }
    return <OptGroup label="Vui lòng chọn rạp chiếu"></OptGroup>;
  };
  const renderShowtimes = () => {
    const { gioChieu } = state;
    if (gioChieu.length > 0) {
      return <Option key={0}>{gioChieu}</Option>;
    }
    return <OptGroup label="Vui lòng chọn ngày chiếu"></OptGroup>;
  };
  const handleBuyTicket = () => {
    if (state.isDone) {
      props.history.push(`/checkout/${state.maLichChieu}`);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        className={style["container"]}
        style={{
          padding: "20px 10px",
          borderRadius: "8px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "-40px",
          zIndex: 10,
          display: "flex",
          background: "white",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.7)",
        }}
      >
        <div
          className={style["home-tool__film-name"]}
          style={{
            paddingRight: "20px",
            borderRight: "1px solid #9b9b9b",
          }}
        >
          <Select
            bordered={false}
            defaultValue={"Phim"}
            style={{ width: "100%" }}
            onChange={handleFilmChange}
          >
            {renderFilmName()}
          </Select>
        </div>
        <div
          className={style["home-tool__four"]}
          style={{
            paddingRight: "20px",
            borderRight: "1px solid #9b9b9b",
          }}
        >
          <Select
            bordered={false}
            style={{ width: "100%" }}
            defaultValue={"Rạp"}
            onChange={handleCinemaChange}
          >
            {renderNameCinema()}
          </Select>
        </div>
        <div
          className={style["home-tool__four"]}
          style={{
            paddingRight: "20px",
            borderRight: "1px solid #9b9b9b",
          }}
        >
          <Select
            bordered={false}
            style={{ width: "100%" }}
            defaultValue={"Ngày xem"}
            onChange={handleDayChange}
          >
            {renderDayShow()}
          </Select>
        </div>
        <div
          className={style["home-tool__four"]}
          style={{
            paddingRight: "20px",
            borderRight: "1px solid #9b9b9b",
          }}
        >
          <Select
            bordered={false}
            style={{ width: "100%" }}
            defaultValue={"Giờ chiếu"}
            onChange={handleTimeChange}
          >
            {renderShowtimes()}
          </Select>
        </div>
        <div className={style["home-tool__four"]}>
          <div className="flex justify-center">
            <button
              disabled={!state.isDone}
              className={`px-5 py-2 bg-yellow-700 rounded-lg text-white ${
                state.isDone ? "hover:bg-yellow-800" : "cursor-default"
              }`}
              onClick={handleBuyTicket}
            >
              Mua vé ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
