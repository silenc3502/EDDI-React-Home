import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { TextField, Button, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { accountInfoState } from "../atom_state/AccountState";
import AccountApplyButton from "../ui/button/AccountApplyButton";
import axiosInstance from "../../api/AxiosInstance";
import ApplyCancelButton from "../ui/button/ApplyCancelButton";
import CheckEmailDuplicationButton from "../ui/button/CheckEmailDuplicationButton";
import EmailInputTextField from "../ui/text_field/EmailInputTextField";
import NicknameInputTextField from "../ui/text_field/NicknameInputTextField";
import CheckNicknameDuplicationButton from "../ui/button/CheckNicknameDuplicationButton";
import {buttonStyles} from "../ui/style/ButtonStyles";
import {buttonContainerStyles} from "../ui/style/ButtonContainerStyles";
import {inputContainerStyles} from "../ui/style/InputContainerStyles";
import {containerStyles} from "../ui/style/ContainerStyles";

const AccountApplyPage: React.FC = () => {
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);
    const [loading, setLoading] = useState(false);
    const [nicknameCheckLoading, setNicknameCheckLoading] = useState(false);
    const [emailCheckLoading, setEmailCheckLoading] = useState(false);
    const [nicknameError, setNicknameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [isNicknameValid, setIsNicknameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleNicknameCheckSuccess = () => setIsNicknameValid(true);
    const handleNicknameCheckFailure = () => setIsNicknameValid(false);

    const handleEmailCheckSuccess = () => setIsEmailValid(true);
    const handleEmailCheckFailure = () => setIsEmailValid(false);

    const isApplyButtonDisabled = !isNicknameValid || !isEmailValid || loading || nicknameCheckLoading || emailCheckLoading;

    return (
        <Box sx={containerStyles}>
            <Typography variant="h5" gutterBottom>
                Apply for Account
            </Typography>

            <Box sx={inputContainerStyles}>
                <NicknameInputTextField />
                <CheckNicknameDuplicationButton
                    onCheckSuccess={handleNicknameCheckSuccess}
                    onCheckFailure={handleNicknameCheckFailure}
                    setError={setNicknameError}
                />
                {nicknameError && <Typography color="error">{nicknameError}</Typography>}
            </Box>

            <Box sx={inputContainerStyles}>
                <EmailInputTextField value={accountInfo.email} error={emailError} />
                <CheckEmailDuplicationButton
                    onError={setEmailError}
                />
            </Box>

            <Box sx={buttonContainerStyles}>
                <AccountApplyButton disabled={isApplyButtonDisabled} />
                <ApplyCancelButton
                    sx={buttonStyles}
                />
            </Box>
        </Box>
    );
};

export default AccountApplyPage;
