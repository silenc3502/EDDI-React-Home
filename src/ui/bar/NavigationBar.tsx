import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

const NavigationBar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/github-login');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                    sx={{
                        backgroundColor: '#003366',
                        color: '#ffffff'
                    }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <Box
                                component="img"
                                src="/symbol.png"
                                alt="logo"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 2,
                                }}
                            />
                            <Typography variant="h6" component="div">
                                EDDI (Electronic Design Development Institute)
                            </Typography>
                        </Link>
                    </Box>
                    <Button color="inherit" onClick={handleLogin}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};


export default NavigationBar;
