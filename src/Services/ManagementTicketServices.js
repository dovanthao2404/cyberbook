import { api } from "./BaseApiServices";

class ManagementTicketServices {
  getListTicketRoomServices = (maLichChieu) => {
    return api.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
  bookTicketServices = (dataTicket) => {
    return api.post(`/api/QuanLyDatVe/DatVe`, dataTicket);
  };
}

export const managementTicketServices = new ManagementTicketServices();
