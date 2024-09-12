import React from 'react';
import TextField from '@mui/material/TextField';

interface EmailInputTextFieldProps {
    value: string;
    error?: string | null;
    success: string | null;
}

const EmailInputTextField: React.FC<EmailInputTextFieldProps> = ({ value, error, success }) => {
    return (
        <TextField
            label="Email"
            value={value}
            error={!!error}
            helperText={error || success}
            variant="outlined"
            margin="normal"
            fullWidth
            InputProps={{
                readOnly: true,
            }}
            sx={{
                height: 56,
                '& .MuiInputBase-root': {
                    height: '100%',
                }
            }}
        />
    );
};

export default EmailInputTextField;
