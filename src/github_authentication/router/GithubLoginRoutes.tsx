import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GithubLoginPage from "../pages/GithubLoginPage";

const GithubLoginRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/github-login" element={<GithubLoginPage />} />
        </Routes>
    );
};

export default GithubLoginRoutes;
