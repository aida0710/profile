import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { type DictionaryKey, t } from '@/libs/i18n/dictionaries';
import { EN_PREFIX, type Locale, pickLocalized } from '@/libs/i18n/locale';

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

const homeTitle = `${siteConfig.fullName} | ${siteConfig.jobTitle}`;

const ogImage = {
  url: siteConfig.image,
  type: 'image/png',
  width: 1200,
  height: 630,
  alt: `${siteConfig.fullName} のプロフィール画像`,
};

// Next.js は openGraph / twitter をレイアウトとページの間でマージせず丸ごと置き換えるため、
// ページ側でもこれらを毎回含める必要がある。
function sharedOpenGraph(locale: Locale) {
  return {
    type: 'website',
    siteName: siteConfig.name,
    locale: locale === 'en' ? 'en_US' : 'ja_JP',
    alternateLocale: locale === 'en' ? ['ja_JP'] : ['en_US'],
    images: ogImage,
  } as const;
}

const sharedTwitter = {
  card: 'summary_large_image',
  creator: siteConfig.twitter_id,
  images: ogImage,
} as const;

/**
 * 各ルートグループのルートレイアウトが使う、サイト全体のメタデータ。
 * ロケールごとに description / canonical / og:locale が変わる。
 */
export function buildRootMetadata(locale: Locale): Metadata {
  const description = pickLocalized(siteConfig.description, locale);
  const canonical = locale === 'en' ? EN_PREFIX : '/';

  return {
    title: {
      default: homeTitle,
      template: `%s - ${siteConfig.name}`,
    },
    description,
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      canonical,
      languages: {
        ja: '/',
        en: EN_PREFIX,
        'x-default': '/',
      },
    },
    keywords: ['aida0710', 'profile', '相田', '優希', 'Aida', 'Masaki', '相田優希', 'Masaki Aida', '相田 優希'],
    openGraph: {
      ...sharedOpenGraph(locale),
      title: homeTitle,
      description,
      url: `${siteConfig.url}${canonical}`,
    },
    twitter: {
      ...sharedTwitter,
      title: homeTitle,
      description,
    },
    metadataBase: new URL(siteConfig.url ?? 'http://localhost:3000'),
  };
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
      ...sharedOpenGraph(locale),
      title,
      description,
      url: `${siteConfig.url}${canonical}`,
    },
    twitter: {
      ...sharedTwitter,
      title,
      description,
    },
  };
}
