import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { accountInfoState } from "../../atom_state/AccountState";
import axiosInstance from "../../../api/AxiosInstance";

interface AccountApplyButtonProps {
    sx?: object;
    disabled: boolean;
}

const AccountApplyButton: React.FC<AccountApplyButtonProps> = ({ sx, disabled }) => {
    const accountInfo = useRecoilValue(accountInfoState); // Fetching Recoil state
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.post('/account/apply', {
                nickname: accountInfo.nickname,
                email: accountInfo.email
            });
            console.log('Account apply success:', response.data);
            navigate('/')
        } catch (error) {
            console.error('Account apply failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading || disabled}
            sx={{
                ...sx,
                height: 56,
            }}
        >
            {loading ? 'Loading...' : 'Apply Member'}
        </Button>
    );
};

export default AccountApplyButton;
