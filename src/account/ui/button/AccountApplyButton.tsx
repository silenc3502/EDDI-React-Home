// AccountApplyButton.tsx
import React from 'react';
import Button from '@mui/material/Button';

interface AccountApplyButtonProps {
    onClick: () => void;
    loading: boolean;
    sx?: object;
}

const AccountApplyButton: React.FC<AccountApplyButtonProps> = ({ onClick, loading, sx }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            disabled={loading}
            sx={sx}
        >
            {loading ? 'Loading...' : 'Apply Member'}
        </Button>
    );
};

export default AccountApplyButton;
