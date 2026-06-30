import { headers } from 'next/headers';

import { type Locale, localeFromPath } from '@/libs/i18n/locale';

export async function getServerLocale(): Promise<Locale> {
  const headerList = await headers();
  const pathname = headerList.get('x-pathname') ?? '/';
  return localeFromPath(pathname);
}
