import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { type DictionaryKey, t } from '@/libs/i18n/dictionaries';
import { EN_PREFIX, type Locale } from '@/libs/i18n/locale';

type PageKey = 'awards' | 'projects' | 'articles' | 'gallery' | 'colophon' | 'publicKeys';

interface BuildPageMetadataInput {
  locale: Locale;
  page: PageKey;
  path: string;
}

function enPathFor(path: string): string {
  if (path === '/') return EN_PREFIX;
  return `${EN_PREFIX}${path}`;
}

export function buildPageMetadata({ locale, page, path }: BuildPageMetadataInput): Metadata {
  const titleKey = `${page}.meta.title` as DictionaryKey;
  const descriptionKey = `${page}.meta.description` as DictionaryKey;
  const title = t(locale, titleKey);
  const description = t(locale, descriptionKey);

  const jaPath = path;
  const enPath = enPathFor(path);
  const canonical = locale === 'en' ? enPath : jaPath;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ja: jaPath,
        en: enPath,
        'x-default': jaPath,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${canonical}`,
      locale: locale === 'en' ? 'en_US' : 'ja_JP',
      alternateLocale: locale === 'en' ? ['ja_JP'] : ['en_US'],
    },
    twitter: {
      title,
      description,
    },
  };
}
