import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountApplyPage from "../pages/AccountApplyPage";

const AccountRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/account/apply" element={<AccountApplyPage/>} />
        </Routes>
    );
};

export default AccountRoutes;
