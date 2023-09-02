import {AUTHENTIFICATION_API_PATHS} from "./apiPath.js";
import HttpService from "../../services/HttpService.js";


const axios = HttpService.getAxiosClient();

export const login= async (data) => {
  const response= await axios.post(
      `${AUTHENTIFICATION_API_PATHS.LOGIN_DATA}`,data
  );
  return response.data;
};