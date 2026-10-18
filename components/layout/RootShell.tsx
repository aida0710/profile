import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import { Providers } from '@/app/providers';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { fontVariables } from '@/config/fonts';
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
  sameAs: siteConfig.socials.map((social) => social.url),
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
    // data-scroll-behavior: ページ遷移で先頭へ戻すときも滑らかにスクロールさせる（Next.js の指定方法）。
    <html suppressHydrationWarning lang={locale} data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={clsx(
          // ＋マークがガイド線の外へ 5px はみ出すため、横スクロールが出ないよう切る。
          'min-h-screen overflow-x-clip bg-bg font-sans text-sm leading-[1.6] text-ink antialiased',
          ...fontVariables,
        )}
      >
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD 構造化データの埋め込みに必要 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Analytics />
        <SpeedInsights />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
          >
            {t(locale, 'common.skipToMain')}
          </a>
          <SiteHeader />
          <main id="main" className="site-container relative">
            {children}
            <SiteFooter locale={locale} />
          </main>
        </Providers>
        <GoogleAnalytics gaId={siteConfig.gaId} />
      </body>
    </html>
  );
}
