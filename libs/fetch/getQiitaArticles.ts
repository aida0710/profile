import type { QiitaArticle } from '@/types';

const QIITA_USER = 'aida0710';
const QIITA_API = `https://qiita.com/api/v2/users/${QIITA_USER}/items?per_page=100`;

interface QiitaApiTag {
  name: string;
}

interface QiitaApiItem {
  id: string;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  tags: QiitaApiTag[];
}

export async function getQiitaArticles(): Promise<QiitaArticle[]> {
  try {
    const response = await fetch(QIITA_API, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 86400 },
    });

    if (!response.ok) return [];

    const items = (await response.json()) as QiitaApiItem[];

    return items
      .map<QiitaArticle>((item) => ({
        id: item.id,
        title: item.title,
        url: item.url,
        createdAt: item.created_at,
        likesCount: item.likes_count,
        tags: item.tags.map((tag) => tag.name),
      }))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch {
    return [];
  }
}
