'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { ProjectListCard } from '@/components/features/projects/ProjectListCard';
import type { ProjectListItem } from '@/components/features/projects/projectListItem';
import { CellGrid } from '@/components/grid/CellGrid';
import { GridSection } from '@/components/grid/GridSection';
import { PROJECT_CATEGORIES } from '@/data/projectCategories';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';
import type { ProjectCategory } from '@/types';

// トップの Projects 欄から来たとき、どのカードかを示す時間。
const ARRIVAL_HIGHLIGHT_MS = 1800;

type CategoryFilter = ProjectCategory | 'all';

interface ProjectsBrowserProps {
  projects: ProjectListItem[];
  locale: Locale;
}

/** /projects#<id> で来たときに、そのカードを一定時間だけ強調する。 */
function useArrivalHighlight(): string | null {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    setHighlightedId(id);
    const timer = setTimeout(() => setHighlightedId(null), ARRIVAL_HIGHLIGHT_MS);
    return () => clearTimeout(timer);
  }, []);

  return highlightedId;
}

export function ProjectsBrowser({ projects, locale }: ProjectsBrowserProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [expandedIds, setExpandedIds] = useState<ReadonlySet<string>>(new Set());
  const highlightedId = useArrivalHighlight();

  const normalizedQuery = query.trim().toLowerCase();
  const visibleProjects = projects.filter(
    (project) =>
      (category === 'all' || project.category === category) &&
      (normalizedQuery === '' || project.searchText.includes(normalizedQuery)),
  );
  const categoryFilters: CategoryFilter[] = ['all', ...PROJECT_CATEGORIES];

  const toggleExpanded = (id: string): void => {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 border-b border-line px-6 py-4 max-sm:px-4">
        <label className="flex h-9 min-w-[min(240px,100%)] flex-1 items-center gap-2 rounded-md border border-line2 bg-bg px-3">
          <span aria-hidden="true" className="font-mono text-xs text-faint">
            ⌕
          </span>
          <input
            type="search"
            value={query}
            placeholder={t(locale, 'projects.search')}
            aria-label={t(locale, 'projects.search')}
            className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-faint"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <fieldset className="flex flex-wrap gap-[2px] rounded-lg border border-line p-[2px]">
          <legend className="sr-only">{t(locale, 'projects.categoryLabel')}</legend>
          {categoryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={category === filter}
              className={clsx(
                'cursor-pointer rounded-md px-2.5 py-[5px] text-[13px] transition-colors duration-150',
                category === filter ? 'bg-ink text-bg' : 'text-sub hover:text-ink',
              )}
              onClick={() => setCategory(filter)}
            >
              {filter === 'all' ? t(locale, 'projects.allCategories') : filter}
            </button>
          ))}
        </fieldset>
      </div>

      <GridSection>
        <CellGrid minColumnWidth={320} columnMode="fill">
          {visibleProjects.map((project) => (
            <ProjectListCard
              key={project.id}
              project={project}
              isExpanded={expandedIds.has(project.id)}
              isHighlighted={highlightedId === project.id}
              readMoreLabel={t(locale, 'projects.readMore')}
              showLessLabel={t(locale, 'projects.showLess')}
              onToggleExpanded={() => toggleExpanded(project.id)}
            />
          ))}
        </CellGrid>
        {visibleProjects.length === 0 && (
          <p className="m-0 py-12 text-center text-faint">{t(locale, 'projects.empty')}</p>
        )}
      </GridSection>
    </>
  );
}
