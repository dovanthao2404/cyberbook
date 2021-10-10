import axios from "axios";
import { TOKEN, TOKEN_CYBERSOFT } from "../utils/setting/config";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
});

api.interceptors.request.use(
  function (config) {
    const toKenUser = "Bearer " + localStorage.getItem(TOKEN);

    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: toKenUser,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export { api };
