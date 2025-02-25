import {ReactNode} from 'react';

// Awards 関連の型
export interface Award {
    organization: string;
    description: string;
    image: string;
    link: string;
    date: string;
}

// Gallery 関連の型
export interface GalleryImage {
    src: string;
    description: string;
    date: string;
    detail: string;
}

// Projects 関連の型
export interface Project {
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

// Skills 関連の型
export interface SkillCategory {
    key: string;
    title: string;
    contents: string[];
}

// ナビゲーション関連の型
export interface NavItem {
    path: string;
    label: string;
    icon: ReactNode;
}

// 共通コンポーネントの型
export interface BlockFrameProps {
    title: string;
    description: string;
    children: ReactNode;
}

export interface TextBlockProps {
    messages: string[];
}

export interface SocialLink {
    href: string;
    icon: ReactNode;
    label: string;
}
