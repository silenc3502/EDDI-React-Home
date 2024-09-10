// src/pages/GithubAuthorizeCode.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useRecoilState} from "recoil";
import {githubAuthenticationState} from "../atom_state/GithubAuthenticationState.";
import axiosInstance from "../../api/AxiosInstance";

const GithubAuthorizeCode: React.FC = () => {
    const [authenticationState, setAuthenticationState] = useRecoilState(githubAuthenticationState);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccessToken = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            console.log('code:', code)

            if (code) {
                try {
                    const response = await axiosInstance.post('/github/access-token', { code });
                    console.log('Access Token Response:', response.data);

                    // const accessToken = response.data.accessToken;
                    // navigate('/account/apply');
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
