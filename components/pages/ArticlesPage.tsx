import { BlockFrame } from '@/components/common/BlockFrame';
import { ArticleCard } from '@/components/features/articles/ArticleCard';
import { getQiitaArticles } from '@/libs/fetch/getQiitaArticles';
import { t } from '@/libs/i18n/dictionaries';
import type { Locale } from '@/libs/i18n/locale';

interface ArticlesPageProps {
  locale: Locale;
}

export async function ArticlesPage({ locale }: ArticlesPageProps) {
  const articles = await getQiitaArticles();

  return (
    <div className="px-2 py-10 md:py-16">
      <BlockFrame description={t(locale, 'articles.description')} title={t(locale, 'articles.title')}>
        {articles.length === 0 ? (
          <p className="col-span-full text-sm text-warm-subtext">{t(locale, 'articles.empty')}</p>
        ) : (
          articles.map((article) => <ArticleCard key={article.id} article={article} locale={locale} />)
        )}
      </BlockFrame>
    </div>
  );
}
