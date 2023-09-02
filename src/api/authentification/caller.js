import {useMutation} from 'react-query';
import {login} from "./api.js";

export const useLoginUser = () => {
    return useMutation((data) => login(data), {
        retry: 0,
        onSuccess: ({token,userId}) => {
           localStorage.setItem('token', token);
           localStorage.setItem('username', userId);
        }
    });
};

