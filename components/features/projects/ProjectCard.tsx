import { MediaCard, type MediaCardLink } from '@/components/common/MediaCard';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const links: MediaCardLink[] = Object.values(project.links).map((link) => ({
    label: link.description,
    url: link.url,
    kind: link.url.includes('github.com') ? 'github' : 'external',
  }));

  return (
    <MediaCard image={{ src: `/images/projects/${project.image}`, alt: project.title }} links={links}>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-heading text-base font-semibold text-warm-text">{project.title}</h2>
        <span className="rounded-full bg-warm-accent/10 px-2.5 py-0.5 font-mono text-xs text-warm-accent">
          {project.language}
        </span>
      </div>
      {project.description.map((item) => (
        <p key={item} className="text-sm leading-relaxed text-warm-subtext">
          {item}
        </p>
      ))}
    </MediaCard>
  );
}
