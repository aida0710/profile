import type { Metadata } from 'next';

import { ArticlesPage } from '@/components/pages/ArticlesPage';
import { buildPageMetadata } from '@/libs/i18n/metadata';

export const metadata: Metadata = buildPageMetadata({ locale: 'ja', page: 'articles', path: '/articles' });

export default function Page() {
  return <ArticlesPage locale="ja" />;
}
