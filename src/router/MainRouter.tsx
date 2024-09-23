import React from 'react';
import HomeRoutes from "../home/routes/HomeRoutes";
import GithubLoginRoutes from "../github_authentication/router/GithubLoginRoutes";
import AccountRoutes from "../account/router/AccountRoutes";
import ProjectManageRoutes from "../project_manage/router/ProjectManageRoutes";


const MainRouter: React.FC = () => {
    return (
        <>
            <HomeRoutes/>
            <GithubLoginRoutes/>
            <AccountRoutes/>
            <ProjectManageRoutes/>
        </>
    );
};

export default MainRouter;
