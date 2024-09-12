import React from 'react';
import TextField from '@mui/material/TextField';

interface NicknameInputTextFieldProps {
    value: string;
    error?: string | null;
    success: string | null;
}

const NicknameInputTextField: React.FC<NicknameInputTextFieldProps> = ({ value, error, success }) => {
    return (
        <TextField
            label="Nickname"
            value={value}
            error={!!error}
            helperText={error || success}
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{
                height: 56,
                '& .MuiInputBase-root': {
                    height: '100%',
                }
            }}
        />
    );
};

export default NicknameInputTextField;
