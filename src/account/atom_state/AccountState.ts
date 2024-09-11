import { atom } from 'recoil';
import {GithubUserInfoResponse} from "../model/GithubUserInfoResponse";

export const accountInfoState = atom<GithubUserInfoResponse>({
    key: 'accountInfoState',
    default: {
        nickname: '',
        email: ''
    },
});