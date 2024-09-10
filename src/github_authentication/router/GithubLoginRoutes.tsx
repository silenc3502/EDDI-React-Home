import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GithubLoginPage from "../pages/GithubLoginPage";
import GithubRedirectionAuthorizeCode from "../redirection/GithubRedirectionAuthorizeCode";

const GithubLoginRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/github-login" element={<GithubLoginPage />} />
            <Route path="/github/authorize-code" element={<GithubRedirectionAuthorizeCode/>} />
        </Routes>
    );
};

export default GithubLoginRoutes;
