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
    companyUrl?: string;
    position: string;
    duration: string;
    description: string;
    technologies: string[];
}

export interface ContactInfo {
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    location?: string;
}