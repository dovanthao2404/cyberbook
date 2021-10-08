import { createStore, combineReducers, applyMiddleware } from "redux";
import { managementFilmReducer } from "./reducers/ManagementFilmReducer";
import { managementCinemaReducer } from "./reducers/ManagementCinemaReducer";
import { managementArticlesReducer } from "./reducers/ManagementArticlesReducer";
import { managementUserReducer } from "./reducers/ManagementUserReducer";
import { modalReducer } from "./reducers/ModalReducer";
import { managementTicketReducer } from "./reducers/ManagementTicketReducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
  managementFilmReducer,
  managementCinemaReducer,
  managementArticlesReducer,
  managementUserReducer,
  modalReducer,
  managementTicketReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
