'use client';

import { useEffect } from 'react';

import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

interface ErrorPageProps {
  locale: Locale;
  error: Error;
  reset: () => void;
}

export function ErrorPage({ locale, error, reset }: ErrorPageProps) {
  useEffect(() => {
    // biome-ignore lint/suspicious/noConsole: Error logging is necessary for debugging
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="font-heading text-2xl font-semibold text-warm-text">{t(locale, 'error.title')}</h2>
      <button
        type="button"
        className="rounded-lg border border-warm-border bg-warm-surface px-4 py-2 text-sm text-warm-text transition-colors hover:border-warm-accent hover:text-warm-accent focus-visible:ring-2 focus-visible:ring-warm-accent focus-visible:outline-none"
        onClick={() => reset()}
      >
        {t(locale, 'error.retry')}
      </button>
    </div>
  );
}
