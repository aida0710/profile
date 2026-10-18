import Link from 'next/link';

import { t } from '@/libs/i18n/dictionaries';
import { type Locale, withLocale } from '@/libs/i18n/locale';

interface NotFoundPageProps {
  locale: Locale;
}

export function NotFoundPage({ locale }: NotFoundPageProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <p className="font-mono text-sm tracking-widest text-sub">404</p>
      <h1 className="text-2xl font-semibold text-ink md:text-3xl">{t(locale, 'notFound.title')}</h1>
      <p className="max-w-md text-sub">{t(locale, 'notFound.description')}</p>
      <Link
        className="mt-2 rounded-md border border-line2 bg-bg px-4 py-2 text-sm text-ink transition-colors hover:bg-bg2"
        href={withLocale('/', locale)}
      >
        {t(locale, 'notFound.backHome')}
      </Link>
    </div>
  );
}
