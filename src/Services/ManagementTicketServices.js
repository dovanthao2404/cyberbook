import { api } from "./BaseApiServices";

class ManagementTicketServices {
  getListTicketRoomServices = (maLichChieu) => {
    return api.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
}

export const managementTicketServices = new ManagementTicketServices();
