import type { ReactNode } from 'react';

import { GridSection } from '@/components/grid/GridSection';
import { SectionHeader } from '@/components/grid/SectionHeader';
import { getLastCommitTime } from '@/libs/fetch/getLastCommitTime';
import { formatDateTime } from '@/libs/i18n/date';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

const REPOSITORY_URL = 'https://github.com/aida0710/profile';
const TYPEFACES = 'Geist, Geist Mono, Noto Sans JP';

interface ColophonRowProps {
  term: string;
  children: ReactNode;
}

function ColophonRow({ term, children }: ColophonRowProps) {
  return (
    <>
      <dt className="border-b border-dashed border-line px-8 py-3 text-[13px] text-faint max-sm:px-5">{term}</dt>
      <dd className="m-0 flex items-center gap-2 border-b border-dashed border-line py-3 pr-8 max-sm:pr-5">
        {children}
      </dd>
    </>
  );
}

interface ColophonSectionProps {
  locale: Locale;
}

// 最終更新はビルド時に取得する（fetch 側で revalidate 済みのため静的生成のまま）。
export async function ColophonSection({ locale }: ColophonSectionProps) {
  const lastCommit = await getLastCommitTime();

  return (
    <GridSection aria-labelledby="colophon-title">
      <SectionHeader id="colophon-title" title={t(locale, 'colophon.title')} />
      <dl className="m-0 grid grid-cols-[minmax(120px,200px)_minmax(0,1fr)] max-sm:grid-cols-[96px_minmax(0,1fr)] [&>*:nth-last-child(-n+2)]:border-b-0">
        <ColophonRow term={t(locale, 'colophon.lastCommit')}>
          {lastCommit.ok ? (
            <>
              <span aria-hidden="true" className="size-2 flex-none rounded-full bg-ok" />
              {formatDateTime(lastCommit.isoDate, locale)}
            </>
          ) : (
            t(locale, 'colophon.error')
          )}
        </ColophonRow>
        <ColophonRow term={t(locale, 'colophon.source')}>
          <a
            href={REPOSITORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 font-mono text-[13px] break-all hover:text-ink"
          >
            github.com/aida0710/profile ↗
          </a>
        </ColophonRow>
        <ColophonRow term={t(locale, 'colophon.type')}>{TYPEFACES}</ColophonRow>
      </dl>
    </GridSection>
  );
}
