import React from 'react';
import TextField from '@mui/material/TextField';

interface EmailInputTextFieldProps {
    value: string;
}

const EmailInputTextField: React.FC<EmailInputTextFieldProps> = ({ value }) => {
    return (
        <TextField
            label="Email"
            value={value}
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
