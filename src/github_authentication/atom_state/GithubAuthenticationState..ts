import { atom } from 'recoil';
export const githubAuthenticationState = atom({
    key: 'githubAuthenticationState',
    default: {
        loading: true,
        error: null as string | null,
        userToken: null,
    },
});