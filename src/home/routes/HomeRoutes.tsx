import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from "@mui/icons-material";

const HomeRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default HomeRoutes;
