export interface ProjectsProps {
    title: string;
    description: string[];
    image: string;
    links: {
        [key: string]: {
            description: string;
            url: string;
        };
    };
    language: string;
}