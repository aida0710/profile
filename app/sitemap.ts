import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { EN_PREFIX } from '@/libs/i18n/locale';

// 各ページのコンテンツを更新したら、その行の日付を更新してください。
// new Date() を使うとビルド毎に全ページが「今日」になり、更新日シグナルが無意味になるため固定値で管理します。
const lastModified = {
  home: '2026-06-13',
  awards: '2026-06-13',
  projects: '2026-06-13',
  articles: '2026-06-30',
  gallery: '2026-06-13',
  publicKeys: '2026-07-15',
  colophon: '2026-06-13',
};

const baseUrl = siteConfig.url;

interface RouteEntry {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
  lastModified: string;
}

const routes: RouteEntry[] = [
  { path: '', changeFrequency: 'monthly', priority: 1.0, lastModified: lastModified.home },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.9, lastModified: lastModified.projects },
  { path: '/articles', changeFrequency: 'weekly', priority: 0.85, lastModified: lastModified.articles },
  { path: '/awards', changeFrequency: 'monthly', priority: 0.8, lastModified: lastModified.awards },
  { path: '/gallery', changeFrequency: 'monthly', priority: 0.7, lastModified: lastModified.gallery },
  { path: '/public-keys', changeFrequency: 'monthly', priority: 0.5, lastModified: lastModified.publicKeys },
  { path: '/colophon', changeFrequency: 'yearly', priority: 0.3, lastModified: lastModified.colophon },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const jaPath = route.path === '' ? '' : route.path;
    const enPath = `${EN_PREFIX}${jaPath}`;
    const alternates = {
      languages: {
        ja: `${baseUrl}${jaPath || '/'}`,
        en: `${baseUrl}${enPath}`,
        'x-default': `${baseUrl}${jaPath || '/'}`,
      },
    } as const;

    return [
      {
        url: `${baseUrl}${jaPath || '/'}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates,
      },
      {
        url: `${baseUrl}${enPath}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates,
      },
    ];
  });
}

// 静的生成を強制（ビルド時に生成）
export const dynamic = 'force-static';
