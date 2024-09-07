import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeRoutes from "../home/routes/HomeRoutes";


const MainRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <HomeRoutes/>
        </BrowserRouter>
    );
};

export default MainRouter;
