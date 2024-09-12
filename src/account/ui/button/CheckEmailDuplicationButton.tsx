import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { accountInfoState } from "../../atom_state/AccountState";
import axiosInstance from "../../../api/AxiosInstance";

interface CheckEmailDuplicationButtonProps {
    onError: (error: string | null) => void; // Callback to handle error messages
}

const CheckEmailDuplicationButton: React.FC<CheckEmailDuplicationButtonProps> = ({ onError }) => {
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);
    const [emailCheckLoading, setEmailCheckLoading] = useState(false);

    const handleCheckEmail = async () => {
        setEmailCheckLoading(true);
        onError(null); // Clear previous errors
        try {
            const response = await axiosInstance.post('/account/check-email-duplication', {
                email: accountInfo.email
            });
            if (response.data) {
                onError('Email is already taken.');
            } else {
                onError(null);
            }
        } catch (error) {
            console.error('Error checking email duplication:', error);
            onError('Error checking email duplication.');
        } finally {
            setEmailCheckLoading(false);
        }
    };

    return (
        <Button
            onClick={handleCheckEmail}
            variant="outlined"
            disabled={emailCheckLoading}
            sx={{
                marginLeft: '1rem',
                height: 56,
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                minWidth: '160px',
                marginTop: '8px',
            }}
        >
            {emailCheckLoading ? 'Checking...' : 'Check Email'}
        </Button>
    );
};

export default CheckEmailDuplicationButton;
