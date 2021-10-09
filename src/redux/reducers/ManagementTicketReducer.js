import {
  ADD_SEAT_SELECTED,
  SET_LIST_TICKET_ROOM,
} from "../constants/ManagementTicketConstants";

const initialState = {
  listTicketRoom: [],
  listSeatCurrentlySelected: [],
};

export const managementTicketReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_LIST_TICKET_ROOM:
      state.listTicketRoom = payload;
      console.log(payload);
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
    default:
      return state;
  }
};
