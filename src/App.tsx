import React from 'react';
import ProjectGrid from './components/ProjectGrid';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen font-system antialiased text-gray-800 bg-gray-50 overflow-hidden">
      <ProjectGrid />
    </div>
  );
};

export default App;