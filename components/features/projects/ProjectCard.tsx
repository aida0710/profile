import { MediaCard, type MediaCardLink } from '@/components/common/MediaCard';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  locale: Locale;
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const title = pickLocalized(project.title, locale);
  const descriptions = pickLocalized(project.description, locale);

  const links: MediaCardLink[] = Object.values(project.links).map((link) => ({
    label: pickLocalized(link.description, locale),
    url: link.url,
    kind: link.url.includes('github.com') ? 'github' : 'external',
  }));

  return (
    <MediaCard image={{ src: `/images/projects/${project.image}`, alt: title }} links={links}>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-heading text-base font-semibold text-warm-text">{title}</h2>
        <span className="rounded-full bg-warm-accent/10 px-2.5 py-0.5 font-mono text-xs text-warm-accent">
          {project.language}
        </span>
      </div>
      {descriptions.map((item) => (
        <p key={item} className="text-sm leading-relaxed text-warm-subtext">
          {item}
        </p>
      ))}
    </MediaCard>
  );
}
