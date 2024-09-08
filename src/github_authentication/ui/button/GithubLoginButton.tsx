import React from 'react';
import {getGithubAuthenticationUrl, getRedirectUri} from "../../utility/GithubAuthenticationUtility";

const GithubLoginButton: React.FC = () => {
    const clientID = process.env.REACT_APP_GITHUB_CLIENT_ID as string;
    const redirectUri = getRedirectUri();

    const handleLogin = () => {
        const authUrl = getGithubAuthenticationUrl(clientID, redirectUri);
        window.location.href = authUrl;
    };

    return (
        <button
            onClick={handleLogin}
            style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '5px',
                fontSize: '18px',
                minWidth: '200px',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                outline: 'none',
            }}
        >
            Sign in with GitHub
        </button>
    );
};

export default GithubLoginButton;
