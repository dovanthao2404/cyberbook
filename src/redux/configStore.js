import { createStore, combineReducers, applyMiddleware } from "redux";
import { managementFilmReducer } from "./reducers/ManagementFilmReducer";
import { managementCinemaReducer } from "./reducers/ManagementCinemaReducer";
import { managementArticlesReducer } from "./reducers/ManagementArticlesReducer";
import { managementUserReducer } from "./reducers/ManagementUserReducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
  managementFilmReducer,
  managementCinemaReducer,
  managementArticlesReducer,
  managementUserReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
