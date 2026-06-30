import { BlockFrame } from '@/components/common/BlockFrame';
import { ProjectCard } from '@/components/features/projects/ProjectCard';
import { projects } from '@/data/projects';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';
import type { Project } from '@/types';

interface ProjectsPageProps {
  locale: Locale;
}

export function ProjectsPage({ locale }: ProjectsPageProps) {
  return (
    <div className="px-2 py-10 md:py-16">
      <BlockFrame description={t(locale, 'projects.description')} title={t(locale, 'projects.title')}>
        {projects.map((project: Project) => (
          <ProjectCard key={project.title.ja} project={project} locale={locale} />
        ))}
      </BlockFrame>
    </div>
  );
}
