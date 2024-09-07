import React from 'react';
import NavigationBar from "./ui/bar/NavigationBar";

import './App.css';
import HomePage from "./home/pages/HomePage";

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <HomePage/>
    </div>
  );
};

export default App;
