import { ArrowUpRight, ThumbsUpIcon } from 'lucide-react';

import { formatDate } from '@/libs/i18n/date';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';
import type { QiitaArticle } from '@/types';

interface ArticleCardProps {
  article: QiitaArticle;
  locale: Locale;
}

export function ArticleCard({ article, locale }: ArticleCardProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col gap-3 rounded-xl border border-warm-border bg-warm-surface p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-warm-accent/30 hover:shadow-lg hover:shadow-warm-accent/5 focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-xs text-warm-subtext">{formatDate(article.createdAt, locale, 'numeric')}</p>
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-warm-subtext transition-colors group-hover:text-warm-accent"
        />
      </div>

      <h2 className="font-heading text-base font-semibold leading-snug text-warm-text transition-colors group-hover:text-warm-accent">
        {article.title}
      </h2>

      {article.tags.length > 0 && (
        <ul aria-label={t(locale, 'articles.tags')} className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {article.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-warm-accent/10 px-2 py-0.5 font-mono text-[11px] text-warm-accent">
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center gap-1 text-xs text-warm-subtext">
        <ThumbsUpIcon aria-hidden="true" className="h-3.5 w-3.5" />
        <span className="font-mono">{article.likesCount}</span>
      </div>
    </a>
  );
}
