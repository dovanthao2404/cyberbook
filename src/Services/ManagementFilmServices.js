import { api } from "./BaseApiServices";

class ManagementFilmServices {
  getListBannerServices = () => {
    return api.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  getListFilmServices = () => {
    return api.get("/api/QuanLyPhim/LayDanhSachPhim");
  };

  addFilmServices = (formData) => {
    return api.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  deleteFilmServices = (maPhim) => {
    return api.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };

  getInfoFilmServices = (maPhim) => {
    return api.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
  updateFilmServices = (formData) => {
    return api.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };
}

export const managementFilmServices = new ManagementFilmServices();
