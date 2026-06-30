import { redirect } from 'next/navigation';
import { EN_PREFIX } from '@/libs/i18n/locale';
import { getServerLocale } from '@/libs/i18n/server';

export default async function Page() {
  const locale = await getServerLocale();
  redirect(locale === 'en' ? EN_PREFIX : '/');
}
