import React, { useEffect, memo } from "react";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import "./HomeCarousel.css";
import { NavLink } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getListBannerAction } from "../../../redux/actions/ManagementFilmActions";
function HomeCarousel(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListBannerAction());
  }, []);
  const { isLoading, error, listBanner } = useSelector(
    (state) => state.managementFilmReducer
  );

  if (error) {
    return <>Loi</>;
  }
  if (isLoading) {
    return <Loading />;
  }
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "white",
          fontSize: "30px",
          lineHeight: "1.5715",
          position: "absolute",
          right: 50,
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
          color: "white",
          fontSize: "30px",
          lineHeight: "1.5715",
          position: "absolute",
          zIndex: 1,
          left: 50,
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderCarousel = () => {
    return listBanner?.map((item, index) => {
      return (
        <div key={index}>
          <NavLink to={`/detail/${item.maPhim}`} className="h-full relative">
            <img
              className="h-full"
              style={{
                maxHeight: "calc(100vh - 100px)",
                width: "100%",
              }}
              src={`${item.hinhAnh}`}
              alt={item.hinhAnh}
            />
          </NavLink>
        </div>
      );
    });
  };

  return (
    <div style={{ marginTop: 64 }}>
      <Carousel autoplay arrows {...settings}>
        {renderCarousel()}
      </Carousel>
    </div>
  );
}
export default memo(HomeCarousel);
