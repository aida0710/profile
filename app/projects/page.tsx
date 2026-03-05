import type {Metadata} from 'next';

import {AnimatedSection} from '@/components/common/AnimatedSection';
import {BlockFrame} from '@/components/common/BlockFrame';
import {ProjectCardModal} from '@/components/features/projects/ProjectCardModal';
import {projects} from '@/data/projects';
import type {Project} from '@/types';

export const metadata: Metadata = {
    title: 'Projects',
    description: '自分が開発した又は携わったプロジェクト',
};

export default function ProjectsPage() {
    return (
        <div className='px-2 py-10 md:py-16'>
            <BlockFrame description='自分が開発した又は携わったプロジェクト' title='Projects'>
                {projects.map((project: Project, index: number) => (
                    <AnimatedSection key={project.title} delay={index * 80}>
                        <ProjectCardModal project={project} />
                    </AnimatedSection>
                ))}
            </BlockFrame>
        </div>
    );
}
