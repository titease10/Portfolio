import React from 'react';
import type {Project} from '../../types/Project';
import { ProjectCard } from './ProjectCard';
import Poster_EIP from "../../assets/images/EIP_Poster.png";
import AREA_IFTTT from "../../assets/images/AREA_IFTTT.png"
interface ProjectsGridProps {
    projects: Project[];
    title?: string;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
                                                              projects,
                                                              title = "Mes Projets"
                                                          }) => {
    return (
        <section id="projects" className="section">
            {/* Titre avec style du portfolio.css */}
            <h2>{title}</h2>

            {/* Grille responsive des projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Message si aucun projet */}
            {projects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        Aucun projet à afficher pour le moment.
                    </p>
                </div>
            )}
        </section>
    );
};


// Données d'exemple
export const sampleProjects: Project[] = [
    {
        id: "1",
        title: "Harmony Havoc",
        description: "Un jeux-vidéo de rythme intégrant des aspects de Stratégie/RPG (Projet encore en développement)",
        imageUrl: Poster_EIP,
        githubUrl: "https://github.com/Baptiste-lg/EIP.git",
        canvaUrl: "https://www.canva.com/design/DAHBeo2Haqs/mnhLkwSwm9sFPDgrbPE_ug/edit?utm_content=DAHBeo2Haqs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        technologies: ["Unity ", "WWise ", "C#"]
    },
    {
        id: "2",
        title: "AREA",
        description: "Le projet AREA consiste en la création d’une suite logicielle qui fonctionne de manière similaire à IFTTT et/ou Zapier. (automatisation entre service)\n" +
            "Cette suite logicielle est divisée en 3 parties :\n" +
            "\n" +
            "Un serveur pour implémenter toutes les fonctionnalités.\n" +
            "Une application web pour utiliser l’application depuis un navigateur.\n" +
            "Une application mobile pour utiliser l’application depuis un téléphone.",
        imageUrl: AREA_IFTTT,
        githubUrl: "https://github.com/EpitechPromo2026/B-DEV-500-PAR-5-2-area-sofiane.bassaler",
        canvaUrl: "https://www.canva.com/design/DAF2Du8N1kY/foIMZq1TpGyJsu5xWcmqtQ/edit?utm_content=DAF2Du8N1kY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        technologies: ["React ", "TypeScripts ", " API"],
    },
    {
        id: "3",
        title: "COMPUTER NUMERICAL ANALYSIS",
        description: "Divert project: graphique annalyse, cryptography,\n" +
            "réseau neuronal",
        imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/EpitechPromo2026/B-CNA-500-PAR-5-1-cryptography-titien.carellas",
        canvaUrl: "https://www.canva.com/design/DAF2miEDsi4/1XzxwJsGbC1TjdnuqazrGg/edit?utm_content=DAF2miEDsi4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        technologies: ["C++ ", "Python "],
    },
];