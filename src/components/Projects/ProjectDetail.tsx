import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Github } from "lucide-react";
import type { Project } from '../../types/Project';

interface ProjectDetailProps {
    projects: Project[];
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <section className="section">
                <h2>Projet introuvable</h2>
                <p>Ce projet n'existe pas ou a été supprimé.</p>

                <Link to="/projects" className="project-link">
                    Retour aux projets
                </Link>
            </section>
        );
    }

    return (
        <div className="project-detail-page">

            {/* Bouton retour placé sous la barre de navigation */}
            <div className="project-detail-header">
                <Link to="/projects" className="back-link">
                    &larr; Retour aux projets
                </Link>
            </div>

            <section className="section project-detail">

                <h2>{project.title}</h2>

                {project.imageUrl && (
                    <div className="project-detail-image">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                        />
                    </div>
                )}

                <p className="project-detail-description">
                    {project.description}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                    <div className="technologies">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                )}

                <div className="project-links">

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Voir sur GitHub
                            <Github width={18} height={18} />
                        </a>
                    )}

                    {project.canvaUrl && (
                        <a
                            href={project.canvaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link project-link-secondary"
                        >
                            Voir la présentation
                        </a>
                    )}

                </div>

            </section>
        </div>
    );
};