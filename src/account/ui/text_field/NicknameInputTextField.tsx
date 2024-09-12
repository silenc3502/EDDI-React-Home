import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import {accountInfoState} from "../../atom_state/AccountState";

const NicknameInputTextField: React.FC = () => {
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);
    const [nicknameError, setNicknameError] = useState<string | null>(null);

    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountInfo((prevState) => ({
            ...prevState,
            nickname: event.target.value,
        }));

        if (!event.target.value) {
            setNicknameError("Nickname is required.");
        } else {
            setNicknameError(null);
        }
    };

    return (
        <TextField
            label="Nickname"
            value={accountInfo.nickname}
            onChange={handleNicknameChange}
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!nicknameError}
            helperText={nicknameError}
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
