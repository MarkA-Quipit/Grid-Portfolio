import React from 'react';
import ProjectGrid from './components/ProjectGrid';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="h-screen w-full font-system antialiased text-cyan-100 bg-gray-900 overflow-hidden">
      <ProjectGrid />
    </div>
  );
};

export default App;