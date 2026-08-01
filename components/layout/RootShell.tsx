import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import { Providers } from '@/app/providers';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { fontHeading, fontMono, fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Masaki Aida',
  alternateName: '相田優希',
  url: siteConfig.url,
  image: siteConfig.image,
  jobTitle: siteConfig.jobTitle,
  worksFor: { '@type': 'Organization', name: '株式会社DubGuild' },
  sameAs: siteConfig.socials,
};

interface RootShellProps {
  locale: Locale;
  children: ReactNode;
}

/**
 * 日本語版 / 英語版それぞれのルートレイアウトが共有する <html> ドキュメント本体。
 *
 * locale をルート構造（app/(ja) と app/(en)/en）から静的に決めているため、
 * headers() を読む必要がなく、全ページを静的生成できる。
 */
export function RootShell({ locale, children }: RootShellProps) {
  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={clsx(
          'min-h-screen bg-warm-bg font-sans antialiased transition-[background-color] duration-300',
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable,
        )}
      >
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD 構造化データの埋め込みに必要 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Analytics />
        <SpeedInsights />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-warm-accent focus:px-4 focus:py-2 focus:text-white"
          >
            {t(locale, 'common.skipToMain')}
          </a>
          <Sidebar />
          <MobileHeader />
          <main id="main" className="min-h-screen pt-14 sm:ml-60 sm:pt-0">
            {children}
          </main>
        </Providers>
        <GoogleAnalytics gaId={siteConfig.gaId} />
      </body>
    </html>
  );
}
