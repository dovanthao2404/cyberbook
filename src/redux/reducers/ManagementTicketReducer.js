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

const initialState = {
  listTicketRoom: [],
  listSeatCurrentlySelected: [],
  listSeatOtherSelected: [],
  bookingSuccess: false,
  isLoading: false,
  error: null,
};

export const managementTicketReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_LIST_TICKET_ROOM:
      state.listTicketRoom = payload;

      return { ...state };
    case ADD_SEAT_SELECTED:
      const seatTemp = state.listSeatCurrentlySelected;
      const index = seatTemp.findIndex(
        (seatCurrent) => seatCurrent.maGhe === payload.maGhe
      );
      if (index !== -1) {
        seatTemp.splice(index, 1);
      } else {
        seatTemp.push(payload);
      }

      state.listSeatCurrentlySelected = seatTemp;
      return { ...state };

    case ADD_SEAT_OTHER_SELECTED:
      state.listSeatOtherSelected = payload;
      return { ...state };

    case CLEAR_TICKET_REDUCER:
      state.listTicketRoom = [];
      state.listSeatCurrentlySelected = [];
      state.listSeatOtherSelected = [];
      state.bookingSuccess = false;
      state.isLoading = false;
      state.error = null;
      return { ...state };

    case SET_STATUS_BOOKING:
      state.bookingSuccess = payload;
      return { ...state };

    case GET_DATA_FAIL:
      state.isLoading = false;
      return { ...state };

    case GET_DATA_SUCCESS:
      state.isLoading = false;
      return { ...state };
    case SEND_REQUEST:
      state.isLoading = true;
      state.error = payload;
      return { ...state };
    default:
      return state;
  }
};
