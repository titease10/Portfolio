import React from 'react';
import { Link } from 'react-router-dom';
import type {Project} from '../../types/Project';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-item">
            {/* Zone cliquable qui mène à la page détail du projet */}
            <Link to={`/projects/${project.id}`} className="project-item-link">
                {project.imageUrl && (
                    <div className="project-image">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                        />
                    </div>
                )}

                <h4>{project.title}</h4>
                <p>{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                    <div className="technologies">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech.trim()}</span>
                        ))}
                    </div>
                )}
            </Link>

            {/* Liens externes du projet, en dehors du lien vers la page détail */}
            <div className="project-links">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        GitHub
                    </a>
                )}

                {project.canvaUrl && (
                    <a
                        href={project.canvaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-secondary"
                    >
                        Presentation du projet
                    </a>
                )}
            </div>
        </div>
    );
};