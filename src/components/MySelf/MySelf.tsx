import React from 'react';
import type {PersonalInfo} from '../../types';

interface MySelfProps {
    personalInfo: PersonalInfo;
}

export const MySelf: React.FC<MySelfProps> = ({ personalInfo }) => {
    return (
        <section id="myself" className="section">
            <h2>About Me</h2>
            <div className="personal-info">
                {personalInfo.avatar && (
                    <img src={personalInfo.avatar} alt={personalInfo.name} className="avatar" />
                )}
                <h3>{personalInfo.name}</h3>
                <h4>{personalInfo.title}</h4>
                <p>{personalInfo.bio}</p>
                <div className="skills">
                    <h5>Skills:</h5>
                    <ul>
                        {personalInfo.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
