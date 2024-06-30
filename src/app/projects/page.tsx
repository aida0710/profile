import React from 'react';
import {Metadata} from 'next';
import {Skills} from '@/components/skills';
import {projects, ProjectsProps} from '@/app/projects/data-store';
import ProjectCardModal from '@/app/projects/components/project-card-modal';

export const metadata: Metadata = {
    title: 'Projects',
};

export default function Page() {
    return (
        <Skills
            title='Projects'
            description='自分が開発した又は携わったプロジェクト'>
            {projects.map((project: ProjectsProps, index: number) => (
                <ProjectCardModal
                    key={index}
                    {...project}
                />
            ))}
        </Skills>
    );
}