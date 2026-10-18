import type { Localized } from '@/libs/i18n/locale';

export const siteConfig = {
  name: 'Aida Profile',
  fullName: '相田優希 (Masaki Aida)',
  jobTitle: 'Frontend / Backend Engineer',
  description: {
    ja: '相田優希 (Masaki Aida) のプロフィールサイト。フロントエンド / バックエンドエンジニア。機械学習・ネットワークを中心に、受賞歴や制作プロジェクトを掲載しています。',
    en: 'Profile of Masaki Aida (相田優希). Frontend / Backend Engineer focused on machine learning and networking, with selected awards and projects.',
  } satisfies Localized<string>,
  twitter_id: '@aida_0710',
  url: 'https://www.aida0710.work',
  image: 'https://www.aida0710.work/public_image.png',
  // Google Analytics 4 の測定ID。クライアントに公開される非機密情報のため直接保持する。
  gaId: 'G-88TR94J5Y4',
  // トップのリンクボタンと Person 構造化データ（sameAs）で使う SNS リンク
  socials: [
    { label: 'GitHub', url: 'https://github.com/aida0710' },
    { label: 'Twitter', url: 'https://twitter.com/aida_0710' },
    { label: 'Instagram', url: 'https://www.instagram.com/aida_07100/' },
    { label: 'Qiita', url: 'https://qiita.com/aida0710' },
  ],
};
