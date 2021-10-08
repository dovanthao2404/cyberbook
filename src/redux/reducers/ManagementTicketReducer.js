import { SET_LIST_TICKET_ROOM } from "../constants/ManagementTicketConstants";

const initialState = {
  listTicketRoom: [],
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

    default:
      return state;
  }
};
