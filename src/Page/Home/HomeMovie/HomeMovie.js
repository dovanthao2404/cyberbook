import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import CardFilm from "../../../components/CardFilm/CardFilm";
import "./HomeMovie.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import ModalVideo from "react-modal-video";

export default function HomeMovie() {
  const [isOpen, setOpen] = useState(false);

  const [nowShow, setNowShow] = useState(true);
  const dispatch = useDispatch();
  const { listFilmNowShowing, listFilmComingSoon } = useSelector(
    (state) => state.managementFilmReducer
  );
  const setOpenProps = () => {
    setOpen(true);
  };
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "gray",
          fontSize: "40px",
          lineHeight: "1.5715",
          position: "absolute",
          right: -50,
          top: "35%",
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "gray",
          fontSize: "40px",
          lineHeight: "1.5715",
          position: "absolute",
          zIndex: 1,
          left: -70,
          top: "35%",
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };

  const settingArrow = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const renderFilm = () => {
    if (nowShow) {
      return listFilmNowShowing?.map((film) => {
        return (
          <div key={film.maPhim}>
            <CardFilm setOpenProps={setOpenProps} film={film} />
          </div>
        );
      });
    }
    return listFilmComingSoon?.map((film) => {
      return (
        <div key={film.maPhim}>
          <CardFilm setOpenProps={setOpenProps} film={film} />
        </div>
      );
    });
  };
  return (
    <div className="relative">
      <div id="showtimes" className="container" style={{ paddingTop: 75 }}>
        <div>
          <div className="mx-auto text-center mb-5">
            <ul className="flex items-end justify-center">
              <li>
                <span
                  className={`${nowShow ? "active" : ""} homeMovie-title `}
                  onClick={() => {
                    setNowShow(true);
                  }}
                >
                  Đang chiếu
                </span>
              </li>
              <li>
                <span
                  className={`${!nowShow ? "active" : ""} homeMovie-title `}
                  onClick={() => {
                    setNowShow(false);
                  }}
                >
                  Sắp chiếu
                </span>
              </li>
            </ul>
          </div>
          <Slider {...settingArrow} {...settings}>
            {renderFilm()}
          </Slider>
        </div>
      </div>
    </div>
  );
}
