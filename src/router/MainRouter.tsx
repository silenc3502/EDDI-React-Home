import React from 'react';
import HomeRoutes from "../home/routes/HomeRoutes";
import GithubLoginRoutes from "../github_authentication/router/GithubLoginRoutes";


const MainRouter: React.FC = () => {
    return (
        <>
            <HomeRoutes/>
            <GithubLoginRoutes/>
        </>
    );
};

export default MainRouter;
