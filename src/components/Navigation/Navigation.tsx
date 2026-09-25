import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/" end>My Self</NavLink>
                </li>
                <li>
                    <NavLink to="/experience">Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};