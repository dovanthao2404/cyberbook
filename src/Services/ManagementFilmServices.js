import { api } from "./BaseApiServices";

class ManagementFilmServices {
  getListBannerServices = () => {
    return api.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  getListFilmServices = () => {
    return api.get("/api/QuanLyPhim/LayDanhSachPhim");
  };
}

export const managementFilmServices = new ManagementFilmServices();
