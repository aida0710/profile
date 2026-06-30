import type { Metadata } from 'next';

import { GalleryPage } from '@/components/pages/GalleryPage';
import { buildPageMetadata } from '@/libs/i18n/metadata';

export const metadata: Metadata = buildPageMetadata({ locale: 'en', page: 'gallery', path: '/gallery' });

export default function Page() {
  return <GalleryPage locale="en" />;
}
