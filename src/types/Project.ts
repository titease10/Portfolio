export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    canvaUrl: string;
    technologies?: string[];
}