import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { accountInfoState } from "../atom_state/AccountState";
import AccountApplyButton from "../ui/button/AccountApplyButton";
import ApplyCancelButton from "../ui/button/ApplyCancelButton";
import CheckEmailDuplicationButton from "../ui/button/CheckEmailDuplicationButton";
import EmailInputTextField from "../ui/text_field/EmailInputTextField";
import NicknameInputTextField from "../ui/text_field/NicknameInputTextField";
import CheckNicknameDuplicationButton from "../ui/button/CheckNicknameDuplicationButton";
import { buttonStyles } from "../ui/style/ButtonStyles";
import { buttonContainerStyles } from "../ui/style/ButtonContainerStyles";
import { inputContainerStyles } from "../ui/style/InputContainerStyles";
import { containerStyles } from "../ui/style/ContainerStyles";

const AccountApplyPage: React.FC = () => {
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);
    const [loading, setLoading] = useState(false);
    const [nicknameCheckLoading, setNicknameCheckLoading] = useState(false);
    const [emailCheckLoading, setEmailCheckLoading] = useState(false);
    const [nicknameError, setNicknameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [nicknameSuccess, setNicknameSuccess] = useState<string | null>(null); // Success state for nickname
    const [emailSuccess, setEmailSuccess] = useState<string | null>(null);       // Success state for email
    const [isNicknameValid, setIsNicknameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleNicknameCheckSuccess = () => {
        setIsNicknameValid(true);
        setNicknameError(null);
        setNicknameSuccess("Nickname is available!");
    };

    const handleNicknameCheckFailure = () => {
        setIsNicknameValid(false);
        setNicknameError('Nickname is already taken.');
        setNicknameSuccess(null);
    };

    const handleEmailCheckSuccess = () => {
        setIsEmailValid(true);
        setEmailError(null);
        setEmailSuccess("Email is available!");
    };

    const handleEmailCheckFailure = () => {
        setIsEmailValid(false);
        setEmailError('Email is already taken.');
        setEmailSuccess(null);
    };

    const isApplyButtonDisabled = !isNicknameValid || !isEmailValid || loading || nicknameCheckLoading || emailCheckLoading;

    return (
        <Box sx={containerStyles}>
            <Typography variant="h5" gutterBottom>
                Apply for Account
            </Typography>

            <Box sx={inputContainerStyles}>
                <NicknameInputTextField value={accountInfo.nickname} error={nicknameError} success={nicknameSuccess} />
                <CheckNicknameDuplicationButton
                    onCheckSuccess={handleNicknameCheckSuccess}
                    onCheckFailure={handleNicknameCheckFailure}
                />
            </Box>

            <Box sx={inputContainerStyles}>
                <EmailInputTextField value={accountInfo.email} error={emailError} success={emailSuccess} />
                <CheckEmailDuplicationButton
                    onCheckSuccess={handleEmailCheckSuccess}
                    onCheckFailure={handleEmailCheckFailure}
                />
            </Box>

            <Box sx={buttonContainerStyles}>
                <AccountApplyButton disabled={isApplyButtonDisabled} />
                <ApplyCancelButton sx={buttonStyles} />
            </Box>
        </Box>
    );
};

export default AccountApplyPage;
