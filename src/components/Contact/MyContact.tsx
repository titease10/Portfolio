import React from 'react';
import type {ContactInfo} from '../../types';
import { Github, Linkedin } from "lucide-react";


interface MyContactProps {
    contactInfo: ContactInfo;
}

export const MyContact: React.FC<MyContactProps> = ({ contactInfo }) => {
    return (
        <section id="contact" className="section">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <strong>Email:</strong>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>

                {contactInfo.phone && (
                    <div className="contact-item">
                        <strong>Phone:</strong>
                            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                    </div>
                )}

                {contactInfo.location && (
                    <div className="contact-item">
                        <strong>Location:</strong>
                        <span>{contactInfo.location}</span>
                    </div>
                )}

                {contactInfo.linkedin && (
                    <div className="contact-item">
                        <a
                            href={contactInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:underline"
                        >
                            LinkedIn
                            <Linkedin className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                )}

                {contactInfo.github && (
                    <div className="contact-item">
                        <a
                            href={contactInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-800 hover:underline"
                        >
                            GitHub
                            <Github className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};