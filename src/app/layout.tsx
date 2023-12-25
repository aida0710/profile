import React, {ReactNode, Suspense} from 'react';
import '@/styles/globals.css';
import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {Providers} from '@/app/providers';

const site_name: string = 'Profile';
const site_description: string = '@aida_0710のプロフィールページ';
const twitter_id: string = '@aida_0710';

const url: string = 'https://www.aida0710.work';
const image: string = `${url}/public_image.png`;

export const metadata: Metadata = {
    title: {
        default: `${site_name}`,
        template: `%s | ${site_name}`,
    },
    description: site_description,
    keywords: ['aida0710', 'profile', '相田', '優希'],
    openGraph: {
        type: 'website',
        locale: 'ja_JP',
        title: site_name,
        description: site_description,
        siteName: site_name,
        url: url,
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Catsial Image',
        },
    },
    twitter: {
        title: `${site_name}`,
        description: site_description,
        card: 'summary_large_image',
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Catsial Image',
        },
        creator: twitter_id,
    },
    metadataBase: new URL(url ?? 'http://localhost:3000'),
};

const inter: NextFont = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang='ja'>
            <body className={inter.className}>
                <Suspense>
                    <Providers>{children}</Providers>
                </Suspense>
            </body>
        </html>
    );
}