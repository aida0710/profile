import type { Locale } from '@/libs/i18n/locale';

// {name} の形の差し込み口は formatT() で埋める。
const ja = {
  'common.close': '閉じる',
  'common.skipToMain': 'メインコンテンツへスキップ',
  'common.profilePhotoAlt': 'Masaki Aida のアイコン',

  'language.label': '言語を切り替える',
  'language.switchTo': 'English に切り替える',

  'theme.label': '配色を切り替える',
  'theme.light': 'ライト',
  'theme.dark': 'ダーク',
  'theme.toDark': 'ダークに切り替える',
  'theme.toLight': 'ライトに切り替える',

  'home.intro': '最近は機械学習を中心に、データセットの構築・前処理やモデルの事後学習など、幅広く手がけています。',
  'home.intro.interests': 'ネットワークの構築・運用や、ロードバイクでどこかに出かけるのも好きです。',
  'home.affiliations': '所属',
  'home.background': '経歴',
  'home.projects': 'Projects',
  'home.seeAllProjects': '全{count}件を見る',

  'awards.title': '過去の受賞履歴',
  'awards.note': '{from}–{to}年の受賞・ノミネート',
  'awards.count': '{count}件',
  'awards.open': '開く',
  'awards.close': '閉じる',

  'projects.title': 'Projects',
  'projects.description': '自分が開発した又は携わったプロジェクト',
  'projects.meta.title': 'Projects',
  'projects.meta.description': '自分が開発した又は携わったプロジェクト',
  'projects.search': '名前・言語・説明で検索',
  'projects.allCategories': 'すべて',
  'projects.categoryLabel': '種別で絞り込む',
  'projects.empty': '該当するプロジェクトがありません',
  'projects.readMore': '続きを読む',
  'projects.showLess': '閉じる',

  'gallery.title': 'Photos',
  'gallery.description': '私が撮影した写真や、撮影していただいた写真です。',
  'gallery.meta.title': 'Photos',
  'gallery.meta.description': '私が撮影した写真や、撮影していただいた写真です。',
  'gallery.imageZoomLabel': '拡大表示',
  'gallery.imageAlt': '写真',

  'publicKeys.title': '公開鍵',
  'publicKeys.copy': 'コピー',
  'publicKeys.copied': 'コピーしました',
  'publicKeys.download': 'ダウンロード',

  'colophon.title': 'このサイトについて',
  'colophon.lastCommit': '最終更新',
  'colophon.source': 'ソース',
  'colophon.type': 'Type',
  'colophon.error': '取得できませんでした',

  'notFound.title': 'ページが見つかりません',
  'notFound.description': 'お探しのページは存在しないか、移動した可能性があります。',
  'notFound.backHome': 'トップに戻る',

  'error.title': '問題が発生しました',
  'error.retry': '再試行',
} as const;

type Dictionary = typeof ja;
export type DictionaryKey = keyof Dictionary;

const en: Partial<Record<DictionaryKey, string>> = {
  'common.close': 'Close',
  'common.skipToMain': 'Skip to main content',
  'common.profilePhotoAlt': 'Avatar of Masaki Aida',

  'language.label': 'Switch language',
  'language.switchTo': 'Switch to 日本語',

  'theme.label': 'Switch color scheme',
  'theme.light': 'Light',
  'theme.dark': 'Dark',
  'theme.toDark': 'Switch to dark',
  'theme.toLight': 'Switch to light',

  'home.intro':
    'Lately my focus is machine learning — I work across a wide range of it, from building and preprocessing datasets to post-training models.',
  'home.intro.interests':
    'I also enjoy designing and operating networks, and riding my road bike wherever the day takes me.',
  'home.affiliations': 'Affiliations',
  'home.background': 'Background',
  'home.seeAllProjects': 'See all {count}',

  'awards.title': 'Past awards',
  'awards.note': 'Awards and nominations, {from}–{to}',
  'awards.count': '{count} entries',
  'awards.open': 'Open',
  'awards.close': 'Close',

  'projects.description': 'Projects I have built or contributed to',
  'projects.meta.description': 'Projects I have built or contributed to.',
  'projects.search': 'Search by name, language, description',
  'projects.allCategories': 'All',
  'projects.categoryLabel': 'Filter by category',
  'projects.empty': 'No matching projects',
  'projects.readMore': 'Read more',
  'projects.showLess': 'Show less',

  'gallery.description': 'Photos I have taken, and photos taken of me.',
  'gallery.meta.description': 'Photos I have taken, and photos taken of me.',
  'gallery.imageZoomLabel': 'View enlarged',
  'gallery.imageAlt': 'Photo',

  'publicKeys.title': 'Public keys',
  'publicKeys.copy': 'Copy',
  'publicKeys.copied': 'Copied',
  'publicKeys.download': 'Download',

  'colophon.title': 'Colophon',
  'colophon.lastCommit': 'Last updated',
  'colophon.source': 'Source',
  'colophon.error': 'Failed to load',

  'notFound.title': 'Page not found',
  'notFound.description': 'The page you are looking for does not exist or may have moved.',
  'notFound.backHome': 'Back to top',

  'error.title': 'Something went wrong',
  'error.retry': 'Try again',
};

const dictionaries: Record<Locale, Partial<Record<DictionaryKey, string>>> = { ja, en };

export function t(locale: Locale, key: DictionaryKey): string {
  const value = dictionaries[locale]?.[key];
  if (value !== undefined) return value;
  return ja[key];
}

/** 文言の {name} を values の値で置き換える。 */
export function formatT(locale: Locale, key: DictionaryKey, values: Record<string, string | number>): string {
  return t(locale, key).replace(/\{(\w+)\}/g, (placeholder, name: string) =>
    name in values ? String(values[name]) : placeholder,
  );
}
