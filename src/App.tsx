import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { MySelf } from './components/MySelf/MySelf';
import { Experience } from './components/Experience/Experience';
import { MyContact } from './components/Contact/MyContact';
import type {   PersonalInfo, Experience as ExperienceType, ContactInfo} from './types';
import {ProjectsGrid} from "./components/Projects/ProjectsGrid.tsx";
import {sampleProjects} from "./components/Projects/sampleProjects.tsx";
import './styles/portfolio.css';

const mockPersonalInfo: PersonalInfo = {
    name: "Titien Carellas",
    title: "Développeur Full Stack",
    bio: "Développeur polyvalent avec une expertise en C/C++ et C#, j'all i la rigueur de la formation Epitech à ma passion pour le jeu vidéo mobile. " +
        "Mon parcours est jalonné de projets divers — applications web, moteurs de jeu et algorithmes mathématiques — " +
        "ainsi que de compétitions type Hackathons et Jams. " +
        "Cette curiosité technique me permet aujourd'hui d'intervenir sur des problématiques variées avec une vision globale du développement.",
    skills: ["C/C++/C#\t", "TypeScript\t", "Python\t", "Unity/Unreal Engine\t"]
};

const mockExperiences: ExperienceType[] = [
    {
        id: "1",
        company: "Etude: Epitech PGE",
        companyUrl: "https://www.epitech.eu/ecole-informatique-paris/",
        position: "Développeur polyvalent",
        duration: "2020 - Présent",
        description: "Développement de Projet divers",
        technologies: ["C/C++/C#\t", "TypeScript\t", "Python\t", "Unity/Unreal Engine\t"]
    },
    {
        id : "2",
        company: "Icare Energie",
        companyUrl: "https://icare-energie.fr/",
        position: "Développeur IA",
        duration: "Fevrier 2024 - Juin 2024",
        description: "Idéation et prototypage d’un projet IA visant à relever des\n" +
            "anomalies dans la consommation énergétique\n" +
            "d’entreprise afin de baisser leur empreinte carbone.\n",
        technologies: ["Python\t", "C/C++\t", "TypeScript\t"]
    },
    {
        id : "3",
        company: " JSM INFORMATIQUE",
        companyUrl: "https://www.jsminfo.com/",
        position: "Développeur Reseaux",
        duration: "Août 2022 - Décembre 2022",
        description: "Automatisation et gestion des réseaux et appareils " +
                    "informatiques d’entreprise. \n" +
                    "Mise en place et intégration ticket client. \n" +
                    "Gestion de ticket de demande client.",

        technologies: ["Bash \t", "AZURE AD (Pack Office administrateur)\t", "NINJA ONE (RMM)"]
    },
    {
       id : "4",
        company: " Epitech Berlin",
        companyUrl: "https://www.epitech-it.de/en/epitech-berlin-home/",
        position: "Jeux Video",
        duration: "septembre 2024 - Juillet 2025",
        description: "J'ai effectué ma 4e année à Epitech Berlin \n" +
                    ", lors de celle-ci j'ai pu développer de nombreux projets de jeu vidéo. \n" +
                    "J'ai eu la chance d'apprendre de nombreux domaines tels que le game développement et le  level design" +
                    " avec l'aide d'intervenants venant d'Ubisoft",

        technologies: ["Unreal Engine \t", "Unreal Editor For Fortnite (UEFN)", "Level Design\t"]
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
        <div className="App">
            <Navigation />
            <main>
                <MySelf personalInfo={mockPersonalInfo} />
                <Experience experiences={mockExperiences} />
                <ProjectsGrid projects={sampleProjects} title="Mes Projets Récents" />
                <MyContact contactInfo={mockContactInfo} />
            </main>
        </div>
    );
};
export default App;