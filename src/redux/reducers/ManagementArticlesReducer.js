import { SET_LIST_NEWS } from "../constants/ManagementArticlesType";

const initialState = {
  listNews: [],
};

const managementArticlesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIST_NEWS:
      state.listNews = payload;
      return { ...state };

    default:
      return state;
  }
};

export { managementArticlesReducer };
