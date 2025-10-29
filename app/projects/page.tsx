import type { Metadata } from 'next';

import { BlockFrame } from '@/components/common/BlockFrame';
import { ProjectCardModal } from '@/components/features/projects/ProjectCardModal';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

export const metadata: Metadata = {
  title: 'Projects',
  description: '自分が開発した又は携わったプロジェクト',
};

export default function ProjectsPage() {
  return (
    <div className="pt-8">
      <BlockFrame description="自分が開発した又は携わったプロジェクト" title="Projects">
        {projects.map((project: Project) => (
          <ProjectCardModal key={project.title} project={project} />
        ))}
      </BlockFrame>
    </div>
  );
}
