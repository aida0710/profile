import { sortByDateDesc } from '@/libs/i18n/date';
import type { QiitaArticle } from '@/types';

const QIITA_USER = 'aida0710';
const QIITA_API = `https://qiita.com/api/v2/users/${QIITA_USER}/items?per_page=100`;

// 1 日キャッシュする。記事の追加頻度に対して十分で、Qiita API への負荷も抑えられる。
const REVALIDATE_SECONDS = 86400;

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

/**
 * 取得結果。
 * 「取得に失敗した」と「記事が 0 件だった」は利用側で別のメッセージを出す必要があるため、
 * 空配列で潰さず ok フラグで区別する。
 */
export type QiitaArticlesResult = { ok: true; articles: QiitaArticle[] } | { ok: false };

export async function getQiitaArticles(): Promise<QiitaArticlesResult> {
  try {
    const response = await fetch(QIITA_API, {
      headers: { Accept: 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) return { ok: false };

    const items = (await response.json()) as QiitaApiItem[];
    if (!Array.isArray(items)) return { ok: false };

    const articles = items.map<QiitaArticle>((item) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      createdAt: item.created_at,
      likesCount: item.likes_count,
      tags: item.tags.map((tag) => tag.name),
    }));

    return { ok: true, articles: sortByDateDesc(articles, (article) => article.createdAt) };
  } catch {
    return { ok: false };
  }
}
