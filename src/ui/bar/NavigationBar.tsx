import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import FolderIcon from '@mui/icons-material/Folder'; // 저장소 아이콘
import LoginIcon from '@mui/icons-material/Login'; // 로그인 아이콘
import LogoutIcon from '@mui/icons-material/Logout'; // 로그아웃 아이콘

const NavigationBar: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogin = () => {
        navigate('/github-login');
    };

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        navigate('/');
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProjectManagementClick = () => {
        navigate('/projects');
        handleMenuClose();
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
                    <Box sx={{ position: 'relative' }}>
                        <Button
                            color="inherit"
                            onMouseEnter={handleMenuOpen}
                            startIcon={<FolderIcon />} // 저장소 아이콘 추가
                        >
                            저장소
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                onMouseLeave: handleMenuClose,
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleProjectManagementClick}>프로젝트 관리</MenuItem>
                        </Menu>
                    </Box>
                    {isLoggedIn ? (
                        <Button color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}> {/* 로그아웃 아이콘 추가 */}
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={handleLogin} startIcon={<LoginIcon />}> {/* 로그인 아이콘 추가 */}
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;
