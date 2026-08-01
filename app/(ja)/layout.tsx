import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { RootShell } from '@/components/layout/RootShell';
import { buildRootMetadata } from '@/libs/i18n/metadata';

export const metadata: Metadata = buildRootMetadata('ja');

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function JaRootLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="ja">{children}</RootShell>;
}
