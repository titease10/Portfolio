import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { MySelf } from './components/MySelf/MySelf';
import { Experience } from './components/Experience/Experience';
import { MyContact } from './components/Contact/MyContact';
import {ProjectsGrid} from "./components/Projects/ProjectsGrid.tsx";
import {sampleProjects} from "./Data/sampleProjects.tsx";
import './styles/portfolio.css';
import {ProjectDetail} from "./components/Projects/ProjectDetail.tsx";
import {personalInfo, experiences, contactInfo} from "./Data/info.tsx";


const App: React.FC = () => {
    return (
        <div className="App">
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<MySelf personalInfo={personalInfo} />} />
                    <Route path="/experience" element={<Experience experiences={experiences} />} />
                    <Route path="/projects" element={<ProjectsGrid projects={sampleProjects} title="Mes projets récents" />} />
                    <Route path="/projects/:id" element={<ProjectDetail projects={sampleProjects} />} />
                    <Route path="/contact" element={<MyContact contactInfo={contactInfo} />} />
                </Routes>
            </main>
        </div>
    );
};
export default App;