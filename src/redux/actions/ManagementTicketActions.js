import { managementTicketServices } from "../../Services/ManagementTicketServices";
import { SET_LIST_TICKET_ROOM } from "../constants/ManagementTicketConstants";

export const getListTicketRoomAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await managementTicketServices.getListTicketRoomServices(
        maLichChieu
      );
      dispatch({ type: SET_LIST_TICKET_ROOM, payload: result.data.content });
    } catch (error) {}
  };
};
