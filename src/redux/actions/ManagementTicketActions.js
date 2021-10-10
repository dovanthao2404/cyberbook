import { connection } from "../../index";
import { managementTicketServices } from "../../Services/ManagementTicketServices";
import {
  ADD_SEAT_OTHER_SELECTED,
  ADD_SEAT_SELECTED,
  CLEAR_TICKET_REDUCER,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
  SEND_REQUEST,
  SET_LIST_TICKET_ROOM,
  SET_STATUS_BOOKING,
} from "../constants/ManagementTicketConstants";

export const getListTicketRoomAction = (maLichChieu) => {
  return async (dispatch) => {
    dispatch(tickRequestAction());
    try {
      const result = await managementTicketServices.getListTicketRoomServices(
        maLichChieu
      );
      dispatch({ type: SET_LIST_TICKET_ROOM, payload: result.data.content });
      dispatch(getDataSuccessAction());
    } catch (error) {
      dispatch(getDataFailAction(error));
    }
  };
};

export const addSeatSelectedAction = (taiKhoan, maLichChieu, ghe) => {
  return async (dispatch, getState) => {
    await dispatch({ type: ADD_SEAT_SELECTED, payload: ghe });
    try {
      const { listSeatCurrentlySelected } = getState().managementTicketReducer;
      const listSeatCurrentlySelectedString = JSON.stringify(
        listSeatCurrentlySelected
      );
      await connection.invoke(
        "datGhe",
        taiKhoan,
        listSeatCurrentlySelectedString,
        maLichChieu
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const addSeatOtherSelectedAction = (listSeatOtherSelected) => {
  return { type: ADD_SEAT_OTHER_SELECTED, payload: listSeatOtherSelected };
};

export const bookTicketAction = (dataTicket) => {
  return async (dispatch) => {
    try {
      const result = await managementTicketServices.bookTicketServices(
        dataTicket
      );
      if (result.status === 200) {
        await dispatch(getListTicketRoomAction(dataTicket.maLichChieu));
        await dispatch(setStatusBookingAction(true));
        // await dispatch(clearTicketReducerAction());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearTicketReducerAction = () => {
  return {
    type: CLEAR_TICKET_REDUCER,
  };
};

export const setStatusBookingAction = (value) => {
  return {
    type: SET_STATUS_BOOKING,
    payload: value,
  };
};

export const tickRequestAction = () => {
  return { type: SEND_REQUEST };
};
export const getDataFailAction = (error) => {
  return { type: GET_DATA_FAIL, payload: error };
};
export const getDataSuccessAction = () => {
  return { type: GET_DATA_SUCCESS };
};
