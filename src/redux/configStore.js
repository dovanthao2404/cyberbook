import { createStore, combineReducers, applyMiddleware } from "redux";
import { managementFilmReducer } from "./reducers/ManagementFilmReducer";
import { managementCinemaReducer } from "./reducers/ManagementCinemaReducer";
import { managementArticlesReducer } from "./reducers/ManagementArticlesReducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
  managementFilmReducer,
  managementCinemaReducer,
  managementArticlesReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
