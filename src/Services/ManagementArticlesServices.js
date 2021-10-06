import axios from "axios";

class ManagementArticlesServices {
  getListNewsServices = () => {
    return axios({
      url: "https://615dbf9412571a001720787a.mockapi.io/api/articles",
      method: "GET",
    });
  };
}

export const managementArticlesServices = new ManagementArticlesServices();
