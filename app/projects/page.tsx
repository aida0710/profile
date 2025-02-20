import React from 'react';
import {Metadata} from 'next';

import {BlockFrame} from '@/components/block-frame';
import {projects} from '@/app/projects/data-store';
import ProjectCardModal from '@/app/projects/components/project-card-modal';
import {ProjectsProps} from '@/app/projects/types/projects';

export const metadata: Metadata = {
    title: 'Projects',
};

export default function Page() {
    return (
        <BlockFrame
            description='自分が開発した又は携わったプロジェクト'
            title='Projects'>
            {projects.map((project: ProjectsProps, index: number) => (
                <ProjectCardModal
                    key={index}
                    {...project}
                />
            ))}
        </BlockFrame>
    );
}
