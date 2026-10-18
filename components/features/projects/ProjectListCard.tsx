import clsx from 'clsx';
import Image from 'next/image';

import type { ProjectListItem } from '@/components/features/projects/projectListItem';

// 先頭段落がこれより長いと 3 行に収まらないため、「続きを読む」を出す。
const CLAMPED_LEAD_MAX_LENGTH = 90;

interface ProjectListCardProps {
  project: ProjectListItem;
  isExpanded: boolean;
  isHighlighted: boolean;
  readMoreLabel: string;
  showLessLabel: string;
  onToggleExpanded: () => void;
}

export function ProjectListCard({
  project,
  isExpanded,
  isHighlighted,
  readMoreLabel,
  showLessLabel,
  onToggleExpanded,
}: ProjectListCardProps) {
  const [lead = ''] = project.paragraphs;
  const hasMore = project.paragraphs.length > 1 || lead.length > CLAMPED_LEAD_MAX_LENGTH;
  const visibleParagraphs = isExpanded ? project.paragraphs : [lead];

  return (
    <article
      id={project.id}
      className={clsx(
        'flex scroll-mt-[72px] flex-col gap-3.5 p-5 transition-colors duration-300 hover:bg-bg2',
        isHighlighted && 'bg-bg2',
      )}
    >
      <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-faint">
        <span>{project.number}</span>
        <span className="rounded-full border border-line px-2 py-px text-sub">{project.category}</span>
      </div>
      <Image
        src={project.imageSrc}
        alt={project.title}
        width={960}
        height={540}
        className="block aspect-video w-full border border-line bg-bg2 object-cover object-top-left"
      />
      <div className="flex flex-1 flex-col gap-1.5">
        <h2 className="m-0 text-[15px] font-semibold">{project.title}</h2>
        {visibleParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className={clsx('m-0 text-[13px] leading-[1.7] text-pretty text-sub', !isExpanded && 'line-clamp-3')}
          >
            {paragraph}
          </p>
        ))}
        {hasMore && (
          <button
            type="button"
            aria-expanded={isExpanded}
            className="cursor-pointer self-start text-xs text-faint hover:text-ink"
            onClick={onToggleExpanded}
          >
            {isExpanded ? showLessLabel : readMoreLabel}
          </button>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-x-3.5 gap-y-1.5 pt-2 text-[13px]">
          <span className="mr-auto font-mono text-xs text-faint">{project.language}</span>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sub hover:text-ink"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
