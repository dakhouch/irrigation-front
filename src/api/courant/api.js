import HttpService from "../../services/HttpService.js";
import {COURANT_API_PATHS} from "./apiPath.js";


const axios = HttpService.getAxiosClient();

export const getCourantOnRealTime= async () => {
  const { data } = await axios.get(
      `${COURANT_API_PATHS.STREAMING_DATA}`
  );
  return data;
};