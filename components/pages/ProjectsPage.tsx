import { ProjectsBrowser } from '@/components/features/projects/ProjectsBrowser';
import { toProjectListItem } from '@/components/features/projects/projectListItem';
import { PageHero } from '@/components/grid/PageHero';
import { projects } from '@/data/projects';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

interface ProjectsPageProps {
  locale: Locale;
}

export function ProjectsPage({ locale }: ProjectsPageProps) {
  const listItems = projects.map((project, index) => toProjectListItem(project, index, locale));

  return (
    <>
      <PageHero title={t(locale, 'projects.title')} description={t(locale, 'projects.description')} />
      <ProjectsBrowser projects={listItems} locale={locale} />
    </>
  );
}
