import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectManageListPage from "../pages/ProjectManageListPage";

const ProjectManageRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/project-manage/list" element={<ProjectManageListPage/>} />
        </Routes>
    );
};

export default ProjectManageRoutes;
