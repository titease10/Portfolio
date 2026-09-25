import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { MySelf } from './components/MySelf/MySelf';
import { Experience } from './components/Experience/Experience';
import { MyContact } from './components/Contact/MyContact';
import type {   PersonalInfo, Experience as ExperienceType, ContactInfo} from './types';
import {ProjectsGrid} from "./components/Projects/ProjectsGrid.tsx";
import {sampleProjects} from "./components/Projects/sampleProjects.tsx";
import './styles/portfolio.css';
import {ProjectDetail} from "./components/Projects/ProjectDetail.tsx";

const mockPersonalInfo: PersonalInfo = {
    name: "Titien Carellas",
    title: "Développeur Jeux Video et IA",
    bio: ["Développeur polyvalent, principalement spécialisé en C/C++ et C#,",
        "je combine la rigueur acquise lors de ma formation à Epitech avec une véritable passion pour le développement," +
        " l'IA et le jeu vidéo mobile.",
        "Curieux et attiré par les nouvelles technologies, " +
        "je m’intéresse particulièrement à l’intelligence artificielle, au machine learning et au deep learning," +
        " des domaines dans lesquels j’ai eu l’occasion de réaliser plusieurs projets et d’approfondir mes connaissances." +
        " J’ai notamment effectué un stage chez Icare Énergie, " +
        "au cours duquel j’ai travaillé sur des problématiques liées à l’intelligence artificielle.",
        " Cette expérience m’a permis de confronter mes connaissances théoriques à des problématiques concrètes et" +
        " de mieux comprendre les enjeux liés à l’utilisation de l’IA dans un contexte professionnel et écologique." ,
        " Mon parcours m’a également permis de travailler sur des projets variés, " +
        "allant du développement d’applications web à la création de moteurs de jeu, " +
        "en passant par la conception d’algorithmes et la résolution de problématiques mathématiques. " ,
        "J’ai aussi eu l’occasion de mettre mes compétences à l’épreuve lors de hackathons et de game jams, " +
        "des expériences qui m’ont appris à être rapidement autonome," +
        " à expérimenter et à trouver des solutions dans des contextes exigeants." ,
        "J’aime avant tout comprendre comment les technologies fonctionnent, expérimenter et transformer des idées en projets concrets." +
        " Cette curiosité me permet aujourd’hui d’aborder des problématiques variées avec une vision globale du développement," +
        " tout en continuant à explorer les domaines qui me passionnent, notamment le jeu vidéo et l’intelligence artificielle."
        ],
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
                <Routes>
                    <Route path="/" element={<MySelf personalInfo={mockPersonalInfo} />} />
                    <Route path="/experience" element={<Experience experiences={mockExperiences} />} />
                    <Route path="/projects" element={<ProjectsGrid projects={sampleProjects} title="Mes Projets Récents" />} />
                    <Route path="/projects/:id" element={<ProjectDetail projects={sampleProjects} />} />
                    <Route path="/contact" element={<MyContact contactInfo={mockContactInfo} />} />
                </Routes>
            </main>
        </div>
    );
};
export default App;