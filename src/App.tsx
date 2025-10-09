import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { MySelf } from './components/MySelf/MySelf';
import { Experience } from './components/Experience/Experience';
import { MyContact } from './components/Contact/MyContact';
import type {   PersonalInfo, Experience as ExperienceType, ContactInfo} from './types';
import {ProjectsGrid, sampleProjects} from "./components/Projects/ProjectsGrid.tsx";
import './styles/portfolio.css';

const mockPersonalInfo: PersonalInfo = {
    name: "Titien Carellas",
    title: "Développeur Full Stack",
    bio: "Passionné par le développement web moderne...",
    skills: ["C/C++/C#\t", "TypeScript\t", "Python\t", "Unity/Unreal Engine\t"]
};

const mockExperiences: ExperienceType[] = [
    {
        id: "1",
        company: "Etude: Epitech PGE",
        position: "Développeur polyvalent",
        duration: "2020 - Présent",
        description: "Développement de Projet divers",
        technologies: ["C/C++/C#\t", "TypeScript\t", "Python\t", "Unity/Unreal Engine\t"]
    }
];


const mockContactInfo: ContactInfo = {
    email: "titien.carellas@epitech.eu",
    phone: "+33 7 62 81 61 75",
    linkedin: "https://www.linkedin.com/in/titien-carellas-5b9312229/",
    github: "https://github.com/titease10?tab=repositories  ",
    location: "Paris, France"
};

const App: React.FC = () => {
    return (
        <div className="App min-h-screen bg-white">
            <Navigation />
            <main className="flex flex-col items-center">
                <MySelf personalInfo={mockPersonalInfo} />
                <Experience experiences={mockExperiences} />
                <ProjectsGrid projects={sampleProjects} title="Mes Projets Récents" />
                <MyContact contactInfo={mockContactInfo} />
            </main>
        </div>
    );
};
export default App;