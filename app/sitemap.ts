import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { blogPosts } from '@/data/blog';

/**
 * 日本語形式の日付（例: "2025年06月28日"）をDateオブジェクトに変換
 */
function parseJapaneseDate(dateStr: string): Date {
  const match = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (!match) {
    return new Date(); // パース失敗時は現在日時
  }
  const [, year, month, day] = match;
  return new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 静的ページの定義
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/awards`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // ブログ記事の動的生成
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseJapaneseDate(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

// 静的生成を強制（ビルド時に生成）
export const dynamic = 'force-static';
