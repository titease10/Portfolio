import React from 'react';
import type {Experience as ExperienceType} from '../../types';
import { ExperienceItem } from './ExperienceItem';

interface ExperienceProps {
    experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <section id="experience" className="section">
            <h2>Experience</h2>
            <div className="experiences-list">
                {experiences.map((experience) => (
                    <ExperienceItem key={experience.id} experience={experience} />
                ))}
            </div>
        </section>
    );
};