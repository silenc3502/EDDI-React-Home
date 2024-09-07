import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavigationBar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                    sx={{
                        backgroundColor: '#003366',
                        color: '#ffffff'
                    }}>
                <Toolbar>
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        EDDI (Electronic Design Development Institute)
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;
