import type { Locale } from '@/libs/i18n/locale';

const ja = {
  'nav.home': 'Home',
  'nav.awards': 'Awards',
  'nav.projects': 'Projects',
  'nav.articles': 'Articles',
  'nav.gallery': 'Gallery',
  'nav.colophon': 'Colophon',

  'common.jobRole': 'Engineer',
  'common.viewDetails': '詳細を見る',
  'common.close': '閉じる',
  'common.menu': 'Menu',
  'common.openMenu': 'メニューを開く',
  'common.closeMenu': 'メニューを閉じる',
  'common.skipToMain': 'メインコンテンツへスキップ',
  'common.profilePhotoAlt': 'Masaki Aida のプロフィール写真',
  'common.githubRepo': 'GitHub repository',

  'language.label': '言語を切り替える',
  'language.japanese': '日本語',
  'language.english': 'English',

  'theme.toDark': 'ダークモードに切り替え',
  'theme.toLight': 'ライトモードに切り替え',

  'home.jobTitle': 'Frontend / Backend Engineer',
  'home.affiliations': 'Affiliations',
  'home.background': 'Background',
  'home.now': 'Now',
  'home.now.body1': '最近は機械学習に注力しています。データの収集・前処理から事後学習まで、幅広く取り組んでいます。',
  'home.now.body2': 'ネットワークの構築・運用や、ロードバイクでどこかに出かけるのも好きです。',
  'home.links': 'Links',

  'awards.title': 'Award',
  'awards.description': '頂いた賞の一覧',
  'awards.meta.title': 'Awards',
  'awards.meta.description': '受賞した賞の一覧を紹介しています',

  'projects.title': 'Projects',
  'projects.description': '自分が開発した又は携わったプロジェクト',
  'projects.meta.title': 'Projects',
  'projects.meta.description': '自分が開発した又は携わったプロジェクト',

  'articles.title': 'Articles',
  'articles.description': 'Qiita に投稿した記事一覧',
  'articles.meta.title': 'Articles',
  'articles.meta.description': 'Qiita に投稿した記事の一覧',
  'articles.empty': '記事を取得できませんでした',

  'gallery.title': 'Photo Gallery',
  'gallery.intro1': '私が撮影した写真や撮影していただいた写真を掲載しています。',
  'gallery.intro2': '画像をクリックすると拡大表示されます。',
  'gallery.meta.title': 'Gallery',
  'gallery.meta.description': '私が撮影した写真や撮影していただいた写真を掲載しています。',
  'gallery.galleryAriaLabel': '画像ギャラリー',
  'gallery.imageZoomLabel': '画像を拡大表示',
  'gallery.photoAlt': '写真',
  'gallery.imageAlt': '画像',
  'gallery.shotDate': '撮影日',

  'colophon.title': 'Colophon',
  'colophon.subtitle': 'このサイトについて',
  'colophon.meta.title': 'Colophon',
  'colophon.meta.description': 'このサイトについて',
  'colophon.repository': 'Repository',
  'colophon.lastCommit': 'Last Commit',
  'colophon.loading': '読み込み中…',
  'colophon.error': '取得できませんでした',
  'colophon.viewOnGitHub': 'GitHub で見る',

  'error.title': '問題が発生しました',
  'error.retry': '再試行',
} as const;

type Dictionary = typeof ja;
export type DictionaryKey = keyof Dictionary;

const en: Partial<Record<DictionaryKey, string>> = {
  'nav.home': 'Home',
  'nav.awards': 'Awards',
  'nav.projects': 'Projects',
  'nav.articles': 'Articles',
  'nav.gallery': 'Gallery',
  'nav.colophon': 'Colophon',

  'common.jobRole': 'Engineer',
  'common.viewDetails': 'View details',
  'common.close': 'Close',
  'common.menu': 'Menu',
  'common.openMenu': 'Open menu',
  'common.closeMenu': 'Close menu',
  'common.skipToMain': 'Skip to main content',
  'common.profilePhotoAlt': 'Profile photo of Masaki Aida',
  'common.githubRepo': 'GitHub repository',

  'language.label': 'Switch language',
  'language.japanese': '日本語',
  'language.english': 'English',

  'theme.toDark': 'Switch to dark mode',
  'theme.toLight': 'Switch to light mode',

  'home.jobTitle': 'Frontend / Backend Engineer',
  'home.affiliations': 'Affiliations',
  'home.background': 'Background',
  'home.now': 'Now',
  'home.now.body1':
    "Lately I've been focused on machine learning — working across the full pipeline from data collection and preprocessing through post-training.",
  'home.now.body2': 'I also enjoy designing and operating networks, and riding my road bike wherever the day takes me.',
  'home.links': 'Links',

  'awards.title': 'Awards',
  'awards.description': 'Awards I have received',
  'awards.meta.title': 'Awards',
  'awards.meta.description': 'A list of awards I have received.',

  'projects.title': 'Projects',
  'projects.description': 'Projects I have built or contributed to',
  'projects.meta.title': 'Projects',
  'projects.meta.description': 'Projects I have built or contributed to.',

  'articles.title': 'Articles',
  'articles.description': 'My posts on Qiita',
  'articles.meta.title': 'Articles',
  'articles.meta.description': 'A list of my articles on Qiita.',
  'articles.empty': 'No articles could be loaded.',

  'gallery.title': 'Photo Gallery',
  'gallery.intro1': 'A collection of photos I have taken and photos taken of me.',
  'gallery.intro2': 'Click an image to view it enlarged.',
  'gallery.meta.title': 'Gallery',
  'gallery.meta.description': 'A collection of photos I have taken and photos taken of me.',
  'gallery.galleryAriaLabel': 'Photo gallery',
  'gallery.imageZoomLabel': 'View image enlarged',
  'gallery.photoAlt': 'Photo',
  'gallery.imageAlt': 'Image',
  'gallery.shotDate': 'Taken on',

  'colophon.title': 'Colophon',
  'colophon.subtitle': 'About this site',
  'colophon.meta.title': 'Colophon',
  'colophon.meta.description': 'About this site.',
  'colophon.repository': 'Repository',
  'colophon.lastCommit': 'Last Commit',
  'colophon.loading': 'Loading…',
  'colophon.error': 'Failed to load',
  'colophon.viewOnGitHub': 'View on GitHub',

  'error.title': 'Something went wrong',
  'error.retry': 'Try again',
};

const dictionaries: Record<Locale, Partial<Record<DictionaryKey, string>>> = { ja, en };

export function t(locale: Locale, key: DictionaryKey): string {
  const value = dictionaries[locale]?.[key];
  if (value !== undefined) return value;
  return ja[key];
}

export function createT(locale: Locale): (key: DictionaryKey) => string {
  return (key) => t(locale, key);
}
