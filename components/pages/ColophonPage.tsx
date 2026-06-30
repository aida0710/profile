'use client';

import { ExternalLinkIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import getLastCommitTime from '@/libs/fetch/getLastCommitTime';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

interface ColophonPageProps {
  locale: Locale;
}

export function ColophonPage({ locale }: ColophonPageProps) {
  const [lastCommitTime, setLastCommitTime] = useState<string>(t(locale, 'colophon.loading'));

  useEffect(() => {
    getLastCommitTime()
      .then(setLastCommitTime)
      .catch(() => setLastCommitTime(t(locale, 'colophon.error')));
  }, [locale]);

  return (
    <div className="flex min-h-screen items-start justify-center px-6 py-12 md:py-20">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-warm-text md:text-4xl">
            {t(locale, 'colophon.title')}
          </h1>
          <p className="mt-2 text-warm-subtext">{t(locale, 'colophon.subtitle')}</p>
        </div>

        {/* Repository section */}
        <section className="mb-10">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-warm-accent">
            {t(locale, 'colophon.repository')}
          </h2>
          <div className="rounded-xl border border-warm-border bg-warm-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <BsGithub aria-hidden="true" className="h-5 w-5 text-warm-text" />
              <span className="font-heading font-semibold text-warm-text">aida0710/profile</span>
            </div>
            <p className="mb-4 font-mono text-sm text-warm-subtext">
              {t(locale, 'colophon.lastCommit')}: {lastCommitTime}
            </p>
            <a
              className="inline-flex items-center gap-1.5 text-sm text-warm-accent transition-colors hover:text-warm-accent-hover"
              href="https://github.com/aida0710/profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(locale, 'colophon.viewOnGitHub')}
              <ExternalLinkIcon aria-hidden="true" size={14} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
