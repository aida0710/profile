import { BlockFrame } from '@/components/common/BlockFrame';
import { ArticleCard } from '@/components/features/articles/ArticleCard';
import { getQiitaArticles } from '@/libs/fetch/getQiitaArticles';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

interface ArticlesPageProps {
  locale: Locale;
}

export async function ArticlesPage({ locale }: ArticlesPageProps) {
  const result = await getQiitaArticles();
  const articles = result.ok ? result.articles : [];

  // 取得失敗と「記事が 0 件」は別のメッセージで伝える
  const fallback =
    articles.length === 0 ? (
      <p className="text-sm text-warm-subtext">{t(locale, result.ok ? 'articles.empty' : 'articles.error')}</p>
    ) : undefined;

  return (
    <div className="px-2 py-10 md:py-16">
      <BlockFrame
        description={t(locale, 'articles.description')}
        fallback={fallback}
        title={t(locale, 'articles.title')}
      >
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} locale={locale} />
        ))}
      </BlockFrame>
    </div>
  );
}
