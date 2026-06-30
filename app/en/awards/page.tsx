import type { Metadata } from 'next';

import { AwardsPage } from '@/components/pages/AwardsPage';
import { buildPageMetadata } from '@/libs/i18n/metadata';

export const metadata: Metadata = buildPageMetadata({ locale: 'en', page: 'awards', path: '/awards' });

export default function Page() {
  return <AwardsPage locale="en" />;
}
