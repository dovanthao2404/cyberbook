import React from "react";
import Slider from "react-slick";
export default function HomeApp() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const renderSlider = () => {
    const sldier = [];
    for (let i = 1; i <= 16; i++) {
      sldier.push(
        <img
          key={i}
          src={`https://tix.vn/app/assets/img/icons/slide/slide${i}.jpg`}
          alt={`https://tix.vn/app/assets/img/icons/slide/slide${i}.jpg`}
        />
      );
    }
    return sldier;
  };
  return (
    <div
      style={{
        background: "url(https://tix.vn/app/assets/img/icons/backapp.jpg)",
        padding: "120px 0 80px 0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      id="app"
    >
      <div className="container ">
        <div className="grid-cols-2 text-white" style={{ display: "grid" }}>
          <div style={{ paddingTop: 60 }}>
            <p
              className=" text-4xl font-bold mb-5 "
              style={{ lineHeight: "1.6" }}
            >
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </p>
            <p className="mb-5">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button className="px-8 py-3 mb-3 bg-yellow-700 rounded-xl hover:bg-yellow-800 text-white font-bold text-xl">
              App miễn phí - Tải về ngay
            </button>
            <p>
              TIX có hai phiên bản{" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                iOS
              </a>{" "}
              &{" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                Android
              </a>
            </p>
          </div>
          <div className="relative">
            <img
              src="https://tix.vn/app/assets/img/icons/mobile.png"
              alt="https://tix.vn/app/assets/img/icons/mobile.png"
              style={{ padding: "0 28%" }}
            />
            <div
              style={{
                position: "absolute",
                padding: "1.5% 29.3% 0 29.3%",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <Slider {...settings}>{renderSlider()}</Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
