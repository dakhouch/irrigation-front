import HttpService from '../../services/HttpService.js';
import {PUIT_API_PATHS} from "./apiPath.js";

const axios = HttpService.getAxiosClient();

export const getPuitsWithFilter= async (name, startDate, endDate = '') => {
  const { data } = await axios.get(
    `${PUIT_API_PATHS.FILTERED_PUIT_API_PATHS}?name=${name}&startDate=${startDate}&endDate=${endDate}`
  );
  return data;
};
export const getPuitsOnRealTime= async () => {
  const { data } = await axios.get(
      `${PUIT_API_PATHS.STREAMING_DATA}`
  );
  return data;
};
