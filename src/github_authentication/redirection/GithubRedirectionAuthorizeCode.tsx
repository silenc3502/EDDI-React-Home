// src/pages/GithubAuthorizeCode.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GithubAuthorizeCode: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccessToken = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            console.log('code:', code)

            if (code) {
                try {
                    // Spring 서버로 액세스 토큰 요청
                    const response = await axios.post('http://localhost:8080/github/access-token', { code });

                    // const accessToken = response.data.accessToken;
                    // navigate('/account/apply');
                } catch (err) {
                    setError('Failed to get access token');
                } finally {
                    setLoading(false);
                }
            } else {
                setError('Authorization code is missing');
                setLoading(false);
            }
        };

        fetchAccessToken();
    }, [navigate]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return <div>Processing...</div>;
};

export default GithubAuthorizeCode;
