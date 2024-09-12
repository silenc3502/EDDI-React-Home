import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

interface ApplyCancelButtonProps {
    sx?: object;
}

const ApplyCancelButton: React.FC<ApplyCancelButtonProps> = ({ sx }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancel}
            sx={sx}
        >
            Cancel
        </Button>
    );
};

export default ApplyCancelButton;