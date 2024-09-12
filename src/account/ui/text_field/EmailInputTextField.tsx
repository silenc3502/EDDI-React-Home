import React from 'react';
import TextField from '@mui/material/TextField';

interface EmailInputTextFieldProps {
    value: string;
    error?: string | null; // Allow null value
}

const EmailInputTextField: React.FC<EmailInputTextFieldProps> = ({ value, error }) => {
    return (
        <TextField
            label="Email"
            value={value}
            error={!!error} // Show error state if error is not null or undefined
            helperText={error || ''} // Display error message
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
