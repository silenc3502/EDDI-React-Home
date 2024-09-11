import React from 'react';
import HomeRoutes from "../home/routes/HomeRoutes";
import GithubLoginRoutes from "../github_authentication/router/GithubLoginRoutes";
import AccountRoutes from "../account/router/AccountRoutes";


const MainRouter: React.FC = () => {
    return (
        <>
            <HomeRoutes/>
            <GithubLoginRoutes/>
            <AccountRoutes/>
        </>
    );
};

export default MainRouter;
