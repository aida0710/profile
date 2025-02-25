import React from 'react';
import {Metadata} from 'next';

import {BlockFrame} from '@/components/common/BlockFrame';
import {projects} from '@/data/projects';
import {ProjectCardModal} from '@/components/features/projects/ProjectCardModal';
import {Project} from '@/types';

export const metadata: Metadata = {
    title: 'Projects',
    description: '自分が開発した又は携わったプロジェクト',
};

export default function ProjectsPage() {
    return (
        <BlockFrame
            description='自分が開発した又は携わったプロジェクト'
            title='Projects'>
            {projects.map((project: Project, index: number) => (
                <ProjectCardModal
                    key={index}
                    project={project}
                />
            ))}
        </BlockFrame>
    );
}
