import { useQuery } from 'react-query';
import {getStateOnRealTime} from "./api.js";

export const useGetStateOnRealTime = () => {
  return useQuery(
    ['state',],
    async () => getStateOnRealTime(),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: 'always',
      refetchInterval: 60000,
      placeholderData: {connected:"",last_update:""},
    }
  );
};

