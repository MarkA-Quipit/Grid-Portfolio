import React from 'react';
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section id="about">
          <div className="container">
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating beautiful, functional applications that solve real-world problems.
              </p>
              <p>
                With experience in React, TypeScript, Node.js, and cloud technologies, 
                I bring ideas to life through clean code and thoughtful design.
              </p>
            </div>
          </div>
        </section>
        
        <section id="projects" className="projects-section">
          <div className="container">
            <h1 className="section-title">My Projects</h1>
            <ProjectGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;