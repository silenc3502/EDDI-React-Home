import React from 'react';
import Button from '@mui/material/Button';

interface CheckEmailDuplicationButtonProps {
    onClick: () => void;
}

const CheckEmailDuplicationButton: React.FC<CheckEmailDuplicationButtonProps> = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            variant="outlined"
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
            Check Email
        </Button>
    );
};

export default CheckEmailDuplicationButton;
