import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import type React from 'react';

import { Providers } from '@/app/providers';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { fontHeading, fontMono, fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

const homeTitle = `${siteConfig.fullName} | ${siteConfig.jobTitle}`;

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  keywords: ['aida0710', 'profile', '相田', '優希', 'Aida', 'Masaki', '相田優希', 'Masaki Aida', '相田 優希'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: homeTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: {
      url: siteConfig.image,
      type: 'image/png',
      width: 1200,
      height: 630,
      alt: `${siteConfig.fullName} のプロフィール画像`,
    },
  },
  twitter: {
    title: homeTitle,
    description: siteConfig.description,
    card: 'summary_large_image',
    images: {
      url: siteConfig.image,
      type: 'image/png',
      width: 1200,
      height: 630,
      alt: `${siteConfig.fullName} のプロフィール画像`,
    },
    creator: siteConfig.twitter_id,
  },
  metadataBase: new URL(siteConfig.url ?? 'http://localhost:3000'),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ja">
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
            メインコンテンツへスキップ
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
