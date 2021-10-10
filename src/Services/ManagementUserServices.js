import { api } from "./BaseApiServices";

class ManagementUserServices {
  signInServices = (info) => {
    return api.post(`/api/QuanLyNguoiDung/DangNhap`, info);
  };
  signUpServices = (info) => {
    return api.post(`/api/QuanLyNguoiDung/DangKy`, info);
  };
  getInfoUserLoginDetailServices = (taiKhoan) => {
    return api.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
  updateInfoUserServices = (infoUser) => {
    return api.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, infoUser);
  };
}

export const managementUserServices = new ManagementUserServices();
