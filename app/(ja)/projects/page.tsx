import type { Metadata } from 'next';

import { ProjectsPage } from '@/components/pages/ProjectsPage';
import { buildPageMetadata } from '@/libs/i18n/metadata';

export const metadata: Metadata = buildPageMetadata({ locale: 'ja', page: 'projects', path: '/projects' });

export default function Page() {
  return <ProjectsPage locale="ja" />;
}
