import React from 'react';
import type {Project} from '../../types/Project';
import { ProjectCard } from './ProjectCard';

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
        description: "Un jeux-vidéo de rythme intégrant des aspects de Stratégie/RPG (Projet encore en devellopement)",
        imageUrl: "/src/assets/images/EIP_Poster.png",
        githubUrl: "https://github.com/Baptiste-lg/EIP.git",
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
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/EpitechPromo2026/B-DEV-500-PAR-5-2-area-sofiane.bassaler",
        technologies: ["React ", "TypeScripts ", " API"],
    },
    {
        id: "3",
        title: "COMPUTER NUMERICAL ANALYSIS",
        description: "Divert project: graphique annalyse, cryptography,\n" +
            "réseau neuronal",
        imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/username/weather-dashboard",
        technologies: ["C++ ", "Python "],
    },
];