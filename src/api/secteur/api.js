import {SECTEUR_API_PATHS} from "./apiPath.js";
import HttpService from "../../services/HttpService.js";


const axios = HttpService.getAxiosClient();

export const getSecteursOnRealTime= async () => {
  const { data } = await axios.get(
      `${SECTEUR_API_PATHS.STREAMING_DATA}`
  );
  return data;
};