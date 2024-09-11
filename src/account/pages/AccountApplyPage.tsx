import React, { useState } from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {useRecoilState} from "recoil";
import axiosInstance from "../../api/AxiosInstance";
import {accountInfoState} from "../atom_state/AccountState";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountApplyButton from "../ui/button/AccountApplyButton";

const AccountApplyPage: React.FC = () => {
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);

    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountInfo((prevState) => ({
            ...prevState,
            nickname: event.target.value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axiosInstance.post('/account/apply', {
                nickname: accountInfo.nickname,
                email: accountInfo.email
            });
            console.log('Account apply success:', response.data);
        } catch (error) {
            console.error('Account apply failed:', error);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2rem',
                width: '100%',
                maxWidth: '600px',
                mx: 'auto'
            }}
        >
            <Typography variant="h5" gutterBottom>
                Apply for Account
            </Typography>

            <TextField
                label="Nickname"
                value={accountInfo.nickname}
                onChange={handleNicknameChange}
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                label="Email"
                value={accountInfo.email}
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />

            <AccountApplyButton onClick={handleSubmit} />
        </Box>
    );
};

export default AccountApplyPage;
