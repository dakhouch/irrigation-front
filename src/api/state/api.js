import {STATE_API_PATHS} from "./apiPath.js";
import HttpService from "../../services/HttpService.js";


const axios = HttpService.getAxiosClient();

export const getStateOnRealTime= async () => {
  const { data } = await axios.get(
      `${STATE_API_PATHS.STREAMING_DATA}`
  );
  return data;
};