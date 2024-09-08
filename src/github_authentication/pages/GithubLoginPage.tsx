import React from 'react';
import { Box } from '@mui/material';
import GithubLoginButton from "../ui/button/GithubLoginButton";

const GithubLoginPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
                padding: '0 16px',
            }}
        >
            <Box
                component="img"
                src="/GitHub_Logo.png"
                alt="GitHub Logo"
                sx={{
                    maxWidth: '20%',
                    height: 'auto',
                    marginBottom: 4,
                }}
            />
            <GithubLoginButton/>
        </Box>
    );
};

export default GithubLoginPage;
