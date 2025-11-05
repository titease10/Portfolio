import React from 'react';

export const Navigation: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <button onClick={() => scrollToSection('myself')}>My Self</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('experience')}>Experience</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('projects')}>Projects</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};