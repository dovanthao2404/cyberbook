import { managementTicketServices } from "../../Services/ManagementTicketServices";
import {
  ADD_SEAT_SELECTED,
  SET_LIST_TICKET_ROOM,
} from "../constants/ManagementTicketConstants";

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

export const addSeatSelectedAction = (ghe) => {
  return {
    type: ADD_SEAT_SELECTED,
    payload: ghe,
  };
};
