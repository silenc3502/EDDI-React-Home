import React from 'react';
import NavigationBar from "./ui/bar/NavigationBar";

import './App.css';
import HomePage from "./home/pages/HomePage";
import MainRouter from "./router/MainRouter";

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <MainRouter/>
    </div>
  );
};

export default App;
