import { api } from "./BaseApiServices";

class ManagementUserServices {
  signInServices = (info) => {
    return api.post(`/api/QuanLyNguoiDung/DangNhap`, info);
  };
}

export const managementUserServices = new ManagementUserServices();
