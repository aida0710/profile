'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { t } from '@/libs/i18n/dictionaries';
import { type Locale, localeFromPath, withLocale } from '@/libs/i18n/locale';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = localeFromPath(pathname);
  const nextLocale: Locale = currentLocale === 'ja' ? 'en' : 'ja';
  const nextHref = withLocale(pathname, nextLocale);
  const nextLabel = t(currentLocale, nextLocale === 'en' ? 'language.english' : 'language.japanese');

  return (
    <Link
      hrefLang={nextLocale}
      aria-label={t(currentLocale, 'language.label')}
      className="cursor-pointer rounded-full px-2 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-warm-subtext transition-colors hover:text-warm-text focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none"
      href={nextHref}
      title={nextLabel}
    >
      {nextLocale === 'en' ? 'EN' : 'JA'}
    </Link>
  );
}
