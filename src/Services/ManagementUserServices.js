import { api } from "./BaseApiServices";

class ManagementUserServices {
  signInServices = (info) => {
    return api.post(`/api/QuanLyNguoiDung/DangNhap`, info);
  };
  signUpServices = (info) => {
    return api.post(`/api/QuanLyNguoiDung/DangKy`, info);
  };
}

export const managementUserServices = new ManagementUserServices();
