import { GridSection } from '@/components/grid/GridSection';
import { awards } from '@/data/awards';
import { sortByDateDesc } from '@/libs/i18n/date';
import { formatT, t } from '@/libs/i18n/dictionaries';
import { type Locale, pickLocalized } from '@/libs/i18n/locale';

/** '2024-03-24' → '2024.03' */
function toYearMonth(isoDate: string): string {
  return isoDate.slice(0, 7).replace('-', '.');
}

interface AwardsAccordionProps {
  locale: Locale;
}

// <details> で開閉するため JS が無くても動き、開閉状態も支援技術に伝わる。
export function AwardsAccordion({ locale }: AwardsAccordionProps) {
  const sortedAwards = sortByDateDesc(awards, (award) => award.date);
  const years = sortedAwards.map((award) => award.date.slice(0, 4));
  const note = formatT(locale, 'awards.note', { from: years.at(-1) ?? '', to: years[0] ?? '' });

  return (
    <GridSection>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center gap-4 px-8 py-5 transition-colors duration-150 hover:bg-bg2 max-sm:px-5 [&::-webkit-details-marker]:hidden">
          <span className="flex flex-1 flex-col gap-0.5">
            <span className="text-base font-semibold tracking-[-0.01em]">{t(locale, 'awards.title')}</span>
            <span className="text-[13px] text-faint">
              {note} · {formatT(locale, 'awards.count', { count: sortedAwards.length })}
            </span>
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-sub">
            <span className="group-open:hidden">{t(locale, 'awards.open')}</span>
            <span className="hidden group-open:inline">{t(locale, 'awards.close')}</span>
            <span aria-hidden="true" className="inline-block transition-transform duration-200 group-open:rotate-180">
              ↓
            </span>
          </span>
        </summary>
        <ul className="m-0 list-none border-t border-line px-8 pt-1 pb-5 max-sm:px-5">
          {sortedAwards.map((award) => (
            <li key={`${award.date}-${award.description.ja}`}>
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[72px_minmax(0,1fr)_minmax(0,0.8fr)] gap-4 border-b border-dashed border-line py-2.5 text-sub max-sm:grid-cols-[64px_minmax(0,1fr)] max-sm:gap-x-3 max-sm:gap-y-0.5"
              >
                <span className="font-mono text-xs leading-[22px] text-faint">{toYearMonth(award.date)}</span>
                <span className="text-ink">{pickLocalized(award.description, locale)}</span>
                <span className="text-[13px] max-sm:col-start-2">{pickLocalized(award.organization, locale)}</span>
              </a>
            </li>
          ))}
        </ul>
      </details>
    </GridSection>
  );
}
