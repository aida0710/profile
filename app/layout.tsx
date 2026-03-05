import '@/styles/globals.css';
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

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['aida0710', 'profile', '相田', '優希', 'Aida', 'Masaki', '相田優希', 'Masaki Aida', '相田 優希'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: {
      url: siteConfig.image,
      type: 'image/png',
      width: 1200,
      height: 630,
      alt: 'Profile Image',
    },
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    card: 'summary_large_image',
    images: {
      url: siteConfig.image,
      type: 'image/png',
      width: 1200,
      height: 630,
      alt: 'Profile Image',
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
      </body>
    </html>
  );
}
