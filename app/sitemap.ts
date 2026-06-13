import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// 各ページのコンテンツを更新したら、その行の日付を更新してください。
// new Date() を使うとビルド毎に全ページが「今日」になり、更新日シグナルが無意味になるため固定値で管理します。
const lastModified = {
  home: '2026-06-13',
  awards: '2026-06-13',
  projects: '2026-06-13',
  gallery: '2026-06-13',
  colophon: '2026-06-13',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: baseUrl,
      lastModified: lastModified.home,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastModified.projects,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/awards`,
      lastModified: lastModified.awards,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: lastModified.gallery,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/colophon`,
      lastModified: lastModified.colophon,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}

// 静的生成を強制（ビルド時に生成）
export const dynamic = 'force-static';
