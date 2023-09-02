import { useQuery } from 'react-query';
import {getCourantOnRealTime} from "./api.js";

export const useGetCourantOnRealTime = () => {
  return useQuery(
    ['courant',],
    async () => getCourantOnRealTime(),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: 'always',
      refetchInterval: 60000,
      placeholderData: [],
    }
  );
};

