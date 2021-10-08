import { GROUP_ID } from "../utils/setting/config";
import { api } from "./BaseApiServices";

class ManagementCinemaServices {
  getShowtimesFilmByIdServices = (maPhim) => {
    return api.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };
  getListCinemaSystemServices = () => {
    return api.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  };
  getInfoCinemaSystemByIdServices = (maHeThongRap) => {
    return api.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  };
  // getInfoShowtimesFilmById = maPhim;
}

export const managementCinemaServices = new ManagementCinemaServices();
