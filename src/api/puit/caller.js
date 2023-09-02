import { useQuery } from 'react-query';
import {getPuitsOnRealTime, getPuitsWithFilter} from "./api.js";

export const useGetFilteredPuits = (name,startDate,endDate,enabled) => {
  return useQuery(
    ['puits', name, startDate,endDate],
    async () => getPuitsWithFilter(name, startDate, endDate),
    {
      enabled:enabled,
      retry: 1,
      placeholderData: [],
    }
  );
};
export const useGetPuitsOnRealTime = () => {
    return useQuery(
        ['puits',],
        async () => getPuitsOnRealTime(),
        {
            staleTime: Infinity,
            refetchOnWindowFocus: 'always',
            refetchInterval: 60000,
            placeholderData: [],
        }
    );
};



