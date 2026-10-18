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
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="text-2xl font-semibold text-ink">{t(locale, 'error.title')}</h2>
      <button
        type="button"
        className="rounded-md border border-line2 bg-bg px-4 py-2 text-sm text-ink transition-colors hover:bg-bg2"
        onClick={() => reset()}
      >
        {t(locale, 'error.retry')}
      </button>
    </div>
  );
}
