import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { accountInfoState } from "../../atom_state/AccountState";
import axiosInstance from "../../../api/AxiosInstance";

interface CheckEmailDuplicationButtonProps {
    onCheckSuccess: () => void;
    onCheckFailure: () => void;
}

const CheckEmailDuplicationButton: React.FC<CheckEmailDuplicationButtonProps> = ({ onCheckFailure, onCheckSuccess }) => {
    const [accountInfo] = useRecoilState(accountInfoState);
    const [emailCheckLoading, setEmailCheckLoading] = useState(false);

    const handleCheckEmail = async () => {
        setEmailCheckLoading(true);

        try {
            const response = await axiosInstance.post('/account/check-email-duplication', {
                email: accountInfo.email
            });
            if (response.data) {
                onCheckFailure();  // 중복일 경우 실패 처리
            } else {
                onCheckSuccess();  // 사용 가능할 경우 성공 처리
            }
        } catch (error) {
            console.error('Error checking email duplication:', error);
            onCheckFailure();  // 요청 실패 시 실패 처리
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

