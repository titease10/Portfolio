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
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Titre de la section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Grille responsive des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Message si aucun projet */}
                {projects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Aucun projet à afficher pour le moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

// Données d'exemple
export const sampleProjects: Project[] = [
    {
        id: "1",
        title: "Harmony Havoc",
        description: "Un jeux-vidéo de rythme intégrant des aspects de Stratégie/RPG (Projet encore en devellopement)",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/Baptiste-lg/EIP.git",
        technologies: ["Unity ", "WWise ", "C#"]
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Application de gestion de tâches collaborative avec authentification, notifications en temps réel et synchronisation multi-appareils. Interface drag & drop intuitive.",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/username/task-manager",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"]
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "Dashboard météo interactif avec prévisions détaillées, cartes interactives et alertes personnalisées. Intégration d'APIs météo multiples pour une précision optimale.",
        imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/username/weather-dashboard",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox"]
    },
    {
        id: "4",
        title: "Portfolio Personnel",
        description: "Portfolio moderne et responsive showcasing mes projets et compétences. Animations fluides, mode sombre/clair et optimisé pour le SEO et les performances.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com/username/portfolio",
        technologies: ["Next.js", "TypeScript", "Framer Motion", "MDX"]
    }
];