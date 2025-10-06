export interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    skills: string[];
    avatar?: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    technologies: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

export interface ContactInfo {
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    location?: string;
}