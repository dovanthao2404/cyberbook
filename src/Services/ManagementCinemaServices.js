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
    if (maHeThongRap) {
      return api.get(
        `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${GROUP_ID}`
      );
    }
    return api.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  };

  createShowtimeServices = (infoShowtime) => {
    return api.post(`/api/QuanLyDatVe/TaoLichChieu`, infoShowtime);
  };

  // getInfoShowtimesFilmById = maPhim;
}

export const managementCinemaServices = new ManagementCinemaServices();
