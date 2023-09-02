import { useQuery } from 'react-query';
import {getSecteursOnRealTime} from './api.js';

export const useGetSecteursOnRealTime = () => {
  return useQuery(
    ['secteurs',],
    async () => getSecteursOnRealTime(),
    {
      retry: 1,
      refetchInterval: 60000,
      placeholderData: [],
    }
  );
};

