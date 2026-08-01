import type { Metadata } from 'next';

import { ColophonPage } from '@/components/pages/ColophonPage';
import { buildPageMetadata } from '@/libs/i18n/metadata';

export const metadata: Metadata = buildPageMetadata({ locale: 'en', page: 'colophon', path: '/colophon' });

export default function Page() {
  return <ColophonPage locale="en" />;
}
