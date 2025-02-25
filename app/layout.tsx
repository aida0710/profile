import '@/styles/globals.css';
import {Metadata, Viewport} from 'next';
import clsx from 'clsx';
import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';

import {siteConfig} from '@/config/site';
import {fontSans} from '@/config/fonts';
import {NavigationBar} from '@/components/layout/NavigationBar';
import {Providers} from '@/app/providers';
import {Footer} from '@/components/layout/Footer';

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
        {media: '(prefers-color-scheme: light)', color: 'white'},
        {media: '(prefers-color-scheme: dark)', color: 'black'},
    ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html
            suppressHydrationWarning
            lang='jp'>
            <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <Analytics />
                <SpeedInsights />
                <Providers themeProps={{attribute: 'class', defaultTheme: 'dark'}}>
                    <div className='flex min-h-screen flex-col'>
                        <NavigationBar />
                        <main className='mb-auto'>{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
