import React from "react";
import { useSelector } from "react-redux";
export default function Footer() {
  const { listCinemaSystem } = useSelector(
    (state) => state.managementCinemaReducer
  );
  return (
    <div
      style={{
        backgroundColor: " #222",
        paddingTop: "20px",
        paddingBottom: "20px",
        color: " #949494",
      }}
    >
      <div className="container">
        <div style={{ display: "grid" }} className="grid-cols-3">
          <div style={{ padding: "0 15px" }}>
            <p className="text-white mb-3">TIX</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ paddingRight: 15 }}>
                <ul>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Brand Guidelines</a>
                  </li>
                </ul>
              </div>
              <div style={{ paddingRight: 15 }}>
                <ul>
                  <li>
                    <a href="/">Thỏa thuận sử dụng</a>
                  </li>
                  <li>
                    <a href="/">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ padding: "0 15px" }}>
            <p className="text-white mb-3">Đối Tác</p>
            <div className="grid-cols-3" style={{ display: "grid" }}>
              {listCinemaSystem?.map((cinema, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: 50,
                      background: "white",
                      borderRadius: "50%",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={cinema.logo}
                      alt={cinema.logo}
                      style={{ borderRadius: "50%", width: "100%" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ padding: "0 15px" }}>
            <div className="flex">
              <div style={{ width: "50%", textAlign: "center" }}>
                <p className="text-white mb-3">MOBILE APP</p>
                <div className="flex justify-center">
                  <a href="#">
                    <img
                      style={{ width: 25, margin: "0 8px" }}
                      src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                      alt="https://tix.vn/app/assets/img/icons/apple-logo.png"
                    />
                  </a>
                  <a href="#">
                    <img
                      style={{ width: 25, margin: "0 8px" }}
                      src="https://tix.vn/app/assets/img/icons/android-logo.png"
                      alt="https://tix.vn/app/assets/img/icons/android-logo.png"
                    />
                  </a>
                </div>
              </div>
              <div style={{ width: "50%", textAlign: "center" }}>
                <p className="text-white mb-3">SOCIAL</p>
                <div className="flex justify-center">
                  <a href="#">
                    <img
                      style={{ width: 30, margin: "0 8px" }}
                      src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                      alt="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                    />
                  </a>
                  <a href="#">
                    <img
                      style={{ width: 30, margin: "0 8px" }}
                      src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                      alt="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            borderColor: " #949494",
          }}
        />
        <div className="flex">
          <div style={{ width: "15%" }}>
            <img
              style={{ width: "70%", borderRadius: "4px" }}
              src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
              alt=""
            />
          </div>
          <div style={{ padding: "0 15px", width: "70%" }}>
            <h1 style={{ color: "#fff", fontWeight: "bold" }}>
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </h1>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            <p>
              Email:{" "}
              <a href="#" style={{ color: "#FB4226" }}>
                support@tix.vn
              </a>
            </p>
          </div>
          <div
            style={{
              width: "15%",
            }}
          >
            <a href="#">
              <img
                style={{ width: "80%", marginLeft: "auto" }}
                src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
