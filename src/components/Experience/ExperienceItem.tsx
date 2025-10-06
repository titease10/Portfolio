import React from 'react';
import type {Experience} from '../../types';

interface ExperienceItemProps {
    experience: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
    return (
        <div className="experience-item">
            <h4>{experience.position}</h4>
            <h5>{experience.company}</h5>
            <span className="duration">{experience.duration}</span>
            <p>{experience.description}</p>
            <div className="technologies">
                {experience.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    );
};