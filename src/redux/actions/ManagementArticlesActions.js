import { managementArticlesServices } from "../../Services/ManagementArticlesServices";
import { SET_LIST_NEWS } from "../constants/ManagementArticlesType";

export const getListNewsAction = () => {
  return async (dispatch) => {
    try {
      const result = await managementArticlesServices.getListNewsServices();

      dispatch({ type: SET_LIST_NEWS, payload: result.data });
    } catch (error) {
      console.log("err");
    }
  };
};
