import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/" end>Profil</NavLink>
                </li>
                <li>
                    <NavLink to="/experience">Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projets</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
};