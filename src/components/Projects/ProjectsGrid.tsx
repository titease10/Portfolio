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

            {/* Grille responsive des projets, même logique visuelle que la section Experience */}
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Message si aucun projet */}
            {projects.length === 0 && (
                <p className="no-projects">
                    Aucun projet à afficher pour le moment.
                </p>
            )}
        </section>
    );
};
