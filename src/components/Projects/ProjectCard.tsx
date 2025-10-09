import React from 'react';
import type {Project} from '../../types/Project';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Titre avant l'image */}
            <div className="p-6 pb-0" style={{ backgroundColor: 'white' }}>
                <h3
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        color: '#1a1a1a',
                        marginBottom: '0.75rem',
                        lineHeight: '1.4'
                    }}
                >
                    {project.title}
                </h3>
            </div>

            {/* Image du projet */}
            <div className="relative h-48 overflow-hidden bg-gray-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="hover:scale-105 transition-transform duration-300"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center'
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Contenu de la carte */}
            <div className="p-6" style={{ backgroundColor: 'white' }}>

                {/* Description */}
                <p style={{
                    color: '#666',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1rem',
                    minHeight: '4.5rem'
                }}>
                    {project.description}
                </p>

                {/* Technologies (optionnel) */}
                {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Bouton GitHub */}
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                    Voir sur GitHub
                    <svg
                        className="ml-2"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};