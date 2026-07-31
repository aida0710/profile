import type { Metadata } from 'next';

import { PublicKeysPage } from '@/components/pages/PublicKeysPage';
import { buildPageMetadata } from '@/libs/i18n/metadata';

export const metadata: Metadata = buildPageMetadata({ locale: 'ja', page: 'publicKeys', path: '/public-keys' });

export default function Page() {
  return <PublicKeysPage locale="ja" />;
}
