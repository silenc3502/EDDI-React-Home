import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { TextField, Button, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { accountInfoState } from "../atom_state/AccountState";
import AccountApplyButton from "../ui/button/AccountApplyButton";
import axiosInstance from "../../api/AxiosInstance";
import ApplyCancelButton from "../ui/button/ApplyCancelButton";
import CheckEmailDuplicationButton from "../ui/button/CheckEmailDuplicationButton";
import EmailInputTextField from "../ui/text_field/EmailInputTextField";

const AccountApplyPage: React.FC = () => {
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);
    const [loading, setLoading] = useState(false);
    const [nicknameCheckLoading, setNicknameCheckLoading] = useState(false);
    const [emailCheckLoading, setEmailCheckLoading] = useState(false);
    const [nicknameError, setNicknameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);

    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountInfo((prevState) => ({
            ...prevState,
            nickname: event.target.value,
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.post('/account/apply', {
                nickname: accountInfo.nickname,
                email: accountInfo.email
            });
            console.log('Account apply success:', response.data);
        } catch (error) {
            console.error('Account apply failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCheckNickname = async () => {
        setNicknameCheckLoading(true);
        setNicknameError(null);
        try {
            const response = await axiosInstance.post('/account/check-nickname-duplication', {
                nickname: accountInfo.nickname
            });
            if (response.data) {
                setNicknameError('Nickname is already taken.');
            } else {
                setNicknameError(null);
            }
        } catch (error) {
            console.error('Error checking nickname duplication:', error);
            setNicknameError('Error checking nickname duplication.');
        } finally {
            setNicknameCheckLoading(false);
        }
    };

    const handleCheckEmail = async () => {
        setEmailCheckLoading(true);
        setEmailError(null);
        try {
            const response = await axiosInstance.post('/account/check-email-duplication', {
                email: accountInfo.email
            });
            if (response.data) {
                setEmailError('Email is already taken.');
            } else {
                setEmailError(null);
            }
        } catch (error) {
            console.error('Error checking email duplication:', error);
            setEmailError('Error checking email duplication.');
        } finally {
            setEmailCheckLoading(false);
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

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: '1rem'
                }}
            >
                <TextField
                    label="Nickname"
                    value={accountInfo.nickname}
                    onChange={handleNicknameChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    sx={{ height: 56 }}
                />
                <Button
                    onClick={handleCheckNickname}
                    variant="outlined"
                    sx={{
                        marginLeft: '1rem',
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                        minWidth: '160px',
                        marginTop: '8px'
                    }}
                >
                    Check Nickname
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: '1rem'
                }}
            >
                <EmailInputTextField value={accountInfo.email} />
                <CheckEmailDuplicationButton onClick={handleCheckEmail} />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: '1rem'
                }}
            >
                <AccountApplyButton
                    onClick={handleSubmit}
                    loading={loading}
                    sx={{ flexGrow: 1 }}
                />
                <ApplyCancelButton
                    sx={{ flexGrow: 1 }}
                />
            </Box>
        </Box>
    );
};

export default AccountApplyPage;
