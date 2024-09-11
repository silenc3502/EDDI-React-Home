import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useRecoilState} from "recoil";
import {githubAuthenticationState} from "../atom_state/GithubAuthenticationState.";
import axiosInstance from "../../api/AxiosInstance";
import {accountInfoState} from "../../account/atom_state/AccountState";

const GithubAuthorizeCode: React.FC = () => {
    const [authenticationState, setAuthenticationState] = useRecoilState(githubAuthenticationState);
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccessToken = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            console.log('code:', code)

            if (code) {
                try {
                    const response = await axiosInstance.post('/github/access-token', { code });
                    const { login, email } = response.data

                    setAccountInfo({ nickname: login, email})

                    navigate('/account/apply');
                } catch (err) {
                    setAuthenticationState({
                        loading: false,
                        error: 'Failed to get access token',
                        userToken: null,
                    });
                } finally {
                    setAuthenticationState((prevState) => ({ ...prevState, loading: false, userToken: null }));
                }
            } else {
                setAuthenticationState({
                    loading: false,
                    error: 'Authorization code is missing',
                    userToken: null
                });
            }
        };

        fetchAccessToken();
    }, [navigate, setAuthenticationState]);

    if (authenticationState.loading) return <p>Loading...</p>;
    if (authenticationState.error) return <p>{authenticationState.error}</p>;

    return <div>Processing...</div>;
};

export default GithubAuthorizeCode;
