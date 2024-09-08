import React from 'react';

const GithubLoginButton: React.FC = () => {
    const clientID = 'YOUR_GITHUB_CLIENT_ID';
    const redirectUri = 'http://localhost:3000/auth/callback';

    const handleLogin = () => {
        const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location.href = githubLoginUrl;
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
