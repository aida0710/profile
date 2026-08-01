import Link from 'next/link';

import { t } from '@/libs/i18n/dictionaries';
import { type Locale, withLocale } from '@/libs/i18n/locale';

interface NotFoundPageProps {
  locale: Locale;
}

export function NotFoundPage({ locale }: NotFoundPageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
      <p className="font-mono text-sm tracking-widest text-warm-subtext">404</p>
      <h1 className="font-heading text-2xl font-semibold text-warm-text md:text-3xl">{t(locale, 'notFound.title')}</h1>
      <p className="max-w-md text-warm-subtext">{t(locale, 'notFound.description')}</p>
      <Link
        className="mt-2 rounded-lg border border-warm-border bg-warm-surface px-4 py-2 text-sm text-warm-text transition-colors hover:border-warm-accent hover:text-warm-accent focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none"
        href={withLocale('/', locale)}
      >
        {t(locale, 'notFound.backHome')}
      </Link>
    </div>
  );
}
