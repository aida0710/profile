import type { Metadata } from 'next';

import { HomePage } from '@/components/pages/HomePage';
import { siteConfig } from '@/config/site';
import { EN_PREFIX } from '@/libs/i18n/locale';

const homeTitle = `${siteConfig.fullName} | ${siteConfig.jobTitle}`;
const description =
  'Profile of Masaki Aida (相田優希). Frontend / Backend Engineer focused on machine learning and networking, with selected awards and projects.';

export const metadata: Metadata = {
  title: homeTitle,
  description,
  alternates: {
    canonical: EN_PREFIX,
    languages: {
      ja: '/',
      en: EN_PREFIX,
      'x-default': '/',
    },
  },
  openGraph: {
    title: homeTitle,
    description,
    locale: 'en_US',
    alternateLocale: ['ja_JP'],
    url: `${siteConfig.url}${EN_PREFIX}`,
  },
  twitter: {
    title: homeTitle,
    description,
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
