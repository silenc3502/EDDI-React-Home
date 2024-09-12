import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { accountInfoState } from "../../atom_state/AccountState";
import axiosInstance from "../../../api/AxiosInstance";

interface CheckNicknameDuplicationButtonProps {
    onCheckSuccess: () => void;
    onCheckFailure: () => void;
    setError: (error: string | null) => void;
}

const CheckNicknameDuplicationButton: React.FC<CheckNicknameDuplicationButtonProps> = ({ onCheckSuccess, onCheckFailure, setError }) => {
    const [accountInfo] = useRecoilState(accountInfoState);
    const [loading, setLoading] = useState(false);

    const handleCheckNickname = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post('/account/check-nickname-duplication', {
                nickname: accountInfo.nickname
            });
            if (response.data) {
                setError('Nickname is already taken.');
                onCheckFailure();
            } else {
                setError(null);
                onCheckSuccess();
            }
        } catch (error) {
            console.error('Error checking nickname duplication:', error);
            setError('Error checking nickname duplication.');
            onCheckFailure();
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handleCheckNickname}
            variant="outlined"
            disabled={loading}
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
            {loading ? 'Checking...' : 'Check Nickname'}
        </Button>
    );
};

export default CheckNicknameDuplicationButton;
