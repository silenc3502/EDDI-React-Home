import React from 'react';
import Button from '@mui/material/Button';

interface AccountApplyButtonProps {
    onClick: () => void;
}

const AccountApplyButton: React.FC<AccountApplyButtonProps> = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            sx={{ marginTop: '1rem' }}
        >
            Apply Member
        </Button>
    );
};

export default AccountApplyButton;
